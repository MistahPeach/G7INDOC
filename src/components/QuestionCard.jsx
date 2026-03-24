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
      {(number !== null || marked) && (
        <div className="question-meta">
          {number !== null && total !== null && (
            <span className="question-number">Q {number} / {total}</span>
          )}
          {marked && <span className="badge badge-marked">Marked</span>}
        </div>
      )}

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

      {onToggleMark && (
        <button
          className={`btn btn-small btn-mark ${marked ? 'btn-marked' : ''}`}
          onClick={onToggleMark}
        >
          {marked ? 'Unmark' : 'Mark for Review'}
        </button>
      )}

      {question.explanation && revealed && (
        <p className="explanation">{question.explanation}</p>
      )}
    </div>
  );
}
