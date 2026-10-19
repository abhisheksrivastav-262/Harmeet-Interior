import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Tag, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/data/siteData";
import ContactForm from "@/components/ContactForm";
import CtaBanner from "@/components/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Delhi | Meet Interior`,
    description: `${service.title} in Delhi NCR. ${service.tagline}. Starting price details, materials, and consultation.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/919990327474?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Breadcrumbs & Service Hero */}
      <section className="bg-[#0B1D3A] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E9C94A] font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-7 space-y-4">
              {service.startingPrice && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9C94A]/20 border border-[#E9C94A]/30 text-[#E9C94A] text-xs font-bold tracking-wide">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Starting at {service.startingPrice} / sq. ft.*</span>
                </div>
              )}
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                {service.tagline}
              </p>

              {/* Direct WhatsApp & Call Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded shadow-md transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Get a Quote on WhatsApp</span>
                </a>
                <a
                  href="tel:+919990327474"
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E9C94A]" />
                  <span>Call +91 9990327474</span>
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                <Image
                  src={service.image}
                  alt={`${service.title} in Delhi by Meet Interior`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Specs & Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Comprehensive Information */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#173D78] block mb-2">
                Overview &amp; Craftsmanship
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D3A] mb-4">
                Tailored for Delhi Residences
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Features List */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#0B1D3A]">
                What&apos;s Included in Our {service.title} Scope
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specification Table */}
            <div>
              <h3 className="font-serif text-xl font-bold text-[#0B1D3A] mb-4">
                Technical Specifications &amp; Standards
              </h3>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody>
                    {service.specs.map((item, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"}`}
                      >
                        <td className="p-4 font-semibold text-[#0B1D3A] w-1/3">
                          {item.title}
                        </td>
                        <td className="p-4 text-slate-700">
                          {item.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pricing Disclaimer Alert */}
            {service.priceNote && (
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                <Tag className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold mb-0.5">Indicative Pricing Disclaimer:</strong>
                  {service.priceNote} Final quotations are prepared following an in-person site measurement visit in Delhi NCR.
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Service Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <ContactForm defaultService={service.title} />

              <div className="bg-[#0B1D3A] text-white p-6 rounded-xl border border-white/10 space-y-4">
                <h4 className="font-serif text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E9C94A]" />
                  <span>The Meet Interior Promise</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every order is executed under direct supervision from our Kirti Nagar workshop. We supply genuine branded materials with zero unapproved substitutions.
                </p>
                <div className="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1.5">
                  <div>&bull; Free initial site measurement in Delhi</div>
                  <div>&bull; Transparent line-item quotation</div>
                  <div>&bull; Milestone-based phase delivery</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Related Services Navigation */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#0B1D3A]">
              Explore Other Specialized Services
            </h3>
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#173D78] hover:underline"
            >
              All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4).map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="bg-white p-4 rounded-lg border border-slate-200 hover:border-[#0B1D3A] transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0B1D3A] group-hover:text-[#173D78] transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                    {other.shortDesc}
                  </p>
                </div>
                {other.startingPrice && (
                  <span className="text-[10px] text-amber-700 font-semibold mt-3 block">
                    Starts {other.startingPrice} / sq.ft
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner serviceName={service.title} />
    </div>
  );
}
