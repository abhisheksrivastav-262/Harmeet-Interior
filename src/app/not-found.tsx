import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Phone, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-[#FAF9F6]">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center mx-auto text-2xl font-serif font-black shadow-md">
          404
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
            Page Not Found
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D3A]">
            Architectural Deviation
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or service layout you are looking for has been relocated or does not exist. Let&apos;s guide you back to our flagship showroom.
          </p>
        </div>

        <div className="pt-2 space-y-3">
          <Link
            href="/"
            className="w-full py-3.5 bg-[#0B1D3A] hover:bg-[#173D78] text-[#E9C94A] font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Flagship Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-lg text-center block transition-colors"
          >
            View All Services
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Need immediate assistance? Call <a href="tel:+919990327474" className="font-bold text-[#0B1D3A] underline">+91 9990327474</a>
        </div>
      </div>
    </div>
  );
}
