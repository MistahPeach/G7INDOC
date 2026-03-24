import { useState } from 'react';
import QuestionCard from './QuestionCard';

export default function ResultsView({ progress, goHome }) {
  const { questions, state, markMissedFromFinal, startFinalTest, PASSING_THRESHOLD } = progress;
  const ft = state.finalTest;
  const score = ft.score;
  const pct = Math.round((score.correct / score.total) * 100);
  const passed = pct >= PASSING_THRESHOLD * 100;

  const [reviewMode, setReviewMode] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all'); // all | missed
  const [markedMissed, setMarkedMissed] = useState(false);

  const testQuestions = ft.questions.map(qId => questions.find(q => q.id === qId));
  const filteredReview = reviewFilter === 'missed'
    ? testQuestions.filter(q => score.missed.includes(q.id))
    : testQuestions;

  const handleMarkMissed = () => {
    markMissedFromFinal();
    setMarkedMissed(true);
  };

  if (reviewMode) {
    return (
      <div className="phase-view">
        <div className="results-header">
          <h2>Test Review</h2>
          <div className="filter-bar">
            <select value={reviewFilter} onChange={e => setReviewFilter(e.target.value)}>
              <option value="all">All Questions ({testQuestions.length})</option>
              <option value="missed">Missed Only ({score.missed.length})</option>
            </select>
            <button className="btn btn-small" onClick={() => setReviewMode(false)}>Back to Results</button>
          </div>
        </div>

        <div className="review-list">
          {filteredReview.map((q, i) => {
            const userAnswer = ft.answers[q.id];
            const isMissed = score.missed.includes(q.id);

            return (
              <div key={q.id} className={`review-item ${isMissed ? 'review-missed' : 'review-correct'}`}>
                <QuestionCard
                  question={q}
                  revealed={true}
                  selectedAnswer={userAnswer}
                  number={ft.questions.indexOf(q.id) + 1}
                  total={ft.questions.length}
                />
                {isMissed && (
                  <div className="review-indicator">MISSED</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="phase-view">
      <div className={`results-card ${passed ? 'results-pass' : 'results-fail'}`}>
        <h2>{passed ? 'PASS' : 'FAIL'}</h2>
        <div className="score-display">
          <span className="score-number">{pct}%</span>
          <span className="score-detail">{score.correct} / {score.total} correct</span>
        </div>
        <p className="threshold-info">Passing threshold: {PASSING_THRESHOLD * 100}%</p>
        {score.missed.length > 0 && (
          <p>{score.missed.length} question{score.missed.length > 1 ? 's' : ''} missed</p>
        )}
      </div>

      <div className="results-actions">
        <button className="btn btn-primary" onClick={() => setReviewMode(true)}>
          Review Answers
        </button>
        {score.missed.length > 0 && !markedMissed && (
          <button className="btn btn-warn" onClick={handleMarkMissed}>
            Mark Missed Questions for Phase 3 Review
          </button>
        )}
        {markedMissed && (
          <p className="success-text">{score.missed.length} missed questions marked for review.</p>
        )}
        <button className="btn" onClick={startFinalTest}>
          Retake Test (New Random Set)
        </button>
        <button className="btn" onClick={goHome}>Home</button>
      </div>
    </div>
  );
}
