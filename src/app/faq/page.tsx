import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, HelpCircle, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Harmeet Interior Delhi",
  description: "Common questions about modular kitchen pricing, site visits, wardrobe materials, turnkey renovations, and work process at Harmeet Interior.",
};

export default function FaqPage() {
  const faqCategories = [
    {
      category: "Pricing & Starting Estimates",
      items: [
        {
          q: "What are your advertised starting rates?",
          a: "Our advertised starting rates are ₹1,199 per sq. ft. for Modular Kitchens, ₹1,099 per sq. ft. for Wardrobes & Almirahs, and ₹100 per sq. ft. for False Ceiling designs. These prices reflect basic specifications and standard finishes."
        },
        {
          q: "Why does the final quotation vary from the starting price?",
          a: "The final project quote is influenced by specific material choices (e.g. Laminate vs. Acrylic vs. PU Paint), choice of hardware (telescopic channels vs. premium soft-close tandem boxes like Hettich or Blum), site dimensions, plumbing modifications, and room geometry."
        },
        {
          q: "Do you provide written line-item quotations?",
          a: "Yes. Following an on-site survey and consultation, we prepare a detailed itemized Bill of Quantities (BOQ) with specific board types, brand names, and square footage breakdowns so there are zero surprise costs."
        }
      ]
    },
    {
      category: "Site Consultations & Surveys",
      items: [
        {
          q: "How do I book a site measurement visit?",
          a: "You can book directly by calling +91 9990327474 or +91 9911213974, texting us on WhatsApp, or submitting the consultation form on this website. Our team will coordinate a convenient date and time to visit your Delhi NCR premises."
        },
        {
          q: "Which areas in Delhi NCR do you cover for site visits?",
          a: "We actively visit and execute projects throughout Delhi, including Kirti Nagar, Punjabi Bagh, Janakpuri, Rajouri Garden, Dwarka, Rohini, Pitampura, South Delhi (GK, Vasant Kunj, Saket), and surrounding NCR regions."
        },
        {
          q: "What happens during the initial site visit?",
          a: "Our experienced site supervisor measures room dimensions, assesses wall alignment, inspects dampness/electrical points, discusses your storage and aesthetic requirements, and offers initial guidance on suitable layouts."
        }
      ]
    },
    {
      category: "Materials & Execution Standards",
      items: [
        {
          q: "What materials do you use for modular kitchen and wardrobe carcasses?",
          a: "For modular kitchens, we predominantly use IS:710 Marine Grade BWP (Boiling Water Proof) plywood to resist kitchen steam and moisture. For wardrobes, we use calibrated commercial ply or HDHMR boards depending on client preference and room conditions."
        },
        {
          q: "Can I choose my own electrical switches and fixtures?",
          a: "Certainly. We work with leading certified modular brands including Anchor Roma, Polycab, Legrand, and Schneider. We integrate client-preferred switchplates, dimmers, and automation modules seamlessly."
        },
        {
          q: "Do you handle complete turnkey flat renovations?",
          a: "Yes. We offer single-source turnkey interior contracting covering civil alterations, concealed plumbing & electricals, POP/Gypsum false ceilings, modular woodwork, tile/stone flooring, wall panelling, and final painting."
        }
      ]
    },
    {
      category: "Timelines & Coordination",
      items: [
        {
          q: "How are project timelines established?",
          a: "Every project receives a milestone schedule agreed upon before work starts. Project duration varies with scope: modular kitchen and wardrobe installations typically take 2 to 4 weeks from approved drawings, whereas comprehensive 2BHK/3BHK turnkey renovations require 6 to 10 weeks."
        },
        {
          q: "Who oversees the daily work on my site?",
          a: "Meet Interior maintains direct contractor supervision. Our core team inspects the site daily, coordinates carpentry, plumbing, and electrical technicians, and maintains regular photo communication with the client."
        }
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1D3A] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparency First</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our interior contracting process, starting prices, and site consultation in Delhi.
          </p>
        </div>
      </section>

      {/* 2. Structured FAQ Categories */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {faqCategories.map((cat, cIdx) => (
          <div key={cIdx} className="space-y-6">
            <div className="border-b border-slate-200 pb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
                Section 0{cIdx + 1}
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0B1D3A]">
                {cat.category}
              </h2>
            </div>

            <div className="space-y-4">
              {cat.items.map((item, iIdx) => (
                <div key={iIdx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-serif text-base font-bold text-[#0B1D3A] flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#E9C94A] shrink-0 mt-0.5" />
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Still have questions box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1D3A] text-white p-8 rounded-2xl border border-white/10 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            Have a Specific Question About Your Delhi Property?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with our master contractor. We will review your floor plan, address technical questions, and guide you on material alternatives.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919990327474"
              className="px-6 py-3 bg-[#E9C94A] text-[#0B1D3A] font-bold text-xs uppercase tracking-wider rounded shadow hover:brightness-105 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9990327474</span>
            </a>
            <a
              href="https://wa.me/919990327474?text=Hello%20Harmeet%20Interior%2C%20I%20have%20a%20few%20questions%20regarding%20interior%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
