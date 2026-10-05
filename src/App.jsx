import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SparkleCanvas from './components/SparkleCanvas';
import StoryProgressBar from './components/StoryProgressBar';
import StoryNavBar from './components/StoryNavBar';
import Slide1Entrance from './components/Slide1Entrance';
import Slide2Cake from './components/Slide2Cake';
import Slide3Tokens from './components/Slide3Tokens';
import Slide4Letter from './components/Slide4Letter';
import Slide5Finale from './components/Slide5Finale';

const TOTAL_SLIDES = 5;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 340, damping: 32 },
      opacity: { duration: 0.24 },
      scale: { duration: 0.24 },
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.97,
    transition: {
      x: { type: 'spring', stiffness: 340, damping: 32 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export default function App() {
  const [[currentSlide, direction], setSlideState] = useState([1, 0]);
  const touchStartXRef = useRef(null);

  const goToSlide = (newSlide) => {
    if (newSlide < 1 || newSlide > TOTAL_SLIDES || newSlide === currentSlide) return;
    const dir = newSlide > currentSlide ? 1 : -1;
    setSlideState([newSlide, dir]);
  };

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES) {
      setSlideState([currentSlide + 1, 1]);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setSlideState([currentSlide - 1, -1]);
    }
  };

  const restartStory = () => {
    setSlideState([1, -1]);
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Touch swipe gesture navigation
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextSlide(); // Swiped left -> Next
      } else {
        prevSlide(); // Swiped right -> Prev
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 h-[100dvh] w-screen bg-[#080A15] text-[#FFFFFF] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Ambient Neon Floating Background Particles */}
      <SparkleCanvas />

      {/* Soft Ambient Blurs in Hot Pink & Electric Cyan */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#FF2E93]/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Top Segmented Story Progress Bar (Instagram style) */}
      <header className="w-full shrink-0 z-30">
        <StoryProgressBar
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onSelectSlide={goToSlide}
        />
        <div className="w-full max-w-xl mx-auto px-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400">
          <span className="text-pink-400 font-bold">MAYANK • CHAPTER 16</span>
          <span className="text-cyan-400 uppercase">STORY DECK</span>
        </div>
      </header>

      {/* Main Slide Deck Area (with directional slide transitions) */}
      <main className="relative flex-1 w-full max-w-xl mx-auto flex items-center justify-center overflow-hidden px-2 z-20">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {currentSlide === 1 && <Slide1Entrance onNext={nextSlide} />}
            {currentSlide === 2 && <Slide2Cake onNext={nextSlide} />}
            {currentSlide === 3 && <Slide3Tokens onNext={nextSlide} />}
            {currentSlide === 4 && <Slide4Letter onNext={nextSlide} />}
            {currentSlide === 5 && <Slide5Finale onRestart={restartStory} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Fixed Navigation Bar */}
      <StoryNavBar
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrev={prevSlide}
        onNext={nextSlide}
        onRestart={restartStory}
      />
    </div>
  );
}
