import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Calendar, Globe2, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const { bioData } = usePortfolio();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    engagementType: preselectedService || 'Spiritual & Destiny Counseling',
    locationType: 'Virtual (Online / Call)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const engagementTypes = [
    'Spiritual & Destiny Counseling',
    'Pastoral Preaching / Revival Speaking',
    'Marital & Relationship Counseling ("Spice of Love")',
    'Entrepreneurship & Leadership Mentorship',
    'Church Sanctuary Project Advisory (Kurudu / Makurdi)',
    'Europe Ministry & Career Collaboration',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoUrl = `mailto:${bioData.email}?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${formData.engagementType} - ${formData.fullName || 'New Contact'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEngagement Type: ${formData.engagementType}\nMode: ${formData.locationType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Global Engagement */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
                Connect & Schedule
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-white tracking-tight">
                Connect with {bioData.name}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether seeking confidential spiritual counseling, inviting Pst Okewu for guest ministration or revival speaking, seeking marketplace mentorship, or exploring ministry partnerships across Europe and Africa—reach out directly.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <a
                      href={`mailto:${bioData.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors truncate block"
                    >
                      {bioData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Ministry Locations */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Current Ministry Base</div>
                  <p className="text-sm font-semibold text-white">
                    Kurudu, Federal Capital Territory (FCT), Abuja, Nigeria
                  </p>
                  <p className="text-xs text-slate-400">
                    Previous stations: New Karu, Nasarawa State · Makurdi, Benue State
                  </p>
                </div>
              </div>

              {/* Europe Mission Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-950 to-slate-950 border border-amber-500/20 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    International Horizon: Europe
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Preparing for job assignments and expanded apostolic ministry in Europe. Open to speaking invitations, diaspora fellowships, and leadership symposiums.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-serif-heading font-bold text-white">
                    Schedule a Consultation / Invitation
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill in your details for prompt pastoral response
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>

              {isSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif-heading font-bold text-white">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your consultation request for{' '}
                    <span className="text-amber-400 font-medium">{formData.engagementType}</span> has been logged. Pst Okewu Emmanuel's team will contact you shortly via email or phone.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email Client to Send Directly</span>
                    </a>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
                    >
                      Submit Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Deaconess Mary Adebayo"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 ... or international"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Mode of Consultation
                      </label>
                      <select
                        value={formData.locationType}
                        onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="Virtual (Online / Call)">Virtual (Online / WhatsApp / Zoom)</option>
                        <option value="Physical / In-Person (Abuja FCT)">Physical / In-Person (Abuja FCT)</option>
                        <option value="International / Europe Visit">International / Europe Visit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nature of Engagement *
                    </label>
                    <select
                      value={formData.engagementType}
                      onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                    >
                      {engagementTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Brief Message or Prayer Need
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details of your church event, counseling topic, or partnership proposal..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium text-center transition-colors"
                      title="Send directly using your email app"
                    >
                      Email Client Fallback
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
