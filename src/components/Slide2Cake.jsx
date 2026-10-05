import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, ArrowRight, Award } from 'lucide-react';

export default function Slide2Cake({ onNext }) {
  const [candles, setCandles] = useState(Array(16).fill(true));
  const [isBlown, setIsBlown] = useState(false);

  const litCount = candles.filter(Boolean).length;

  const triggerExplosiveConfetti = () => {
    const neonColors = ['#FF2E93', '#00D2FF', '#E040FB', '#FFFFFF', '#38BDF8', '#FCD34D'];

    // Left cannon
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: neonColors,
      scalar: 1.2,
      ticks: 300,
    });

    // Right cannon
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.7 },
      colors: neonColors,
      scalar: 1.2,
      ticks: 300,
    });

    // Center starburst
    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: neonColors,
        scalar: 1.3,
        ticks: 320,
      });
    }, 180);
  };

  const handleBlowOut = () => {
    if (litCount === 0) return;
    setCandles(Array(16).fill(false));
    setIsBlown(true);
    triggerExplosiveConfetti();
  };

  const handleRelight = () => {
    setCandles(Array(16).fill(true));
    setIsBlown(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center text-center px-4 py-2 my-auto select-none">
      
      {/* Slide Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>RITUAL • 16 GOLDEN CANDLES</span>
      </div>

      {/* Large Headline */}
      <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-1">
        Make a Wish, Mayank 🎂
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto mb-4">
        16 flames glowing with limitless energy. Blow them out to seal your Chapter 16 destiny!
      </p>

      {/* 2-Tier Modern SVG/CSS Cake with 16 Candles */}
      <div className="relative w-64 sm:w-72 flex flex-col items-center my-2">
        
        {/* Row 1 of Candles: 8 Candles on Top Tier */}
        <div className="flex justify-center items-end gap-2 -mb-1 z-20">
          {candles.slice(0, 8).map((isLit, i) => (
            <CandleStick key={i} isLit={isLit} />
          ))}
        </div>

        {/* Tier 1 (Top Tier) */}
        <div className="relative w-44 sm:w-48 h-14 sm:h-16 rounded-t-2xl bg-gradient-to-b from-[#FF2E93]/40 via-[#8A1652]/50 to-[#0A0D1A] border-t-2 border-x-2 border-pink-400/60 shadow-[0_0_20px_rgba(255,46,147,0.3)] flex items-center justify-center overflow-hidden">
          {/* Frosting wave */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#FF2E93] via-[#00D2FF] to-[#FF2E93] opacity-90 rounded-b-md" />
          <span className="font-outfit text-xs font-black tracking-widest text-pink-200">
            MAYANK • XVI
          </span>
        </div>

        {/* Row 2 of Candles: 8 Candles on Bottom Flank */}
        <div className="flex justify-between w-60 sm:w-64 -mb-1 z-20 px-1">
          <div className="flex gap-1.5 sm:gap-2">
            {candles.slice(8, 12).map((isLit, i) => (
              <CandleStick key={i + 8} isLit={isLit} />
            ))}
          </div>
          <div className="flex gap-1.5 sm:gap-2">
            {candles.slice(12, 16).map((isLit, i) => (
              <CandleStick key={i + 12} isLit={isLit} />
            ))}
          </div>
        </div>

        {/* Tier 2 (Bottom Tier) */}
        <div className="relative w-60 sm:w-64 h-16 sm:h-20 rounded-t-3xl bg-gradient-to-b from-[#00D2FF]/30 via-[#0E2842]/60 to-[#060812] border-t-2 border-x-2 border-cyan-400/60 shadow-[0_0_25px_rgba(0,210,255,0.25)] flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#00D2FF] via-[#E040FB] to-[#00D2FF] opacity-80 rounded-b-md" />
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-cyan-200 uppercase">
            <span>✦</span>
            <span>CHAPTER 16 ERA</span>
            <span>✦</span>
          </div>
        </div>

        {/* Cake Stand */}
        <div className="w-68 sm:w-76 h-3 rounded-full bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 border-t border-white/20 shadow-lg" />
        <div className="w-32 sm:w-36 h-2.5 bg-slate-800 rounded-b-xl border-x border-b border-white/10" />
      </div>

      {/* Action Button & Glowing Status */}
      <div className="mt-5 w-full max-w-xs flex flex-col items-center gap-2">
        {!isBlown ? (
          <button
            onClick={handleBlowOut}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF2E93] via-[#E040FB] to-[#00D2FF] hover:brightness-110 text-white font-outfit font-extrabold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(255,46,147,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
          >
            <span>Blow Out The Candles 🕯️</span>
          </button>
        ) : (
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full py-3 px-4 rounded-2xl bg-[#FF2E93]/20 border-2 border-[#FF2E93] text-pink-200 font-bold text-xs sm:text-sm text-center shadow-[0_0_25px_rgba(255,46,147,0.5)] flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>16 Candles Out! Wish locked in for Chapter 16 ✨</span>
            </motion.div>

            <button
              onClick={handleRelight}
              className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors py-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 text-pink-400" />
              <span>Re-light 16 Candles</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

// Individual candle stick component
function CandleStick({ isLit }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Flame or Smoke Dissolve */}
      <div className="h-4 sm:h-5 w-3 flex items-center justify-center mb-0.5">
        {isLit ? (
          <div className="neon-flame w-2 sm:w-2.5 h-4 sm:h-5 rounded-full bg-gradient-to-t from-[#FF2E93] via-amber-300 to-white" />
        ) : (
          <div className="smoke-dissolve w-2 h-2 rounded-full bg-slate-400/60" />
        )}
      </div>

      {/* Wick */}
      <div className="w-[1.5px] h-1 bg-slate-500" />

      {/* Candle Stem */}
      <div className="w-2 sm:w-2.5 h-7 sm:h-8 rounded-t-sm bg-gradient-to-b from-cyan-300 via-pink-400 to-[#FF2E93] shadow-md border-x border-white/20" />
    </div>
  );
}
