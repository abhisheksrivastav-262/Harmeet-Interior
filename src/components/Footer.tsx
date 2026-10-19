import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-lg bg-white p-1.5 shadow-md border border-[#E9C94A]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src="/a.png"
                    alt="Harmeet Interior Logo"
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold tracking-wider text-white block uppercase leading-none">
                    Harmeet <span className="text-[#E9C94A]">Interior</span>
                  </span>
                  <span className="text-[10px] text-slate-400 tracking-widest uppercase block mt-1">
                    Kirti Nagar, New Delhi
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed italic">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialist interior contracting and renovation studio serving homes, apartments, villas, and commercial offices across Delhi NCR with premium craftsmanship.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-300/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#E9C94A]" />
              <span>Direct execution &bull; No outsourced uncertainty</span>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div>
            <h4 className="text-white font-serif text-base tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E9C94A]"></span>
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link 
                    href={`/services/${s.slug}`}
                    className="hover:text-[#E9C94A] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    {s.startingPrice && (
                      <span className="text-[10px] text-amber-300/70 group-hover:text-amber-300">
                        {s.startingPrice}/sq.ft
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Transparency */}
          <div>
            <h4 className="text-white font-serif text-base tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E9C94A]"></span>
              Navigation &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#E9C94A] transition-colors">Flagship Studio Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E9C94A] transition-colors">About Harmeet Interior</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#E9C94A] transition-colors">Completed Work &amp; Gallery</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#E9C94A] transition-colors">Transparent Starting Rates</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#E9C94A] transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E9C94A] transition-colors">Book Free Site Survey</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E9C94A] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#E9C94A] transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Details */}
          <div>
            <h4 className="text-white font-serif text-base tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E9C94A]"></span>
              Workshop &amp; Office
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E9C94A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E9C94A] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Consultation:</span>
                    <a href="tel:+919990327474" className="text-white hover:text-amber-300 font-medium">
                      +91 9990327474
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Office Desk:</span>
                    <a href="tel:+919911213974" className="text-white hover:text-amber-300 font-medium">
                      +91 9911213974
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E9C94A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Email Address:</span>
                  <a href={BUSINESS_INFO.emailHref} className="text-white hover:text-amber-300 font-medium break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E9C94A] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pricing disclaimer bar */}
        <div className="py-6 border-b border-white/10 text-center">
          <p className="text-[11px] text-slate-400 max-w-4xl mx-auto leading-relaxed">
            <span className="text-amber-300 font-semibold uppercase tracking-wider">Pricing Transparency Notice:</span> {BUSINESS_INFO.pricingDisclaimer}
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Harmeet Interior. All rights reserved. Registered Interior Contractor in Kirti Nagar, New Delhi.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a 
              href="https://wa.me/919990327474?text=Hello%20Harmeet%20Interior%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E9C94A] hover:underline flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
