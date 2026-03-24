import { useState, useEffect, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import ProgressHeader from './ProgressHeader';
import QuestionNavigator from './QuestionNavigator';

export default function Phase1({ progress, goHome }) {
  const { questions, questionState, setQuestionState, toggleMark, setPhase1Index, completePhase1, state } = progress;
  const [index, setIndex] = useState(state.phase1Index || 0);
  const [showNav, setShowNav] = useState(false);

  const q = questions[index];
  const qs = questionState[q.id];

  useEffect(() => {
    if (!qs.phase1Viewed) {
      setQuestionState(q.id, { phase1Viewed: true });
    }
  }, [q.id, qs.phase1Viewed, setQuestionState]);

  useEffect(() => {
    setPhase1Index(index);
  }, [index, setPhase1Index]);

  const goPrev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setIndex(i => Math.min(questions.length - 1, i + 1)), [questions.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goPrev, goNext]);

  const isLast = index === questions.length - 1;

  return (
    <div className="phase-view">
      <ProgressHeader
        phase="Phase 1: Review"
        current={index + 1}
        total={questions.length}
      />

      <div className="nav-controls">
        <button className="btn" onClick={goPrev} disabled={index === 0}>Previous</button>
        <button className="btn btn-small" onClick={() => setShowNav(!showNav)}>
          {showNav ? 'Hide' : 'Jump To'}
        </button>
        <button className="btn" onClick={goNext} disabled={isLast}>Next</button>
      </div>

      {showNav && (
        <QuestionNavigator
          total={questions.length}
          currentIndex={index}
          onJump={(i) => { setIndex(i); setShowNav(false); }}
          getStatus={(i) => {
            const s = questionState[questions[i].id];
            if (s.marked) return 'marked';
            if (s.phase1Viewed) return 'answered';
            return 'default';
          }}
          onClose={() => setShowNav(false)}
        />
      )}

      <QuestionCard
        question={q}
        showCorrect={true}
        marked={qs.marked}
        onToggleMark={() => toggleMark(q.id)}
        number={index + 1}
        total={questions.length}
      />

      {isLast && !state.phase1Complete && (
        <button className="btn btn-primary btn-large" onClick={() => { completePhase1(); goHome(); }}>
          Complete Phase 1
        </button>
      )}
    </div>
  );
}
