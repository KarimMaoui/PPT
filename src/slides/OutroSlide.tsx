import { VideoBackground } from '../components/VideoBackground';
import { Logo } from '../components/Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

export function OutroSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[4%]">
      <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />
      
      <div className="relative z-10 flex justify-between items-center w-full">
        <Logo />
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium absolute left-1/2 -translate-x-1/2">Pitch Deck</span>
        <span className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium">Page 020</span>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[80%]">
        <h1 className="text-[clamp(28px,4vw,64px)] tracking-[-0.02em] leading-[1.05] font-bold whitespace-pre-line">
          {"Contact Information &\nFinal Call to Action"}
        </h1>
        
        <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 max-w-[38%] mt-[3%] leading-[1.5]">
          Ready to unlock the true potential of your data? Connect with our team of experts today and begin your journey into the future of AI-powered analytics.
        </p>

        <div className="flex flex-col gap-[clamp(12px,1.5vw,19px)] mt-[3%]">
          <ContactItem 
            icon={<InstagramIcon className="w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)] text-white" />} 
            text="Instagram.com/grapho" 
          />
          <ContactItem 
            icon={<FacebookIcon className="w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)] text-white" />} 
            text="Facebook.com/grapho" 
          />
          <ContactItem 
            icon={<Phone className="w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)] text-white" strokeWidth={1.5} />} 
            text="+1 (415) 987-6543" 
          />
          <ContactItem 
            icon={<Mail className="w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)] text-white" strokeWidth={1.5} />} 
            text="contact@optimalai.com" 
          />
          <ContactItem 
            icon={<MapPin className="w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)] text-white" strokeWidth={1.5} />} 
            text="Headquarters: San Francisco, CA, USA" 
          />
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <span className="text-[clamp(13px,1.2vw,20px)] text-white/90 font-medium">{text}</span>
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}
