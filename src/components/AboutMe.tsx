import React from 'react';
import { Play, Laptop, BookOpen, Briefcase, User, Monitor } from 'lucide-react';
import { ScrollReveal } from './Common/ScrollReveal';
import { LazyImage } from './Common/LazyImage';

interface AboutMeProps {
  onOpenVideo: () => void;
  useExactAssets?: boolean;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenVideo }) => {
  const photoSrc = './images/about_bw_portrait.jpg';
  const videoThumbSrc = './images/web_dev_intern.jpg';

  const skills = [
    { name: 'HTML', color: 'text-[#E44D26]', bg: 'bg-[#E44D26]/10' },
    { name: 'CSS', color: 'text-[#264DE4]', bg: 'bg-[#264DE4]/10' },
    { name: 'JavaScript', color: 'text-[#F7DF1E]', bg: 'bg-[#F7DF1E]/15' },
    { name: 'React', color: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10' },
    { name: 'Git', color: 'text-[#F05032]', bg: 'bg-[#F05032]/10' },
    { name: 'Responsive Design', color: 'text-neutral-800', bg: 'bg-neutral-100', icon: Monitor },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-32 relative overflow-hidden bg-white/60 border-t border-neutral-100">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Main 3-Column Layout matching reference image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Left Text & Hand-drawn Arrow */}
          <ScrollReveal direction="up" delay={0.05} className="lg:col-span-4 flex flex-col justify-between h-full pt-1 space-y-6">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 text-[11px] font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <span>About Me</span>
              </div>

              {/* Heading: Hello, I'm Umair Habib */}
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-neutral-950 leading-[1.12] mb-2">
                Hello, I'm <br />
                Umair Habib
              </h2>

              {/* Subtitle: Web Developer Intern */}
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-4">
                Web Developer Intern
              </h3>
              
              {/* Paragraph Body */}
              <p className="text-neutral-800 text-xs sm:text-[14px] leading-relaxed max-w-md">
                I'm a passionate and motivated Web Developer Intern, focused on building clean, responsive, and user-friendly websites. I have a good understanding of HTML, CSS, JavaScript and I'm also learning modern web technologies to improve my skills and create better digital experiences. I enjoy solving problems, exploring new tools, and turning ideas into real projects.
              </p>
            </div>

            {/* Skills I Work With */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <span>Skills I Work With</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-200 bg-white shadow-2xs text-xs font-semibold text-neutral-900 hover:border-neutral-900 transition-colors"
                  >
                    {skill.icon ? (
                      <skill.icon className="w-3.5 h-3.5 text-neutral-800" />
                    ) : (
                      <span className={`w-2 h-2 rounded-full ${skill.bg} border border-current opacity-80`} />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hand-drawn whimsical curved arrow pointing towards the center card */}
            <div className="hidden lg:block pt-4 pl-4 relative">
              <svg
                className="w-24 h-16 text-neutral-300 transform rotate-12"
                viewBox="0 0 120 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10,65 C35,70 65,55 95,20" />
                <path d="M80,18 L95,20 L96,35" />
              </svg>
            </div>
          </ScrollReveal>

          {/* Column 2: Center 6 Months Card with Portrait Photo */}
          <ScrollReveal direction="up" delay={0.15} className="lg:col-span-4 flex justify-center w-full">
            <div className="w-full max-w-[340px] bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xl shadow-neutral-900/4 hover:shadow-2xl hover:shadow-neutral-900/8 transition-all duration-300 group">
              
              {/* Badge Icon: Briefcase */}
              <div className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-5 text-neutral-900">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* 6 Months Stat */}
              <div className="text-3xl sm:text-[42px] font-bold tracking-tight text-neutral-950 leading-none mb-2">
                6 Months
              </div>

              {/* Subtitle: Internship Experience */}
              <div className="text-sm sm:text-[15px] font-bold text-neutral-950 mb-1">
                Internship Experience
              </div>

              {/* Caption */}
              <p className="text-xs sm:text-[13px] text-neutral-800 font-normal leading-snug mb-5">
                Learning, building, and improving my web development skills.
              </p>

              {/* Photo inside card */}
              <div className="rounded-2xl overflow-hidden aspect-[1/1] bg-neutral-100 border border-neutral-200/60 relative group-hover:scale-[1.01] transition-transform">
                <LazyImage
                  src={photoSrc}
                  alt="Umair Habib"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 hover:grayscale-0 contrast-[1.04] transition-all duration-500 ease-out"
                />
              </div>

            </div>
          </ScrollReveal>

          {/* Column 3: Right Side (Video introduction + 2 Milestones) */}
          <ScrollReveal direction="up" delay={0.25} className="lg:col-span-4 flex flex-col gap-6 pt-1">
            
            {/* Top Video Preview Card: My Learning Journey */}
            <div className="bg-white rounded-2xl p-4 border border-neutral-200/80 shadow-xs flex items-start gap-4">
              <div
                onClick={onOpenVideo}
                className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-neutral-200 cursor-pointer group shadow-2xs border border-neutral-200/80 shrink-0"
              >
                <LazyImage
                  src={videoThumbSrc}
                  alt="Video Intro Thumbnail"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors group-hover:bg-black/35">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="text-xs">
                <div className="flex items-center gap-1.5 font-bold text-neutral-950 text-sm mb-1">
                  <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <User className="w-3 h-3" />
                  </div>
                  <span>My Learning Journey</span>
                </div>
                <p className="text-neutral-800 text-[12px] leading-relaxed">
                  A short introduction to my current internship and the projects I'm building. Here you can see how I'm learning, growing, and gaining real-world experience as a web developer.
                </p>
              </div>
            </div>

            {/* Two Milestone Items */}
            <div className="space-y-4 pt-2">
              
              {/* Milestone 01: Practical Experience */}
              <div className="bg-white rounded-2xl p-4 border border-neutral-200/80 shadow-xs flex items-start gap-3.5">
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-neutral-900">01</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-xs">
                    <Laptop className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950 text-sm mb-1">
                    Practical Experience
                  </h4>
                  <p className="text-xs text-neutral-800 leading-relaxed">
                    Currently working as a Web Developer Intern, gaining hands-on experience in building and improving websites.
                  </p>
                </div>
              </div>

              {/* Milestone 02: Continuous Learning */}
              <div className="bg-white rounded-2xl p-4 border border-neutral-200/80 shadow-xs flex items-start gap-3.5">
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-neutral-900">02</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950 text-sm mb-1">
                    Continuous Learning
                  </h4>
                  <p className="text-xs text-neutral-800 leading-relaxed">
                    Learning modern web technologies, improving my coding skills, and focusing on responsive website design.
                  </p>
                </div>
              </div>

            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
