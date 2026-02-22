import { VideoBackground } from '../components/VideoBackground';
import { Logo } from '../components/Logo';
import { Monitor, Brain, Briefcase, Lightbulb, Shield } from 'lucide-react';

export function AnalyticsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[4%]">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />
      
      <div className="relative z-10 flex justify-between items-center w-full">
        <Logo />
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium absolute left-1/2 -translate-x-1/2">Pitch Deck</span>
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium">Page 002</span>
      </div>

      <div className="relative z-10 mt-[4%] text-center flex flex-col items-center">
        <span className="text-[clamp(14px,1.25vw,24px)] text-white/90">Transforming Data into Intelligence with</span>
        <h1 className="text-[clamp(28px,3.5vw,64px)] font-bold mt-1">AI-Powered Analytics</h1>
      </div>

      <div className="relative z-10 mt-[4%] flex-1 flex flex-col gap-[clamp(10px,1.5vw,25px)]">
        {/* Top Row */}
        <div className="flex flex-row flex-1 gap-[clamp(10px,1.5vw,27px)]">
          <Card 
            icon={<Monitor className="w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)] text-white" strokeWidth={1.5} />}
            title="Advanced Capabilities"
            description="Real-time processing, predictive analytics, and machine learning."
          />
          <Card 
            icon={<Brain className="w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)] text-white" strokeWidth={1.5} />}
            title="Smarter Decision-Making"
            description="Helping businesses unlock insights and optimize efficiency."
          />
          <Card 
            icon={<Briefcase className="w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)] text-white" strokeWidth={1.5} />}
            title="Industry Leader"
            description="Driving AI-driven data analytics innovation."
          />
        </div>
        {/* Bottom Row */}
        <div className="flex flex-row flex-1 gap-[clamp(10px,1.5vw,25px)]">
          <Card 
            icon={<Lightbulb className="w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)] text-white" strokeWidth={1.5} />}
            title="Future-Ready Solutions"
            description="Empowering organizations to stay competitive in a data-driven world."
          />
          <Card 
            icon={<Shield className="w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)] text-white" strokeWidth={1.5} />}
            title="Scalable & Secure"
            description="Ensuring seamless AI integration with robust data protection."
          />
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="liquid-glass flex-1 rounded-2xl flex flex-col justify-end p-[clamp(20px,2.5vw,48px)]">
      <div className="mb-[15%]">{icon}</div>
      <h3 className="text-[clamp(18px,1.8vw,36px)] font-bold leading-tight mb-2">{title}</h3>
      <p className="text-[clamp(12px,1vw,20px)] text-white/80 leading-snug">{description}</p>
    </div>
  );
}
