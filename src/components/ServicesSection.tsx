import React from 'react';
import { Church, HeartHandshake, Briefcase, Layers, ArrowRight, Check } from 'lucide-react';
import { SERVICE_PILLARS, ServicePillar } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Church':
        return <Church className="w-5 h-5 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      default:
        return <Church className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="pillars" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Pillars of Calling & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Comprehensive Ministry, Counseling & Kingdom Enterprise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Blending pastoral anointing with academic public administration and commercial acumen to serve the body of Christ and society across multiple strategic fronts.
          </p>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PILLARS.map((service, idx) => (
            <div
              key={service.title}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-serif-heading text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-2 space-y-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Focus Areas:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-amber-400 text-slate-200 hover:text-slate-950 font-medium text-xs transition-all border border-slate-800 hover:border-amber-400 cursor-pointer"
                >
                  <span>Request Consultation or Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
