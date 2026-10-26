"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";

interface VideoSlide {
  src: string;
  title: string;
  subtitle?: string;
}

interface VideoSliderProps {
  videos: VideoSlide[];
}

export default function VideoSlider({ videos }: VideoSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(videos.map(() => false));
  const [showPlayOverlay, setShowPlayOverlay] = useState<boolean[]>(videos.map(() => true));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause all videos except the one at `exceptIndex`
  const pauseAllExcept = useCallback((exceptIndex: number) => {
    videoRefs.current.forEach((vid, idx) => {
      if (vid && idx !== exceptIndex) {
        vid.pause();
        vid.currentTime = 0;
      }
    });
    setIsPlaying(prev => prev.map((_, idx) => idx === exceptIndex ? prev[idx] : false));
    setShowPlayOverlay(prev => prev.map((_, idx) => idx === exceptIndex ? prev[idx] : true));
  }, []);

  const goTo = useCallback((index: number) => {
    pauseAllExcept(index);
    setCurrent(index);
  }, [pauseAllExcept]);

  const goPrev = () => {
    const newIdx = (current - 1 + videos.length) % videos.length;
    goTo(newIdx);
  };

  const goNext = () => {
    const newIdx = (current + 1) % videos.length;
    goTo(newIdx);
  };

  const handlePlayPause = (idx: number) => {
    const vid = videoRefs.current[idx];
    if (!vid) return;
    if (vid.paused) {
      pauseAllExcept(idx);
      vid.play().then(() => {
        setIsPlaying(prev => prev.map((v, i) => i === idx ? true : v));
        setShowPlayOverlay(prev => prev.map((v, i) => i === idx ? false : v));
      }).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(prev => prev.map((v, i) => i === idx ? false : v));
      setShowPlayOverlay(prev => prev.map((v, i) => i === idx ? true : v));
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    videoRefs.current.forEach(vid => {
      if (vid) vid.muted = newMuted;
    });
  };

  // Handle video ended
  const handleVideoEnded = (idx: number) => {
    setIsPlaying(prev => prev.map((v, i) => i === idx ? false : v));
    setShowPlayOverlay(prev => prev.map((v, i) => i === idx ? true : v));
  };

  // Sync mute state when video ref changes
  useEffect(() => {
    videoRefs.current.forEach(vid => {
      if (vid) vid.muted = isMuted;
    });
  }, [isMuted]);

  return (
    <div className="relative w-full">
      {/* Slides Container */}
      <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="relative w-full shrink-0"
              style={{ minWidth: "100%" }}
            >
              {/* Video Element */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  src={video.src}
                  className="w-full h-full object-contain"
                  playsInline
                  preload="metadata"
                  muted={isMuted}
                  onEnded={() => handleVideoEnded(idx)}
                  onPlay={() => {
                    setIsPlaying(prev => prev.map((v, i) => i === idx ? true : v));
                    setShowPlayOverlay(prev => prev.map((v, i) => i === idx ? false : v));
                  }}
                  onPause={() => {
                    setIsPlaying(prev => prev.map((v, i) => i === idx ? false : v));
                    setShowPlayOverlay(prev => prev.map((v, i) => i === idx ? true : v));
                  }}
                  controls={isPlaying[idx]}
                  controlsList="nodownload"
                />

                {/* Play Overlay — shown when video is paused */}
                {showPlayOverlay[idx] && (
                  <button
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 hover:bg-black/40 transition-all group cursor-pointer z-10"
                    onClick={() => handlePlayPause(idx)}
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
                    </div>
                    <div className="mt-4 text-center px-4">
                      <p className="text-white font-serif font-bold text-base sm:text-lg drop-shadow-lg">
                        {video.title}
                      </p>
                      {video.subtitle && (
                        <p className="text-amber-300 text-xs sm:text-sm mt-1 font-medium drop-shadow">
                          {video.subtitle}
                        </p>
                      )}
                    </div>
                  </button>
                )}

                {/* Caption bar — shown when playing */}
                {isPlaying[idx] && (
                  <div className="absolute bottom-14 left-0 right-0 px-4 pointer-events-none z-10">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                      <p className="text-white text-xs sm:text-sm font-semibold">
                        {video.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 transition-all"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>

        {/* Slide Counter */}
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
          {current + 1} / {videos.length}
        </div>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 hover:scale-110 transition-all"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 hover:scale-110 transition-all"
          aria-label="Next video"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all rounded-full cursor-pointer ${
              idx === current
                ? "w-7 h-2.5 bg-[#E9C94A] shadow-md"
                : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to video ${idx + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {videos.map((video, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`shrink-0 relative w-20 sm:w-24 h-14 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              idx === current
                ? "border-[#E9C94A] scale-105 shadow-lg"
                : "border-transparent hover:border-white/40 opacity-60 hover:opacity-80"
            }`}
            aria-label={`Thumbnail ${idx + 1}`}
          >
            <video
              src={video.src}
              className="w-full h-full object-cover pointer-events-none"
              muted
              preload="metadata"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play className="w-4 h-4 text-white fill-white opacity-80" />
            </div>
            <span className="absolute bottom-0.5 right-1 text-white text-[9px] font-bold drop-shadow">
              {idx + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
