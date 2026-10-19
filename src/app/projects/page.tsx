import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Info } from "lucide-react";
import { PROJECTS } from "@/data/siteData";
import ProjectGallery from "@/components/ProjectGallery";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Interior Projects Gallery | Meet Interior Delhi NCR",
  description: "Browse representative interior design and contracting projects by Meet Interior in Delhi NCR, featuring kitchens, wardrobes, living rooms, and ceilings.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1D3A] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural Showcase</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Projects &amp; Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore curated design layouts and execution details spanning residential living rooms, modular kitchens, custom wardrobes, and ceilings.
          </p>
        </div>
      </section>

      {/* 2. Real Work Gallery Banner Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-gradient-to-r from-[#0B1D3A] to-[#173D78] text-white rounded-2xl border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E9C94A] block">
              ⭐ New: Complete On-Site Photo Catalog
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Looking for 100% Real Site Photographs?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              We have published 27 authentic uncropped photographs of our modular kitchens, custom beds, and wall panelling directly from Delhi sites.
            </p>
          </div>
          <Link
            href="/gallery"
            className="px-6 py-3.5 bg-[#E9C94A] hover:bg-[#d8b839] text-[#0B1D3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-transform active:scale-95 shrink-0"
          >
            Open 27 Real Works Gallery &rarr;
          </Link>
        </div>
      </div>

      {/* 3. Main Filterable Projects Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectGallery projects={PROJECTS} showFilter={true} />
      </section>

      <CtaBanner />
    </div>
  );
}
