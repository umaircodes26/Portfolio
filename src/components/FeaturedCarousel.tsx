import React, { useRef, useState, useEffect } from 'react';
import { ScrollReveal } from './Common/ScrollReveal';
import { LazyImage } from './Common/LazyImage';
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn, Star, Heart } from 'lucide-react';

/* ─────────────────────────────────────────────
   Image Lightbox Modal
───────────────────────────────────────────── */
interface LightboxData {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

/* ─────────────────────────────────────────────
   Mini Website Mockup Previews (JSX components)
───────────────────────────────────────────── */

/** Card 1 — Personal Portfolio mini-site mockup */
const PortfolioMockup: React.FC<{ onOpenImage: (data: LightboxData) => void }> = ({ onOpenImage }) => {
  const imgSrc = './images/web_dev_intern.jpg';
  const imgData: LightboxData = {
    src: imgSrc,
    alt: 'Web Developer Coding Workspace',
    title: 'Personal Portfolio Website',
    subtitle: 'Web Developer Intern — Live Coding & Development Workspace',
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-between overflow-hidden select-none p-3 md:p-4">
      {/* Top Navbar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200">
        <span className="text-xs md:text-sm font-extrabold text-black tracking-tight">UH</span>
        <div className="flex gap-2.5 sm:gap-3.5">
          {['Home', 'About', 'Projects'].map((l) => (
            <span key={l} className="text-[10px] md:text-[11px] font-medium text-black">
              {l}
            </span>
          ))}
        </div>
        <div className="bg-black text-white rounded-full px-2.5 py-1 text-[9px] md:text-[10px] font-semibold">
          Get In Touch
        </div>
      </div>

      {/* Hero Body: Text Left + Image Right */}
      <div className="flex items-center justify-between gap-3 pt-3 flex-1">
        {/* Left Text */}
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-xs md:text-sm font-bold text-black leading-tight">Hi, I'm</p>
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-black leading-tight mt-0.5">
            Umair Habib
          </h4>
          <p className="text-[10px] md:text-[11px] font-semibold text-black mt-1">
            Web Developer Intern
          </p>
          <p className="text-[9px] md:text-[10.5px] text-black leading-relaxed mt-1 font-normal">
            I build clean and responsive websites with modern technologies.
          </p>
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="bg-black text-white rounded-md px-2.5 py-1 text-[9px] md:text-[10px] font-semibold">
              View My Projects
            </div>
            <div className="border border-black rounded-md px-2.5 py-1 text-[9px] md:text-[10px] font-semibold text-black">
              Contact Me
            </div>
          </div>
        </div>

        {/* Right Clickable Image */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onOpenImage(imgData);
          }}
          className="relative w-24 h-18 sm:w-32 sm:h-22 md:w-38 md:h-28 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-300 shadow-sm shrink-0 cursor-zoom-in group/img transition-transform duration-300 hover:scale-105"
          title="Click to open image in full view"
        >
          <LazyImage
            src={imgSrc}
            alt={imgData.alt}
            className="w-full h-full object-cover object-center transition-all duration-500 group-hover/img:brightness-105"
          />
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white text-black p-1.5 rounded-full shadow-lg">
              <ZoomIn className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Card 2 — Business Landing Page mini mockup */
const BusinessMockup: React.FC<{ onOpenImage: (data: LightboxData) => void }> = ({ onOpenImage }) => {
  const imgSrc = './images/ft_business.png';
  const imgData: LightboxData = {
    src: imgSrc,
    alt: 'Business Landing Page Laptop Workspace',
    title: 'Business Landing Page',
    subtitle: 'Modern workspace and business growth solution',
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-white flex flex-col justify-between overflow-hidden select-none p-3 md:p-4">
      {/* Top Navbar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200">
        <span className="text-xs md:text-sm font-extrabold text-black">BrandCo</span>
        <div className="flex gap-2.5 sm:gap-3.5">
          {['Home', 'About', 'Services'].map((l) => (
            <span key={l} className="text-[10px] md:text-[11px] font-medium text-black">
              {l}
            </span>
          ))}
        </div>
        <div className="bg-black text-white rounded-full px-2.5 py-1 text-[9px] md:text-[10px] font-semibold">
          Get Started
        </div>
      </div>

      {/* Hero Body: Text Left + Image Right */}
      <div className="flex items-center justify-between gap-3 pt-3 flex-1">
        {/* Left Text */}
        <div className="flex-1 min-w-0 pr-1">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-black leading-tight">
            Build Your<br />Dream Business
          </h4>
          <p className="text-[9px] md:text-[10.5px] text-black leading-relaxed mt-1.5 font-normal">
            Modern solutions for your business growth. Simple, fast and reliable.
          </p>
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="bg-black text-white rounded-md px-2.5 py-1 text-[9px] md:text-[10px] font-semibold">
              Learn More
            </div>
            <div className="border border-black rounded-md px-2.5 py-1 text-[9px] md:text-[10px] font-semibold text-black">
              Get Started
            </div>
          </div>
        </div>

        {/* Right Clickable Image */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onOpenImage(imgData);
          }}
          className="relative w-24 h-18 sm:w-32 sm:h-22 md:w-38 md:h-28 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-300 shadow-sm shrink-0 cursor-zoom-in group/img transition-transform duration-300 hover:scale-105"
          title="Click to open image in full view"
        >
          <LazyImage
            src={imgSrc}
            alt={imgData.alt}
            className="w-full h-full object-cover object-center transition-all duration-500 group-hover/img:brightness-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/90 text-black p-1.5 rounded-full shadow-md">
              <ZoomIn className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Card 3 — Product Card Design mini mockup */
const ProductMockup: React.FC<{ onOpenImage: (data: LightboxData) => void }> = ({ onOpenImage }) => {
  const imgSrc = './images/ft_product.jpg';
  const imgData: LightboxData = {
    src: imgSrc,
    alt: 'Smartwatch Product Card Design',
    title: 'Product Card Design',
    subtitle: 'Modern e-commerce product showcase',
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-between overflow-hidden select-none p-3 md:p-4">
      {/* Top Navbar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200">
        <span className="text-xs md:text-sm font-extrabold text-black">ShopZone</span>
        <div className="flex gap-2.5 sm:gap-3.5">
          {['Home', 'Shop', 'About', 'Contact'].map((l) => (
            <span key={l} className="text-[10px] md:text-[11px] font-medium text-black">
              {l}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-black">
          <span className="text-[10px] font-semibold">🔍</span>
          <span className="text-[10px] font-semibold">🛒</span>
        </div>
      </div>

      {/* Product Body: Image Left + Info Right */}
      <div className="flex items-center justify-between gap-3 pt-3 flex-1">
        {/* Left Clickable Image */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onOpenImage(imgData);
          }}
          className="relative w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-300 shadow-sm shrink-0 cursor-zoom-in group/img transition-transform duration-300 hover:scale-105 flex items-center justify-center"
          title="Click to open image in full view"
        >
          <LazyImage
            src={imgSrc}
            alt={imgData.alt}
            className="w-full h-full object-cover object-center transition-all duration-500 group-hover/img:brightness-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/90 text-black p-1.5 rounded-full shadow-md">
              <ZoomIn className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex-1 min-w-0 pl-1">
          <h4 className="text-sm sm:text-base md:text-[17px] font-extrabold text-black leading-tight">
            Wireless Headphones
          </h4>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-sm md:text-base font-extrabold text-black">$49.99</span>
            <span className="text-xs text-neutral-500 line-through font-medium">$69.99</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex text-amber-500 text-[10px]">★★★★★</div>
            <span className="text-[10px] md:text-[11px] font-semibold text-black">(4.5)</span>
          </div>
          <p className="text-[9px] md:text-[10.5px] text-black leading-relaxed mt-1 font-normal">
            High quality wireless headphones with crystal clear sound and long battery life.
          </p>
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="bg-black text-white rounded-md px-3 py-1 text-[9px] md:text-[10px] font-semibold flex-1 text-center">
              Add to Cart
            </div>
            <div className="w-6 h-6 rounded-md border border-black flex items-center justify-center text-xs text-black">
              ♡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Project Data
───────────────────────────────────────────── */
interface FeaturedProject {
  id: number;
  renderMockup: (onOpenImage: (data: LightboxData) => void) => React.ReactNode;
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
  link: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 1,
    renderMockup: (onOpen) => <PortfolioMockup onOpenImage={onOpen} />,
    imageSrc: './images/web_dev_intern.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    title: 'Personal Portfolio Website',
    description: 'My own portfolio website to showcase my skills, projects and learning journey.',
    link: '#',
  },
  {
    id: 2,
    renderMockup: (onOpen) => <BusinessMockup onOpenImage={onOpen} />,
    imageSrc: './images/ft_business.png',
    tags: ['HTML', 'CSS'],
    title: 'Business Landing Page',
    description: 'A clean and responsive business landing page with hero section, services and footer.',
    link: '#',
  },
  {
    id: 3,
    renderMockup: (onOpen) => <ProductMockup onOpenImage={onOpen} />,
    imageSrc: './images/ft_product.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    title: 'Product Card Design',
    description: 'A simple and responsive product card with image, name, price and add to cart button.',
    link: '#',
  },
];

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export const FeaturedCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Lightbox Modal state
  const [activeLightbox, setActiveLightbox] = useState<LightboxData | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightbox(null);
    };
    if (activeLightbox) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeLightbox]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -440 : 440, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  return (
    <section className="py-14 md:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* ── Header Row ── */}
        <ScrollReveal direction="up" delay={0.05}>
        <div className="flex items-start justify-between mb-8 md:mb-12 gap-4">
          <div className="flex-1">
            {/* Top pill label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-black inline-block" />
              <span className="text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-black">
                Featured Projects
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight tracking-tight mb-3">
              My Learning Projects
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl leading-relaxed font-medium">
              Here are some of the websites and projects I have built while learning
              and improving my web development skills.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2.5 pt-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        </ScrollReveal>

        {/* ── Cards Carousel ── */}
        <ScrollReveal direction="up" delay={0.15}>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="min-w-[270px] xs:min-w-[300px] sm:min-w-[360px] md:min-w-0 md:flex-1 group flex flex-col"
            >
              {/* Card Container */}
              <div className="bg-white rounded-3xl overflow-hidden flex flex-col h-full
                border border-neutral-300
                shadow-[0_4px_24px_rgba(0,0,0,0.08)]
                hover:shadow-[0_12px_44px_rgba(0,0,0,0.16)]
                transition-all duration-300">

                {/* Top Mockup Area (Larger height & clickable images) */}
                <div className="relative h-[240px] sm:h-[260px] md:h-[280px] bg-neutral-50 border-b border-neutral-200 overflow-hidden">
                  {project.renderMockup(setActiveLightbox)}
                </div>

                {/* Bottom Text Content Area */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Tech Tags */}
                    <div className="flex items-center gap-1.5 flex-wrap mb-3.5">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300">
                        {project.tags.map((tag, i) => (
                          <React.Fragment key={tag}>
                            <span className="text-xs sm:text-sm font-bold text-black tracking-wide">
                              {tag}
                            </span>
                            {i < project.tags.length - 1 && (
                              <span className="text-black font-bold text-xs">•</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-black leading-snug mb-2.5">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-black leading-relaxed font-normal mb-5">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-black hover:gap-3 transition-all duration-200 group/link"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>

                    {/* View Image Large Button */}
                    <button
                      onClick={() =>
                        setActiveLightbox({
                          src: project.imageSrc,
                          alt: project.title,
                          title: project.title,
                          subtitle: project.description,
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-black border border-neutral-300 rounded-full px-3 py-1.5 hover:bg-black hover:text-white transition-colors"
                      title="Open image in large view"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>View Image</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* ── View All Projects Button ── */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-black bg-white text-sm sm:text-base font-extrabold text-black hover:bg-black hover:text-white transition-all duration-200 group/btn shadow-sm">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>

      </div>

      {/* ── Lightbox Modal for Large Image View ── */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-black">
                  {activeLightbox.title}
                </h3>
                {activeLightbox.subtitle && (
                  <p className="text-xs sm:text-sm text-black font-medium mt-0.5">
                    {activeLightbox.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="w-10 h-10 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center text-black transition-colors"
                aria-label="Close full view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="p-4 sm:p-6 bg-neutral-100 flex items-center justify-center max-h-[75vh] overflow-auto">
              <LazyImage
                src={activeLightbox.src}
                alt={activeLightbox.alt}
                className="max-h-[68vh] w-auto max-w-full rounded-2xl object-contain shadow-lg border border-neutral-200 bg-white"
              />
            </div>

            {/* Bottom Modal Footer */}
            <div className="px-6 py-3.5 bg-white border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs sm:text-sm text-black font-bold">
                Click anywhere outside or press ESC to close
              </span>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-4 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-bold hover:bg-neutral-800 transition-colors"
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
