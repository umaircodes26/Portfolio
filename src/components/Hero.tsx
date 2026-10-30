import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // User's B&W portrait — white glow overlay hover effect
  const portraitSrc = '/images/hero_portrait_main.jpg';

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-neutral-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (Hero Content matching reference image 2 exactly) */}
          <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1 pt-4 lg:pt-0">
            
            <div className="space-y-5 animate-in fade-in duration-300">
              {/* 1. Pill Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 text-xs sm:text-[13px] font-semibold tracking-wide shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-neutral-900" />
                  <span>Web Developer (Intern)</span>
                </div>
              </div>

              {/* 2. Main Heading: Hi, I'm Umair Habib (All Black) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold tracking-tight text-neutral-950 leading-[1.12]">
                Hi, I'm Umair Habib
              </h1>

              {/* 3. Subtitle: Web Developer | Building Better Web Experiences */}
              <h2 className="text-lg sm:text-xl md:text-[23px] font-semibold text-neutral-800 tracking-tight pt-1">
                Web Developer | Building Better Web Experiences
              </h2>

              {/* 4. Paragraph Body Description */}
              <p className="text-sm sm:text-base md:text-[16.5px] text-[#5D6578] leading-relaxed max-w-xl font-normal pt-1">
                I'm a passionate web developer and currently working as an intern. I love creating responsive and user-friendly websites using HTML, CSS, JavaScript and modern tools.
              </p>
            </div>

            {/* Bottom Scroll Down Indicator */}
            <div className="pt-12 sm:pt-16 md:pt-20">
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-neutral-500 hover:text-black transition-colors"
              >
                <span className="tracking-wide uppercase text-[11px] font-semibold text-neutral-400 group-hover:text-neutral-800 transition-colors">
                  Scroll Down
                </span>
                <span className="p-1 rounded-full border border-neutral-300 group-hover:border-black group-hover:translate-y-1 transition-all duration-300">
                  <ArrowDown className="w-3 h-3 text-neutral-700 group-hover:text-black" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column (Hero Portrait) */}
          <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2 relative">
            <div className="relative w-full max-w-[440px] lg:max-w-[480px]">
              {/* Subtle ambient border */}
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-200/50 to-transparent rounded-3xl transform rotate-1 scale-[1.015] -z-10 blur-[1px]" />
              
              {/* Portrait Container with User's Photo */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/5 bg-[#ECECEC] aspect-[3/4]">
                <img
                  src={portraitSrc}
                  alt="Umair Habib - Web Developer & Designer"
                  className="w-full h-full object-cover object-top brightness-[0.95] contrast-[1.05]"
                />

                {/* Subtle vignette fade at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/18 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating status pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-neutral-200/80 shadow-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-neutral-800">
                    Available for Web Dev &amp; Projects
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 ml-auto sm:ml-1" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
