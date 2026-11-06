import React, { useState } from 'react';
import { Play, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { bioData, heroPortraits } = usePortfolio();
  const [activePortraitIndex, setActivePortraitIndex] = useState(0);

  const activePortrait = heroPortraits[activePortraitIndex] || heroPortraits[0];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed editorial metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase">
              <span>Professional Pastor</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Entrepreneur</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Counselor</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Scholar</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-bold tracking-tight text-white leading-[1.12] text-balance">
              Empowering Destinies, Building Sanctuaries & Raising Men.
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              For over <span className="font-semibold text-white">{bioData.yearsOfExperience} years</span>, {bioData.name} has combined deep spiritual authority with strategic administrative governance—building dedicated church auditoriums in <span className="text-amber-400 font-medium">Makurdi (2015)</span> and <span className="text-amber-400 font-medium">Kurudu FCT Abuja (2025)</span>, counseling individuals to discover their divine identity, and equipping leaders across borders.
            </p>

            {/* Academic Credentials Strip */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm space-y-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Academic & Administrative Foundation</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-200">
                <span className="font-medium text-white">B.Sc Public Administration (2010)</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="font-medium text-white">M.Sc Public Administration (2025)</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-amber-400/90 font-medium">MA International Relations (In View)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#videos"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Watch Ministration & Projects</span>
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 transition-colors"
              >
                <span>View Photo Gallery</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-900/60 text-slate-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
              >
                <span>Request Consultation</span>
              </button>
            </div>

            {/* Trust markers */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>9+ Years Ordained Pastoral Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Makurdi & Kurudu Sanctuary Builder</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Europe Ministry Mission in View</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container - Read-only display preserving chosen photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow & Border Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/30 to-blue-600/20 rounded-3xl blur-md opacity-80" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-300 shadow-2xl">
                {/* Main Hero Image */}
                <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-slate-950">
                  <img
                    src={activePortrait.src}
                    alt={activePortrait.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-105"
                  />

                  {/* Measured Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Floating Caption / Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                      {activePortrait.title}
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {bioData.name}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {activePortrait.subtitle}
                    </p>
                  </div>
                </div>

                {/* Quick Switcher Thumbnails */}
                <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-slate-400 pl-1">
                    Featured Moments:
                  </span>
                  <div className="flex items-center gap-2">
                    {heroPortraits.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePortraitIndex(idx)}
                        className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          activePortraitIndex === idx
                            ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/20'
                            : 'border-slate-700 opacity-60 hover:opacity-100'
                        }`}
                        title={item.title}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-amber-400 tracking-tight tabular-nums">
              {bioData.yearsOfExperience}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">
              Years in Active Ministry
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Pastoring, leading & raising men
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-amber-400 tracking-tight tabular-nums">
              2
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">
              Auditoriums Constructed
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Makurdi (2015) & Kurudu Abuja (2025)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-amber-400 tracking-tight tabular-nums">
              3
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">
              Academic Degrees
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              B.Sc (2010), M.Sc (2025), MA in View
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-amber-400 tracking-tight tabular-nums">
              Global
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">
              Missionary Reach
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Cross-border career & ministry
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
