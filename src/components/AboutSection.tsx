import React from 'react';
import { GraduationCap, Award, Compass, MessageSquare, HeartHandshake, Globe, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const AboutSection: React.FC = () => {
  const { bioData } = usePortfolio();
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Profile & Calling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-white tracking-tight">
            A Shepherd's Heart, A Scholar's Mind, An Entrepreneur's Vision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Pastor Okewu Emmanuel operates at the intersection of spiritual revival, public governance, and economic empowerment. His ministry is defined by tangible impact: raising disciples who stand tall in their communities, counseling broken lives into purpose, and constructing physical sanctuaries to glorify God.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Over the past <strong className="text-white">9 years</strong>, Pastor Okewu Emmanuel has served diligently as a professional pastor, leadership coach, and entrepreneur. His ministry focuses on unveiling divine purpose in the lives of men and women, guiding them through spiritual battles, and motivating them to step boldly into the destiny ordained by God.
              </p>
              <p>
                Beyond spiritual shepherding, Pst Okewu has cultivated profound skills in <strong className="text-white">cross-border communication and interpersonal relations</strong>. His approach to ministry is holistic: teaching that true kingdom impact demands spiritual depth, intellectual preparation, and enterprise capability.
              </p>
              <p>
                With his sights now set on <strong className="text-amber-400">Europe for professional vocation and global ministry</strong>, he is poised to bring this multi-disciplinary model of kingdom leadership to international audiences, multicultural assemblies, and global institutions.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Pastoral & Apostolic Governance</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Proven ability to establish branches, construct auditoriums, shepherd large congregations, and raise autonomous ministers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Transformational Counseling</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Specialized in youth mentoring, pre-marital & marital counseling ('Spice of Love'), and deliverance ministry.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Public Sector & Policy Analysis</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Trained in public administration, institutional management, strategic planning, and civil organizational governance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Cross-Border Interpersonal Relations</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Strong intercultural diplomatic diplomacy, bridging people of diverse nationalities, backgrounds, and languages.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Degrees & Institutional Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-serif-heading font-semibold text-white">
                    Academic Qualifications
                  </h3>
                </div>
                <span className="text-xs text-amber-400/90 font-medium tracking-wider uppercase">
                  Accredited
                </span>
              </div>

              {/* Degrees Stack */}
              <div className="divide-y divide-slate-800/80">
                {bioData.degrees.map((deg, i) => (
                  <div key={deg.degree} className="py-4 first:pt-4 last:pb-0 space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{deg.degree}</h4>
                      <span className="text-xs font-mono tabular-nums text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {deg.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{deg.field}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{deg.status}</span>
                      <span aria-hidden="true">·</span>
                      <span>Verified Academic Pedigree</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote Block inside Card */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 bg-slate-900/50 -mx-6 -mb-6 p-6 rounded-b-2xl">
                <p className="italic text-xs text-slate-300 leading-relaxed font-serif-heading">
                  "{bioData.quote}"
                </p>
                <p className="text-right text-[11px] font-semibold text-amber-400 mt-2">
                  — {bioData.name}
                </p>
              </div>
            </div>

            {/* Institutional Highlight Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.29_PM__2__cd043926.jpeg"
                  alt="Honorary Armed Forces Chaplaincy Visit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                  Institutional Recognition
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  Nigerian Air Force Chaplaincy Directorate
                </h4>
                <p className="text-[11px] text-slate-400">
                  Strategic engagement on moral leadership & inter-agency pastoral chaplaincy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
