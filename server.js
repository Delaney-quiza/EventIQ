const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Use DATABASE_URL env var, or /data if it exists, or fall back to local
let dbPath;
if (process.env.DATABASE_URL) {
  dbPath = process.env.DATABASE_URL;
} else if (fs.existsSync('/data')) {
  dbPath = '/data/eventiq.db';
} else {
  dbPath = path.join(__dirname, 'eventiq.db');
}

// Make sure the directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

console.log(`Using database at: ${dbPath}`);

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    venue TEXT,
    details TEXT,
    prize TEXT,
    created_by TEXT,
    created_at TEXT
  );
  CREATE TABLE IF NOT EXISTS registrations (
    id TEXT PRIMARY KEY,
    event_id TEXT NOT NULL,
    full_name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    marketing_opt_in INTEGER DEFAULT 0,
    sms_sent INTEGER DEFAULT 0,
    created_at TEXT,
    FOREIGN KEY (event_id) REFERENCES events(id)
  );
`);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const AUTHORIZED_USERS = [
  { email: 'dean.delaney@sportpesa.co.za', mobile: '0828975847' }
];

app.post('/api/login', (req, res) => {
  const { email, mobile } = req.body;
  const match = AUTHORIZED_USERS.find(
    u => u.email.toLowerCase() === (email||'').toLowerCase().trim() && u.mobile === (mobile||'').trim()
  );
  if (match) res.json({ ok: true, email: match.email });
  else res.status(401).json({ ok: false, error: 'Invalid credentials' });
});

app.get('/api/events', (req, res) => {
  res.json(db.prepare('SELECT * FROM events ORDER BY created_at DESC').all());
});

app.post('/api/events', (req, res) => {
  const { name, date, venue, details, prize, createdBy } = req.body;
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2,6);
  db.prepare('INSERT INTO events (id,name,date,venue,details,prize,created_by,created_at) VALUES (?,?,?,?,?,?,?,?)')
    .run(id, name, date, venue||'', details||'', prize||'', createdBy||'', new Date().toISOString());
  res.json({ ok: true, id });
});

app.delete('/api/events/:id', (req, res) => {
  db.prepare('DELETE FROM events WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

app.get('/api/events/:id', (req, res) => {
  const event = db.prepare('SELECT * FROM events WHERE id = ?').get(req.params.id);
  if (event) res.json(event);
  else res.status(404).json({ error: 'Event not found' });
});

app.get('/api/registrations', (req, res) => {
  res.json(db.prepare(`
    SELECT r.*, e.name as event_name, e.prize as event_prize
    FROM registrations r LEFT JOIN events e ON r.event_id = e.id
    ORDER BY r.created_at DESC
  `).all());
});

app.post('/api/registrations', (req, res) => {
  const { eventId, fullName, mobile, marketingOptIn } = req.body;
  const event = db.prepare('SELECT * FROM events WHERE id = ?').get(eventId);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2,6);
  db.prepare('INSERT INTO registrations (id,event_id,full_name,mobile,marketing_opt_in,sms_sent,created_at) VALUES (?,?,?,?,?,0,?)')
    .run(id, eventId, fullName, mobile, marketingOptIn?1:0, new Date().toISOString());
  res.json({ ok: true, id, eventName: event.name, prize: event.prize });
});

app.patch('/api/registrations/:id/sms', (req, res) => {
  db.prepare('UPDATE registrations SET sms_sent = 1 WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`EventIQ running on port ${PORT}, DB: ${dbPath}`));
