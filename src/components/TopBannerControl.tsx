import React from 'react';
import { Laptop, Sparkles, Image as ImageIcon } from 'lucide-react';

interface TopBannerControlProps {
  isMockupView: boolean;
  onToggleMockupView: () => void;
  useExactAssets: boolean;
  onToggleAssets: () => void;
}

export const TopBannerControl: React.FC<TopBannerControlProps> = ({
  isMockupView,
  onToggleMockupView,
  useExactAssets,
  onToggleAssets,
}) => {
  return (
    <aside
      aria-label="Presentation controls"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-neutral-900/95 text-white shadow-2xl backdrop-blur-md border border-neutral-700/60 text-xs animate-in slide-in-from-bottom-4"
    >
      {/* Mockup Frame Toggle */}
      <button
        onClick={onToggleMockupView}
        className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-all ${
          isMockupView
            ? 'bg-white text-black shadow-xs font-semibold'
            : 'text-neutral-300 hover:text-white'
        }`}
        title="Toggle between Laptop Mockup Frame and Full View"
      >
        <Laptop className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">
          {isMockupView ? 'Mockup Frame' : 'Full Website'}
        </span>
      </button>

      {/* Asset Mode Toggle */}
      <button
        onClick={onToggleAssets}
        className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-all ${
          useExactAssets
            ? 'bg-neutral-800 text-neutral-200'
            : 'bg-emerald-600 text-white font-semibold shadow-xs'
        }`}
        title="Toggle between Reference Extracted Assets and HD Enhanced Assets"
      >
        {useExactAssets ? <ImageIcon className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
        <span className="hidden sm:inline">
          {useExactAssets ? 'Exact Match' : 'HD Mode'}
        </span>
      </button>
    </aside>
  );
};
