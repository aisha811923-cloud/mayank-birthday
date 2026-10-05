import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Rocket, Heart, Crown } from 'lucide-react';

export default function Slide5Finale({ onRestart }) {
  const triggerGrandConfetti = () => {
    const neonColors = ['#FF2E93', '#00D2FF', '#E040FB', '#FFFFFF', '#FCD34D'];

    // Big center blast
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.5 },
      colors: neonColors,
      scalar: 1.25,
      ticks: 350,
    });

    // Side cannons
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 70,
        origin: { x: 0.15, y: 0.75 },
        colors: neonColors,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 70,
        origin: { x: 0.85, y: 0.75 },
        colors: neonColors,
      });
    }, 200);
  };

  useEffect(() => {
    // Automatically celebrate once when reaching Slide 5
    triggerGrandConfetti();
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center text-center px-4 py-2 my-auto select-none">
      
      {/* Crown / Finale Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
        className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#FF2E93] to-[#00D2FF] p-[2px] shadow-[0_0_35px_rgba(255,46,147,0.5)] mb-6 flex items-center justify-center"
      >
        <div className="w-full h-full rounded-[22px] bg-[#0E1222] flex items-center justify-center">
          <Rocket className="w-8 h-8 text-cyan-300" />
        </div>
      </motion.div>

      {/* Monumental Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="font-outfit text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight neon-gradient-text drop-shadow-[0_10px_35px_rgba(255,46,147,0.4)] mb-4"
      >
        HAVE THE BEST 16TH, MAYANK! 🚀✨
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="text-base sm:text-lg text-slate-300 font-medium max-w-sm mx-auto leading-relaxed mb-8"
      >
        Go own this year. Always in your corner.
      </motion.p>

      {/* Dual Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="w-full max-w-xs flex flex-col gap-3"
      >
        <button
          onClick={triggerGrandConfetti}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF2E93] via-[#E040FB] to-[#00D2FF] hover:brightness-110 text-white font-outfit font-extrabold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(255,46,147,0.45)] active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Pop Confetti Again 🎉</span>
        </button>

        <button
          onClick={onRestart}
          className="w-full py-3 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-200 font-semibold text-xs sm:text-sm tracking-wide active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-cyan-400" />
          <span>Start Over ↺</span>
        </button>
      </motion.div>

      {/* Bottom Sign-off */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center gap-1.5 text-xs text-slate-400 font-mono"
      >
        <span>Chapter 16</span>
        <span>•</span>
        <span className="text-pink-400 flex items-center gap-1">
          Forever Besties <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
        </span>
        <span>•</span>
        <span>October 2026</span>
      </motion.div>

    </div>
  );
}
