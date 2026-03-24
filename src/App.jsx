import { useState } from 'react';
import useProgress from './hooks/useProgress';
import Dashboard from './components/Dashboard';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import Phase4 from './components/Phase4';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState('dashboard');
  const progress = useProgress();

  const goHome = () => setScreen('dashboard');

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={goHome} style={{ cursor: 'pointer' }}>Indoc Study</h1>
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
