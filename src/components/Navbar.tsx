"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { SERVICES } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Gallery", href: "/gallery" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#0B1D3A] text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kirti Nagar&apos;s Trusted Interior Contractor &amp; Designer</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">
              Kitchens from ₹1,199/sq.ft &bull; Wardrobes from ₹1,099/sq.ft &bull; Ceilings from ₹100/sq.ft
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Call us directly:</span>
            <a 
              href="tel:+919990327474" 
              className="text-white hover:text-amber-300 transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              +91 9990327474
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1D3A]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5"
            : "bg-[#0B1D3A] py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-lg bg-white p-1.5 shadow-md border border-[#E9C94A]/30 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/m.png"
                alt="Meet Interior Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white block uppercase leading-none">
                Meet <span className="text-[#E9C94A]">Interior</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 tracking-widest uppercase block mt-1">
                Kirti Nagar, Delhi NCR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                        isActive
                          ? "text-[#E9C94A] bg-white/5"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                        servicesDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#0e2447] border border-white/10 rounded-lg shadow-2xl p-2.5 backdrop-blur-xl">
                        <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300/80 border-b border-white/5 mb-1.5">
                          Interior Services
                        </div>
                        <div className="grid grid-cols-1 gap-1 max-h-[360px] overflow-y-auto">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={handleLinkClick}
                              className="group/item flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition-all text-xs font-medium"
                            >
                              <div>
                                <div className="group-hover/item:text-[#E9C94A] transition-colors font-medium">
                                  {s.title}
                                </div>
                                {s.startingPrice && (
                                  <div className="text-[10px] text-amber-200/70">
                                    From {s.startingPrice} / sq. ft.
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="w-3 h-3 text-slate-400 group-hover/item:translate-x-1 group-hover/item:text-[#E9C94A] transition-all" />
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/5 px-2">
                          <Link
                            href="/services"
                            onClick={handleLinkClick}
                            className="text-xs text-amber-300 hover:underline flex items-center justify-between font-medium"
                          >
                            <span>View All 8 Specialties</span>
                            <span>&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#E9C94A] bg-white/5 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919990327474"
              className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E9C94A]" />
              <span>9990327474</span>
            </a>
            <Link
              href="/contact"
              className="px-4 py-2.5 bg-gradient-to-r from-[#E9C94A] to-[#D4A92A] text-[#0B1D3A] text-xs font-bold uppercase tracking-wider rounded shadow-md hover:brightness-105 active:scale-95 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e2447] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-white/5 pb-2">
                    <div className="flex items-center justify-between py-2 text-slate-200 font-semibold text-base">
                      <Link href={link.href} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    </div>
                    <div className="pl-3 space-y-1 mt-1 border-l-2 border-[#E9C94A]/30">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-sm text-slate-300 hover:text-[#E9C94A]"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-medium text-slate-200 hover:text-[#E9C94A] border-b border-white/5"
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 space-y-3">
              <a
                href="tel:+919990327474"
                className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white flex items-center justify-center gap-2 rounded text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#E9C94A]" />
                <span>Call +91 9990327474</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#E9C94A] text-[#0B1D3A] text-center block rounded font-bold uppercase tracking-wider text-xs shadow-md"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
