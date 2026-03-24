import { useState } from 'react';
import useProgress from './hooks/useProgress';
import Dashboard from './components/Dashboard';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import Phase4 from './components/Phase4';
import './App.css';

const APP_PASSWORD = 'Rogerroger';
const AUTH_KEY = 'indoc-study-auth';

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

export default function App() {
  const [authed, setAuthed] = useState(() => localStorage.getItem(AUTH_KEY) === 'true');
  const [screen, setScreen] = useState('dashboard');
  const progress = useProgress();

  const goHome = () => setScreen('dashboard');

  if (!authed) {
    return <PasswordGate onAuth={() => setAuthed(true)} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={goHome} style={{ cursor: 'pointer' }}>Indoc Study (Temu Sheppard Air)</h1>
        {screen !== 'dashboard' && (
          <button className="btn btn-small" onClick={goHome}>Home</button>
        )}
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
