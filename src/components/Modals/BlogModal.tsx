import React from 'react';
import { X, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { BlogItem } from '../../data/portfolioData';

interface BlogModalProps {
  post: BlogItem | null;
  onClose: () => void;
  useExactAssets?: boolean;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, useExactAssets = true }) => {
  if (!post) return null;

  const imgSrc = useExactAssets ? post.imageExact : post.imageHD;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-neutral-600 hover:text-black hover:bg-white shadow-sm transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden shrink-0">
          <img src={imgSrc} alt={post.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full bg-white text-black text-[11px] font-semibold tracking-wide inline-block mb-2">
              {post.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">
              {post.title}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-neutral-700">
          <div className="flex items-center gap-4 text-xs text-neutral-500 pb-3 border-b border-neutral-100">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <p className="text-sm font-medium text-neutral-900 leading-relaxed italic">
            "{post.excerpt}"
          </p>

          <div className="text-sm leading-relaxed whitespace-pre-line space-y-4">
            {post.content}
          </div>

          <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-500">
              Published by D. Nova
            </span>
            <a
              href="mailto:hello@dnova.com?subject=Thoughts on article"
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-black border-b border-black pb-0.5"
            >
              <span>Share feedback or discuss</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

