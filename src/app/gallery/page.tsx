"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  X, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Maximize2,
  CheckCircle2,
  Filter
} from "lucide-react";
import { REAL_WORK_GALLERY, GalleryItem } from "@/data/galleryData";
import CtaBanner from "@/components/CtaBanner";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Kitchens",
    "Wardrobes",
    "Bedrooms",
    "Living & Walls",
    "Vanities & Baths",
    "Commercial & Carpentry"
  ];

  const filteredItems = selectedCategory === "All"
    ? REAL_WORK_GALLERY
    : REAL_WORK_GALLERY.filter((item) => item.category === selectedCategory);

  const whatsappInquiry = (title: string) => {
    const text = `Hello Meet Interior, I saw the project "${title}" in your gallery and would like a similar design for my space in Delhi NCR.`;
    return `https://wa.me/919990327474?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Hero Banner */}
      <section className="bg-[#0B1D3A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>On-Site Portfolio &bull; 27 Real Delhi Works</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Meet Interior Project Gallery
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Explore authentic photographs of our completed modular kitchens, custom wardrobes, upholstered hydraulic beds, and bespoke wall panelling across Delhi NCR.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E9C94A]" />
              <span>100% Real Site Photographs</span>
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E9C94A]" />
              <span>Zero Cropping / Full View Lightbox</span>
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E9C94A]" />
              <span>Kirti Nagar Direct Craftsmanship</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#173D78]">
            <Filter className="w-4 h-4" />
            <span>Filter by Space ({filteredItems.length} Projects)</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0B1D3A] text-[#E9C94A] shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Masonry / Fluid Responsive Photo Grid (Full Uncut Images) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 pt-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group break-inside-avoid bg-white rounded-xl overflow-hidden border border-slate-200 luxury-card-shadow luxury-card-hover transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setLightboxItem(item)}
            >
              {/* Image Container - Using natural image aspect ratio so NO CUTTING occurs */}
              <div className="relative w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      Tap to Expand Full
                    </span>
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#0B1D3A]/90 backdrop-blur-md text-[#E9C94A] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#E9C94A]/30">
                  {item.category}
                </div>
              </div>

              {/* Caption & Quick Inquire */}
              <div className="p-4 space-y-2 border-t border-slate-100">
                <h3 className="font-serif text-sm font-bold text-[#0B1D3A] group-hover:text-[#173D78] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                  <span className="text-[11px] font-semibold text-[#173D78] group-hover:underline flex items-center gap-1">
                    <span>Full View</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <a
                    href={whatsappInquiry(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11px] font-bold text-[#25D366] hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Lightbox Modal - 100% Full View Without Any Cropping */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-[#0B1D3A] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 relative text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Uncropped Full Image Container */}
            <div className="relative w-full flex items-center justify-center bg-black/60 rounded-xl overflow-hidden mb-5 p-2 max-h-[65vh]">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                width={1200}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 896px"
                className="max-h-[62vh] w-auto max-w-full object-contain mx-auto rounded-lg"
              />
            </div>

            {/* Detail Information */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E9C94A]">
                    {lightboxItem.category} &bull; Meet Interior Delhi NCR
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                    {lightboxItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={whatsappInquiry(lightboxItem.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919990327474"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E9C94A]" />
                    <span>Call Contractor</span>
                  </a>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {lightboxItem.description}
              </p>

              <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>📍 Timber Block, Kirti Nagar, New Delhi</span>
                <span>⭐ Genuine On-Site Execution</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Bottom Consultation Banner */}
      <CtaBanner serviceName="Custom Interior Project" />
    </div>
  );
}
