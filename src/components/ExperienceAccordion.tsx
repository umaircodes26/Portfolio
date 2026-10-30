import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './Common/ScrollReveal';
import { LazyImage } from './Common/LazyImage';
import { ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';

interface ExperienceAccordionProps {
  onOpenResume?: () => void;
  onSelectProject?: (title: string) => void;
}

export const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  onOpenResume,
  onSelectProject,
}) => {
  // Default expanded item is exp-1 (Web Developer) matching reference screenshot
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');
  const [activeLightboxImage, setActiveLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightboxImage(null);
    };
    if (activeLightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxImage]);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Section Top Header */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200/70 text-neutral-800 text-[11px] font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span>Experience</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-neutral-950 leading-tight">
                  Explore My Development Journey
                </h2>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between items-start lg:items-end">
                <p className="text-xs sm:text-[14px] md:text-[14.5px] text-neutral-600 leading-relaxed max-w-xl text-left lg:text-left">
                  Dedicated to crafting responsive, high-performance web experiences. Over my journey, I have collaborated on diverse design and development tasks, continually learning and refining my frontend UI/UX skills.
                </p>
                
                <button
                  onClick={onOpenResume}
                  className="mt-4 group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-neutral-900 hover:text-black border-b border-black pb-0.5 transition-colors"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience Rows */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80">
            {EXPERIENCES.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="py-6 sm:py-7 transition-colors hover:bg-neutral-100/50 cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  {/* Main Row Header */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center">
                    
                    {/* Left: Company & Date */}
                    <div className="md:col-span-4">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 tracking-tight">
                        {item.company}{item.location ? `, ${item.location}` : ''}
                      </h3>
                      <div className="text-xs text-neutral-500 font-medium mt-0.5">
                        • {item.period}
                      </div>
                    </div>

                    {/* Middle: Role & Focus */}
                    <div className="md:col-span-5">
                      <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed">
                        {item.role}
                      </p>
                    </div>

                    {/* Right: Tag Pills */}
                    <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-1.5 flex-wrap md:max-w-[210px] md:ml-auto">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            isExpanded
                              ? 'bg-neutral-900 text-white'
                              : 'bg-neutral-100 border border-neutral-200/80 text-neutral-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Expanded Content View (Matches Reference Screenshot) */}
                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-neutral-200/60 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        
                        {/* Left: 3 Project Image Thumbnails */}
                        <div className="lg:col-span-6 flex gap-3.5 overflow-x-auto pb-2">
                          {item.thumbnails && item.thumbnails.map((thumb, idx) => (
                            <div
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveLightboxImage({
                                  src: thumb,
                                  title: `${item.company} — Image ${idx + 1}`
                                });
                              }}
                              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-neutral-200 shrink-0 border border-neutral-300 shadow-2xs hover:scale-105 transition-all duration-300 cursor-zoom-in group/thumb"
                              title="Click to view image in full screen"
                            >
                              <LazyImage
                                src={thumb}
                                alt={`${item.company} project thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover grayscale group-hover/thumb:grayscale-0 transition-all duration-500 ease-out"
                              />
                              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white/95 text-black p-1.5 rounded-full shadow-md">
                                  <ZoomIn className="w-3.5 h-3.5 text-black" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Right: Narrative Description & Dark Circular Arrow Button */}
                        <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                          <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                            {item.description}
                          </p>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onSelectProject) onSelectProject(item.company);
                            }}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 hover:bg-black transition-transform hover:scale-105 shadow-sm"
                            aria-label={`View ${item.company} case study`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal for Large Image View */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white">
              <h3 className="text-base sm:text-lg font-bold text-black">
                {activeLightboxImage.title}
              </h3>
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white flex items-center justify-center text-black transition-colors"
                aria-label="Close image"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="p-4 sm:p-6 bg-neutral-100 flex items-center justify-center max-h-[75vh] overflow-auto">
              <LazyImage
                src={activeLightboxImage.src}
                alt={activeLightboxImage.title}
                className="max-h-[68vh] w-auto max-w-full rounded-2xl object-contain shadow-md bg-white border border-neutral-200"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 bg-white border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-medium">
                Click anywhere outside or press ESC to close
              </span>
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="px-4 py-1.5 bg-black text-white rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
