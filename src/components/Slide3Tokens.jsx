import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Laugh, Sofa, Handshake, CheckCircle2, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';

const BESTI_PASSES = [
  {
    id: 'pass-1',
    title: 'Unlimited Tech Support Pass 🛠️',
    desc: 'Valid for life, phone bugs, & midnight wifi panics.',
    icon: Wrench,
    gradient: 'from-cyan-400 to-blue-600',
    borderGlow: 'border-cyan-400/40',
  },
  {
    id: 'pass-2',
    title: '24h Pass to Annoy Me Freely 😜',
    desc: 'Immunity against all revenge for hilarious trolling.',
    icon: Laugh,
    gradient: 'from-pink-500 to-rose-600',
    borderGlow: 'border-pink-500/40',
  },
  {
    id: 'pass-3',
    title: 'Chore & Errand Immunity Token 🛋️',
    desc: 'Instant get-out-of-work card. Couch potato rights.',
    icon: Sofa,
    gradient: 'from-purple-500 to-indigo-600',
    borderGlow: 'border-purple-400/40',
  },
  {
    id: 'pass-4',
    title: 'Ride-or-Die Backup on Any Plan 🤝',
    desc: 'Unconditional alliance for any scheme or defense.',
    icon: Handshake,
    gradient: 'from-amber-400 to-pink-500',
    borderGlow: 'border-amber-400/40',
  },
];

export default function Slide3Tokens() {
  const [claimed, setClaimed] = useState({});

  const toggleClaim = (id) => {
    const isNowClaimed = !claimed[id];
    setClaimed((prev) => ({ ...prev, [id]: isNowClaimed }));

    if (isNowClaimed) {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#FF2E93', '#00D2FF', '#FFFFFF'],
        scalar: 0.9,
      });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center text-center px-4 py-2 my-auto select-none">
      
      {/* Slide Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-xs font-semibold uppercase tracking-wider text-pink-300 mb-2">
        <Ticket className="w-3.5 h-3.5 text-pink-400" />
        <span>VIP PRIVILEGES</span>
      </div>

      {/* Large Headline */}
      <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-1">
        Exclusive Besti Passes 🎟️
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto mb-4">
        Tap each token to claim it for Chapter 16:
      </p>

      {/* 2x2 Grid of 3D Flip Cards */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-md perspective-1000 my-1">
        {BESTI_PASSES.map((pass) => {
          const isClaimed = !!claimed[pass.id];
          const Icon = pass.icon;

          return (
            <div
              key={pass.id}
              onClick={() => toggleClaim(pass.id)}
              className="relative h-36 sm:h-40 cursor-pointer select-none"
            >
              <motion.div
                className="w-full h-full transform-style-3d transition-transform duration-500 rounded-2xl relative"
                animate={{ rotateY: isClaimed ? 180 : 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {/* FRONT FACE */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-2xl bg-white/[0.04] backdrop-blur-xl border ${pass.borderGlow} hover:border-white/40 p-3 sm:p-3.5 flex flex-col justify-between shadow-lg transition-colors`}
                >
                  <div>
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${pass.gradient} flex items-center justify-center text-white mb-2 shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-100 leading-snug text-left">
                      {pass.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight text-left">
                      {pass.desc}
                    </p>
                  </div>

                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1 text-left">
                    <span>✦ Tap to Claim</span>
                  </span>
                </div>

                {/* BACK FACE (CLAIMED) */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-b from-[#24133B] via-[#1A122E] to-[#0D1022] border-2 border-pink-400 p-3 flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(255,46,147,0.4)]"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="w-9 h-9 rounded-full bg-pink-500/20 border border-pink-400 flex items-center justify-center text-pink-300 mb-1.5 animate-bounce">
                    <CheckCircle2 className="w-5 h-5 text-pink-400" />
                  </div>

                  <span className="text-xs sm:text-sm font-black text-pink-300 leading-tight">
                    CLAIMED FOR 16 🎉
                  </span>

                  <span className="text-[10px] text-slate-200 mt-1">
                    Valid for Chapter 16! ✨
                  </span>

                  <span className="text-[8px] text-slate-500 mt-2">
                    Tap to flip back
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
