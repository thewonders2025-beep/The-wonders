/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { VideoSection } from './components/VideoSection';
import { GallerySection } from './components/GallerySection';
import { QuotesSection } from './components/QuotesSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function PortfolioApp() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Spiritual & Destiny Counseling');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenBooking = (service?: string) => {
    if (service) setSelectedService(service);
    setBookingModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300 relative`}>
      {/* Top Bar Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About & Academic Credentials */}
        <AboutSection />

        {/* 9-Year Ministerial Trajectory (Makurdi 2015 -> New Karu 2022 -> Kurudu 2025 -> Europe) */}
        <JourneySection />

        {/* Featured Video Ministry & Auditorium Construction Video */}
        <VideoSection />

        {/* Curated Categorized Photo Gallery */}
        <GallerySection />

        {/* Spiritual Exhortation & Quotes */}
        <QuotesSection />

        {/* Pillars of Calling & Counseling */}
        <ServicesSection onSelectService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* Contact & Consultation Scheduling */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation & Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
