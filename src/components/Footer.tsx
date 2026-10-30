import React, { useState } from 'react';
import { ScrollReveal } from './Common/ScrollReveal';
import { Copy, Check, Github, ArrowUp } from 'lucide-react';

interface FooterProps {
  useExactAssets?: boolean;
  onToggleAssets?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [copied, setCopied] = useState(false);

  const email = 'umairhabibofficial087@gmail.com';
  const whatsappNumber = '03089429038';
  const whatsappUrl = 'https://wa.me/923089429038';
  const githubUrl = 'https://github.com/umaircodes26';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <footer className="bg-[#0C0C0E] text-white pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-24 md:pb-16 border-t border-neutral-900">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Top Section */}
        <ScrollReveal direction="up" delay={0.05}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          
          {/* Left Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-7 md:gap-9 text-xs sm:text-sm md:text-[15px] font-medium text-neutral-400 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Section: Large Email + Social Icons */}
          <div className="flex flex-col items-start md:items-end">
            {/* Email Address with Copy Icon */}
            <div className="flex items-center gap-2.5 group">
              <a
                href={`mailto:${email}`}
                className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-tight hover:text-neutral-200 transition-colors break-all"
              >
                {email}
              </a>

              {/* Copy Icon Button */}
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-md text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>

              {copied && (
                <span className="text-xs text-emerald-400 font-semibold animate-in fade-in ml-1">
                  Copied!
                </span>
              )}
            </div>

            {/* Social Icons Under Email (Right Aligned) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-3 text-neutral-400">
              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1 flex items-center gap-1.5"
                aria-label="GitHub Profile"
                title="GitHub: github.com/umaircodes26"
              >
                <Github className="w-5 h-5" />
                <span className="text-xs font-medium text-neutral-400 hover:text-white transition-colors">GitHub</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 text-neutral-400 transition-colors flex items-center gap-1.5 p-1"
                aria-label="WhatsApp: 03089429038"
                title="Chat on WhatsApp: 03089429038"
              >
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.71C8.02 10.94 8.91 12.12 9.04 12.28C9.16 12.45 10.79 14.96 13.29 16.03C15.37 16.93 15.8 16.75 16.24 16.71C16.69 16.67 17.68 16.12 17.88 15.54C18.09 14.97 18.09 14.48 18.03 14.38C17.96 14.28 17.79 14.22 17.54 14.09C17.29 13.97 16.08 13.37 15.85 13.29C15.63 13.2 15.46 13.16 15.3 13.41C15.13 13.65 14.65 14.22 14.51 14.38C14.36 14.55 14.22 14.57 13.97 14.45C13.72 14.32 12.92 14.06 11.97 13.21C11.23 12.55 10.74 11.74 10.59 11.49C10.45 11.25 10.57 11.11 10.7 10.99C10.81 10.88 10.95 10.7 11.08 10.55C11.2 10.4 11.25 10.29 11.33 10.13C11.41 9.96 11.37 9.82 11.31 9.7C11.25 9.57 10.76 8.37 10.55 7.88C10.35 7.4 10.15 7.47 9.99 7.46C9.85 7.46 9.68 7.34 9.53 7.34Z"/>
                </svg>
                <span className="text-xs font-medium text-neutral-300 hover:text-emerald-400 transition-colors">
                  {whatsappNumber}
                </span>
              </a>
            </div>
          </div>

        </div>
        </ScrollReveal>

        {/* Horizontal Divider Line */}
        <div className="border-t border-neutral-800/80 my-8 sm:my-10 md:my-14" />

        {/* Bottom Credits & Back to Top */}
        <ScrollReveal direction="up" delay={0.15}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-neutral-500">
          <div>
            © 2026 Umair Personal Portfolio. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to Top</span>
            <span className="text-sm font-semibold">↑</span>
          </button>
        </div>
        </ScrollReveal>

      </div>
    </footer>
  );
};
