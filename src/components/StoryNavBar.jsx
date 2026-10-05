import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export default function StoryNavBar({ currentSlide, totalSlides, onPrev, onNext, onRestart }) {
  const isFirst = currentSlide === 1;
  const isLast = currentSlide === totalSlides;

  return (
    <footer className="w-full max-w-xl mx-auto px-4 py-3 z-30 flex items-center justify-between gap-3">
      {/* Back Button */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`min-h-[48px] px-4 py-2.5 rounded-2xl flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-all ${
          isFirst
            ? 'opacity-20 cursor-not-allowed text-slate-500'
            : 'bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-200 active:scale-95 cursor-pointer shadow-md'
        }`}
      >
        <ChevronLeft className="w-4 h-4 text-sky-400" />
        <span>Back</span>
      </button>

      {/* Slide Counter Pill */}
      <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-slate-400 uppercase select-none">
        <span className="text-pink-400 font-bold">0{currentSlide}</span>
        <span className="mx-1 text-slate-600">/</span>
        <span>0{totalSlides}</span>
      </div>

      {/* Next or Restart Button */}
      {isLast ? (
        <button
          onClick={onRestart}
          className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF2E93] to-[#E040FB] hover:opacity-95 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#FF2E93]/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restart ↺</span>
        </button>
      ) : (
        <button
          onClick={onNext}
          className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF2E93] via-[#E040FB] to-[#00D2FF] hover:opacity-95 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#FF2E93]/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
