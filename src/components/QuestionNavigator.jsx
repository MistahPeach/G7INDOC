export default function QuestionNavigator({
  total,
  currentIndex,
  onJump,
  getStatus = null, // function(index) => 'answered' | 'flagged' | 'current' | 'default'
  onClose = null,
}) {
  return (
    <div className="question-navigator">
      <div className="nav-header">
        <span>Jump to Question</span>
        {onClose && <button className="btn btn-small" onClick={onClose}>Close</button>}
      </div>
      <div className="nav-grid">
        {Array.from({ length: total }, (_, i) => {
          const status = getStatus ? getStatus(i) : 'default';
          let cls = 'nav-item';
          if (i === currentIndex) cls += ' nav-current';
          if (status === 'answered') cls += ' nav-answered';
          if (status === 'flagged') cls += ' nav-flagged';
          if (status === 'marked') cls += ' nav-marked';
          if (status === 'correct') cls += ' nav-correct';
          if (status === 'wrong') cls += ' nav-wrong';

          return (
            <button
              key={i}
              className={cls}
              onClick={() => onJump(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
