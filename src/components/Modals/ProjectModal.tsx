import React from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  useExactAssets?: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  useExactAssets = true,
}) => {
  if (!project) return null;

  const imgSrc = useExactAssets ? project.imageExact : project.imageHD;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-neutral-600 hover:text-black hover:bg-white shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden shrink-0">
          <img
            src={imgSrc}
            alt={project.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider font-semibold opacity-80">
              {project.category} • {project.year}
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-1">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2.5">
              Services Delivered
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((svc) => (
                <span
                  key={svc}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />
                  <span>{svc}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-neutral-500">
              Project: <span className="font-semibold text-neutral-800">{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href="mailto:umairhabibofficial087@gmail.com?subject=Inquiry regarding project"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-black transition-colors"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

