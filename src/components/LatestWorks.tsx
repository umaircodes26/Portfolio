import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { LATEST_WORKS, ProjectItem } from '../data/portfolioData';

interface LatestWorksProps {
  onSelectProject: (project: ProjectItem) => void;
  useExactAssets?: boolean;
}

export const LatestWorks: React.FC<LatestWorksProps> = ({
  onSelectProject,
  useExactAssets = true,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Design', 'UI/UX', 'Branding'];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Header centered */}
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200/70 text-neutral-800 text-[11px] font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-neutral-950">
            Latest Works
          </h2>
        </div>

        {/* 3 Project Cards in Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LATEST_WORKS.map((project, idx) => {
            const imgSrc = useExactAssets ? project.imageExact : project.imageHD;
            const hasCenterArrow = idx === 1; // Center card in reference has the center circle button

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="cursor-pointer group flex flex-col"
              >
                {/* Image Showcase Card */}
                <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-200 shadow-sm border border-neutral-200/60 mb-3.5">
                  <img
                    src={imgSrc}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Floating Action Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      hasCenterArrow
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-900/90 text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project title and link matching reference */}
                <div className="flex items-center justify-between text-xs sm:text-[13.5px] font-medium text-neutral-800 pt-1">
                  <span className="group-hover:text-black transition-colors truncate font-semibold">
                    {project.title}
                  </span>
                  <a
                    href={project.liveUrl || '#'}
                    target={project.liveUrl ? '_blank' : undefined}
                    rel={project.liveUrl ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (project.liveUrl) {
                        e.stopPropagation();
                      }
                    }}
                    className="flex items-center gap-1 text-neutral-500 font-normal shrink-0 ml-2 group-hover:text-black transition-colors"
                  >
                    <span>—</span>
                    <span>{project.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom link: "Check out more -> View More" */}
        <div className="text-center pt-12 md:pt-16">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 hover:text-black transition-colors"
          >
            <span>Check out more</span>
            <span className="flex items-center gap-1 font-semibold text-neutral-900">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span>View More</span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

