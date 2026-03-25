import { useState } from 'react';
import useProgress from './hooks/useProgress';
import indocQuestions from './data/questions.js';
import hazmatQuestions from './data/hazmat-questions.js';
import Dashboard from './components/Dashboard';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import Phase4 from './components/Phase4';
import './App.css';

const APP_PASSWORD = 'Rogerroger';
const AUTH_KEY = 'indoc-study-auth';

const BANKS = {
  indoc: { id: 'indoc', name: 'Indoc Study', questions: indocQuestions },
  hazmat: { id: 'hazmat', name: 'HazMat / Security', questions: hazmatQuestions },
};

function PasswordGate({ onAuth }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === APP_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true');
      onAuth();
    } else {
      setError(true);
      setInput('');
    }
  };

  return (
    <div className="password-gate">
      <div className="password-card">
        <h2>Indoc Study</h2>
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
      </div>
    </div>
  );
}

function StudyApp({ bank, onSwitchBank }) {
  const [screen, setScreen] = useState('dashboard');
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
          <button className="btn btn-small" onClick={onSwitchBank}>Switch Test</button>
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

export default function App() {
  const [authed, setAuthed] = useState(() => localStorage.getItem(AUTH_KEY) === 'true');
  const [bankId, setBankId] = useState(null);

  if (!authed) {
    return <PasswordGate onAuth={() => setAuthed(true)} />;
  }

  if (!bankId) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Indoc Study</h1>
        </header>
        <main className="app-main">
          <BankSelector onSelect={setBankId} />
        </main>
      </div>
    );
  }

  return (
    <StudyApp
      key={bankId}
      bank={BANKS[bankId]}
      onSwitchBank={() => setBankId(null)}
    />
  );
}
