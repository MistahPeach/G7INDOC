import { useState, useRef } from 'react';

export default function Dashboard({ progress, setScreen }) {
  const [showReset, setShowReset] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const fileRef = useRef();

  const {
    totalQuestions, markedCount, masteredCount,
    phase1ViewedCount, phase2AnsweredCount, phase2RightCount,
    state, resetProgress, exportProgress, importProgress,
  } = progress;

  const phase1Pct = Math.round((phase1ViewedCount / totalQuestions) * 100);
  const phase2Pct = Math.round((phase2AnsweredCount / totalQuestions) * 100);
  const markedPct = Math.round((markedCount / totalQuestions) * 100);

  const handleExport = () => {
    const json = exportProgress();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'indoc-study-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const ok = importProgress(ev.target.result);
      if (ok) {
        setShowImport(false);
        alert('Progress imported successfully.');
      } else {
        alert('Invalid progress file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{totalQuestions}</div>
          <div className="stat-label">Total Questions</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{markedCount}</div>
          <div className="stat-label">Marked</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{masteredCount}</div>
          <div className="stat-label">Cleared</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{markedPct}%</div>
          <div className="stat-label">Marked %</div>
        </div>
      </div>

      <div className="phase-cards">
        <div className="phase-card" onClick={() => setScreen('phase1')}>
          <h3>Phase 1: Review</h3>
          <p>Read through every question with the correct answer shown.</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${phase1Pct}%` }} />
          </div>
          <span className="progress-text">{phase1ViewedCount} / {totalQuestions} viewed</span>
          {state.phase1Complete && <span className="badge badge-done">Complete</span>}
        </div>

        <div className="phase-card" onClick={() => setScreen('phase2')}>
          <h3>Phase 2: Self-Check</h3>
          <p>Test yourself on all questions. Mark anything you miss or aren't sure about.</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${phase2Pct}%` }} />
          </div>
          <span className="progress-text">{phase2AnsweredCount} / {totalQuestions} answered ({phase2RightCount} right)</span>
          {state.phase2Complete && <span className="badge badge-done">Complete</span>}
        </div>

        <div className="phase-card" onClick={() => setScreen('phase3')}>
          <h3>Phase 3: Drill Marked</h3>
          <p>Keep drilling only marked questions until they're all cleared.</p>
          <span className="progress-text">{markedCount} marked remaining</span>
          {markedCount === 0 && state.phase2Complete && (
            <span className="badge badge-done">All Clear</span>
          )}
        </div>

        <div className="phase-card" onClick={() => setScreen('phase4')}>
          <h3>Phase 4: Final Test</h3>
          <p>Take a randomized 86-question final exam.</p>
          {state.finalTest?.submitted && (
            <span className="progress-text">
              Last score: {state.finalTest.score.correct} / {state.finalTest.score.total}
              ({Math.round((state.finalTest.score.correct / state.finalTest.score.total) * 100)}%)
            </span>
          )}
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="btn btn-small" onClick={handleExport}>Export Progress</button>
        <button className="btn btn-small" onClick={() => setShowImport(!showImport)}>Import Progress</button>
        <button className="btn btn-small btn-danger" onClick={() => setShowReset(true)}>Reset Progress</button>
      </div>

      {showImport && (
        <div className="import-section">
          <input type="file" accept=".json" ref={fileRef} onChange={handleImport} />
        </div>
      )}

      {showReset && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to reset all progress? This cannot be undone.</p>
            <div className="modal-actions">
              <button className="btn btn-danger" onClick={() => { resetProgress(); setShowReset(false); }}>
                Yes, Reset
              </button>
              <button className="btn" onClick={() => setShowReset(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
