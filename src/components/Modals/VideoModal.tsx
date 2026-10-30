import React from 'react';
import { X, Play, Volume2, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  useExactAssets?: boolean;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, useExactAssets = true }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-neutral-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Canvas / Player Simulation */}
        <div className="relative aspect-video w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
          <img
            src={'./images/about_bw_portrait.jpg'}
            alt="Umair Habib Video Intro"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-black/30">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Designer Story &amp; Philosophy</span>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <Play className="w-6 h-6 fill-black ml-1" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" /> 01:24
              </span>
              <span>HD 1080p</span>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="p-6 bg-neutral-900 border-t border-neutral-800">
          <h4 className="text-base font-semibold text-white">
            "Designing with Intention: How Empathy Shapes Intuitive Interfaces"
          </h4>
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            In this short introduction, I talk through my design background, working with global brands,
            and my commitment to crafting memorable digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

