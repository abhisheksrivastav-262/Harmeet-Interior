import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy | Harmeet Interior Delhi",
  description: "Privacy policy for Harmeet Interior. Explains how client contact information and project requirements are handled with strict confidentiality.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-[#0B1D3A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" />
            <span>Client Confidentiality</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Last Updated: October 2026 &bull; Harmeet Interior, Kirti Nagar, New Delhi
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">1. Overview</h2>
            <p>
              Harmeet Interior (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates from A-52, W.H.-5, Timber Block, Kirti Nagar, New Delhi. We are committed to protecting the privacy of individuals who interact with our website, request consultations, or submit property inquiry details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">2. Information We Collect</h2>
            <p>When you fill out an inquiry form or communicate with us, we collect:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Your full name and contact telephone numbers (mobile and landline).</li>
              <li>Your email address (if voluntarily provided).</li>
              <li>Property details: layout type (1BHK/2BHK/3BHK), square footage, and neighborhood in Delhi NCR.</li>
              <li>Scope preferences: modular kitchens, wardrobes, false ceilings, or turnkey interiors.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">3. How We Use Your Information</h2>
            <p>Your details are used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Coordinate architectural site measurements and consultations.</li>
              <li>Generate and deliver personalized Bill of Quantities (BOQ) estimates.</li>
              <li>Answer customer questions through phone calls, SMS, or WhatsApp.</li>
              <li>Provide project progress updates during active renovation contracts.</li>
            </ul>
            <p className="font-semibold text-[#0B1D3A]">
              We do not sell, rent, lease, or trade your personal information to third-party advertisers or telemarketing databases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">4. Third-Party Links &amp; WhatsApp Handoff</h2>
            <p>
              Our website provides convenient direct links to WhatsApp (Meta Platforms) and telephonic dialers. When you click these buttons, communication transitions to WhatsApp, which operates under its own end-to-end encryption and privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0B1D3A]">5. Contact Information</h2>
            <p>
              For questions regarding this privacy policy or to request removal of your contact details from our records, contact our Kirti Nagar office:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1 text-xs">
              <div><strong>Harmeet Interior</strong></div>
              <div>A-52, W.H.-5, Timber Block, Kirti Nagar, New Delhi, India</div>
              <div>Phone: +91 9990327474 / +91 9911213974</div>
              <div>Email: harmeet.singh8311@gmail.com</div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
