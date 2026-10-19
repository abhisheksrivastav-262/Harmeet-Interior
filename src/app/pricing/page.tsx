import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  HelpCircle 
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Interior Design Starting Prices Delhi | Harmeet Interior",
  description: "Transparent indicative starting prices for Harmeet Interior in Delhi: Modular kitchens starting at ₹1,199/sq.ft, wardrobes at ₹1,099/sq.ft, false ceilings at ₹100/sq.ft.",
};

export default function PricingPage() {
  const pricingCards = [
    {
      title: "Modular Kitchens",
      slug: "modular-kitchens",
      price: "₹1,199",
      unit: "per sq. ft.",
      disclaimer: "Indicative starting price for standard modular carcass and laminate finish. Premium acrylic, PU, and specialized corner hardware are quoted separately.",
      includes: [
        "IS:710 Marine Grade BWP / HDHMR carcass framework",
        "High-durability anti-scratch laminate shutter options",
        "Soft-close telescopic drawer channels and hinges",
        "Custom cutlery and basic wire basket organizers",
        "Precision chimney ducting and ventilation planning"
      ],
      whatsappMsg: "Hello Harmeet Interior, I want an indicative estimate for a modular kitchen starting at ₹1,199/sq.ft."
    },
    {
      title: "Wardrobes & Almirahs",
      slug: "wardrobes",
      price: "₹1,099",
      unit: "per sq. ft.",
      disclaimer: "Indicative starting price for standard hinged or sliding wardrobe structure. Internal sensor lighting, mirrors, and PU finishes quoted based on specs.",
      includes: [
        "Calibrated commercial / BWP ply structural carcass",
        "Premium Sunmica laminate finish inside and out",
        "Heavy-duty soft-close hinges or smooth sliding tracks",
        "Dedicated hanger rails, deep drawers, and shelving",
        "Integrated lock provisions for personal security"
      ],
      whatsappMsg: "Hello Harmeet Interior, I want an indicative estimate for custom wardrobes starting at ₹1,099/sq.ft."
    },
    {
      title: "False Ceiling Designs",
      slug: "false-ceiling",
      price: "₹100",
      unit: "per sq. ft.",
      disclaimer: "Indicative starting price for standard Gyproc/POP board and galvanized channel framework. Light fixtures, coves, and profile lights quoted based on layout.",
      includes: [
        "Saint-Gobain Gyproc 12.5mm boards or genuine POP",
        "Rust-resistant Galvanized Iron (GI) perimeter grid",
        "Level laser alignment for perfectly flat ceilings",
        "Pre-cut openings for spotlights and linear profiles",
        "Smooth taped jointing ready for primer and emulsion"
      ],
      whatsappMsg: "Hello Harmeet Interior, I want an indicative estimate for false ceilings starting at ₹100/sq.ft."
    }
  ];

  const pricingFaqs = [
    {
      q: "Why are these prices called 'starting indicative rates'?",
      a: "Interior work is completely bespoke. The final cost of any modular kitchen or wardrobe depends on dimensions, site dampness, structural conditions, shutter finishes (Laminate vs. Acrylic vs. PU lacquer), and hardware grade (Standard vs. Soft-close vs. Imported German fittings)."
    },
    {
      q: "Does Harmeet Interior charge for site measurement in Delhi?",
      a: "No. We provide an initial site visit and architectural measurement survey in Delhi NCR to inspect your room dimensions and understand your exact requirements before submitting a detailed line-item bill of quantities."
    },
    {
      q: "How do you calculate square footage for a modular kitchen or wardrobe?",
      a: "For wardrobes, square footage is calculated by multiplying outer width by height (width in ft × height in ft). For modular kitchens, base cabinets and wall cabinets are measured based on running length, depth, and vertical shutter area according to standard architectural conventions."
    },
    {
      q: "Are there any hidden costs added during execution?",
      a: "Never. We provide an itemized written estimate detailing carcass board brands, finishes, and hardware fittings. Any scope changes requested by the homeowner during execution are discussed and agreed upon prior to installation."
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1D3A] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest &bull; Upfront &bull; No Hidden Surprises</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Transparent Starting Rates
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We believe in complete pricing transparency. Review our advertised starting rates for core modular carpentry and ceiling services in Delhi.
          </p>
        </div>
      </section>

      {/* 2. Mandatory Statutory Disclaimer Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-950">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-bold uppercase tracking-wider text-amber-900">
              Important Pricing Note &amp; Policy:
            </strong>
            <p className="leading-relaxed">
              {BUSINESS_INFO.pricingDisclaimer} All advertised starting prices represent entry-level specifications. The final contract price is established only after an in-person site measurement and written material approval.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Three Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-8 luxury-card-shadow flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#173D78] block">
                    Core Specialty
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0B1D3A] mt-1">
                    {card.title}
                  </h3>
                </div>

                <div className="py-4 border-y border-slate-100">
                  <div className="flex items-baseline gap-1 text-[#0B1D3A]">
                    <span className="text-xs uppercase font-medium text-slate-500">Starting at</span>
                    <span className="text-4xl font-serif font-black text-[#173D78] ml-2">
                      {card.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ {card.unit}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    {card.disclaimer}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    What this covers:
                  </span>
                  <ul className="space-y-2.5">
                    {card.includes.map((inc, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 space-y-3">
                <a
                  href={`https://wa.me/919990327474?text=${encodeURIComponent(card.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <Link
                  href={`/services/${card.slug}`}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#0B1D3A] font-semibold text-xs uppercase tracking-wider rounded-lg text-center block transition-colors"
                >
                  View Full Specifications &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete Turnkey and Other Custom Services Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-serif text-2xl font-bold text-[#0B1D3A]">
              Full Turnkey &amp; Specialty Service Categories
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              For services where pricing is determined by comprehensive custom site surveys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
              <h4 className="font-bold text-sm text-[#0B1D3A]">Wall Panelling &amp; Louvers</h4>
              <p className="text-xs text-slate-600">Quoted per running or square foot based on choice of charcoal louvers, WPC, fabric, or brass inlays.</p>
              <Link href="/services/wall-panelling" className="text-xs text-[#173D78] font-bold hover:underline block pt-1">Learn More &rarr;</Link>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
              <h4 className="font-bold text-sm text-[#0B1D3A]">Electrical &amp; Switchgear</h4>
              <p className="text-xs text-slate-600">Point-to-point electrical estimates with optional Anchor, Roma, or Polycab modular switch options.</p>
              <Link href="/services/electrical-lighting" className="text-xs text-[#173D78] font-bold hover:underline block pt-1">Learn More &rarr;</Link>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
              <h4 className="font-bold text-sm text-[#0B1D3A]">Bathroom &amp; Waterproofing</h4>
              <p className="text-xs text-slate-600">Turnkey bathroom renovation based on room size, tile choice, and shower enclosure specifications.</p>
              <Link href="/services/bathroom-tiles" className="text-xs text-[#173D78] font-bold hover:underline block pt-1">Learn More &rarr;</Link>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
              <h4 className="font-bold text-sm text-[#0B1D3A]">Flooring (Marble &amp; Tiles)</h4>
              <p className="text-xs text-slate-600">Calculated per square foot covering surface preparation, adhesive, diamond polishing, or wooden underlay.</p>
              <Link href="/services/flooring" className="text-xs text-[#173D78] font-bold hover:underline block pt-1">Learn More &rarr;</Link>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
              <h4 className="font-bold text-sm text-[#0B1D3A]">Turnkey 2BHK/3BHK Interiors</h4>
              <p className="text-xs text-slate-600">Comprehensive room-by-room architectural estimate encompassing all civil, electrical, carpentry, and paint works.</p>
              <Link href="/services/home-interiors" className="text-xs text-[#173D78] font-bold hover:underline block pt-1">Learn More &rarr;</Link>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
              <h4 className="font-bold text-sm text-[#0B1D3A]">Office &amp; Commercial Spaces</h4>
              <p className="text-xs text-slate-600">Customized contract planning for retail shops, offices, and conference studios in Kirti Nagar and Delhi NCR.</p>
              <Link href="/contact" className="text-xs text-[#173D78] font-bold hover:underline block pt-1">Request Quote &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
            Clear Answers
          </span>
          <h3 className="font-serif text-3xl font-bold text-[#0B1D3A]">
            Pricing Questions &amp; Quotation Process
          </h3>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-sm">
              <h4 className="font-serif text-base font-bold text-[#0B1D3A] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#E9C94A] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
