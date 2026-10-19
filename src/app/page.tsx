import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Ruler, 
  ShieldCheck, 
  Hammer, 
  Clock, 
  MessageSquare,
  HelpCircle,
  Tag
} from "lucide-react";
import { SERVICES, PROJECTS, BUSINESS_INFO } from "@/data/siteData";
import ServiceCard from "@/components/ServiceCard";
import ProjectGallery from "@/components/ProjectGallery";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const processSteps = [
    {
      num: "01",
      title: "Consultation & Site Survey",
      desc: "We visit your Delhi property, examine room layouts, record exact architectural measurements, and understand your lifestyle requirements.",
      icon: Ruler
    },
    {
      num: "02",
      title: "Planning & Spatial Layout",
      desc: "Preparation of detailed 2D floor plans, modular kitchen configurations, wardrobe storage zoning, and false ceiling electrical schematics.",
      icon: MessageSquare
    },
    {
      num: "03",
      title: "Design & Material Curation",
      desc: "Hands-on selection of Marine ply, HDHMR, Acrylic/PU finishes, hardware fittings, sanitary fixtures, and lighting specifications.",
      icon: Sparkles
    },
    {
      num: "04",
      title: "Precision Execution",
      desc: "Direct master contractor supervision at your site in Delhi NCR. Civil alterations, concealed wiring, modular carpentry, and plastering.",
      icon: Hammer
    },
    {
      num: "05",
      title: "Quality Check & Handover",
      desc: "Rigorous final inspection of soft-close channels, paint finishes, electrical fittings, and deep handover cleaning on schedule.",
      icon: CheckCircle2
    }
  ];

  const whyChooseUsPoints = [
    {
      title: "Direct Contractor Supervision",
      desc: "No middlemen or unaccountable sub-vendors. Meet Interior's core leadership oversees your Delhi site personally from start to finish."
    },
    {
      title: "Transparent Indicative Pricing",
      desc: "Upfront starting rates—Modular Kitchens from ₹1,199/sq.ft, Wardrobes from ₹1,099/sq.ft, and False Ceilings from ₹100/sq.ft with clear itemized bills of quantities."
    },
    {
      title: "Kirti Nagar Timber Block Heritage",
      desc: "Headquartered in Asia's foremost furniture and timber hub in Kirti Nagar, giving our clients direct access to superior materials at competitive prices."
    },
    {
      title: "Comprehensive Turnkey Capabilities",
      desc: "Single-point coordination for civil works, plumbing, concealed electricals, false ceilings, modular carpentry, and surface finishes."
    }
  ];

  const faqs = [
    {
      q: "Where is Meet Interior located and which areas do you serve?",
      a: "Our office and workshop are located at A-52, W.H.-5, Timber Block, Kirti Nagar, New Delhi. We actively undertake interior design and turnkey renovation projects throughout Delhi and surrounding NCR regions."
    },
    {
      q: "What are your advertised starting rates for modular work?",
      a: "Our advertised starting prices are ₹1,199 per sq. ft. for Modular Kitchens, ₹1,099 per sq. ft. for Wardrobes & Almirahs, and ₹100 per sq. ft. for False Ceiling designs. These rates are indicative for basic specifications; final quotations are tailored following an on-site survey and material selection."
    },
    {
      q: "How does the consultation and site measurement process work?",
      a: "You can book a free consultation by calling +91 9990327474 or completing our contact form. Our site supervisor will schedule a visit to inspect the site, discuss layout options, take precise measurements, and provide a clear, itemized quote."
    },
    {
      q: "Do you offer full turnkey home interior renovation?",
      a: "Yes. In addition to modular kitchens and wardrobes, we handle complete turnkey residential renovation—including civil modifications, flooring, bathroom waterproofing & tiling, concealed electrical rewiring, wall panelling, and painting."
    }
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-[#0B1D3A] text-white overflow-hidden">
        {/* Hero Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/work-13.png"
            alt="Luxury Modern Modular Interior by Meet Interior Delhi NCR"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3A] via-[#0B1D3A]/90 to-[#0B1D3A]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-transparent to-black/50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Rates & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#E9C94A]" />
                <span>Luxury Interior Studio &bull; Kirti Nagar, Delhi</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.12]">
                Thoughtfully Designed. <br />
                <span className="text-[#E9C94A] italic font-normal">Beautifully Lived.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-xl leading-relaxed font-light">
                We engineer bespoke modular kitchens, custom wardrobes, and turnkey residential interiors crafted for contemporary Indian living across Delhi NCR.
              </p>

              {/* Advertised Pricing Highlights Bar */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 sm:p-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl max-w-lg text-left shadow-2xl">
                <div>
                  <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider block font-medium">Kitchens</span>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-amber-300">from ₹1,199</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 block">/ sq.ft*</span>
                </div>
                <div className="border-l border-white/20 pl-2.5 sm:pl-3">
                  <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider block font-medium">Wardrobes</span>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-amber-300">from ₹1,099</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 block">/ sq.ft*</span>
                </div>
                <div className="border-l border-white/20 pl-2.5 sm:pl-3">
                  <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider block font-medium">Ceilings</span>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-amber-300">from ₹100</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 block">/ sq.ft*</span>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-4 bg-gradient-to-r from-[#E9C94A] to-[#D4A92A] text-[#0B1D3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl hover:brightness-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-all text-center"
                >
                  Explore Projects
                </Link>
                <a
                  href="tel:+919990327474"
                  className="px-4 py-3 sm:py-4 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E9C94A]" />
                  <span>+91 9990327474</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400">
                *Indicative starting rates for standard specs. Final estimates shared post on-site architectural survey.
              </p>
            </div>

            {/* Right Column (Laptop/Desktop showcase card): Quick Consultation Inquiry Box */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="bg-[#0e2447]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-7 shadow-2xl space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-[#E9C94A] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Estimate &bull; Kirti Nagar Studio</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Start Your Project
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Speak directly with our senior site supervisor in Delhi NCR.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-300 font-medium">Modular Kitchens</span>
                    <span className="text-amber-300 font-bold">from ₹1,199 / sq.ft</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-300 font-medium">Custom Wardrobes</span>
                    <span className="text-amber-300 font-bold">from ₹1,099 / sq.ft</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-300 font-medium">Designer False Ceilings</span>
                    <span className="text-amber-300 font-bold">from ₹100 / sq.ft</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 bg-[#E9C94A] hover:bg-[#d8b839] text-[#0B1D3A] font-bold text-xs uppercase tracking-wider rounded-lg text-center block shadow-lg transition-transform active:scale-95"
                  >
                    Schedule In-Person Site Visit
                  </Link>
                  <a
                    href="https://wa.me/919990327474?text=Hello%20Harmeet%20Interior%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg text-center flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>📍 Timber Block, Kirti Nagar</span>
                  <span>⚡ 24hr Quick Response</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE ADVERTISED CORE SPECIALTIES (With clear pricing badges) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
            Advertised Core Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A]">
            Transparent Pricing &bull; Precision Craftsmanship
          </h2>
          <p className="text-sm text-slate-600">
            Our most requested specialized modular carpentry and ceiling solutions, backed by transparent starting rates and certified materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#173D78] hover:text-[#0B1D3A] hover:underline"
          >
            <span>Explore all 8 interior specialties (Wall Panelling, Bathrooms, Flooring, Electrical)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW & BRAND PILLARS */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Collage */}
            <div className="relative">
              <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
                <Image
                  src="/projects/work-04.png"
                  alt="Meet Interior bespoke craftsmanship in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0B1D3A] text-white p-6 rounded-xl shadow-2xl border border-white/10 max-w-xs hidden sm:block">
                <span className="text-xs text-[#E9C94A] font-bold uppercase tracking-wider block">
                  Studio Location
                </span>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Timber Block, Kirti Nagar, New Delhi — Asia&apos;s primary furniture &amp; hardware hub.
                </p>
              </div>
            </div>

            {/* Text description */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
                About Meet Interior
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A] leading-snug">
                Where Functional Engineering Meets Refined Aesthetics
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating out of Kirti Nagar, Meet Interior bridges the gap between high-concept interior design and reliable on-site contractor execution. We focus on durable, practical living spaces built with marine-grade materials, precision hardware, and timeless finishes.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you require a modern acrylic modular kitchen, space-maximizing sliding almirahs, or a complete turnkey renovation of your 2BHK/3BHK flat in Delhi NCR, we manage every detail with direct accountability.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-serif text-2xl font-bold text-[#0B1D3A]">100%</div>
                  <div className="text-xs text-slate-600 mt-1">Direct Contractor Oversight</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-serif text-2xl font-bold text-[#0B1D3A]">Kirti Nagar</div>
                  <div className="text-xs text-slate-600 mt-1">Direct Timber Hub Sourcing</div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B1D3A] hover:bg-[#173D78] text-[#E9C94A] font-bold text-xs uppercase tracking-wider rounded shadow transition-all"
                >
                  <span>Learn More About Our Approach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED PROJECTS GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
              Design Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A]">
              Selected Architectural &amp; Interior Works
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Representative examples of modular kitchens, master bedrooms, ceiling schemes, and commercial studios executed with precision.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/gallery"
              className="px-6 py-3 bg-[#E9C94A] hover:bg-[#d8b839] text-[#0B1D3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              <span>Explore All 27 Works Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <ProjectGallery projects={PROJECTS.slice(0, 6)} showFilter={false} />
      </section>

      {/* 5. 5-STEP DESIGN & EXECUTION PROCESS */}
      <section className="bg-[#0B1D3A] text-white py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E9C94A]">
              How We Work
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The 5-Step Execution Workflow
            </h2>
            <p className="text-sm text-slate-300">
              A structured, stress-free path from initial concept to your completed home interior in Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 relative flex flex-col justify-between hover:bg-white/10 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl font-bold text-[#E9C94A]">
                        {step.num}
                      </span>
                      <IconComp className="w-5 h-5 text-slate-300" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MEET INTERIOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
            Quality &bull; Reliability &bull; Transparency
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A]">
            Why Delhi Homeowners Choose Meet Interior
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsPoints.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 luxury-card-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#0B1D3A]/5 flex items-center justify-center text-[#173D78] font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-base font-bold text-[#0B1D3A]">
                {pt.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0B1D3A]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Clear, honest answers regarding pricing, process, and site consultations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-serif text-base font-bold text-[#0B1D3A] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#E9C94A] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/faq"
            className="text-xs font-bold uppercase tracking-wider text-[#173D78] hover:underline"
          >
            Read all frequently asked questions &rarr;
          </Link>
        </div>
      </section>

      {/* 8. EMBEDDED CONSULTATION INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
              Get Started Today
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1D3A] leading-snug">
              Let&apos;s Build Your Dream Space Together.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every home project begins with an honest discussion and accurate measurements. Reach out today for an indicative quotation or to schedule a site inspection in Delhi NCR.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center font-bold text-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Direct Line:</span>
                  <a href="tel:+919990327474" className="text-sm font-bold text-[#0B1D3A] hover:underline">
                    +91 9990327474 / +91 9911213974
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center font-bold text-xs">
                  <Tag className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Starting Rates:</span>
                  <span className="text-sm font-semibold text-[#0B1D3A]">
                    Kitchens ₹1,199/sq.ft &bull; Wardrobes ₹1,099/sq.ft
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 9. BOTTOM LUXURY CALL-TO-ACTION BANNER */}
      <CtaBanner />
    </div>
  );
}
