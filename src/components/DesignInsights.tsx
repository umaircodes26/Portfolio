import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS, BlogItem } from '../data/portfolioData';

interface DesignInsightsProps {
  onSelectBlog: (post: BlogItem) => void;
  useExactAssets?: boolean;
}

export const DesignInsights: React.FC<DesignInsightsProps> = ({
  onSelectBlog,
  useExactAssets = true,
}) => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Section Header Centered */}
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200/70 text-neutral-800 text-[11px] font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>Blog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-neutral-950">
            Design Insights &amp; Trends
          </h2>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => {
            const imgSrc = useExactAssets ? post.imageExact : post.imageHD;

            return (
              <article
                key={post.id}
                onClick={() => onSelectBlog(post)}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl p-5 border border-neutral-200/80 shadow-xs hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300"
              >
                {/* 3D Render Image Container */}
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 mb-5">
                  <img
                    src={imgSrc}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Metadata Row: Dark Pill + Date */}
                <div className="flex items-center gap-3 mb-3.5">
                  <span className="px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-semibold tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium tracking-tight">
                    • {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-[17px] font-semibold text-neutral-900 leading-snug group-hover:text-neutral-700 transition-colors">
                  {post.title}
                </h3>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

