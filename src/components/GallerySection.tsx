import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Camera,
  Eye,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const GallerySection: React.FC = () => {
  const { galleryImages } = usePortfolio();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Pulpit & Ministration',
    'Church Building & Projects',
    'Outreaches & Evangelism',
    'Crusades & Mass Gatherings',
    'Leadership & Honors',
  ];

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory, galleryImages]);

  // Lightbox keyboard controls (ESC, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const activeLightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              Visual Archive & Testimonies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-white tracking-tight">
              Organized Ministry Photo Gallery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore documented moments across 9 years of pastoral ministry—from fiery pulpit ministrations and street evangelism to church building construction and high-level honors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-400 font-mono tabular-nums bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 self-start md:self-auto shrink-0 flex items-center gap-2">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>{filteredImages.length} Curated Photos</span>
            </div>
          </div>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-800/80 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Photo Bento Grid - Read Only without any edit or drag/drop controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
            >
              {/* Photo Container */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Subtle Hover Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Top Corner Category Label */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-amber-400 border border-slate-800">
                    {image.category.split('&')[0]}
                  </span>
                </div>
              </div>

              {/* Photo Card Body */}
              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 truncate max-w-[170px]">
                    <MapPin className="w-3 h-3 text-amber-400/80 shrink-0" />
                    <span className="truncate">{image.location}</span>
                  </span>
                  <span className="font-mono text-slate-400">{image.year}</span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {image.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <Camera className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-sm text-slate-300 font-medium">No photos found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 text-xs text-amber-400 hover:underline"
            >
              Reset to all photos
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxImage && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar of Lightbox */}
          <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto w-full z-10 pb-2">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-amber-400 font-semibold">{activeLightboxImage.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="font-mono text-slate-400">
                Photo {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close photo lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image Viewer with Prev / Next */}
          <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-2 overflow-hidden">
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1))
              }
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md shadow-xl transition-transform hover:scale-110 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={activeLightboxImage.src}
              alt={activeLightboxImage.title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl transition-all"
            />

            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0))
              }
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md shadow-xl transition-transform hover:scale-110 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Details Bar */}
          <div className="max-w-3xl mx-auto w-full text-center space-y-1.5 p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activeLightboxImage.location}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="font-mono">{activeLightboxImage.year}</span>
            </div>
            <h3 className="text-base sm:text-lg font-serif-heading font-bold text-white">
              {activeLightboxImage.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {activeLightboxImage.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
