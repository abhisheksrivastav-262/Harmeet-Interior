"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Layers, X, ExternalLink } from "lucide-react";
import { ProjectItem } from "@/data/siteData";

interface ProjectGalleryProps {
  projects: ProjectItem[];
  showFilter?: boolean;
}

export default function ProjectGallery({ projects, showFilter = true }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Kitchens", "Living Rooms", "Bedrooms", "Wardrobes", "Ceilings", "Commercial"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Buttons */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0B1D3A] text-[#E9C94A] shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-xl overflow-hidden border border-slate-200 luxury-card-shadow luxury-card-hover flex flex-col justify-between"
          >
            <div>
              {/* Image Preview with click to lightbox */}
              <div 
                className="relative w-full overflow-hidden bg-white cursor-pointer"
                onClick={() => setLightboxProject(project)}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} - Interior design by Meet Interior`}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className="group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-sm text-[#0B1D3A] px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
                  {project.category}
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-amber-300 font-medium block">
                    Click to enlarge preview
                  </span>
                </div>
              </div>


              {/* Information */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E9C94A] shrink-0" />
                  <span>{project.location}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#0B1D3A] group-hover:text-[#173D78] transition-colors mb-2">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#173D78]" />
                    <span>Key Materials:</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {project.materials.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer Link */}
            <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs font-bold uppercase tracking-wider text-[#173D78] group-hover:text-[#0B1D3A] flex items-center gap-1.5 transition-colors"
              >
                <span>Full Project View</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setLightboxProject(project)}
                className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Photos</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxProject(null)}
        >
          <div 
            className="bg-[#0B1D3A] border border-white/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full rounded-lg overflow-hidden mb-6 bg-slate-900">
              <Image
                src={lightboxProject.image}
                alt={lightboxProject.title}
                width={0}
                height={0}
                sizes="(max-width: 896px) 100vw, 896px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                className="rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E9C94A]">
                    {lightboxProject.category} &bull; {lightboxProject.location}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    {lightboxProject.title}
                  </h3>
                </div>
                <Link
                  href={`/projects/${lightboxProject.slug}`}
                  className="px-4 py-2 bg-[#E9C94A] text-[#0B1D3A] font-bold text-xs rounded hover:brightness-105 uppercase tracking-wider"
                >
                  View Case Study
                </Link>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {lightboxProject.description}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                  Materials Used &amp; Specifications:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {lightboxProject.materials.map((m, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 text-xs rounded text-slate-200">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {lightboxProject.gallery.length > 1 && (
                <div className="pt-4 border-t border-white/10">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Project Gallery Shots:
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {lightboxProject.gallery.map((img, i) => (
                      <div key={i} className="relative h-28 rounded-md overflow-hidden bg-slate-800">
                        <Image
                          src={img}
                          alt={`${lightboxProject.title} detail ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
