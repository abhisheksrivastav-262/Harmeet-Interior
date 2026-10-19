import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Ruler, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  Hammer, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Meet Interior Kirti Nagar Delhi NCR",
  description: "Learn about Meet Interior, a dedicated interior design studio and turnkey contractor in Kirti Nagar, New Delhi focusing on quality workmanship and thoughtful planning.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Thoughtful Spatial Planning",
      desc: "Every design starts with functional zoning and ergonomic ease. We optimize every corner so that rooms feel uncluttered and naturally intuitive to inhabit."
    },
    {
      title: "Honest Material Integrity",
      desc: "We specify genuine BWP marine plywood, calibrated HDHMR boards, branded laminates, and reputable hardware (Hettich, Hafele, Blum) without compromising quality."
    },
    {
      title: "Direct Contractor Supervision",
      desc: "Our leadership oversees on-site execution directly across Delhi NCR. This guarantees accountability, crisp joint lines, level ceilings, and clean finishes."
    },
    {
      title: "Pricing Transparency",
      desc: "Clear itemized BOQ estimates. Advertised starting rates for modular kitchens, wardrobes, and false ceilings give clients full budget clarity before work begins."
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1D3A] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Heritage &bull; Kirti Nagar, Delhi</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            About Meet Interior
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A dedicated interior design and contracting studio crafting bespoke residential and commercial spaces with architectural discipline.
          </p>
        </div>
      </section>

      {/* 2. Core Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
              Our Foundation &amp; Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A] leading-snug">
              Bridging Refined Design with Flawless Contractor Execution
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Based in the renowned Timber Block of Kirti Nagar, New Delhi, Meet Interior was created to solve one of the greatest challenges homeowners face: the disconnect between visual design concepts and actual on-site craftsmanship.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate as both interior designers and licensed interior contractors. This unified approach ensures that what is conceptualized on paper is executed precisely on site—from concealed electrical conduits and plumbing slopes to seamless acrylic modular shutters and acoustic false ceilings.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our studio handles residential apartments, builder floors, independent kothis, and commercial spaces across Delhi and surrounding NCR areas with direct site oversight.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <MapPin className="w-4 h-4 text-[#E9C94A]" />
                <span>Kirti Nagar Timber Block HQ</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#E9C94A]" />
                <span>Verified Materials &amp; Hardware</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              <Image
                src="/projects/work-11.png"
                alt="Meet Interior architectural interior craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200 max-w-xs hidden sm:block">
              <span className="text-xs font-bold uppercase tracking-wider text-[#173D78] block">
                Single Point Accountability
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Zero subcontractor miscommunication. Direct coordination from blueprint to final key handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brand Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
              Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B1D3A]">
              Our Guiding Values
            </h2>
            <p className="text-xs text-slate-500">
              How we approach every room, apartment, and renovation contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-base font-bold text-[#0B1D3A]">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Work Process & Project Coordination */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
            Quality Management
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A]">
            How We Coordinate Your Project
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            From the initial on-site measurement session in Delhi NCR to the final installation of modular kitchen hardware and electrical plates, every stage is mapped on an agreed milestone schedule. We provide regular photo updates, transparent material verification, and prompt site consultations.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="px-6 py-3.5 bg-[#0B1D3A] text-[#E9C94A] font-bold text-xs uppercase tracking-wider rounded shadow transition-all hover:bg-[#173D78]"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded hover:border-[#0B1D3A] transition-all"
            >
              Book a Site Survey
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
