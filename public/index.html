import React, { useState, useEffect, useCallback, useRef } from "react";
import * as api from "../api";

const TIME_LIMIT = 15;
const TOTAL_QUESTIONS = 5;
const MAX_SCORE = TOTAL_QUESTIONS * 100; // 500

const CAT = {
  "SA Rugby":{bg:"#1a3a1a",text:"#4ade80",e:"🏉"},"SA Cricket":{bg:"#1a3a2a",text:"#34d399",e:"🏏"},
  "SA Football":{bg:"#3a3a1a",text:"#fbbf24",e:"⚽"},"Formula 1":{bg:"#3a1a1a",text:"#f87171",e:"🏎️"},
  Golf:{bg:"#1a3a2a",text:"#4ade80",e:"⛳"},Tennis:{bg:"#3a2a1a",text:"#fbbf24",e:"🎾"},
  "Premier League":{bg:"#2a1a3a",text:"#c084fc",e:"⚽"},"Champions League":{bg:"#1a1a3a",text:"#60a5fa",e:"🏆"},
  Olympics:{bg:"#3a2a1a",text:"#fb923c",e:"🥇"},"World Football":{bg:"#1a2a3a",text:"#38bdf8",e:"🌍"},
};

const Pill = ({cat}) => {
  const c = CAT[cat] || {bg:"#2a2a2a",text:"#aaa",e:"🏅"};
  return <span style={{background:c.bg,color:c.text,padding:"4px 12px",borderRadius:100,fontSize:11,fontFamily:"'JetBrains Mono',monospace",letterSpacing:.5,textTransform:"uppercase",fontWeight:600}}>{c.e} {cat}</span>;
};

function Timer({timeLeft, max, expired}) {
  const r = 22, circ = 2 * Math.PI * r, off = circ * (1 - timeLeft / max);
  let col = timeLeft <= 5 ? "#ef4444" : timeLeft <= 10 ? "#f59e0b" : "#22c55e";
  return (
    <div style={{position:"relative",width:56,height:56,flexShrink:0}}>
      <svg width={56} height={56} style={{transform:"rotate(-90deg)"}}>
        <circle cx={28} cy={28} r={r} fill="none" stroke="#1a1a1e" strokeWidth={3}/>
        <circle cx={28} cy={28} r={r} fill="none" stroke={expired?"#ef4444":col} strokeWidth={3} strokeDasharray={circ} strokeDashoffset={expired?circ:off} strokeLinecap="round" style={{transition:"stroke-dashoffset .3s linear,stroke .3s"}}/>
      </svg>
      <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:16,color:expired?"#ef4444":col,animation:timeLeft<=5&&!expired?"pulse .5s ease infinite":"none"}}>
        {expired ? "✗" : timeLeft}
      </div>
    </div>
  );
}

function ActiveQuestion({question: q, qi, total, onAnswer, timeLeft, max}) {
  const expired = timeLeft <= 0;
  const low = timeLeft <= 5 && timeLeft > 0;
  const S = {mono:"'JetBrains Mono',monospace", serif:"'Playfair Display',serif"};
  return (
    <div style={{background:"#111113",border:`1px solid ${expired?"#4e0606":low?"#4e3a06":"#222"}`,borderRadius:16,padding:24,animation:"fadeScale .5s ease both",transition:"border-color .5s"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontFamily:S.serif,fontSize:14,color:"#fff",fontWeight:700}}>Q{qi+1}/{total}</span>
        </div>
        <Timer timeLeft={timeLeft} max={max} expired={expired}/>
      </div>
      {/* Progress dots */}
      <div style={{display:"flex",gap:6,marginBottom:20}}>
        {Array.from({length:total}).map((_,i) => (
          <div key={i} style={{flex:1,height:3,borderRadius:3,background:i<qi?"#22c55e":i===qi?"#3b82f6":"#1a1a1e"}}/>
        ))}
      </div>
      <p style={{fontFamily:S.serif,fontSize:20,color:"#fff",lineHeight:1.5,margin:"0 0 24px",fontWeight:500}}>{q.question}</p>
      <div style={{display:"grid",gap:10}}>
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => !expired && onAnswer(i)} disabled={expired}
            style={{background:"#1a1a1e",border:"1px solid #2a2a2e",borderRadius:12,padding:"16px 18px",color:expired?"#333":"#fff",fontFamily:S.mono,fontSize:14,textAlign:"left",lineHeight:1.4,display:"flex",alignItems:"center",gap:12,transition:"all .2s",cursor:expired?"default":"pointer"}}>
            <span style={{width:28,height:28,borderRadius:8,background:"#0d0d0f",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#888",fontWeight:700,flexShrink:0}}>
              {String.fromCharCode(65+i)}
            </span>
            {opt}
          </button>
        ))}
      </div>
      {expired && <div style={{textAlign:"center",marginTop:20,color:"#ef4444",fontSize:13,fontWeight:600,animation:"fadeScale .3s ease both"}}>⏱️ Time's up!</div>}
    </div>
  );
}

