import { VideoBackground } from '../components/VideoBackground';
import { Logo } from '../components/Logo';

export function IntroSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[4%]">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
      
      <div className="relative z-10 flex justify-between items-center w-full">
        <Logo />
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium absolute left-1/2 -translate-x-1/2">Pitch Deck</span>
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium">Page 001</span>
      </div>

      <div className="relative z-10 mt-[8%] flex-1">
        <h1 className="text-[clamp(28px,3.5vw,64px)] tracking-[-0.02em] leading-[1.05] font-bold whitespace-pre-line">
          {"The Rise of AI\nin Data Analytics"}
        </h1>

        <div className="flex flex-row mt-[3.5%] gap-[4%] w-full">
          {/* Column 1 */}
          <div className="flex-[0_0_22%] flex flex-col">
            <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 mb-4">
              The AI analytics market is experiencing unprecedented growth, scaling rapidly from $150B as organizations adapt.
            </p>
            <div className="flex items-baseline gap-2 mt-auto">
              <span className="text-[clamp(28px,3.5vw,64px)] font-bold">$300B</span>
              <span className="text-[clamp(13px,1vw,20px)] text-white/80">2027</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-[0_0_38%]">
            <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 leading-[1.5]">
              Businesses across all sectors are rapidly adopting AI-driven analysis to stay competitive. The transition from traditional reactive analytics to proactive, predictive models allows leadership teams to identify invisible trends, automate complex data pipelines, and make split-second strategic decisions with unprecedented accuracy. This paradigm shift fundamentally changes how data is valued.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-[0_0_20%] flex flex-col">
            <span className="text-[clamp(28px,3.5vw,64px)] font-bold">25–40%</span>
            <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 mb-4">Efficiency gain in data processing.</p>
            
            {/* Mini SVG Graph */}
            <div className="mt-auto w-full h-[60px] relative">
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="graphGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#D2FF55" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#D2FF55" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,35 Q25,35 50,20 T100,5" fill="url(#graphGradient)" />
                <path d="M0,35 Q25,35 50,20 T100,5" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="0" cy="35" r="3" fill="#B750B2" stroke="white" strokeWidth="1.5" />
                <circle cx="100" cy="5" r="3" fill="#B750B2" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full flex justify-end">
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/60">The Rise of AI</span>
      </div>
    </div>
  );
}
