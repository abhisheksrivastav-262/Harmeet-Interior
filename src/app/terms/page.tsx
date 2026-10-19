import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileCheck, AlertCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms & Conditions | Meet Interior Delhi NCR",
  description: "Terms and conditions governing estimates, site visits, indicative pricing, and interior contracting services provided by Meet Interior.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-[#0B1D3A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Service Terms</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Governing estimates, site surveys, and contracting works by Meet Interior, New Delhi
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">1. Indicative Starting Rates &amp; Quotations</h2>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-950 space-y-1">
              <strong className="block font-bold uppercase tracking-wider text-amber-900">
                Notice Regarding Advertised Prices:
              </strong>
              <p>
                {BUSINESS_INFO.pricingDisclaimer} All rates displayed on this website (such as Modular Kitchens starting at ₹1,199/sq.ft, Wardrobes starting at ₹1,099/sq.ft, and False Ceilings starting at ₹100/sq.ft) represent entry-level specifications. They do not constitute a fixed contractual obligation until an on-site inspection and formal quotation is executed.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">2. Site Measurements &amp; Consultations</h2>
            <p>
              Site visits within Delhi and surrounding NCR regions are scheduled subject to technician availability and confirmed phone contact. Initial measurements are recorded to develop accurate 2D layouts and itemized bills of quantities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">3. Milestone Payments &amp; Execution</h2>
            <p>
              Formal contracting work commences upon mutual signing of the project agreement and receipt of the agreed mobilization advance. Execution is structured into milestone phases (e.g. carcass installation, shutter fabrication, hardware fitting, and final polish/handover).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">4. Brand References &amp; Hardware</h2>
            <p>
              Brand names cited on this website (including Anchor, Roma, Polycab, Saint-Gobain, Hettich, Hafele, etc.) denote available specification options and genuine market products that our studio procures and installs. We do not claim exclusive agency or endorsement from these manufacturers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">5. Jurisdiction</h2>
            <p>
              All contracts, agreements, and transactions with Harmeet Interior are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
