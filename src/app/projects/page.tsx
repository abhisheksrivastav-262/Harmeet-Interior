import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Info } from "lucide-react";
import { PROJECTS } from "@/data/siteData";
import ProjectGallery from "@/components/ProjectGallery";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Interior Projects Gallery | Harmeet Interior Delhi",
  description: "Browse representative interior design and contracting projects by Harmeet Interior in Delhi NCR, featuring kitchens, wardrobes, living rooms, and ceilings.",
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

      {/* 2. Authenticity Disclosure Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 flex items-start gap-3 text-xs text-slate-600 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-[#173D78] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-800">Portfolio Transparency Notice:</strong> The images showcased in this digital catalog serve as demonstrative representations of our design capabilities, architectural concepts, and craftsmanship finishes. To view exact ongoing site works or past project references in your Delhi locality, contact our team or visit our Kirti Nagar studio.
          </p>
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