// SCORING: <1s = 100pts, otherwise time-based
function calcPoints(timeElapsed) {
  if (timeElapsed === null) return 0;
  if (timeElapsed < 1) return 100;
  return Math.max(0, Math.round(((TIME_LIMIT - timeElapsed) / TIME_LIMIT) * 100));
}

function AnswerReveal({question: q, correctAnswer: ca, selected, time, expired, onNext, isLast, questionIndex, total}) {
  const correct = !expired && ca !== undefined && ca !== null && selected === ca;
  const S = {mono:"'JetBrains Mono',monospace", serif:"'Playfair Display',serif"};
  const pts = correct && time !== null ? calcPoints(time) : 0;

  return (
    <div style={{background:"#111113",border:`1px solid ${correct?"#1a3a2a":"#2a1a1a"}`,borderRadius:16,padding:24,animation:"fadeScale .4s ease both"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <div style={{width:48,height:48,borderRadius:14,background:correct?"linear-gradient(135deg,#064e2a,#0a6e3a)":"linear-gradient(135deg,#4e0606,#6e0a0a)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,animation:"badgePop .5s ease both"}}>
          {correct ? "✓" : expired ? "⏱" : "✗"}
        </div>
        <div>
          <div style={{fontFamily:S.serif,fontSize:18,color:correct?"#4ade80":"#f87171",fontWeight:700}}>
            {correct ? "Correct!" : expired ? "Time Expired" : "Incorrect"}
          </div>
          <div style={{fontFamily:S.mono,fontSize:12,color:"#aaa"}}>
            {expired ? "No answer given" : `Answered in ${time.toFixed(1)}s`}
            {correct && time < 1 && " ⚡ Lightning!"}
            {correct && time >= 1 && time < 5 && " ⚡"}
          </div>
        </div>
        {correct && (
          <div style={{marginLeft:"auto",background:"linear-gradient(135deg,#064e2a,#0a6e3a)",borderRadius:10,padding:"6px 14px",fontFamily:S.mono,fontSize:14,fontWeight:700,color:"#4ade80"}}>+{pts}</div>
        )}
      </div>
      {!correct && ca !== undefined && ca !== null && q && q.options && (
        <div style={{background:"#0d0d0f",borderRadius:10,padding:"12px 16px",marginBottom:16,border:"1px solid #1a3a2a"}}>
          <span style={{color:"#aaa",fontFamily:S.mono,fontSize:11}}>Correct answer: </span>
          <span style={{color:"#4ade80",fontFamily:S.mono,fontSize:13,fontWeight:600}}>{q.options[ca]}</span>
        </div>
      )}
      <button onClick={onNext} style={{width:"100%",padding:16,borderRadius:12,border:"none",background:"linear-gradient(135deg,#e8e8e8,#d0d0d0)",color:"#000",fontFamily:S.mono,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:1,cursor:"pointer"}}>
        {isLast ? "See Results" : `Next Question → (${questionIndex+2}/${total})`}
      </button>
    </div>
  );
}

// ═══════════════════════════════════════
// SCORING INFO MODAL
// ═══════════════════════════════════════

function ScoringModal({onClose}) {
  const S = {mono:"'JetBrains Mono',monospace", serif:"'Playfair Display',serif"};
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.8)",backdropFilter:"blur(8px)",zIndex:150,display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"fadeIn .3s ease"}} onClick={onClose}>
      <div style={{background:"#111113",borderRadius:20,padding:28,width:"100%",maxWidth:400,border:"1px solid #2a2a2e",animation:"fadeScale .3s ease"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <h3 style={{fontFamily:S.serif,fontSize:20,color:"#fff",margin:0,fontWeight:700}}>How Scoring Works</h3>
          <button onClick={onClose} style={{background:"none",border:"none",color:"#666",fontSize:22,cursor:"pointer",lineHeight:1}}>×</button>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {[
            {range:"Under 1 second",pts:100,col:"#fbbf24",icon:"⚡"},
            {range:"1 – 3 seconds",pts:"~80–93",col:"#4ade80",icon:"🚀"},
            {range:"3 – 8 seconds",pts:"~47–80",col:"#60a5fa",icon:"✅"},
            {range:"8 – 15 seconds",pts:"~0–47",col:"#f87171",icon:"🐢"},
            {range:"Wrong / timeout",pts:0,col:"#555",icon:"✗"},
          ].map(({range,pts,col,icon}) => (
            <div key={range} style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"#0d0d0f",borderRadius:10,padding:"12px 14px",border:"1px solid #1a1a1e"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontSize:18}}>{icon}</span>
                <span style={{fontFamily:S.mono,fontSize:12,color:"#ccc"}}>{range}</span>
              </div>
              <span style={{fontFamily:S.mono,fontSize:13,fontWeight:700,color:col}}>{pts} pts</span>
            </div>
          ))}
        </div>
        <p style={{fontFamily:S.mono,fontSize:11,color:"#555",margin:"16px 0 0",textAlign:"center",lineHeight:1.6}}>
          5 questions · Max {MAX_SCORE} points · Answer faster = score higher
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// SCOREBOARD
// ═══════════════════════════════════════

function Scoreboard({entries, myScore}) {
  const S = {mono:"'JetBrains Mono',monospace", serif:"'Playfair Display',serif"};
  if (!entries || entries.length === 0) return null;

  return (
    <div style={{background:"#0d0d0f",borderRadius:16,padding:20,marginTop:20,border:"1px solid #1a1a1e"}}>
      <h3 style={{fontFamily:S.serif,fontSize:16,color:"#fff",margin:"0 0 14px",fontWeight:700,display:"flex",alignItems:"center",gap:8}}>
        🏆 Today's Top Scores
      </h3>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {entries.map((entry, i) => {
          const isMe = entry.score === myScore && i === entries.findIndex(e => e.score === myScore);
          return (
            <div key={i} style={{
              display:"flex",alignItems:"center",gap:10,
              padding:"10px 12px",borderRadius:10,
              background: isMe ? "linear-gradient(135deg,#0a2a16,#0d3a1e)" : "#111113",
              border: `1px solid ${isMe?"#1a5a30":"#1a1a1e"}`,
              animation:`slideUp .3s ease ${i*0.05}s both`
            }}>
              <span style={{fontFamily:S.mono,fontSize:12,color:i===0?"#fbbf24":i===1?"#9ca3af":i===2?"#cd7c2f":"#444",fontWeight:700,width:20,textAlign:"center"}}>
                {i===0?"🥇":i===1?"🥈":i===2?"🥉":`#${i+1}`}
              </span>
              <span style={{fontFamily:S.mono,fontSize:12,color:isMe?"#4ade80":"#ccc",flex:1,fontWeight:isMe?700:400}}>
                {isMe?"You":entry.display_name||`Player ${i+1}`}
              </span>
              <span style={{fontFamily:S.mono,fontSize:13,fontWeight:700,color:isMe?"#4ade80":"#fff"}}>
                {entry.score}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// MAIN QUIZ COMPONENT
// ═══════════════════════════════════════

export default function Quiz() {
  const [phase, setPhase] = useState("loading");
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(TOTAL_QUESTIONS).fill(null));
  const [timings, setTimings] = useState(Array(TOTAL_QUESTIONS).fill(null));
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [badges, setBadges] = useState([]);
  const [showBadges, setShowBadges] = useState(false);
  const [showScoring, setShowScoring] = useState(false);
  const [newBadge, setNewBadge] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const startRef = useRef(null);
  const quizStartRef = useRef(null);
  const timerRef = useRef(null);

  // Init
  useEffect(() => {
    (async () => {
      try {
        await api.ensurePlayer();
        const [quizData, statsData, todayData] = await Promise.all([
          api.getTodayQuiz(), api.getPlayerStats(), api.getTodayResult()
        ]);
        setQuestions(quizData.questions || []);
        setCorrectAnswers(quizData.correct_answers || []);
        setStats(statsData);
        setBadges(statsData.badges || []);

        const numQ = (quizData.questions || []).length;
        setAnswers(Array(numQ).fill(null));
        setTimings(Array(numQ).fill(null));

        if (todayData.played) {
          const r = todayData.result;
          // Build correct array dynamically for however many questions exist
          const correctArr = [];
          const keys = ["question_1","question_2","question_3","question_4","question_5"];
          for (const k of keys) {
            if (r[`${k}_correct`] !== undefined) correctArr.push(!!r[`${k}_correct`]);
          }
          setResult({
            correct: correctArr,
            correct_count: correctArr.filter(Boolean).length,
            score: r.score,
            total_time: r.total_time || 0,
          });
          // Fetch leaderboard
          try {
            const lb = await api.getLeaderboard();
            setLeaderboard(lb.leaderboard || []);
          } catch {}
          setPhase("results");
        } else {
          setPhase("ready");
        }
      } catch (err) {
        setError(err.message);
        setPhase("error");
      }
    })();
  }, []);

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    startRef.current = Date.now();
    setTimeLeft(TIME_LIMIT);
    timerRef.current = setInterval(() => {
      const remaining = Math.max(0, TIME_LIMIT - (Date.now() - startRef.current) / 1000);
      setTimeLeft(Math.ceil(remaining));
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        setTimings(p => { const n = [...p]; n[currentQ] = null; return n; });
        setPhase("reveal");
      }
    }, 100);
    return () => clearInterval(timerRef.current);
  }, [phase, currentQ]);

  const handleStart = () => { quizStartRef.current = Date.now(); setPhase("playing"); };

  const handleAnswer = useCallback((i) => {
    if (phase !== "playing") return;
    clearInterval(timerRef.current);
    const elapsed = (Date.now() - startRef.current) / 1000;
    setAnswers(p => { const n = [...p]; n[currentQ] = i; return n; });
    setTimings(p => { const n = [...p]; n[currentQ] = elapsed; return n; });
    setPhase("reveal");
  }, [phase, currentQ]);

  const totalQ = questions.length || TOTAL_QUESTIONS;

  const handleNext = async () => {
    if (currentQ < totalQ - 1) {
      setCurrentQ(p => p + 1);
      setPhase("playing");
    } else {
      try {
        const res = await api.submitQuiz(answers, timings, quizStartRef.current);
        setResult(res);
        setStats(res.player_stats);
        setBadges(res.all_badges || []);
        if (res.new_badges && res.new_badges.length > 0) {
          setTimeout(() => setNewBadge(res.new_badges[0]), 1200);
        }
        // Fetch leaderboard after submit
        try {
          const lb = await api.getLeaderboard();
          setLeaderboard(lb.leaderboard || []);
        } catch {}
        setPhase("results");
      } catch (err) {
        // Fallback: compute locally
        const localCorrect = answers.map((a, i) => a === correctAnswers[i]);
        const localScore = answers.reduce((acc, a, i) => {
          if (a === correctAnswers[i] && timings[i] !== null) {
            return acc + calcPoints(timings[i]);
          }
          return acc;
        }, 0);
        setResult({
          correct: localCorrect,
          correct_count: localCorrect.filter(Boolean).length,
          score: localScore,
          total_time: timings.reduce((a, t) => a + (t === null ? TIME_LIMIT : t), 0),
        });
        setPhase("results");
      }
    }
  };

  const getShareText = () => {
    if (!result) return "";
    return `I played QuiZa today and scored ${result.score}/${MAX_SCORE}. Can you do better?\n\nPlay Now → www.quiza.co.za`;
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(getShareText())}`, "_blank");
  };
  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.quiza.co.za")}&quote=${encodeURIComponent(getShareText())}`, "_blank");
  };
  const shareX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}`, "_blank");
  };
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(getShareText()); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Countdown
  const [countdown, setCountdown] = useState("");
  useEffect(() => {
    if (phase !== "results") return;
    const tick = () => {
      const now = new Date();
      const tom = new Date(now);
      tom.setDate(tom.getDate() + 1);
      tom.setHours(0, 0, 0, 0);
      const d = tom - now;
      setCountdown(
        `${String(Math.floor(d/36e5)).padStart(2,"0")}:${String(Math.floor((d%36e5)/6e4)).padStart(2,"0")}:${String(Math.floor((d%6e4)/1e3)).padStart(2,"0")}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [phase]);

  const S = {mono:"'JetBrains Mono',monospace", serif:"'Playfair Display',serif"};
  const unlockedCount = badges.filter(b => b.unlocked).length;
  const q = questions[currentQ];

  return (
    <div style={{maxWidth:520,margin:"0 auto",padding:"24px 20px 48px",minHeight:"100vh",background:"#08080a",fontFamily:S.mono}}>

      {/* Header — clickable logo */}
      <div style={{textAlign:"center",marginBottom:24,animation:"slideUp .4s ease both"}}>
        <div
          onClick={() => { if (phase === "results" || phase === "ready") window.location.href = "/"; }}
          style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:4,cursor:phase==="results"||phase==="ready"?"pointer":"default"}}
        >
          <span style={{fontSize:28}}>🇿🇦</span>
          <h1 style={{fontFamily:S.serif,fontSize:32,fontWeight:800,color:"#fff",margin:0,letterSpacing:-.5}}>
            Qui<span style={{color:"#22c55e"}}>Za</span>
          </h1>
        </div>
        <p style={{color:"#888",fontSize:11,margin:0,textTransform:"uppercase",letterSpacing:3}}>
          Daily Sports Trivia · {TIME_LIMIT}s per question
        </p>
      </div>

      {/* Stats bar */}
      {stats && (
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",marginBottom:8,animation:"slideUp .4s ease .1s both"}}>
          <div style={{display:"flex",gap:20}}>
            {[
              {l:"Streak", v:stats.streak, i:"🔥"},
              {l:"Played", v:stats.total_games, i:"📅"},
              {l:"Avg Pts", v:stats.avg_score || 0, i:"📊"},
            ].map(s => (
              <div key={s.l} style={{textAlign:"center"}}>
                <div style={{fontSize:18,color:"#fff",fontWeight:700}}>{s.i} {s.v}</div>
                <div style={{fontSize:10,color:"#888",textTransform:"uppercase",letterSpacing:.5}}>{s.l}</div>
              </div>
            ))}
          </div>
          <button onClick={() => setShowBadges(true)} style={{background:"#1a1a1e",border:"1px solid #2a2a2e",borderRadius:100,padding:"8px 16px",color:"#ccc",fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
            🏅 {unlockedCount}/{badges.length}
          </button>
        </div>
      )}
      <div style={{height:1,background:"linear-gradient(90deg,transparent,#222,transparent)",margin:"8px 0 24px"}}/>

      {/* === LOADING === */}
      {phase === "loading" && (
        <div style={{textAlign:"center",padding:"80px 0"}}>
          <div style={{fontSize:40,animation:"spin 1s linear infinite",display:"inline-block"}}>⚽</div>
          <p style={{color:"#888",marginTop:16,fontSize:13}}>Loading today's quiz...</p>
        </div>
      )}

      {/* === ERROR === */}
      {phase === "error" && (
        <div style={{textAlign:"center",padding:"60px 0",animation:"fadeScale .5s ease both"}}>
          <div style={{fontSize:48,marginBottom:16}}>😔</div>
          <h2 style={{fontFamily:S.serif,fontSize:22,color:"#fff",margin:"0 0 8px",fontWeight:700}}>Eish!</h2>
          <p style={{color:"#888",fontSize:13,maxWidth:320,margin:"0 auto"}}>{error === "Invalid player token" ? "Your session expired. Tap Try Again to start fresh!" : (error || "Something went wrong. Try refreshing.")}</p>
          <button onClick={() => window.location.reload()} style={{marginTop:24,background:"#1a1a1e",border:"1px solid #2a2a2e",borderRadius:100,padding:"12px 32px",color:"#ccc",fontSize:13,fontWeight:600,cursor:"pointer"}}>
            Try Again
          </button>
        </div>
      )}

      {/* === READY === */}
      {phase === "ready" && questions.length > 0 && (
        <div style={{textAlign:"center",padding:"40px 0",animation:"fadeScale .5s ease both"}}>
          <div style={{fontSize:64,marginBottom:16}}>⚡</div>
          <h2 style={{fontFamily:S.serif,fontSize:24,color:"#fff",margin:"0 0 12px",fontWeight:700}}>Ready?</h2>
          <p style={{color:"#fff",fontSize:13,lineHeight:1.7,margin:"0 0 8px",maxWidth:320,marginLeft:"auto",marginRight:"auto"}}>
            {totalQ} questions · {TIME_LIMIT} seconds each.
          </p>
          {/* Timer warning — clear and prominent */}
          <div style={{background:"#1a1a0a",border:"1px solid #4e3a06",borderRadius:12,padding:"12px 20px",margin:"12px auto 8px",maxWidth:320,display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:20}}>⏱️</span>
            <p style={{color:"#fbbf24",fontSize:12,lineHeight:1.6,margin:0,textAlign:"left"}}>
              <strong>The clock starts immediately.</strong> Answer fast — the quicker you answer correctly, the more points you earn. Max {MAX_SCORE} points total.
            </p>
          </div>
          <button
            onClick={() => setShowScoring(true)}
            style={{background:"none",border:"none",color:"#60a5fa",fontSize:12,cursor:"pointer",textDecoration:"underline",margin:"0 0 24px",padding:"8px 0",display:"block",width:"100%"}}
          >
            ℹ️ How does scoring work?
          </button>
          <button onClick={handleStart} style={{background:"linear-gradient(135deg,#22c55e,#16a34a)",color:"#fff",border:"none",borderRadius:100,padding:"18px 64px",fontSize:15,fontWeight:700,textTransform:"uppercase",letterSpacing:1,cursor:"pointer"}}>
            Start Quiz
          </button>
        </div>
      )}

      {/* === PLAYING === */}
      {phase === "playing" && q && (
        <ActiveQuestion question={q} qi={currentQ} total={totalQ} onAnswer={handleAnswer} timeLeft={timeLeft} max={TIME_LIMIT}/>
      )}

      {/* === REVEAL === */}
      {phase === "reveal" && q && (
        <AnswerReveal
          question={q}
          correctAnswer={correctAnswers[currentQ]}
          selected={answers[currentQ]}
          time={timings[currentQ]}
          expired={timings[currentQ] === null}
          onNext={handleNext}
          isLast={currentQ === totalQ - 1}
          questionIndex={currentQ}
          total={totalQ}
        />
      )}

      {/* === RESULTS === */}
      {phase === "results" && result && (
        <>
          <div style={{background:"linear-gradient(135deg,#0a0a0c,#111118)",border:"1px solid #222",borderRadius:20,padding:32,textAlign:"center",animation:"fadeScale .6s ease both",marginTop:16}}>
            <div style={{fontSize:48,marginBottom:8}}>
              {result.correct_count === totalQ ? "🏆" : result.correct_count >= totalQ*0.8 ? "💪" : result.correct_count >= totalQ*0.4 ? "🤔" : "😅"}
            </div>
            <h2 style={{fontFamily:S.serif,fontSize:28,color:"#fff",margin:"0 0 4px",fontWeight:700}}>
              {result.correct_count === totalQ ? "Perfect!" : result.correct_count >= totalQ*0.8 ? "Lekker!" : result.correct_count >= totalQ*0.4 ? "Not Bad" : "Better Luck Tomorrow"}
            </h2>
            <p style={{color:"#888",fontSize:13,margin:"0 0 24px"}}>
              {result.correct_count}/{totalQ} correct · {result.score} points
            </p>

            {/* Score breakdown */}
            {questions.length > 0 && result.correct && result.correct.map((isCorrect, i) => (
              <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"#0d0d0f",borderRadius:12,marginBottom:8,border:`1px solid ${isCorrect?"#1a3a2a":"#2a1a1a"}`,animation:`slideUp .4s ease ${i*.1}s both`,textAlign:"left"}}>
                <span style={{fontSize:20}}>{isCorrect ? "🟩" : "🟥"}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:11,color:"#888",textTransform:"uppercase",letterSpacing:.5}}>
                    Question {i+1}
                  </div>
                </div>
              </div>
            ))}

            {/* Share preview */}
            <div style={{background:"#0a0a0c",borderRadius:12,padding:20,margin:"20px 0 24px",border:"1px solid #1a1a1e"}}>
              <pre style={{fontFamily:S.mono,fontSize:13,color:"#ccc",margin:0,whiteSpace:"pre-wrap",lineHeight:1.8,textAlign:"center"}}>
{`I played QuiZa today and scored ${result.score}/${MAX_SCORE}. Can you do better?

Play Now → quiza.co.za`}
              </pre>
            </div>

            <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
              <button onClick={shareWhatsApp} style={{background:"#25D366",color:"#fff",border:"none",borderRadius:100,padding:"14px 24px",fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,letterSpacing:.3}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.625-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.168 0-4.19-.593-5.925-1.628l-.425-.253-2.742.87.884-2.665-.277-.44A9.777 9.777 0 012.182 12c0-5.422 4.396-9.818 9.818-9.818 5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818z"/></svg>
                WhatsApp
              </button>
              <button onClick={shareX} style={{background:"#000",color:"#fff",border:"1px solid #333",borderRadius:100,padding:"14px 24px",fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,letterSpacing:.3}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X
              </button>
              <button onClick={shareFacebook} style={{background:"#1877F2",color:"#fff",border:"none",borderRadius:100,padding:"14px 24px",fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,letterSpacing:.3}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </button>
            </div>
            <button onClick={handleCopy} style={{background:"none",color:"#888",border:"none",padding:"12px",fontSize:12,cursor:"pointer",marginTop:8,textDecoration:copied?"none":"underline",transition:"all .3s"}}>
              {copied ? "✓ Copied to clipboard!" : "Or copy to clipboard"}
            </button>
          </div>

          {/* Scoreboard */}
          <Scoreboard entries={leaderboard} myScore={result.score} />

          {/* Countdown */}
          <div style={{textAlign:"center",marginTop:24}}>
            <p style={{color:"#888",fontSize:12,margin:"0 0 6px",textTransform:"uppercase",letterSpacing:1}}>Next quiz in</p>
            <p style={{fontFamily:S.serif,fontSize:32,color:"#fff",margin:0,fontWeight:700,letterSpacing:4}}>{countdown}</p>
          </div>
        </>
      )}

      {/* === BADGE DRAWER === */}
      {showBadges && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",backdropFilter:"blur(8px)",zIndex:100,display:"flex",alignItems:"flex-end",justifyContent:"center",animation:"fadeIn .3s ease"}} onClick={() => setShowBadges(false)}>
          <div style={{background:"#111113",borderRadius:"24px 24px 0 0",padding:"32px 24px 48px",width:"100%",maxWidth:480,maxHeight:"70vh",overflowY:"auto",animation:"slideUp .4s ease"}} onClick={e => e.stopPropagation()}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
              <h3 style={{fontFamily:S.serif,fontSize:22,color:"#fff",margin:0,fontWeight:700}}>Badges</h3>
              <button onClick={() => setShowBadges(false)} style={{background:"none",border:"none",color:"#666",fontSize:24,cursor:"pointer"}}>×</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {badges.map(b => (
                <div key={b.id} style={{background:b.unlocked?"#1a1a1e":"#0a0a0c",border:`1px solid ${b.unlocked?"#333":"#1a1a1e"}`,borderRadius:16,padding:"20px 16px",textAlign:"center",opacity:b.unlocked?1:.4}}>
                  <div style={{fontSize:32,marginBottom:8,filter:b.unlocked?"none":"grayscale(1)"}}>{b.icon}</div>
                  <div style={{fontSize:12,color:b.unlocked?"#e8e8e8":"#888",fontWeight:700,marginBottom:4}}>{b.name}</div>
                  <div style={{fontSize:10,color:"#555"}}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === NEW BADGE TOAST === */}
      {newBadge && (
        <div style={{position:"fixed",top:24,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#1a1a1e,#222)",border:"1px solid #333",borderRadius:16,padding:"20px 28px",display:"flex",alignItems:"center",gap:14,zIndex:200,animation:"badgePop .5s ease both",boxShadow:"0 20px 60px rgba(0,0,0,.5)"}}>
          <span style={{fontSize:36}}>{newBadge.icon}</span>
          <div>
            <div style={{color:"#fbbf24",fontSize:10,textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>Badge Unlocked!</div>
            <div style={{color:"#fff",fontSize:16,fontFamily:S.serif,fontWeight:700}}>{newBadge.name}</div>
          </div>
          <button onClick={() => setNewBadge(null)} style={{background:"none",border:"none",color:"#555",fontSize:18,marginLeft:8,cursor:"pointer"}}>×</button>
        </div>
      )}

      {/* === SCORING MODAL === */}
      {showScoring && <ScoringModal onClose={() => setShowScoring(false)} />}
    </div>
  );
}
