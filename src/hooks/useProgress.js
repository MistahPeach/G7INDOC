import { useState, useCallback, useEffect } from 'react';

const PASSING_THRESHOLD = 0.80;

function storageKey(bankId) {
  return `indoc-study-progress-${bankId}`;
}

function loadState(bankId) {
  try {
    const saved = localStorage.getItem(storageKey(bankId));
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore */ }
  return null;
}

function buildDefaultState(questions) {
  const qState = {};
  questions.forEach(q => {
    qState[q.id] = {
      marked: false,
      phase1Viewed: false,
      phase2Status: 'unanswered',
    };
  });
  return {
    questionState: qState,
    phase1Complete: false,
    phase2Complete: false,
    phase1Index: 0,
    phase2Index: 0,
    finalTest: null,
  };
}

export default function useProgress(bankId, questions) {
  const finalTestCount = Math.min(86, questions.length);

  const [state, setState] = useState(() => {
    return loadState(bankId) || buildDefaultState(questions);
  });

  // Re-initialize when bank changes
  useEffect(() => {
    const saved = loadState(bankId);
    if (saved) {
      setState(saved);
    } else {
      setState(buildDefaultState(questions));
    }
  }, [bankId, questions]);

  useEffect(() => {
    localStorage.setItem(storageKey(bankId), JSON.stringify(state));
  }, [bankId, state]);

  const update = useCallback((fn) => {
    setState(prev => {
      const next = fn(prev);
      return { ...prev, ...next };
    });
  }, []);

  const setQuestionState = useCallback((qId, patch) => {
    setState(prev => ({
      ...prev,
      questionState: {
        ...prev.questionState,
        [qId]: { ...prev.questionState[qId], ...patch },
      },
    }));
  }, []);

  const toggleMark = useCallback((qId) => {
    setState(prev => ({
      ...prev,
      questionState: {
        ...prev.questionState,
        [qId]: {
          ...prev.questionState[qId],
          marked: !prev.questionState[qId].marked,
        },
      },
    }));
  }, []);

  const setPhase1Index = useCallback((idx) => {
    update(() => ({ phase1Index: idx }));
  }, [update]);

  const setPhase2Index = useCallback((idx) => {
    update(() => ({ phase2Index: idx }));
  }, [update]);

  const completePhase1 = useCallback(() => {
    update(() => ({ phase1Complete: true }));
  }, [update]);

  const completePhase2 = useCallback(() => {
    update(() => ({ phase2Complete: true }));
  }, [update]);

  const startFinalTest = useCallback(() => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, finalTestCount);
    update(() => ({
      finalTest: {
        questions: shuffled.map(q => q.id),
        answers: {},
        flagged: {},
        submitted: false,
        score: null,
        currentIndex: 0,
      },
    }));
  }, [questions, finalTestCount, update]);

  const setFinalAnswer = useCallback((qId, answerIdx) => {
    setState(prev => {
      if (!prev.finalTest) return prev;
      return {
        ...prev,
        finalTest: {
          ...prev.finalTest,
          answers: { ...prev.finalTest.answers, [qId]: answerIdx },
        },
      };
    });
  }, []);

  const toggleFinalFlag = useCallback((qId) => {
    setState(prev => {
      if (!prev.finalTest) return prev;
      return {
        ...prev,
        finalTest: {
          ...prev.finalTest,
          flagged: {
            ...prev.finalTest.flagged,
            [qId]: !prev.finalTest.flagged[qId],
          },
        },
      };
    });
  }, []);

  const setFinalTestIndex = useCallback((idx) => {
    setState(prev => {
      if (!prev.finalTest) return prev;
      return {
        ...prev,
        finalTest: { ...prev.finalTest, currentIndex: idx },
      };
    });
  }, []);

  const submitFinalTest = useCallback(() => {
    setState(prev => {
      if (!prev.finalTest) return prev;
      const ft = prev.finalTest;
      let correct = 0;
      const missed = [];
      ft.questions.forEach(qId => {
        const q = questions.find(x => x.id === qId);
        if (ft.answers[qId] === q.correctAnswer) {
          correct++;
        } else {
          missed.push(qId);
        }
      });
      return {
        ...prev,
        finalTest: {
          ...ft,
          submitted: true,
          score: { correct, total: ft.questions.length, missed },
        },
      };
    });
  }, [questions]);

  const markMissedFromFinal = useCallback(() => {
    setState(prev => {
      if (!prev.finalTest?.score) return prev;
      const newQState = { ...prev.questionState };
      prev.finalTest.score.missed.forEach(qId => {
        newQState[qId] = { ...newQState[qId], marked: true };
      });
      return { ...prev, questionState: newQState };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setState(buildDefaultState(questions));
  }, [questions]);

  const exportProgress = useCallback(() => {
    return JSON.stringify(state, null, 2);
  }, [state]);

  const importProgress = useCallback((json) => {
    try {
      const parsed = JSON.parse(json);
      if (parsed.questionState) {
        setState(parsed);
        return true;
      }
    } catch (e) { /* ignore */ }
    return false;
  }, []);

  const totalQuestions = questions.length;
  const markedCount = Object.values(state.questionState).filter(q => q.marked).length;
  const masteredCount = totalQuestions - markedCount;
  const phase1ViewedCount = Object.values(state.questionState).filter(q => q.phase1Viewed).length;
  const phase2AnsweredCount = Object.values(state.questionState).filter(q => q.phase2Status !== 'unanswered').length;
  const phase2RightCount = Object.values(state.questionState).filter(q => q.phase2Status === 'right').length;
  const markedQuestionIds = questions.filter(q => state.questionState[q.id]?.marked).map(q => q.id);

  return {
    state,
    questions,
    questionState: state.questionState,
    setQuestionState,
    toggleMark,
    setPhase1Index,
    setPhase2Index,
    completePhase1,
    completePhase2,
    startFinalTest,
    setFinalAnswer,
    toggleFinalFlag,
    setFinalTestIndex,
    submitFinalTest,
    markMissedFromFinal,
    resetProgress,
    exportProgress,
    importProgress,
    totalQuestions,
    markedCount,
    masteredCount,
    phase1ViewedCount,
    phase2AnsweredCount,
    phase2RightCount,
    markedQuestionIds,
    PASSING_THRESHOLD,
    FINAL_TEST_COUNT: finalTestCount,
  };
}
