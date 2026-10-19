import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { Service } from "@/data/siteData";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 luxury-card-shadow luxury-card-hover flex flex-col justify-between">
      <div>
        {/* Card Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-900">
          <Image
            src={service.image}
            alt={`${service.title} by Harmeet Interior Delhi`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-transparent to-transparent"></div>
          
          {service.startingPrice && (
            <div className="absolute top-3.5 right-3.5 bg-[#0B1D3A]/90 backdrop-blur-md border border-[#E9C94A]/40 text-[#E9C94A] px-3 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg">
              <Tag className="w-3 h-3 text-[#E9C94A]" />
              <span>Starts {service.startingPrice} / sq.ft</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-[#0B1D3A] group-hover:text-[#173D78] transition-colors mb-2">
            <Link href={`/services/${service.slug}`} className="hover:underline">
              {service.title}
            </Link>
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {service.shortDesc}
          </p>

          <ul className="space-y-1.5 mb-4">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                <span className="text-[#E9C94A] font-bold text-sm leading-none">&bull;</span>
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-bold uppercase tracking-wider text-[#173D78] group-hover:text-[#0B1D3A] flex items-center gap-1 transition-colors"
        >
          <span>View Specifications</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href={`https://wa.me/919990327474?text=${encodeURIComponent(service.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-[#25D366] hover:underline"
        >
          WhatsApp Quote
        </a>
      </div>
    </div>
  );
}
