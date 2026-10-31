import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = './Umair_Habib_Resume.pdf';
  const avatarSrc = './images/cv_avatar.jpg';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto resume-modal-overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[680px] bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-auto flex flex-col animate-in zoom-in-95 duration-200 resume-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print px-5 py-3.5 sm:px-6 sm:py-4 border-b border-neutral-200/80 flex items-center justify-between bg-neutral-50/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
              Umair Habib — 1-Page Official Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs cursor-pointer"
              title="Open browser print preview (Save as PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <a
              href={pdfUrl}
              download="Umair_Habib_Resume.pdf"
              className="p-1.5 sm:p-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors"
              title="Direct file download (.pdf)"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close Resume Modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* 1-Page Printable CV Container */}
        <div
          id="resume-printable-card"
          className="p-6 sm:p-9 overflow-y-auto max-h-[82vh] bg-white text-neutral-900 flex flex-col justify-between select-text resume-print-sheet"
        >
          <div>
            {/* Header: Name Left + Photo Right */}
            <div className="flex items-start justify-between gap-4 pb-4 sm:pb-5 resume-print-header">
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl md:text-[25px] font-extrabold text-black tracking-tight leading-tight">
                  Umair Habib <span className="font-medium text-neutral-700">— Frontend Web Developer</span>
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                  Faisalabad, Pakistan
                </p>
              </div>

              {/* Photo */}
              <div className="shrink-0">
                <img
                  src={avatarSrc}
                  alt="Umair Habib"
                  className="w-18 h-22 sm:w-20 sm:h-24 rounded-lg object-cover object-top border border-neutral-200 shadow-2xs resume-print-avatar"
                />
              </div>
            </div>

            {/* Section 1: Professional Summary */}
            <div className="pt-1 sm:pt-2">
              <h2 className="text-xs font-bold text-black tracking-wider uppercase mb-1.5">
                PROFESSIONAL SUMMARY
              </h2>
              <div className="h-px bg-neutral-200 w-full mb-3" />
              <p className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed font-normal">
                An experienced Frontend Web Developer with a strong background in creating intuitive, responsive web interfaces, utilizing modern design workflows and WordPress to craft high-quality digital experiences.
              </p>
            </div>

            {/* Section 2: Core Competencies & Toolkit */}
            <div className="pt-4 sm:pt-5">
              <h2 className="text-xs font-bold text-black tracking-wider uppercase mb-1.5">
                CORE COMPETENCIES &amp; TOOLKIT
              </h2>
              <div className="grid grid-cols-5 border-t border-b border-neutral-200 divide-x divide-neutral-100 py-2 sm:py-2.5 text-center sm:text-left resume-print-skills">
                {['HTML', 'CSS', 'JavaScript', 'React', 'WordPress'].map((skill) => (
                  <div key={skill} className="px-1 sm:px-2 text-xs sm:text-[12.5px] font-semibold text-neutral-900 truncate">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Career Milestones */}
            <div className="pt-4 sm:pt-5">
              <h2 className="text-xs font-bold text-black tracking-wider uppercase mb-1.5">
                CAREER MILESTONES
              </h2>
              <div className="h-px bg-neutral-200 w-full mb-3 sm:mb-4" />

              <div className="space-y-3.5 sm:space-y-4 resume-print-milestones">
                {/* Milestone 1 */}
                <div>
                  <h3 className="text-xs sm:text-[13.5px] font-bold text-black leading-snug">
                    Lead Frontend Developer &amp; Designer <span className="font-semibold text-neutral-700">— Freelance (2025 – Present)</span>
                  </h3>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5 sm:space-y-1 text-xs sm:text-[12px] text-neutral-800 leading-relaxed">
                    <li>Design and build interactive, responsive web interfaces and customized WordPress solutions.</li>
                    <li>Collaborate with clients to translate wireframes and design systems into modern web experiences.</li>
                  </ul>
                </div>

                {/* Milestone 2 */}
                <div>
                  <h3 className="text-xs sm:text-[13.5px] font-bold text-black leading-snug">
                    Web Developer &amp; UI/UX Specialist <span className="font-semibold text-neutral-700">— Innovative Designs (2025 – 2026)</span>
                  </h3>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5 sm:space-y-1 text-xs sm:text-[12px] text-neutral-800 leading-relaxed">
                    <li>Crafted responsive websites and interactive user journeys with CSS, JavaScript, and React.</li>
                    <li>Maintained and customized asset-rich web layouts and design standards.</li>
                  </ul>
                </div>

                {/* Milestone 3 */}
                <div>
                  <h3 className="text-xs sm:text-[13.5px] font-bold text-black leading-snug">
                    Frontend Developer <span className="font-semibold text-neutral-700">— Visionary Creations (2025 – 2026)</span>
                  </h3>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5 sm:space-y-1 text-xs sm:text-[12px] text-neutral-800 leading-relaxed">
                    <li>Built and optimized responsive web interfaces, ensuring cross-browser compatibility and seamless UI workflows.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar matching reference */}
          <div className="mt-6 sm:mt-7 pt-3 pb-3 px-4 sm:px-6 -mx-6 sm:-mx-9 -mb-6 sm:-mb-9 bg-[#ECECEC] flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-xs sm:text-[12px] text-neutral-900 font-medium border-t border-neutral-300/80 resume-print-footer">
            <div>
              Email:{' '}
              <a
                href="mailto:umairhabibofficial087@gmail.com"
                className="font-semibold text-neutral-950 hover:underline"
              >
                umairhabibofficial087@gmail.com
              </a>
            </div>
            <div>
              WhatsApp / Phone:{' '}
              <a
                href="https://wa.me/923089429038"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-neutral-950 hover:underline"
              >
                03089429038
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
