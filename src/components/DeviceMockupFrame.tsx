import React from 'react';

interface DeviceMockupFrameProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const DeviceMockupFrame: React.FC<DeviceMockupFrameProps> = ({ children, isActive }) => {
  if (!isActive) {
    return <>{children}</>;
  }

  return (
    <div className="pt-6 pb-12 px-4 md:px-8 bg-[#EBEBED] min-h-screen">
      {/* Top Reference Text matching reference header */}
      <div className="text-center py-6">
        <span className="text-xs font-medium text-neutral-500 tracking-wide block mb-1">
          Design start here..
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
          Personal Portfolio Website
        </h1>
      </div>

      {/* Laptop Frame */}
      <div className="max-w-[1240px] mx-auto">
        {/* Screen Frame */}
        <div className="relative rounded-t-3xl border-[10px] sm:border-[12px] border-neutral-900 bg-neutral-900 shadow-2xl overflow-hidden">
          {/* Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-3.5 bg-neutral-900 rounded-b-lg z-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-700/80" />
          </div>

          {/* Inner Website Screen */}
          <div className="bg-[#F8F9FA] overflow-hidden rounded-t-xl">
            {children}
          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative -mt-1 h-3.5 sm:h-4.5 bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 rounded-b-xl shadow-lg flex items-center justify-center">
          <div className="w-24 sm:w-32 h-1 bg-neutral-600/40 rounded-full" />
        </div>
        <div className="h-1.5 max-w-[85%] mx-auto bg-neutral-900/15 rounded-b-2xl blur-xs" />
      </div>
    </div>
  );
};

