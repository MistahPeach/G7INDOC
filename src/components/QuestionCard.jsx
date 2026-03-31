export default function QuestionCard({
  question,
  showCorrect = false,
  selectable = false,
  selectedAnswer = null,
  onSelect = null,
  revealed = false,
  marked = false,
  onToggleMark = null,
  number = null,
  total = null,
}) {
  return (
    <div className={`question-card ${marked ? 'question-marked' : ''}`}>
      <div className="question-meta">
        {number !== null && total !== null && (
          <span className="question-number">Q {number} of {total}</span>
        )}
        {onToggleMark && (
          <button
            className={`btn-mark-toggle ${marked ? 'btn-mark-active' : ''}`}
            onClick={onToggleMark}
            title={marked ? 'Unmark' : 'Mark for Review'}
          >
            {marked ? '\u2605' : '\u2606'}
          </button>
        )}
      </div>

      <p className="question-text">{question.question}</p>

      <div className="choices">
        {question.choices.map((choice, idx) => {
          let cls = 'choice';
          if (showCorrect && idx === question.correctAnswer) {
            cls += ' choice-correct';
          }
          if (selectable && selectedAnswer === idx) {
            cls += ' choice-selected';
          }
          if (revealed && idx === question.correctAnswer) {
            cls += ' choice-correct';
          }
          if (revealed && selectedAnswer === idx && selectedAnswer !== question.correctAnswer) {
            cls += ' choice-wrong';
          }

          return (
            <button
              key={idx}
              className={cls}
              onClick={() => selectable && onSelect?.(idx)}
              disabled={!selectable}
            >
              <span className="choice-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="choice-text">{choice}</span>
            </button>
          );
        })}
      </div>

      {question.explanation && (showCorrect || revealed) && (
        <div className="explanation">
          <span className="explanation-label">Explanation</span>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
