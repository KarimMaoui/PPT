import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface PresentationProps {
  slides: React.ReactNode[];
}

export function Presentation({ slides }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'Escape') {
        if (document.fullscreenElement) document.exitFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleMouseMove = () => {
    setControlsVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setControlsVisible(false), 3000);
  };

  useEffect(() => {
    handleMouseMove();
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans"
      onMouseMove={handleMouseMove}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const isPast = index < currentSlide;
        
        return (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1)' : `scale(${isPast ? 0.95 : 1.05})`,
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: isActive ? 10 : 0
            }}
          >
            {slide}
          </div>
        );
      })}

      {/* Top Right Hint */}
      <div 
        className={`absolute top-[4%] right-[5.2%] z-50 text-[11px] text-white/40 tracking-wider transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        ← → Navigate · F Fullscreen
      </div>

      {/* Bottom Controls */}
      <div 
        className={`absolute bottom-[4%] left-[5.2%] right-[5.2%] z-50 flex items-center justify-between transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Counter */}
        <div className="text-[13px] text-white/50 tabular-nums font-medium w-16">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {slides.map((_, idx) => (
            <div 
              key={idx}
              className={`h-[6px] rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-[24px] bg-white/90' : 'w-[6px] bg-white/30'}`}
            />
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button onClick={prevSlide} className="p-2 rounded-full text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors">
            <ChevronRight size={20} />
          </button>
          <div className="w-[1px] h-4 bg-white/20 mx-2" />
          <button onClick={toggleFullscreen} className="p-2 rounded-full text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors">
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
