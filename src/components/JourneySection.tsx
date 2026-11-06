import React, { useState } from 'react';
import { Building, Flame, Hammer, Globe, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import { MILESTONES } from '../data/portfolioData';
import ordinationImage from '../assets/images/regenerated_image_1793977284166.jpg';

export const JourneySection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestoneImages = [
    {
      src: ordinationImage,
      caption: 'Ordination & Consecration by Dr. Paul Enenche (Makurdi Foundation)',
      alt: 'Makurdi Ministry Ordination'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.16_PM__2__cb510dc8.jpeg',
      caption: 'Dunamis New Karu Central & Spice of Love Conferences',
      alt: 'New Karu Ministry Era'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.33_PM_43ed8e2c.jpeg',
      caption: 'Kurudu FCT Sanctuary Construction & Consecration 2025',
      alt: 'Kurudu Abuja Auditorium Project'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.10_PM_1ad9d9cc.jpeg',
      caption: 'Global Horizon: Transnational Mission & Professional Career in Europe',
      alt: 'Europe Mission Assignment'
    }
  ];

  return (
    <section id="journey" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Chronological Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-white tracking-tight">
            A 9-Year Legacy of Building Sanctuaries & Raising Men
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From planting in Makurdi to city-wide revival in New Karu and raising a new sanctuary in FCT Kurudu, Abuja—witness a ministerial journey forged through faith, physical infrastructure, and spiritual multiplication.
          </p>
        </div>

        {/* Milestone Steps Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MILESTONES.map((item, index) => {
            const isSelected = selectedMilestone === index;
            return (
              <button
                key={item.year}
                onClick={() => setSelectedMilestone(index)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400/80 shadow-lg shadow-amber-500/10 scale-[1.02]'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-800 text-amber-400'
                  }`}>
                    {item.year}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-slate-700'}`} />
                </div>
                <div className="text-sm font-bold text-white line-clamp-1">{item.title}</div>
                <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 line-clamp-1">
                  <MapPin className="w-3 h-3 text-amber-400/80 shrink-0" />
                  <span>{item.location}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Deep Dive Card */}
        {(() => {
          const current = MILESTONES[selectedMilestone];
          const img = milestoneImages[selectedMilestone];
          return (
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual side */}
                <div className="lg:col-span-5 relative group">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2.5 italic">
                    {img.caption}
                  </p>
                </div>

                {/* Details side */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400">
                    <span className="font-mono text-sm font-bold bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                      {current.year}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {current.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-2 space-y-2.5">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Key Accomplishments & Impact:
                    </div>
                    <ul className="space-y-2">
                      {current.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nav between milestones */}
                  <div className="pt-4 flex items-center justify-between border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedMilestone((prev) => (prev > 0 ? prev - 1 : MILESTONES.length - 1))}
                      className="text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      ← Previous Phase
                    </button>
                    <span className="text-xs font-mono text-slate-500">
                      Phase {selectedMilestone + 1} of {MILESTONES.length}
                    </span>
                    <button
                      onClick={() => setSelectedMilestone((prev) => (prev < MILESTONES.length - 1 ? prev + 1 : 0))}
                      className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      Next Phase →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
