import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, Clock, Zap, CheckCircle2 } from 'lucide-react';

const ConfigurationHub = ({ onActivate }) => {
  const [frequency, setFrequency] = useState(10);
  const [mode, setMode] = useState('raiku'); // 'legacy' | 'raiku'

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto overflow-y-auto">
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-text-high mb-2 flex items-center gap-2 sm:gap-3">
          <Settings className="text-flow-blue" size={28} /> CONFIGURATION HUB
        </h1>
        <p className="text-text-low font-mono text-xs sm:text-sm">Configure upload parameters and execution guarantees.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
        {/* Mode Selection */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-mono text-text-high mb-3 sm:mb-4">EXECUTION MODE</h2>
          
          <div 
            onClick={() => setMode('legacy')}
            className={`cursor-pointer p-4 sm:p-5 lg:p-6 rounded-lg border transition-all duration-300 ${mode === 'legacy' ? 'bg-surface-card border-surface-stroke opacity-50' : 'bg-surface-card/30 border-transparent opacity-30'}`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-text-high text-sm sm:text-base">Best Effort (Legacy)</span>
              {mode === 'legacy' && <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-text-low" />}
            </div>
            <p className="text-xs sm:text-sm text-text-low">Standard Solana priority fees. Subject to congestion and dropped transactions.</p>
          </div>

          <div 
            onClick={() => setMode('raiku')}
            className={`cursor-pointer p-4 sm:p-5 lg:p-6 rounded-lg border transition-all duration-300 relative overflow-hidden ${mode === 'raiku' ? 'bg-surface-card border-raiku-green shadow-[0_0_20px_rgba(0,255,163,0.1)]' : 'bg-surface-card/30 border-transparent opacity-50'}`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-raiku-green flex items-center gap-2 text-sm sm:text-base">
                <Shield size={14} /> Raiku Deterministic
              </span>
              {mode === 'raiku' && <CheckCircle2 className="text-raiku-green" size={18} />}
            </div>
            <p className="text-xs sm:text-sm text-text-low">Guaranteed AOT slot reservations. Zero failure rate. Precise timing.</p>
          </div>
        </div>

        {/* Frequency Settings */}
        <div className="bg-surface-card border border-surface-stroke rounded-lg p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-mono text-text-high mb-4 sm:mb-6 flex items-center gap-2">
              <Clock size={16} /> UPLOAD FREQUENCY
            </h2>
            
            <div className="mb-6 sm:mb-8">
              <input 
                type="range" 
                min="1" 
                max="60" 
                value={frequency} 
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full h-2 bg-surface-stroke rounded-lg appearance-none cursor-pointer accent-raiku-green"
              />
              <div className="flex justify-between mt-2 font-mono text-xs text-text-low">
                <span>1s</span>
                <span className="text-raiku-green text-base sm:text-lg">{frequency}s</span>
                <span>60s</span>
              </div>
            </div>
          </div>

          <div className="border-t border-surface-stroke pt-4 sm:pt-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-text-low text-xs sm:text-sm">Estimated AOT Cost</span>
              <span className="font-mono text-lg sm:text-xl text-text-high">0.002 SOL<span className="text-xs text-text-low">/epoch</span></span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-text-low text-xs sm:text-sm">Efficiency Gain</span>
              <span className="font-mono text-lg sm:text-xl text-raiku-green">+45%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onActivate}
          disabled={mode !== 'raiku'}
          className={`
            px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-lg font-mono font-bold tracking-widest text-sm sm:text-base lg:text-lg transition-all duration-300
            ${mode === 'raiku' 
              ? 'bg-raiku-green text-background hover:shadow-[0_0_30px_rgba(0,255,163,0.4)] hover:scale-105' 
              : 'bg-surface-stroke text-text-low cursor-not-allowed'}
          `}
        >
          {mode === 'raiku' ? 'ACTIVATE ORCHESTRATOR' : 'SELECT RAIKU TO PROCEED'}
        </button>
      </div>
    </div>
  );
};

export default ConfigurationHub;
