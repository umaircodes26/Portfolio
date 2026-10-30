import React from 'react';
import { X, Download, ExternalLink, Briefcase, Award, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">
              Umair Habib — Resume &amp; Experience
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Frontend Web Developer • HTML, CSS, JavaScript, React
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors"
              title="Print or Save PDF"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-neutral-700">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Product-minded UI/UX Designer with over 7 years of specialized expertise crafting intuitive
              interfaces, cohesive design systems, and award-winning digital brand identities for global
              startups and established technology firms.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Core Competencies &amp; Toolkit
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              {[
                'Design Systems',
                'Figma & FigJam',
                'Interactive Prototyping',
                'User Research & Usability Testing',
                'Information Architecture',
                'Design Tokens & React',
                '3D Creative Direction',
                'Creative Strategy'
              ].map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Key Milestones */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Milestones</span>
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-neutral-900 pl-4">
                <div className="font-semibold text-neutral-900">Creative Minds New York, USA</div>
                <div className="text-xs text-neutral-500 font-medium">Senior Product Designer • 2022 - Present</div>
                <p className="text-xs text-neutral-600 mt-1">Lead design for enterprise clients, increasing overall retention by 120%.</p>
              </div>
              <div className="border-l-2 border-neutral-300 pl-4">
                <div className="font-semibold text-neutral-900">Innovative Designs Inc, USA</div>
                <div className="text-xs text-neutral-500 font-medium">Lead UI/UX &amp; Art Direction • 2020 - 2022</div>
              </div>
              <div className="border-l-2 border-neutral-300 pl-4">
                <div className="font-semibold text-neutral-900">Visionary Creations Ltd, UK</div>
                <div className="text-xs text-neutral-500 font-medium">Interface Designer • 2018 - 2019</div>
              </div>
              <div className="border-l-2 border-neutral-300 pl-4">
                <div className="font-semibold text-neutral-900">FutureTech, Berlin, Germany</div>
                <div className="text-xs text-neutral-500 font-medium">Senior Digital Designer • 2016 - 2018</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-neutral-500">
            <span>Email: <a href="mailto:umairhabibofficial087@gmail.com" className="text-neutral-900 font-semibold hover:underline">umairhabibofficial087@gmail.com</a></span>
            <span>WhatsApp / Phone: <a href="https://wa.me/923089429038" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline">03089429038</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

