import { useState, useEffect, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import QuestionNavigator from './QuestionNavigator';
import ResultsView from './ResultsView';

export default function Phase4({ progress, goHome }) {
  const {
    questions, state, startFinalTest, setFinalAnswer, toggleFinalFlag,
    setFinalTestIndex, submitFinalTest, markMissedFromFinal,
    PASSING_THRESHOLD, FINAL_TEST_COUNT,
  } = progress;

  const ft = state.finalTest;
  const [showNav, setShowNav] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const currentIndex = ft?.currentIndex || 0;

  const currentQ = ft && ft.questions[currentIndex]
    ? questions.find(q => q.id === ft.questions[currentIndex])
    : null;

  const goPrev = useCallback(() => {
    if (ft && currentIndex > 0) setFinalTestIndex(currentIndex - 1);
  }, [ft, currentIndex, setFinalTestIndex]);

  const goNext = useCallback(() => {
    if (ft && currentIndex < ft.questions.length - 1) setFinalTestIndex(currentIndex + 1);
  }, [ft, currentIndex, setFinalTestIndex]);

  useEffect(() => {
    if (!ft || ft.submitted) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goPrev, goNext, ft]);

  if (!ft) {
    return (
      <div className="phase-view">
        <h2>Phase 4: Final Test</h2>
        <p>Take a randomized {FINAL_TEST_COUNT}-question exam from the full question bank.</p>
        <p>Questions will be randomized. You won't see results until you submit.</p>
        <button className="btn btn-primary btn-large" onClick={startFinalTest}>
          Start Final Test
        </button>
        <button className="btn" onClick={goHome} style={{ marginTop: '1rem' }}>Back</button>
      </div>
    );
  }

  if (ft.submitted) {
    return (
      <ResultsView
        progress={progress}
        goHome={goHome}
      />
    );
  }

  const answeredCount = Object.keys(ft.answers).length;
  const flaggedCount = Object.values(ft.flagged).filter(Boolean).length;
  const unansweredCount = ft.questions.length - answeredCount;

  return (
    <div className="phase-view">
      <div className="progress-header">
        <div className="progress-header-top">
          <span className="phase-label">Final Test</span>
          <span className="progress-count">
            {currentIndex + 1} / {ft.questions.length}
          </span>
          <span className="progress-extra">
            {answeredCount} answered · {flaggedCount} flagged
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(answeredCount / ft.questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="nav-controls">
        <button className="btn" onClick={goPrev} disabled={currentIndex === 0}>Previous</button>
        <button className="btn btn-small" onClick={() => setShowNav(!showNav)}>
          {showNav ? 'Hide Nav' : 'Question Nav'}
        </button>
        <button className="btn" onClick={goNext} disabled={currentIndex === ft.questions.length - 1}>Next</button>
      </div>

      {showNav && (
        <QuestionNavigator
          total={ft.questions.length}
          currentIndex={currentIndex}
          onJump={(i) => { setFinalTestIndex(i); setShowNav(false); }}
          getStatus={(i) => {
            const qId = ft.questions[i];
            if (ft.flagged[qId]) return 'flagged';
            if (ft.answers[qId] !== undefined) return 'answered';
            return 'default';
          }}
          onClose={() => setShowNav(false)}
        />
      )}

      {currentQ && (
        <>
          <QuestionCard
            question={currentQ}
            selectable={true}
            selectedAnswer={ft.answers[currentQ.id] ?? null}
            onSelect={(idx) => setFinalAnswer(currentQ.id, idx)}
            number={currentIndex + 1}
            total={ft.questions.length}
          />
          <button
            className={`btn btn-small btn-flag ${ft.flagged[currentQ.id] ? 'btn-flagged' : ''}`}
            onClick={() => toggleFinalFlag(currentQ.id)}
          >
            {ft.flagged[currentQ.id] ? 'Unflag' : 'Flag for Review'}
          </button>
        </>
      )}

      <div className="submit-section">
        {!confirmSubmit ? (
          <button
            className="btn btn-primary btn-large"
            onClick={() => setConfirmSubmit(true)}
          >
            Submit Test ({answeredCount}/{ft.questions.length} answered)
          </button>
        ) : (
          <div className="confirm-box">
            {unansweredCount > 0 && (
              <p className="warning-text">
                You have {unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}.
              </p>
            )}
            <p>Are you sure you want to submit?</p>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={submitFinalTest}>Yes, Submit</button>
              <button className="btn" onClick={() => setConfirmSubmit(false)}>Go Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
