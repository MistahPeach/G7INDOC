import { useState, useEffect, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import ProgressHeader from './ProgressHeader';
import QuestionNavigator from './QuestionNavigator';

export default function Phase2({ progress, goHome, setScreen }) {
  const {
    questions, questionState, setQuestionState, toggleMark,
    setPhase2Index, completePhase2, state,
    phase2AnsweredCount, markedCount,
  } = progress;

  const [index, setIndex] = useState(state.phase2Index || 0);
  const [revealed, setRevealed] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [filter, setFilter] = useState('all'); // all | marked | unmarked
  const [shuffled, setShuffled] = useState(false);
  const [order, setOrder] = useState(null);

  const filteredQuestions = (() => {
    let list = order || questions;
    if (filter === 'marked') list = list.filter(q => questionState[q.id]?.marked);
    if (filter === 'unmarked') list = list.filter(q => !questionState[q.id]?.marked);
    return list;
  })();

  const q = filteredQuestions[index] || filteredQuestions[0];
  const qs = q ? questionState[q.id] : null;

  useEffect(() => {
    setRevealed(false);
  }, [index, filter]);

  useEffect(() => {
    setPhase2Index(index);
  }, [index, setPhase2Index]);

  useEffect(() => {
    if (index >= filteredQuestions.length && filteredQuestions.length > 0) {
      setIndex(filteredQuestions.length - 1);
    }
  }, [filteredQuestions.length, index]);

  const goPrev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => {
    setIndex(i => Math.min(filteredQuestions.length - 1, i + 1));
  }, [filteredQuestions.length]);

  const handleReveal = useCallback(() => setRevealed(true), []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if ((e.key === ' ' || e.key === 'Enter') && !revealed) {
        e.preventDefault();
        handleReveal();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goPrev, goNext, revealed, handleReveal]);

  const handleOutcome = (outcome) => {
    if (outcome === 'right') {
      setQuestionState(q.id, { phase2Status: 'right' });
    } else if (outcome === 'wrong') {
      setQuestionState(q.id, { phase2Status: 'wrong', marked: true });
    } else if (outcome === 'unsure') {
      setQuestionState(q.id, { phase2Status: 'unsure', marked: true });
    }
    if (index < filteredQuestions.length - 1) {
      goNext();
    }
  };

  const toggleShuffle = () => {
    if (!shuffled) {
      const s = [...questions].sort(() => Math.random() - 0.5);
      setOrder(s);
      setShuffled(true);
      setIndex(0);
    } else {
      setOrder(null);
      setShuffled(false);
      setIndex(0);
    }
  };

  if (!q) {
    return (
      <div className="phase-view">
        <p>No questions match the current filter.</p>
        <button className="btn" onClick={() => setFilter('all')}>Show All</button>
      </div>
    );
  }

  const isLast = index === filteredQuestions.length - 1;

  if (showSummary) {
    const rightCount = Object.values(questionState).filter(s => s.phase2Status === 'right').length;
    return (
      <div className="phase-view">
        <h2>Phase 2 Summary</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{phase2AnsweredCount}</div>
            <div className="stat-label">Answered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{rightCount}</div>
            <div className="stat-label">Got Right</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{markedCount}</div>
            <div className="stat-label">Marked</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{questions.length - markedCount}</div>
            <div className="stat-label">Confident</div>
          </div>
        </div>
        <div className="summary-actions">
          <button className="btn btn-primary" onClick={() => { completePhase2(); setScreen('phase3'); }}>
            Go to Phase 3
          </button>
          <button className="btn" onClick={() => setShowSummary(false)}>Continue Reviewing</button>
          <button className="btn" onClick={goHome}>Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="phase-view">
      <ProgressHeader
        phase="Phase 2: Self-Check"
        current={index + 1}
        total={filteredQuestions.length}
        extra={`${markedCount} marked`}
      />

      <div className="filter-bar">
        <select value={filter} onChange={e => { setFilter(e.target.value); setIndex(0); }}>
          <option value="all">All Questions</option>
          <option value="marked">Marked Only</option>
          <option value="unmarked">Unmarked Only</option>
        </select>
        <button className="btn btn-small" onClick={toggleShuffle}>
          {shuffled ? 'Original Order' : 'Shuffle'}
        </button>
      </div>

      <div className="nav-controls">
        <button className="btn" onClick={goPrev} disabled={index === 0}>Previous</button>
        <button className="btn btn-small" onClick={() => setShowNav(!showNav)}>
          {showNav ? 'Hide' : 'Jump To'}
        </button>
        <button className="btn" onClick={goNext} disabled={isLast}>Next</button>
      </div>

      {showNav && (
        <QuestionNavigator
          total={filteredQuestions.length}
          currentIndex={index}
          onJump={(i) => { setIndex(i); setShowNav(false); }}
          getStatus={(i) => {
            const s = questionState[filteredQuestions[i].id];
            if (s.marked) return 'marked';
            if (s.phase2Status !== 'unanswered') return 'answered';
            return 'default';
          }}
          onClose={() => setShowNav(false)}
        />
      )}

      <QuestionCard
        question={q}
        showCorrect={false}
        revealed={revealed}
        marked={qs.marked}
        onToggleMark={() => toggleMark(q.id)}
        number={index + 1}
        total={filteredQuestions.length}
      />

      {!revealed ? (
        <button className="btn btn-primary btn-large" onClick={handleReveal}>
          Show Answer
        </button>
      ) : (
        <div className="outcome-buttons">
          <button className="btn btn-success" onClick={() => handleOutcome('right')}>
            Got it Right
          </button>
          <button className="btn btn-danger" onClick={() => handleOutcome('wrong')}>
            Got it Wrong
          </button>
          <button className="btn btn-warn" onClick={() => handleOutcome('unsure')}>
            Not 100% Sure
          </button>
        </div>
      )}

      {isLast && (
        <button className="btn btn-primary" onClick={() => setShowSummary(true)} style={{ marginTop: '1rem' }}>
          View Phase 2 Summary
        </button>
      )}
    </div>
  );
}
