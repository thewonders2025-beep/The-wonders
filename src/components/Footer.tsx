import React from 'react';
import { Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { bioData } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                OE
              </span>
              <span className="text-lg font-serif-heading font-bold text-white">
                {bioData.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Pastor, Entrepreneur & Counselor with 9+ years of ministerial governance. Raising men into God's sovereign blueprint and advancing kingdom infrastructure.
            </p>
            <div className="text-xs text-amber-400/90 font-medium">
              B.Sc & M.Sc Public Administration · MA International Relations (In View)
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-amber-400 transition-colors">About & Profile</a>
              <a href="#journey" className="hover:text-amber-400 transition-colors">9-Year Journey</a>
              <a href="#videos" className="hover:text-amber-400 transition-colors">Ministration Videos</a>
              <a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Archive</a>
              <a href="#pillars" className="hover:text-amber-400 transition-colors">Impact Pillars</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact / Book</a>
            </div>
          </div>

          {/* Contact & Europe Note */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-1.5 text-xs">
              <a
                href={`mailto:${bioData.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{bioData.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Kurudu, Abuja · Europe Mission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pst Okewu Emmanuel. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="italic text-slate-400">"To God be all the glory."</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
