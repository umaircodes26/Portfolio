import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { ExperienceAccordion } from './components/ExperienceAccordion';
import { ConsultationBanner } from './components/ConsultationBanner';
import { LatestWorks } from './components/LatestWorks';
import { VisionCTA } from './components/VisionCTA';
import { Footer } from './components/Footer';
import { TopBannerControl } from './components/TopBannerControl';

// Modals
import { BookCallModal } from './components/Modals/BookCallModal';
import { ProjectModal } from './components/Modals/ProjectModal';
import { VideoModal } from './components/Modals/VideoModal';
import { ResumeModal } from './components/Modals/ResumeModal';
import { ProjectItem, CAROUSEL_PROJECTS, LATEST_WORKS } from './data/portfolioData';

export function App() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // View state: true = shows the presentation mockup header + Macbook frame from screenshot
  const [isMockupView, setIsMockupView] = useState(false);
  // Default to exact extracted assets to match reference 100%
  const [useExactAssets, setUseExactAssets] = useState(true);

  const handleSelectCompany = (companyName: string) => {
    const found =
      CAROUSEL_PROJECTS.find(p => p.title.toLowerCase().includes(companyName.toLowerCase())) ||
      LATEST_WORKS[0];
    setSelectedProject(found);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111111] relative selection:bg-neutral-900 selection:text-white">
      
      {/* Optional Reference Presentation Mockup Top Header */}
      {isMockupView && (
        <div className="pt-8 pb-4 text-center bg-[#ECECED] border-b border-neutral-300">
          <span className="text-xs font-normal text-neutral-500 tracking-wider block mb-1">
            Design start here..
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
            Personal Portfolio Website
          </h1>
        </div>
      )}

      {/* When Mockup View is enabled, wrap Hero in the laptop frame */}
      {isMockupView ? (
        <div className="bg-[#ECECED] pt-4 pb-12 px-4 sm:px-8">
          <div className="max-w-[1240px] mx-auto">
            {/* Screen Bezel */}
            <div className="relative rounded-t-3xl border-[10px] sm:border-[14px] border-neutral-900 bg-neutral-900 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-3.5 bg-neutral-900 rounded-b-lg z-50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700/80" />
              </div>

              {/* Inside Screen */}
              <div className="bg-[#F8F9FA] overflow-hidden rounded-t-xl relative">
                <Navbar onBookCall={() => setIsBookCallOpen(true)} />
                <Hero />
              </div>
            </div>

            {/* Laptop Base */}
            <div className="relative -mt-0.5 h-4 sm:h-5 bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 rounded-b-xl shadow-lg flex items-center justify-center">
              <div className="w-24 sm:w-32 h-1 bg-neutral-600/40 rounded-full" />
            </div>
            <div className="h-2 max-w-[85%] mx-auto bg-neutral-900/15 rounded-b-2xl blur-xs" />
          </div>
        </div>
      ) : (
        <>
          {/* Standard Responsive Web App Navbar & Hero */}
          <Navbar onBookCall={() => setIsBookCallOpen(true)} />
          <Hero />
        </>
      )}

      {/* Main Content Sections (Seamless continuation below Hero / Mockup) */}
      <main>
        {/* 2. About Me Section */}
        <AboutMe
          onOpenVideo={() => setIsVideoOpen(true)}
          useExactAssets={useExactAssets}
        />

        {/* 3. Featured Projects Section */}
        <FeaturedCarousel />

        {/* 4. Experience Accordion (Explore My Design Journey) */}
        <ExperienceAccordion
          onOpenResume={() => setIsResumeOpen(true)}
          onSelectProject={handleSelectCompany}
        />

        {/* 5. Consultation Banner (Exclusive Winter Deal Days) */}
        <ConsultationBanner
          onBookCall={() => setIsBookCallOpen(true)}
          useExactAssets={useExactAssets}
        />

        {/* 6. Latest Works Section */}
        <LatestWorks
          onSelectProject={(project) => setSelectedProject(project)}
          useExactAssets={useExactAssets}
        />

        {/* 7. Call To Action (Got a Vision?) */}
        <VisionCTA onBookCall={() => setIsBookCallOpen(true)} />
      </main>

      {/* 9. Dark Editorial Footer */}
      <Footer
        useExactAssets={useExactAssets}
        onToggleAssets={() => setUseExactAssets(!useExactAssets)}
      />

      {/* Floating Presentation Controls */}
      <TopBannerControl
        isMockupView={isMockupView}
        onToggleMockupView={() => setIsMockupView(!isMockupView)}
        useExactAssets={useExactAssets}
        onToggleAssets={() => setUseExactAssets(!useExactAssets)}
      />

      {/* Interactive Modals */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        useExactAssets={useExactAssets}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        useExactAssets={useExactAssets}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
