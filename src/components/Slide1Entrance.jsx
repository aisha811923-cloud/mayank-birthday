import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Crown, Flame } from 'lucide-react';

export default function Slide1Entrance({ onNext }) {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center text-center px-4 py-2 my-auto select-none">
      
      {/* Top Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-pink-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(255,46,147,0.25)] mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF2E93] animate-ping" />
        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-pink-300">
          🎀 CHAPTER XVI • SPECIAL EDITION ✨
        </span>
      </motion.div>

      {/* Massive Bold Headline: HAPPY 16TH BIRTHDAY, MAYANK! */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="mb-4"
      >
        <h1 className="font-outfit text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.08] neon-gradient-text drop-shadow-[0_10px_35px_rgba(255,46,147,0.35)]">
          HAPPY 16TH BIRTHDAY, MAYANK!
        </h1>
      </motion.div>

      {/* Decorative Crown / Energy Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4"
      >
        <Crown className="w-4 h-4 text-pink-400" />
        <span>OCTOBER 2026 • THE SWEET 16</span>
        <Flame className="w-4 h-4 text-amber-400" />
      </motion.div>

      {/* Large Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
        className="text-base sm:text-xl text-slate-300 font-medium max-w-md mx-auto leading-relaxed mb-8 px-2"
      >
        Stepping into the king era. 16 years of pure chaos, energy, and legendary vibes.
      </motion.p>

      {/* Action CTA: Let's Celebrate → with Pulsing Neon Glow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="w-full max-w-xs"
      >
        <button
          onClick={onNext}
          className="group relative w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#FF2E93] via-[#E040FB] to-[#00D2FF] hover:brightness-110 text-white font-outfit font-extrabold text-base sm:text-lg tracking-wide shadow-[0_0_35px_rgba(255,46,147,0.5)] active:scale-95 transition-all flex items-center justify-center gap-3 min-h-[52px] cursor-pointer overflow-hidden"
        >
          {/* Pulsing light overlay */}
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '6s' }} />
          <span>Let&apos;s Celebrate</span>
          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
        </button>
      </motion.div>

      {/* Swipe/Click hint */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-6"
      >
        Story 1 of 5 • Tap to proceed
      </motion.span>
    </div>
  );
}
