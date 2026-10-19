import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meetinterior.com"),
  title: {
    default: "Meet Interior | Luxury Interior Design & Renovation Studio Delhi NCR",
    template: "%s | Meet Interior Delhi NCR",
  },
  description:
    "Meet Interior offers bespoke luxury modular kitchens, custom wardrobes, false ceilings, and turnkey home renovation solutions in Kirti Nagar and across Delhi NCR.",
  keywords: [
    "Interior designer in Delhi",
    "Interior contractor in Kirti Nagar",
    "Modular kitchen in Delhi",
    "Wardrobe design in Delhi",
    "False ceiling contractor in Delhi",
    "Home interior renovation in Delhi",
    "Meet Interior",
    "Meet Interior Delhi NCR",
    "Turnkey interior contractor Delhi",
  ],
  authors: [{ name: "Meet Interior" }],
  creator: "Meet Interior",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://meetinterior.com",
    siteName: "Meet Interior",
    title: "Meet Interior | Luxury Interior Design & Renovation Studio Delhi NCR",
    description:
      "Crafting bespoke luxury residential and commercial spaces across Delhi NCR. Modular kitchens, custom wardrobes, false ceilings, and turnkey interior contracting.",
    images: [
      {
        url: "/projects/work-14.png",
        width: 1200,
        height: 630,
        alt: "Meet Interior Luxury Living Spaces",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Meet Interior",
    "description": "Interior design, modular carpentry, false ceiling, and turnkey home renovation contractor serving Delhi NCR.",
    "telephone": "+919990327474",
    "email": "harmeet.singh8311@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-52, W.H.-5, Timber Block, Kirti Nagar",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6517,
      "longitude": 77.1352
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Delhi and surrounding NCR areas"
    },
    "priceRange": "₹₹₹"
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF9F6] text-[#22252B] selection:bg-[#E9C94A]/30 selection:text-[#0B1D3A]">
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
