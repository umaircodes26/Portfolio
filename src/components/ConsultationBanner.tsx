import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './Common/ScrollReveal';
import { LazyImage } from './Common/LazyImage';

interface ConsultationBannerProps {
  onBookCall: () => void;
  useExactAssets?: boolean;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  onBookCall,
}) => {
  // 1. Original Default Background (Smooth Teal & Purple Abstract Waves)
  const originalBg = './images/banner_bg.jpg';
  // 2. Hover State Background (Dark Blurred Car Backdrop matching reference image 1)
  const hoverCarBg = './images/car_banner_hover.jpg';

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-950 text-white min-h-[240px] sm:min-h-[260px] md:min-h-[300px] flex items-center justify-center p-6 sm:p-10 md:p-14 text-center shadow-xl shadow-neutral-900/10 group cursor-pointer transition-all duration-500">
          
          {/* Background image layers with smooth hover cross-fade */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Layer 1: Original background (visible by default, fades out on hover) */}
            <LazyImage
              src={originalBg}
              alt="Exclusive consultation banner backdrop"
              className="absolute inset-0 w-full h-full object-cover opacity-85 transition-opacity duration-700 ease-out group-hover:opacity-0"
            />

            {/* Layer 2: Dark blurred car background (hidden by default, fades in smoothly on hover) */}
            <LazyImage
              src={hoverCarBg}
              alt="Dark blurred sports car backdrop"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Radial Vignette for clean editorial readability */}
            <div className="absolute inset-0 bg-radial from-neutral-900/20 via-neutral-950/65 to-neutral-950/90 pointer-events-none" />
          </div>

          {/* Content centered */}
          <ScrollReveal direction="up" delay={0.1} className="relative z-10 max-w-2xl mx-auto space-y-4">
            
            {/* Kicker */}
            <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-400">
              Limited Time Offer • Elevate Your Project
            </span>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
              Exclusive Winter Deal Days: Get a Free Consultation!
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-lg mx-auto">
              Take advantage of this limited-time opportunity to elevate your digital presence with our expert team. 
              Let's discuss your vision today.
            </p>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookCall();
                }}
                className="group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-all duration-200 hover:shadow-lg shadow-sm"
              >
                <span>Book A Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
