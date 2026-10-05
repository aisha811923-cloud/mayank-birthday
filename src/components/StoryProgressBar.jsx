import React from 'react';

export default function StoryProgressBar({ currentSlide, totalSlides, onSelectSlide }) {
  return (
    <div className="w-full max-w-xl mx-auto px-4 pt-4 pb-2 z-30 flex items-center gap-1.5 sm:gap-2">
      {Array.from({ length: totalSlides }, (_, i) => {
        const slideNum = i + 1;
        const isCompleted = slideNum < currentSlide;
        const isActive = slideNum === currentSlide;

        return (
          <button
            key={slideNum}
            onClick={() => onSelectSlide(slideNum)}
            aria-label={`Jump to slide ${slideNum}`}
            className="flex-1 h-1.5 sm:h-2 rounded-full overflow-hidden bg-white/10 hover:bg-white/20 transition-all cursor-pointer relative"
          >
            {/* Progress Fill */}
            <div
              className={`h-full w-full rounded-full transition-all duration-300 ${
                isCompleted
                  ? 'bg-gradient-to-r from-[#FF2E93] to-[#00D2FF] opacity-80'
                  : isActive
                  ? 'bg-gradient-to-r from-[#FF2E93] via-[#E040FB] to-[#00D2FF] shadow-[0_0_12px_rgba(255,46,147,0.8)]'
                  : 'bg-transparent'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
