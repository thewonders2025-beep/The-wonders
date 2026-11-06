import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { INSPIRATIONAL_QUOTES } from '../data/portfolioData';

export const QuotesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextQuote = () => {
    setActiveIndex((prev) => (prev < INSPIRATIONAL_QUOTES.length - 1 ? prev + 1 : 0));
  };

  const prevQuote = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : INSPIRATIONAL_QUOTES.length - 1));
  };

  const current = INSPIRATIONAL_QUOTES[activeIndex];

  return (
    <section className="py-20 bg-slate-900/80 border-t border-slate-800 text-slate-100 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Insights & Teachings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
            Words of Wisdom & Exhortation
          </h2>
        </div>

        {/* Quote Card */}
        <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <Quote className="w-12 h-12 text-amber-400/20 mb-6 mx-auto sm:mx-0" />

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif-heading italic text-slate-100 leading-snug sm:leading-relaxed text-center sm:text-left">
            "{current.quote}"
          </blockquote>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-bold text-white font-serif-heading">
                {current.author}
              </div>
              <div className="text-xs text-amber-400/90 font-medium">
                {current.source}
              </div>
            </div>

            {/* Quote navigation controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-mono text-slate-500 mr-2">
                {activeIndex + 1} / {INSPIRATIONAL_QUOTES.length}
              </span>
              <button
                onClick={prevQuote}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextQuote}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
