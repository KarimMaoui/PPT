import { VideoBackground } from '../components/VideoBackground';

export function QuoteSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-[5.2%]">
      <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-[70%] gap-[12px]">
        <span className="text-[clamp(14px,1.2vw,20px)] text-white/90 font-medium tracking-wide uppercase">
          Andrew Ng
        </span>
        <h1 className="text-[clamp(28px,4vw,64px)] tracking-[-0.02em] leading-[1.15] font-bold">
          “Artificial Intelligence is the new electricity.”
        </h1>
      </div>
    </div>
  );
}
