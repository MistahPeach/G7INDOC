export default function ProgressHeader({ phase, current, total, extra }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-header">
      <div className="progress-header-top">
        <span className="phase-label">{phase}</span>
        <span className="progress-count">{current} / {total}</span>
        {extra && <span className="progress-extra">{extra}</span>}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
