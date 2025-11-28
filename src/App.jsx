import React, { useState } from 'react';
import Header from './components/Header';
import ChaosDashboard from './components/ChaosDashboard';
import ConfigurationHub from './components/ConfigurationHub';
import Orchestrator from './components/Orchestrator';

function App() {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'config' | 'orchestrator'

  return (
    <div className="w-screen h-screen bg-background text-text-high font-sans overflow-hidden selection:bg-raiku-green selection:text-background flex flex-col">
      <Header currentView={view} />
      
      <div className="flex-1 overflow-hidden">
        {view === 'dashboard' && (
          <ChaosDashboard onEnable={() => setView('config')} />
        )}
        
        {view === 'config' && (
          <ConfigurationHub onActivate={() => setView('orchestrator')} />
        )}
        
        {view === 'orchestrator' && (
          <Orchestrator />
        )}
      </div>

      {/* Navigation for Demo (Optional, bottom right) */}
      <div className="fixed bottom-4 right-4 flex gap-2 opacity-0 hover:opacity-50 transition-opacity z-50">
        <button onClick={() => setView('dashboard')} className="px-2 py-1 bg-surface-card border border-surface-stroke text-xs rounded hover:border-raiku-green transition-colors">1</button>
        <button onClick={() => setView('config')} className="px-2 py-1 bg-surface-card border border-surface-stroke text-xs rounded hover:border-raiku-green transition-colors">2</button>
        <button onClick={() => setView('orchestrator')} className="px-2 py-1 bg-surface-card border border-surface-stroke text-xs rounded hover:border-raiku-green transition-colors">3</button>
      </div>
    </div>
  );
}

export default App;
