"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export default function FloatingActions() {
  const defaultWhatsAppText = encodeURIComponent(
    "Hello Harmeet Interior, I would like to enquire about interior design services for my space."
  );

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        {/* Click to Call */}
        <a
          href="tel:+919990327474"
          className="group flex items-center justify-end"
          aria-label="Call Harmeet Interior"
        >
          <span className="mr-3 px-3 py-1.5 bg-[#0B1D3A] text-white text-xs font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/10 whitespace-nowrap">
            Call +91 9990327474
          </span>
          <div className="w-13 h-13 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center shadow-xl border border-white/20 hover:scale-105 active:scale-95 transition-all p-3">
            <Phone className="w-5 h-5 text-[#E9C94A]" />
          </div>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/919990327474?text=${defaultWhatsAppText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end"
          aria-label="Chat on WhatsApp with Harmeet Interior"
        >
          <span className="mr-3 px-3 py-1.5 bg-[#25D366] text-white text-xs font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <div className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all p-3">
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1D3A]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center gap-3">
        <a
          href="tel:+919990327474"
          className="flex-1 py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded flex items-center justify-center gap-2 transition-colors border border-white/15"
        >
          <Phone className="w-4 h-4 text-[#E9C94A]" />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/919990327474?text=${defaultWhatsAppText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded flex items-center justify-center gap-2 shadow-md transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
