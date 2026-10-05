import React from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';

export default function Slide4Letter() {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center text-center px-4 py-1 my-auto">
      
      {/* Slide Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-xs font-semibold uppercase tracking-wider text-pink-300 mb-1.5">
        <Mail className="w-3.5 h-3.5 text-pink-400" />
        <span>CONFIDENTIAL • BESTIE ARCHIVE</span>
      </div>

      {/* Large Headline */}
      <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
        A Letter For My Cuitee Bsf 💌
      </h2>

      {/* Frosted Glass Parchment Card */}
      <div className="w-full rounded-3xl bg-white/[0.04] backdrop-blur-2xl border-2 border-pink-500/30 p-4 sm:p-6 shadow-[0_0_40px_rgba(255,46,147,0.2)] relative overflow-hidden flex flex-col max-h-[56vh] sm:max-h-[60vh]">
        
        {/* Soft background ambient blurs */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Mini Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 shrink-0 text-[10px] font-mono uppercase tracking-wider text-slate-400">
          <span className="flex items-center gap-1 text-pink-400 font-semibold">
            <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
            FOR MAYANK
          </span>
          <span className="flex items-center gap-1 text-cyan-400">
            <Sparkles className="w-3 h-3" />
            CHAPTER 16
          </span>
        </div>

        {/* Scrollable Letter Content - EXACT TEXT */}
        <div className="overflow-y-auto custom-scrollbar text-left text-xs sm:text-sm text-slate-100 font-sans leading-relaxed pr-1.5 select-text space-y-3">
          <p className="font-semibold text-pink-300 text-sm sm:text-base">
            Happy birthday to uhhhhh 🎀
          </p>
          <p className="font-semibold text-pink-300 text-sm sm:text-base">
            Happy birthday to uhhhhh 💗 ✨
          </p>
          <p className="font-semibold text-pink-300 text-sm sm:text-base">
            Happy birthday dear bestuuuuu😋😚💗🎀✨
          </p>
          <p className="font-semibold text-pink-300 text-sm sm:text-base">
            Happy birthday to youuuuu😘
          </p>

          <div className="pt-1 text-slate-200">
            I wish ki tera ye birthday bohot bohot bohottttt acha jayeee
            <br />
            Nd tujhe Jo chahiye vo mil jaye vese to itna easy bhi nahi hai 🥲 but fir bhi koi miracle ho jaye 🤞
          </div>

          <div className="pt-1 text-slate-200">
            Nd
            <br />
            Tu meri life ke un logon mein se hai jinke bina sab kuch thoda boring lagta hai or jinhe me kabhi khone nahi chahti 🙃🫶🏻
          </div>

          <div className="pt-1 text-slate-200">
            Thank you for always being there and for all the crazy memories we have together ✨
          </div>

          <div className="pt-1 text-slate-200">
            Orrr Bas aise hi hamesha khush reh hasta reh aur mujhe pareshan karta reh😅👉👈 😂hehe
          </div>

          <div className="pt-3 border-t border-white/10 text-pink-200 font-bold text-xs sm:text-sm">
            Stay blessed stay crazy and never change🥳🎉
            <br />
            Happy Birthday once again, my cuitee bsf 😸🎀🎂
          </div>
        </div>

      </div>

    </div>
  );
}
