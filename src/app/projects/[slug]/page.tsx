import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  ArrowLeft, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  MessageCircle, 
  Phone,
  Sparkles 
} from "lucide-react";
import { PROJECTS, BUSINESS_INFO } from "@/data/siteData";
import ContactForm from "@/components/ContactForm";
import CtaBanner from "@/components/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Meet Interior Delhi NCR`,
    description: `${project.title} - ${project.scope} located in ${project.location}. Materials and design execution details by Meet Interior.`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const whatsappInquiryUrl = `https://wa.me/919990327474?text=${encodeURIComponent(
    `Hello Meet Interior, I saw the project "${project.title}" on your website and would like similar interior work for my home in Delhi NCR.`
  )}`;

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Breadcrumbs & Project Hero */}
      <section className="bg-[#0B1D3A] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-6">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E9C94A] font-medium">{project.title}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#E9C94A] text-[#0B1D3A] text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-[#E9C94A]" />
                <span>{project.location}</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.scope}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Inquire About Similar Design</span>
              </a>
              <Link
                href="/projects"
                className="px-4 py-3.5 bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-medium uppercase tracking-wider rounded transition-colors"
              >
                &larr; Back to Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Hero Showcase Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 sm:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </section>

      {/* 3. Project Concept, Materials & Consultation Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#173D78] block mb-2">
                Concept &amp; Execution
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D3A] mb-4">
                Architectural Design Overview
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Materials Used Badge Grid */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#0B1D3A] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#173D78]" />
                <span>Materials &amp; Finish Palette</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.materials.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-800 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#E9C94A]"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Project Gallery Photos */}
            {project.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#0B1D3A]">
                  Additional Perspectives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative h-60 rounded-xl overflow-hidden shadow-md bg-slate-800">
                      <Image
                        src={img}
                        alt={`${project.title} perspective ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Inquiry Form for This Project */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <ContactForm defaultService={project.category} />
            </div>
          </div>

        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
