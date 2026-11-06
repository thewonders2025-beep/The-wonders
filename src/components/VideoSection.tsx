import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Sparkles, MapPin, Film, Building2, BookOpen } from 'lucide-react';
import { VIDEOS, VideoItem } from '../data/portfolioData';

export const VideoSection: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string>(VIDEOS[0].id);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const activeVideo = VIDEOS.find((v) => v.id === activeVideoId) || VIDEOS[0];

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideoId(video.id);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const getVideoIcon = (category: string) => {
    switch (category) {
      case 'Projects':
        return <Building2 className="w-4 h-4 text-amber-400" />;
      case 'Inspiration':
        return <BookOpen className="w-4 h-4 text-amber-400" />;
      default:
        return <Film className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="videos" className="py-20 lg:py-28 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Live Video Proof & Ministry
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Watch Ministry in Motion & Sanctuary Construction
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Experience the electric atmosphere of youth impartation and watch the real-time building of the new church auditorium at Kurudu FCT Abuja in 2025.
          </p>
        </div>

        {/* Video Tabs Selector */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {VIDEOS.map((video) => {
            const isActive = video.id === activeVideoId;
            return (
              <button
                key={video.id}
                onClick={() => handleSelectVideo(video)}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 scale-[1.02]'
                    : 'bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {getVideoIcon(video.category)}
                <span className="truncate max-w-[260px] sm:max-w-none">{video.title}</span>
                {video.duration && (
                  <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-slate-950/20 text-slate-900' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {video.duration}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Video Cinema Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Player Screen */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl relative group">
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                key={activeVideo.src}
                ref={videoRef}
                src={activeVideo.src}
                className="w-full h-full object-contain"
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls
              />
            </div>

            {/* Video Meta Bar */}
            <div className="p-6 bg-slate-950 border-t border-slate-800/80 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <span className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {activeVideo.category}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400/80" />
                    {activeVideo.location}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="font-mono text-slate-400">{activeVideo.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleFullscreen}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>

          {/* Side Video Playlist Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
              All Available Videos ({VIDEOS.length})
            </div>

            <div className="space-y-3">
              {VIDEOS.map((v) => {
                const isSelected = v.id === activeVideoId;
                return (
                  <div
                    key={v.id}
                    onClick={() => handleSelectVideo(v)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-950 border-amber-400/80 shadow-md shadow-amber-400/5'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                      }`}>
                        <Play className={`w-4 h-4 ${isSelected ? 'fill-slate-950' : 'fill-slate-300'}`} />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-medium">
                          <span>{v.category}</span>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="font-mono">{v.year}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white line-clamp-2 leading-snug">
                          {v.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {v.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Special Callout Note about the 2025 Kurudu Project */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 leading-relaxed">
              <span className="font-bold block mb-1">Kurudu FCT Project Note:</span>
              "In 2025, moved to FCT Kurudu, Abuja and built an auditorium for God's people, still raising men." The on-site construction video shows the roofing sheets, structural pillars, and congregational effort.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
