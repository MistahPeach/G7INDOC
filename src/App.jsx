import { useState, useMemo } from 'react';
import useProgress from './hooks/useProgress';
import indocQuestions from './data/questions.js';
import hazmatQuestions from './data/hazmat-questions.js';
import systemsQuestions from './data/systems-questions.js';
import castQuestions from './data/cast-questions.js';
import systemsWrittenExamQuestions from './data/systems-written-exam-questions.js';
import Dashboard from './components/Dashboard';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import Phase4 from './components/Phase4';
import './App.css';

const BANK_PASSWORD = 'Rogerroger';
const GATED_BANKS = ['indoc', 'hazmat'];

const BANKS = {
  indoc: { id: 'indoc', name: 'Indoc Study', questions: indocQuestions },
  hazmat: { id: 'hazmat', name: 'HazMat / Security', questions: hazmatQuestions },
  systems: { id: 'systems', name: 'CRJ-700/550 Systems', questions: systemsQuestions },
  cast: { id: 'cast', name: 'CRJ-700 CAS Messages', questions: castQuestions },
  systemsWrittenExam: {
    id: 'systemsWrittenExam',
    name: 'Systems Written Exam',
    questions: systemsWrittenExamQuestions,
  },
};

function bankAuthKey(bankId) {
  return `indoc-study-auth-${bankId}`;
}

const CHAPTER_GROUPS = [
  { key: 'all', name: 'All Chapters', categories: null },
  { key: 'general', name: 'Aircraft General & Limitations', categories: ['general'] },
  { key: 'eicas', name: 'EICAS', categories: ['eicas'] },
  { key: 'powerplant-apu', name: 'Powerplant & APU', categories: ['powerplant', 'apu'] },
  { key: 'air-cond', name: 'Air Conditioning & Pressurization', categories: ['air-cond'] },
  { key: 'ice-rain', name: 'Ice & Rain Protection', categories: ['ice-rain'] },
  { key: 'electrical-fuel', name: 'Electrical & Fuel System', categories: ['electrical', 'fuel'] },
  { key: 'hydraulics', name: 'Hydraulics', categories: ['hydraulics'] },
  { key: 'landing-gear', name: 'Landing Gear, Brakes & NWS', categories: ['landing-gear'] },
  { key: 'flight-controls', name: 'Flight Controls', categories: ['flight-controls'] },
  { key: 'fire', name: 'Fire Protection', categories: ['fire'] },
  { key: 'oxygen', name: 'Oxygen System', categories: ['oxygen'] },
  { key: 'autoflight-efis', name: 'Autoflight, EFIS, Nav & FMS', categories: ['autoflight', 'efis-nav-fms'] },
  { key: 'comms', name: 'Communications', categories: ['comms'] },
  { key: 'egpws', name: 'EGPWS & Windshear', categories: ['egpws'] },
];

function BankPasswordGate({ bankId, bankName, onAuth, onBack }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === BANK_PASSWORD) {
      localStorage.setItem(bankAuthKey(bankId), 'true');
      onAuth();
    } else {
      setError(true);
      setInput('');
    }
  };

  return (
    <div className="password-gate">
      <div className="password-card">
        <h2>{bankName}</h2>
        <p>Enter the password to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className="password-input"
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Enter
          </button>
        </form>
        {error && <p className="password-error">Incorrect password.</p>}
        <button className="btn btn-small" onClick={onBack} style={{ marginTop: '0.75rem', width: '100%' }}>
          Back
        </button>
      </div>
    </div>
  );
}

function BankSelector({ onSelect }) {
  return (
    <div className="bank-selector">
      <h2>Choose a Test Bank</h2>
      <div className="bank-cards">
        <button className="bank-card" onClick={() => onSelect('indoc')}>
          <h3>Indoc Study</h3>
          <p>{indocQuestions.length} questions</p>
          <span className="bank-desc">General indoc test prep — FARs, ops specs, weather, procedures</span>
        </button>
        <button className="bank-card" onClick={() => onSelect('hazmat')}>
          <h3>HazMat / Security</h3>
          <p>{hazmatQuestions.length} questions</p>
          <span className="bank-desc">Hazardous materials &amp; crewmember security training</span>
        </button>
        <button className="bank-card" onClick={() => onSelect('systems')}>
          <h3>CRJ-700/550 Systems</h3>
          <p>{systemsQuestions.length} questions</p>
          <span className="bank-desc">Aircraft systems — EICAS, powerplant, hydraulics, electrical, flight controls &amp; more</span>
        </button>
        <button className="bank-card" onClick={() => onSelect('cast')}>
          <h3>CRJ-700 CAS Messages</h3>
          <p>{castQuestions.length} questions</p>
          <span className="bank-desc">All 354 CAS alert messages — warnings, cautions, advisories &amp; status messages</span>
        </button>
        <button className="bank-card" onClick={() => onSelect('systemsWrittenExam')}>
          <h3>Systems Written Exam</h3>
          <p>{systemsWrittenExamQuestions.length} questions</p>
          <span className="bank-desc">Practice systems written exam — CRJ systems, limits, and procedures</span>
        </button>
      </div>
    </div>
  );
}

