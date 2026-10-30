import React from 'react';
import { ScrollReveal } from './Common/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

interface VisionCTAProps {
  onBookCall: () => void;
}

export const VisionCTA: React.FC<VisionCTAProps> = ({ onBookCall }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Dark Floating Card Matching Reference Image Exactly */}
        <ScrollReveal direction="up" delay={0.1} className="max-w-[920px] mx-auto">
        <div className="w-full bg-[#1C1D21] rounded-[28px] sm:rounded-[36px] p-10 sm:p-16 md:p-20 text-center shadow-2xl shadow-neutral-900/10 border border-neutral-800/60 relative overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2E8F0] text-neutral-900 text-xs font-bold tracking-wider uppercase mb-7 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span>Collaboration</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tight text-white leading-[1.18] mb-5 max-w-xl">
              Got a Vision? Let's Bring<br className="hidden sm:inline" /> It to Life!
            </h2>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-lg mb-8 font-normal">
              I'm always excited to collaborate on new and meaningful projects. Whether you're looking for a fresh website or looking to revamp your current one.
            </p>

            {/* White Call To Action Button */}
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm sm:text-[15px] hover:bg-neutral-100 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-md group"
            >
              <span>Book A Call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
