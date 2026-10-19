import React from "react";
import { Metadata } from "next";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Navigation 
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Site Visit | Harmeet Interior Delhi",
  description: "Contact Harmeet Interior in Kirti Nagar, New Delhi. Call +91 9990327474 or +91 9911213974. Schedule a free site measurement and consultation.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/919990327474?text=${encodeURIComponent(
    "Hello Harmeet Interior, I would like to schedule a consultation/site visit for my property in Delhi."
  )}`;

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1D3A] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9C94A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with our studio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Contact Harmeet Interior
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a residential or commercial interior project in Delhi NCR? We are here to help you plan, estimate, and execute.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Verified Business Information & Direct Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#173D78]">
                Studio &amp; Workshop Office
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0B1D3A]">
                Direct Lines &amp; Address
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reach out to our master contractor directly by phone or WhatsApp for quick answers regarding ongoing renovations, site surveys, or starting estimates.
              </p>
            </div>

            <div className="space-y-4">
              {/* Primary Contact */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Primary Mobile &amp; Consultation
                  </span>
                  <a 
                    href="tel:+919990327474" 
                    className="text-base font-bold text-[#0B1D3A] hover:text-[#173D78] block"
                  >
                    +91 9990327474
                  </a>
                  <p className="text-[11px] text-slate-500">Available on phone call and WhatsApp</p>
                </div>
              </div>

              {/* Office Contact */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Secondary / Office Line
                  </span>
                  <a 
                    href="tel:+919911213974" 
                    className="text-base font-bold text-[#0B1D3A] hover:text-[#173D78] block"
                  >
                    +91 9911213974
                  </a>
                  <p className="text-[11px] text-slate-500">Workshop &amp; administrative inquiries</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Official Email
                  </span>
                  <a 
                    href="mailto:harmeet.singh8311@gmail.com" 
                    className="text-sm font-bold text-[#0B1D3A] hover:text-[#173D78] block break-all"
                  >
                    harmeet.singh8311@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-500">Send floor plans and BOQ requirements</p>
                </div>
              </div>

              {/* Studio Physical Address */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Workshop &amp; Office Address
                  </span>
                  <p className="text-sm font-medium text-slate-800 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-500">Timber Block, Kirti Nagar, New Delhi 110015</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-[#E9C94A] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Working Schedule
                  </span>
                  <p className="text-sm font-medium text-slate-800">
                    {BUSINESS_INFO.workingHours}
                  </p>
                  <p className="text-[11px] text-slate-500">Open 7 days a week for appointments &amp; site calls</p>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Action Card */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                <span>Instant WhatsApp Consultation</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Share photos of your current space or floor plans directly on WhatsApp for an immediate discussion.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Chat on WhatsApp (+91 9990327474)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Site Survey Request Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 3. Location & Delhi NCR Service Area Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#173D78] block">
              Strategic Proximity
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0B1D3A] mt-1">
              Located in Kirti Nagar Timber Block &bull; Serving All of Delhi NCR
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              Kirti Nagar is known across India as the epicenter of luxury furniture, architectural wood, and interior hardware. Our central studio location allows us to deploy teams efficiently across all zones of Delhi.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="p-3 bg-slate-50 rounded border border-slate-100">
              <strong className="block text-[#0B1D3A] mb-1">West Delhi:</strong>
              <span>Kirti Nagar, Punjabi Bagh, Rajouri Garden, Janakpuri, Patel Nagar, Paschim Vihar</span>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-100">
              <strong className="block text-[#0B1D3A] mb-1">South Delhi:</strong>
              <span>Greater Kailash, Vasant Kunj, Hauz Khas, Saket, Defence Colony, Green Park</span>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-100">
              <strong className="block text-[#0B1D3A] mb-1">North &amp; North-West:</strong>
              <span>Rohini, Pitampura, Model Town, Civil Lines, Shalimar Bagh</span>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-100">
              <strong className="block text-[#0B1D3A] mb-1">NCR &amp; Surrounding:</strong>
              <span>Dwarka, Gurugram, Noida, and adjacent residential sectors</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
