import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

const Header = ({ currentView = 'dashboard' }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Logo color based on view
  const accentColor = currentView === 'dashboard' ? 'text-chaos-red' : 'text-raiku-green';

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      if ('phantom' in window) {
        const provider = window.phantom?.solana;
        if (provider?.isPhantom) {
          const resp = await provider.connect();
          const address = resp.publicKey.toString();
          setWalletAddress(address);
        }
      } else {
        window.open('https://phantom.app/', '_blank');
      }
    } catch (err) {
      console.error('Wallet connection failed:', err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    if (window.phantom?.solana) {
      window.phantom.solana.disconnect();
      setWalletAddress(null);
    }
  };

  return (
    <header className="w-full border-b border-surface-stroke bg-surface-card/50 backdrop-blur-xl">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-text-high tracking-tight">
              Flow<span className={accentColor}>State</span>
            </h1>
            <p className="text-[10px] sm:text-xs text-text-low font-mono tracking-wider hidden md:block">DETERMINISTIC DEPIN ORCHESTRATOR</p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flex items-center gap-2 sm:gap-4 lg:gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Raiku Badge */}
          <div className="hidden md:flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-surface-card border border-surface-stroke rounded-lg">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-raiku-green rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,163,0.8)]" />
            <span className="text-[10px] sm:text-xs font-mono text-text-low">POWERED BY</span>
            <span className="text-xs sm:text-sm font-bold text-raiku-green font-mono">RAIKU</span>
          </div>
          
          {/* Wallet Button */}
          {!walletAddress ? (
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-raiku-green/10 border border-raiku-green/30 rounded-lg hover:bg-raiku-green/20 transition-all text-raiku-green font-mono text-xs sm:text-sm font-bold"
            >
              <Wallet size={16} />
              <span className="hidden sm:inline">{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
            </button>
          ) : (
            <button
              onClick={disconnectWallet}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-raiku-green/10 border border-raiku-green/30 rounded-lg hover:bg-raiku-green/20 transition-all"
            >
              <div className="w-2 h-2 bg-raiku-green rounded-full animate-pulse" />
              <span className="text-raiku-green font-mono text-xs sm:text-sm font-bold">
                {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
