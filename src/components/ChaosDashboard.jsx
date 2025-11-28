import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, TrendingDown } from 'lucide-react';
import { Globe } from './Globe';

const ChaosDashboard = ({ onEnable }) => {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)] opacity-5 pointer-events-none">
        {Array.from({ length: 900 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-surface-stroke" />
        ))}
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col p-3 sm:p-4 lg:p-6 z-10 max-w-[1800px] mx-auto w-full min-h-0">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-3 lg:gap-0 mb-3 lg:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-text-high mb-1.5 lg:mb-2 tracking-tight">
              NETWORK STATUS
            </h1>
            <motion.div 
              className="flex items-center gap-2 bg-chaos-red/10 border border-chaos-red/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle size={16} className="text-chaos-red flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm lg:text-base tracking-wider text-chaos-red font-bold">CRITICAL CONGESTION</span>
            </motion.div>
          </div>

          <div className="flex gap-2 sm:gap-3 w-full lg:w-auto">
            <motion.div 
              className="flex-1 lg:flex-none bg-surface-card border border-chaos-red/30 p-2 sm:p-3 lg:p-4 rounded-xl min-w-[120px] sm:min-w-[150px] lg:min-w-[180px] shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-text-low text-[9px] sm:text-[10px] lg:text-xs font-mono mb-0.5 sm:mb-1 uppercase tracking-wider">Failure Rate</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-chaos-red font-bold">34.2%</div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs text-chaos-red mt-0.5 sm:mt-1 flex items-center gap-1">
                <TrendingDown size={10} /> +12% vs last
              </div>
            </motion.div>
            <motion.div 
              className="flex-1 lg:flex-none bg-surface-card border border-warning-orange/30 p-2 sm:p-3 lg:p-4 rounded-xl min-w-[120px] sm:min-w-[150px] lg:min-w-[180px] shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-text-low text-[9px] sm:text-[10px] lg:text-xs font-mono mb-0.5 sm:mb-1 uppercase tracking-wider">Retries Cost</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-warning-orange font-bold">14.5 SOL</div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs text-text-low mt-0.5 sm:mt-1">Daily Waste</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Globe Visualization */}
        <motion.div 
          className="flex-1 relative border border-chaos-red/20 bg-gradient-to-b from-background to-surface-card/30 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl min-h-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 z-10 bg-surface-card/90 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-surface-stroke shadow-lg">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-chaos-red rounded-full animate-pulse" />
              <span className="text-[9px] sm:text-[10px] lg:text-xs font-mono text-text-low uppercase tracking-wider">Live Traffic</span>
            </div>
          </div>
          
          <div className="w-full h-full max-w-[min(70vh,85vw)] max-h-[min(70vh,85vw)] p-4 sm:p-6 lg:p-8">
            <Globe mode="chaos" />
          </div>

          {/* Chaos Overlay Text */}
          <motion.div 
            className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-0 right-0 text-center pointer-events-none px-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="inline-block bg-chaos-red/10 border border-chaos-red/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-sm">
              <p className="text-chaos-red font-mono text-[9px] sm:text-[10px] lg:text-xs font-bold tracking-wide">⚠ PACKET LOSS IN 12 REGIONS</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Action Section */}
        <motion.div 
          className="mt-2 sm:mt-3 lg:mt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-3 lg:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex-1 bg-surface-card/50 border border-surface-stroke p-2 sm:p-3 rounded-lg backdrop-blur-sm">
            <div className="text-text-high font-bold mb-0.5 sm:mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
              <AlertTriangle size={12} className="text-warning-orange flex-shrink-0" />
              Problem Detected
            </div>
            <p className="text-text-low text-[10px] sm:text-xs leading-relaxed">
              High latency and dropped transactions. Devices wasting energy on retries.
            </p>
          </div>
          
          <button
            onClick={onEnable}
            className="group relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-transparent overflow-hidden rounded-lg border-2 border-raiku-green text-raiku-green hover:bg-raiku-green hover:text-background transition-all duration-300 font-mono font-bold tracking-widest text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-raiku-green/50 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap size={16} strokeWidth={3} className="flex-shrink-0" /> 
              <span className="hidden sm:inline">ENABLE FLOWSTATE</span>
              <span className="sm:hidden">ENABLE</span>
            </span>
            <motion.div 
              className="absolute inset-0 bg-raiku-green/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ChaosDashboard;
