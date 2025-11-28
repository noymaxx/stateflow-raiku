import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Cpu, Activity } from 'lucide-react';
import { Globe } from './Globe';

const Orchestrator = () => {
  const [logs, setLogs] = useState([]);
  const [slot, setSlot] = useState(349910);
  const logEndRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlot(prev => prev + 1);
      const deviceId = Math.floor(Math.random() * 100).toString().padStart(3, '0');
      const newLog = `> Device_${deviceId} assigned to Slot #${slot + 5} [AOT CONFIRMED]`;
      setLogs(prev => [...prev.slice(-12), newLog]);
    }, 800);
    return () => clearInterval(interval);
  }, [slot]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* HUD Header */}
      <motion.div 
        className="flex justify-between items-center p-3 sm:p-4 lg:p-5 bg-surface-card/80 backdrop-blur-xl border-b border-raiku-green/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] lg:text-xs text-text-low font-mono uppercase tracking-wider">System Status</span>
            <span className="text-raiku-green font-bold font-mono text-sm sm:text-base lg:text-lg flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-raiku-green rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,163,1)]"/> ONLINE
            </span>
          </div>
          <div className="h-8 sm:h-10 w-px bg-surface-stroke"/>
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] lg:text-xs text-text-low font-mono uppercase tracking-wider">Mode</span>
            <span className="text-text-high font-bold font-mono text-sm sm:text-base lg:text-lg">DETERMINISTIC</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          <div className="text-right">
            <div className="text-[9px] sm:text-[10px] lg:text-xs text-text-low font-mono uppercase tracking-wider">Success Rate</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-raiku-green font-bold">100.0%</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] sm:text-[10px] lg:text-xs text-text-low font-mono uppercase tracking-wider">Current Slot</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-flow-blue font-bold">#{slot.toLocaleString()}</div>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 min-h-0">
        {/* Main Globe Visualization */}
        <motion.div 
          className="col-span-2 bg-gradient-to-b from-surface-card/30 to-background border border-raiku-green/20 rounded-xl lg:rounded-2xl relative overflow-hidden flex flex-col shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 z-10 flex gap-2">
             <div className="bg-raiku-green/10 backdrop-blur-md px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-lg border border-raiku-green/30 text-[9px] sm:text-[10px] lg:text-xs font-mono text-raiku-green flex items-center gap-1.5 sm:gap-2 shadow-lg">
               <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-raiku-green rounded-full animate-pulse" />
               LIVE ORCHESTRATION
             </div>
          </div>
          
          <div className="flex-1 relative flex items-center justify-center p-4 sm:p-6 lg:p-8">
             <div className="w-full h-full max-w-[min(60vh,60vw)] max-h-[min(60vh,60vw)]">
                <Globe mode="raiku" />
             </div>
          </div>

          {/* Timeline Strip */}
          <div className="h-16 sm:h-20 lg:h-24 bg-background/90 border-t border-raiku-green/20 relative overflow-hidden flex items-center backdrop-blur-sm">
            <div className="absolute left-3 sm:left-4 lg:left-6 z-10 bg-raiku-green text-background text-[9px] sm:text-[10px] lg:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg">NOW</div>
            <div className="absolute left-10 sm:left-12 lg:left-16 h-full w-0.5 bg-raiku-green z-10 shadow-[0_0_15px_rgba(0,255,163,1)]" />
            
            <motion.div 
              className="flex gap-1 sm:gap-1.5 lg:gap-2 absolute left-10 sm:left-12 lg:left-16 px-2 sm:px-3 lg:px-4"
              animate={{ x: -120 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-surface-card border border-raiku-green/30 flex flex-col items-center justify-center shrink-0 relative group hover:border-raiku-green transition-colors rounded-md lg:rounded-lg">
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-text-low font-mono">#{slot + i}</span>
                  <div className="w-6 sm:w-8 lg:w-10 h-1.5 sm:h-2 lg:h-2.5 bg-raiku-green/30 rounded mt-1 group-hover:bg-raiku-green/60 transition-colors relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-raiku-green"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.5, delay: i * 0.02 }}
                    />
                  </div>
                  <span className="text-[7px] sm:text-[8px] text-raiku-green/60 font-mono mt-0.5">AOT</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Sidebar Info */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
          {/* Terminal */}
          <motion.div 
            className="flex-1 bg-black border border-raiku-green/20 rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5 font-mono text-[9px] sm:text-[10px] lg:text-xs overflow-hidden flex flex-col shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 text-raiku-green mb-2 sm:mb-3 border-b border-raiku-green/20 pb-2 sm:pb-3">
              <TerminalIcon size={12} /> 
              <span className="font-bold uppercase tracking-wider text-[9px] sm:text-[10px] lg:text-xs">Ackermann Logs</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-0.5 sm:space-y-1 lg:space-y-1.5 text-raiku-green/90 scrollbar-thin scrollbar-thumb-raiku-green/20">
              {logs.map((log, i) => (
                <motion.div 
                  key={i} 
                  className="break-all leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {log}
                </motion.div>
              ))}
              <div ref={logEndRef} />
            </div>
          </motion.div>

          {/* Active Devices */}
          <motion.div 
            className="bg-surface-card border border-raiku-green/20 rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-text-high">
                <Cpu size={12} className="text-raiku-green" /> 
                <span className="font-mono text-[9px] sm:text-[10px] lg:text-sm font-bold uppercase tracking-wider">Active Nodes</span>
              </div>
              <div className="flex items-center gap-1 text-raiku-green text-[9px] sm:text-[10px] font-mono">
                <Activity size={10} />
                <span>4/4</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3">
              {[1,2,3,4].map(i => (
                <motion.div 
                  key={i} 
                  className="bg-background/50 p-1.5 sm:p-2 lg:p-3 rounded-md lg:rounded-lg border border-raiku-green/20 flex items-center justify-between hover:border-raiku-green/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-[9px] sm:text-[10px] lg:text-xs text-text-high font-mono font-bold">Node_0{i}</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-raiku-green rounded-full shadow-[0_0_8px_rgba(0,255,163,0.8)] animate-pulse"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Orchestrator;
