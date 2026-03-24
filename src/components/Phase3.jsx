import { useState, useEffect, useCallback, useMemo } from 'react';
import QuestionCard from './QuestionCard';
import ProgressHeader from './ProgressHeader';
import QuestionNavigator from './QuestionNavigator';

export default function Phase3({ progress, goHome, setScreen }) {
  const { questions, questionState, setQuestionState, toggleMark, markedCount, markedQuestionIds } = progress;

  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [order, setOrder] = useState(null);

  const markedQuestions = useMemo(() => {
    const base = questions.filter(q => markedQuestionIds.includes(q.id));
    if (order) {
      return order.filter(q => markedQuestionIds.includes(q.id));
    }
    return base;
  }, [questions, markedQuestionIds, order]);

  const q = markedQuestions[index];
  const qs = q ? questionState[q.id] : null;

  useEffect(() => {
    setRevealed(false);
  }, [index]);

  useEffect(() => {
    if (index >= markedQuestions.length && markedQuestions.length > 0) {
      setIndex(markedQuestions.length - 1);
    }
  }, [markedQuestions.length, index]);

  const goPrev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => {
    setIndex(i => Math.min(markedQuestions.length - 1, i + 1));
  }, [markedQuestions.length]);

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
    if (outcome === 'confident') {
      setQuestionState(q.id, { marked: false });
    }
    // 'unsure' keeps it marked (no change needed)
    if (index < markedQuestions.length - 1) {
      goNext();
    } else {
      setIndex(0);
      setRevealed(false);
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

  if (markedCount === 0) {
    return (
      <div className="phase-view">
        <div className="success-message">
          <h2>All Questions Cleared!</h2>
          <p>You have no more marked questions. Great job!</p>
          <div className="summary-actions">
            <button className="btn btn-primary" onClick={() => setScreen('phase4')}>
              Go to Phase 4: Final Test
            </button>
            <button className="btn" onClick={goHome}>Home</button>
          </div>
        </div>
      </div>
    );
  }

  if (!q) {
    return (
      <div className="phase-view">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="phase-view">
      <ProgressHeader
        phase="Phase 3: Drill Marked"
        current={index + 1}
        total={markedQuestions.length}
        extra={`${markedCount} remaining`}
      />

      <div className="filter-bar">
        <button className="btn btn-small" onClick={toggleShuffle}>
          {shuffled ? 'Original Order' : 'Shuffle'}
        </button>
        <span className="marked-count">{markedCount} marked questions left</span>
      </div>

      <div className="nav-controls">
        <button className="btn" onClick={goPrev} disabled={index === 0}>Previous</button>
        <button className="btn btn-small" onClick={() => setShowNav(!showNav)}>
          {showNav ? 'Hide' : 'Jump To'}
        </button>
        <button className="btn" onClick={goNext} disabled={index === markedQuestions.length - 1}>Next</button>
      </div>

      {showNav && (
        <QuestionNavigator
          total={markedQuestions.length}
          currentIndex={index}
          onJump={(i) => { setIndex(i); setShowNav(false); }}
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
        total={markedQuestions.length}
      />

      {!revealed ? (
        <button className="btn btn-primary btn-large" onClick={handleReveal}>
          Show Answer
        </button>
      ) : (
        <div className="outcome-buttons">
          <button className="btn btn-success" onClick={() => handleOutcome('confident')}>
            Got it Right &amp; Confident
          </button>
          <button className="btn btn-danger" onClick={() => handleOutcome('unsure')}>
            Still Unsure / Got it Wrong
          </button>
        </div>
      )}
    </div>
  );
}