function StudyApp({ bank, onSwitchBank, initialScreen, switchLabel }) {
  const [screen, setScreen] = useState(initialScreen || 'dashboard');
  const progress = useProgress(bank.id, bank.questions);

  const goHome = () => setScreen('dashboard');

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={goHome} style={{ cursor: 'pointer' }}>{bank.name}</h1>
        <div className="header-actions">
          {screen !== 'dashboard' && (
            <button className="btn btn-small" onClick={goHome}>Home</button>
          )}
          <button className="btn btn-small" onClick={onSwitchBank}>{switchLabel || 'Switch Test'}</button>
        </div>
      </header>
      <main className="app-main">
        {screen === 'dashboard' && (
          <Dashboard progress={progress} setScreen={setScreen} />
        )}
        {screen === 'phase1' && (
          <Phase1 progress={progress} goHome={goHome} />
        )}
        {screen === 'phase2' && (
          <Phase2 progress={progress} goHome={goHome} setScreen={setScreen} />
        )}
        {screen === 'phase3' && (
          <Phase3 progress={progress} goHome={goHome} setScreen={setScreen} />
        )}
        {screen === 'phase4' && (
          <Phase4 progress={progress} goHome={goHome} />
        )}
      </main>
    </div>
  );
}

function SystemsHub({ onSwitchBank }) {
  const [phase, setPhase] = useState(null);
  const [chapterKey, setChapterKey] = useState(null);

  const chapterCounts = useMemo(() => {
    const counts = {};
    for (const group of CHAPTER_GROUPS) {
      if (!group.categories) {
        counts[group.key] = systemsQuestions.length;
      } else {
        counts[group.key] = systemsQuestions.filter(q => group.categories.includes(q.category)).length;
      }
    }
    return counts;
  }, []);

  if (phase && chapterKey) {
    const group = CHAPTER_GROUPS.find(g => g.key === chapterKey);
    const filteredQs = group.categories
      ? systemsQuestions.filter(q => group.categories.includes(q.category))
      : systemsQuestions;
    const subBank = {
      id: `systems-${chapterKey}`,
      name: group.name,
      questions: filteredQs,
    };

    return (
      <StudyApp
        key={subBank.id}
        bank={subBank}
        onSwitchBank={() => { setPhase(null); setChapterKey(null); }}
        initialScreen={phase}
        switchLabel="Chapters"
      />
    );
  }

  if (phase) {
    const phaseLabels = {
      phase1: 'Phase 1: Review',
      phase2: 'Phase 2: Self-Check',
      phase3: 'Phase 3: Drill Marked',
      phase4: 'Phase 4: Final Test',
    };
    return (
      <div className="app">
        <header className="app-header">
          <h1>CRJ-700/550 Systems</h1>
          <div className="header-actions">
            <button className="btn btn-small" onClick={() => setPhase(null)}>Back</button>
            <button className="btn btn-small" onClick={onSwitchBank}>Switch Test</button>
          </div>
        </header>
        <main className="app-main">
          <div className="chapter-selector">
            <h2>Choose a Study Group</h2>
            <p className="chapter-subtitle">{phaseLabels[phase]}</p>
            <div className="chapter-cards">
              {CHAPTER_GROUPS.map(group => (
                <button
                  key={group.key}
                  className={`chapter-card${group.key === 'all' ? ' chapter-card-all' : ''}`}
                  onClick={() => setChapterKey(group.key)}
                >
                  <h3>{group.name}</h3>
                  <span className="chapter-count">{chapterCounts[group.key]} questions</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>CRJ-700/550 Systems</h1>
        <div className="header-actions">
          <button className="btn btn-small" onClick={onSwitchBank}>Switch Test</button>
        </div>
      </header>
      <main className="app-main">
        <div className="systems-hub">
          <h2>Choose a Phase</h2>
          <p className="hub-subtitle">Select how you'd like to study, then pick a chapter group.</p>
          <div className="phase-cards">
            <div className="phase-card" onClick={() => setPhase('phase1')}>
              <h3>Phase 1: Review</h3>
              <p>Read through every question with the correct answer shown.</p>
            </div>
            <div className="phase-card" onClick={() => setPhase('phase2')}>
              <h3>Phase 2: Self-Check</h3>
              <p>Test yourself on all questions. Mark anything you miss or aren't sure about.</p>
            </div>
            <div className="phase-card" onClick={() => setPhase('phase3')}>
              <h3>Phase 3: Drill Marked</h3>
              <p>Keep drilling only marked questions until they're all cleared.</p>
            </div>
            <div className="phase-card" onClick={() => setPhase('phase4')}>
              <h3>Phase 4: Final Test</h3>
              <p>Take a randomized final exam from the selected chapter group.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [bankId, setBankId] = useState(null);
  const [bankAuthed, setBankAuthed] = useState(() => {
    const initial = {};
    GATED_BANKS.forEach(id => {
      initial[id] = localStorage.getItem(bankAuthKey(id)) === 'true';
    });
    return initial;
  });

  const selectBank = (id) => setBankId(id);
  const clearBank = () => setBankId(null);

  if (!bankId) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Indoc Study</h1>
        </header>
        <main className="app-main">
          <BankSelector onSelect={selectBank} />
        </main>
      </div>
    );
  }

  if (GATED_BANKS.includes(bankId) && !bankAuthed[bankId]) {
    return (
      <BankPasswordGate
        bankId={bankId}
        bankName={BANKS[bankId].name}
        onAuth={() => setBankAuthed(prev => ({ ...prev, [bankId]: true }))}
        onBack={clearBank}
      />
    );
  }

  if (bankId === 'systems') {
    return (
      <SystemsHub
        key="systems"
        onSwitchBank={clearBank}
      />
    );
  }

  return (
    <StudyApp
      key={bankId}
      bank={BANKS[bankId]}
      onSwitchBank={clearBank}
    />
  );
}
