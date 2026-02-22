import { VideoBackground } from '../components/VideoBackground';
import { Logo } from '../components/Logo';

export function CoverSlide() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between px-[5.2%] py-[4%]">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />
      
      <div className="relative z-10 flex justify-between items-center w-full">
        <Logo />
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium">Pitch Deck</span>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center -mt-[3%] text-center">
        <h1 className="text-[clamp(32px,5vw,96px)] tracking-[-0.02em] leading-[1.05] font-bold">
          AI-Powered Data Analytics
        </h1>
        <h2 className="text-[clamp(20px,2.5vw,48px)] text-white/90 mt-[1.5%] font-medium">
          Unlocking Business Potential
        </h2>
        <p className="text-[clamp(14px,1.25vw,24px)] text-white/75 mt-[2%]">
          By John Doe
        </p>
      </div>

      <div className="relative z-10 text-center w-full">
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/60">2024</span>
      </div>
    </div>
  );
}
