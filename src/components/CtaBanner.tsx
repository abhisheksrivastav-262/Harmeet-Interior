import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  serviceName?: string;
}

export default function CtaBanner({
  title = "Ready to Transform Your Living Space in Delhi?",
  subtitle = "Schedule a complimentary site survey with Harmeet Interior. We measure your layout, discuss material options, and deliver clear indicative estimates.",
  serviceName,
}: CtaBannerProps) {
  const whatsappUrl = `https://wa.me/919990327474?text=${encodeURIComponent(
    serviceName
      ? `Hello Harmeet Interior, I would like to book a consultation for ${serviceName}. Please share next steps.`
      : "Hello Harmeet Interior, I would like to schedule a free site consultation for my home renovation."
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#0B1D3A] text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full bg-[#173D78]/50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 rounded-full bg-[#E9C94A]/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Kirti Nagar Interior Contractors</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E9C94A] to-[#D4A92A] text-[#0B1D3A] font-bold text-xs uppercase tracking-wider rounded shadow-xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Book Free Site Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+919990327474"
            className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#E9C94A]" />
            <span>Call +91 9990327474</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400 pt-2">
          Serving Delhi, Kirti Nagar, Punjabi Bagh, Janakpuri, Dwarka, Rohini, South Delhi and surrounding NCR.
        </p>
      </div>
    </section>
  );
}
