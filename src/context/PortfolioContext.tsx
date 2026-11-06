import React, { createContext, useContext, useState } from 'react';
import {
  BIO_DATA as DEFAULT_BIO_DATA,
  GALLERY_IMAGES as DEFAULT_GALLERY_IMAGES,
  MILESTONES as DEFAULT_MILESTONES,
  GalleryImage,
  Milestone
} from '../data/portfolioData';

export interface HeroPortrait {
  src: string;
  title: string;
  subtitle: string;
}

const DEFAULT_HERO_PORTRAITS: HeroPortrait[] = [
  {
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.36.41_PM_9e452391.jpeg',
    title: 'Apostolic Pulpit Ministration',
    subtitle: 'Dunamis New Karu & Regional Conventions',
  },
  {
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.10_PM_1ad9d9cc.jpeg',
    title: 'Executive & Pastoral Leadership',
    subtitle: '9+ Years Counseling & Mentorship',
  },
  {
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_2.37.14_PM_f9e06f67.jpeg',
    title: 'Mass Crusade Ministry',
    subtitle: 'Kaduna 2024 Healing & Deliverance',
  },
];

interface PortfolioContextType {
  bioData: typeof DEFAULT_BIO_DATA;
  galleryImages: GalleryImage[];
  heroPortraits: HeroPortrait[];
  milestones: Milestone[];
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  BIO: 'pst_okewu_bio_data_v2',
  GALLERY: 'pst_okewu_gallery_v2',
  HERO: 'pst_okewu_hero_v2',
  MILESTONES: 'pst_okewu_milestones_v2',
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Restore reading directly from the user's saved customized state
  const [bioData] = useState<typeof DEFAULT_BIO_DATA>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BIO);
      return saved ? JSON.parse(saved) : DEFAULT_BIO_DATA;
    } catch {
      return DEFAULT_BIO_DATA;
    }
  });

  const [galleryImages] = useState<GalleryImage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return saved ? JSON.parse(saved) : DEFAULT_GALLERY_IMAGES;
    } catch {
      return DEFAULT_GALLERY_IMAGES;
    }
  });

  const [heroPortraits] = useState<HeroPortrait[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HERO);
      return saved ? JSON.parse(saved) : DEFAULT_HERO_PORTRAITS;
    } catch {
      return DEFAULT_HERO_PORTRAITS;
    }
  });

  const [milestones] = useState<Milestone[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MILESTONES);
      return saved ? JSON.parse(saved) : DEFAULT_MILESTONES;
    } catch {
      return DEFAULT_MILESTONES;
    }
  });

  return (
    <PortfolioContext.Provider
      value={{
        bioData,
        galleryImages,
        heroPortraits,
        milestones,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
