import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/data/siteData";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Interior Design & Contracting Services Delhi",
  description: "Comprehensive interior design services in Delhi NCR: Modular kitchens from ₹1,199/sq.ft, wardrobes from ₹1,099/sq.ft, false ceilings from ₹100/sq.ft, plus turnkey renovation.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1D3A] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Turnkey Capabilities</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Our Interior Design Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From specialized modular carpentry to complete turnkey home and commercial interior renovation across Delhi NCR.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-amber-300">
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Kitchens from ₹1,199 / sq.ft
            </span>
            <span className="text-slate-500">&bull;</span>
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Wardrobes from ₹1,099 / sq.ft
            </span>
            <span className="text-slate-500">&bull;</span>
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> False Ceilings from ₹100 / sq.ft
            </span>
          </div>
        </div>
      </section>

      {/* 2. All 8 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Pricing disclaimer notice */}
        <div className="mt-12 p-4 bg-amber-50 rounded-xl border border-amber-200 text-center">
          <p className="text-xs text-amber-900 leading-relaxed max-w-4xl mx-auto">
            <strong>Important Pricing Notice:</strong> {BUSINESS_INFO.pricingDisclaimer}
          </p>
        </div>
      </section>

      {/* 3. Turnkey Advantage Callout */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
            Full Service Contractor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A]">
            Looking for Complete Turnkey Flat or Kothi Interiors?
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Combine multiple services into a single coordinated turnkey contract. Save time, eliminate subcontractor clashes, and benefit from unified milestone tracking.
          </p>
          <div className="pt-2">
            <Link
              href="/services/home-interiors"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B1D3A] text-[#E9C94A] font-bold text-xs uppercase tracking-wider rounded shadow hover:bg-[#173D78] transition-all"
            >
              <span>Explore Complete Turnkey Home Interiors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
