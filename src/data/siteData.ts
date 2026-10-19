export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  startingPrice?: string;
  priceNote?: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: { title: string; detail: string }[];
  whatsappMessage: string;
}

export const SERVICES: Service[] = [
  {
    id: "modular-kitchens",
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    tagline: "Precision engineered culinary spaces for modern Indian homes",
    startingPrice: "₹1,199",
    priceNote: "per sq. ft. *Indicative starting price, subject to site inspection, layout, hardware & final material selection.",
    image: "/projects/work-14.png",
    shortDesc: "Bespoke L-shape, U-shape, parallel, and island layouts with German-grade soft-close hardware, acrylic, and PU finishes.",
    fullDesc: "At Meet Interior, our modular kitchens combine ergonomic functionality with timeless aesthetics. Built for the rigorous demands of everyday Indian cooking, we utilize waterproof BWP marine-grade ply, high-durability acrylic & PU finishes, and premium fittings from leading global hardware brands.",
    features: [
      "Custom layouts: L-Shaped, U-Shaped, Parallel & Straight with breakfast counters",
      "Cabinet finishes: High-gloss Acrylic, Matte PU Lacquer, Laminate, and Textured Glass",
      "Countertops: Quartz, Granite, and Nano-white anti-stain surfaces",
      "Smart storage: Pantry pull-outs, tandem boxes, corner carousels & spice organizers",
      "Chimney & appliance integration with precision ventilation planning"
    ],
    specs: [
      { title: "Carcass Material", detail: "IS:710 Marine Grade BWP Plywood / HDHMR" },
      { title: "Shutter Finishes", detail: "Anti-fingerprint Matte PU, Acrylic, or Anti-scratch Laminate" },
      { title: "Hardware Options", detail: "Soft-close telescopic channels, hydraulic lift-ups, stainless steel baskets" },
      { title: "Starting Indicative Rate", detail: "₹1,199 / sq. ft." }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about modular kitchen design. Please share details and the quotation process."
  },
  {
    id: "wardrobes",
    slug: "wardrobes",
    title: "Wardrobes & Almirahs",
    tagline: "Custom storage solutions harmonized with your bedroom architecture",
    startingPrice: "₹1,099",
    priceNote: "per sq. ft. *Indicative starting price, subject to dimensions, internal accessories & choice of shutter finish.",
    image: "/projects/work-04.png",
    shortDesc: "Floor-to-ceiling sliding, hinged, and luxurious walk-in wardrobes tailored with Sunmica, acrylic, PU polish, and tinted glass.",
    fullDesc: "Transform bedroom storage into an architectural statement. Meet Interior specializes in custom-fitted wardrobes maximizing every inch of vertical height. From space-saving sliding wardrobes to floor-to-ceiling hinged almirahs and walk-in dressing suites, each piece is engineered for daily ease and elegance.",
    features: [
      "Configurations: Sliding door wardrobes, Floor-to-ceiling hinged almirahs, and Walk-in closets",
      "Finish Options: High-grade Sunmica laminates, Gloss acrylic, PU polish, and Fluted glass",
      "Internal Organizers: Dedicated saree drawers, tie/belt racks, sensor LED lighting, and digital locker provisions",
      "Full soft-close hardware with heavy-duty aluminum track mechanisms"
    ],
    specs: [
      { title: "Framework", detail: "Termite-treated commercial / calibrated BWP ply" },
      { title: "Door Mechanisms", detail: "Heavy-duty top/bottom smooth sliding channels or concealed soft hinges" },
      { title: "Internal Lighting", detail: "Integrated automatic sensor LED profile lights" },
      { title: "Starting Indicative Rate", detail: "₹1,099 / sq. ft." }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about custom wardrobe & almirah design. Please share details and the quotation process."
  },
  {
    id: "false-ceiling",
    slug: "false-ceiling",
    title: "False Ceiling & Lighting",
    tagline: "Sculptural ceiling architecture with integrated architectural illumination",
    startingPrice: "₹100",
    priceNote: "per sq. ft. *Indicative starting price for standard POP/Gypsum channel work. Lighting fixtures and profile strips quoted separately.",
    image: "/projects/work-20.png",
    shortDesc: "Modern Gypsum & POP ceiling designs with warm cove lighting, linear magnetic profile lights, and acoustic insulation.",
    fullDesc: "Ceilings define the spatial depth and mood of any luxury room. We design seamless false ceiling concepts utilizing genuine Gyproc/Saint-Gobain gypsum boards, galvanized metal frameworks, and indirect cove illumination to create airy, inviting atmospheres.",
    features: [
      "Precision Gypsum and POP false ceilings with crack-resistant jointing",
      "Modern architectural lighting: Warm indirect cove light, magnetic track lights, and slim profile lights",
      "Multi-layered step ceilings and floating island concepts for master bedrooms and living halls",
      "Concealed AC ducting and surround-sound speaker integration"
    ],
    specs: [
      { title: "Board Quality", detail: "Saint-Gobain Gyproc / Genuine POP plaster" },
      { title: "Framing System", detail: "Rust-proof Galvanized Iron (GI) channels" },
      { title: "Light Provision", detail: "Pre-cut channels for COB spotlights, coves & profile strips" },
      { title: "Starting Indicative Rate", detail: "₹100 / sq. ft." }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about false ceiling & lighting solutions. Please share details and the quotation process."
  },
  {
    id: "wall-panelling",
    slug: "wall-panelling",
    title: "Wall Panelling & Decoration",
    tagline: "Texture, depth, and bespoke wall finishes that elevate your living rooms",
    image: "/projects/work-02.png",
    shortDesc: "Fluted charcoal louvers, acoustic WPC panels, gold metallic inlays, wainscoting mouldings, and luxury wallpapers.",
    fullDesc: "Add tactile elegance to accent walls, TV consoles, and bed backdrops. Meet Interior crafts custom wall cladding using contemporary materials like charcoal louvers, moisture-resistant WPC panels, PU-lacquered fluted wood, and gold trim inlays.",
    features: [
      "WPC & PVC fluted louvers for living room TV backdrops",
      "Acoustic fabric and cushioned leatherette panelling for master bedrooms",
      "Brass, bronze, and gold anodized T-profile inlays",
      "Designer imported textured wallpapers and Italian stucco wall finishes"
    ],
    specs: [
      { title: "Core Material", detail: "Waterproof WPC, Charcoal louvers, or HDHMR with veneer" },
      { title: "Accent Detailing", detail: "PVD coated stainless steel or brass strips" },
      { title: "Maintenance", detail: "Easy-wipe, moisture-resistant and termite-proof surfaces" },
      { title: "Pricing", detail: "Custom quote based on wall dimensions and material selection" }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about wall panelling and accent wall decoration. Please share details and catalogue."
  },
  {
    id: "electrical-lighting",
    slug: "electrical-lighting",
    title: "Electrical & Lighting",
    tagline: "Safe, concealed, high-efficiency wiring and mood lighting curation",
    image: "/projects/work-18.png",
    shortDesc: "Complete electrical revamping, smart modular switches (Anchor, Roma, Polycab options), portal spotlights, and architectural LED layouts.",
    fullDesc: "A well-designed home demands intelligent electrical planning. Meet Interior handles full electrical rewiring, MCB load balancing, concealed conduit laying, and high-end lighting installations featuring reputable switchgear options like Anchor, Roma, and Polycab.",
    features: [
      "Concealed FRLS copper wiring for maximum household fire safety",
      "Switchgear integration featuring modular plate options (Anchor Roma, Polycab, or equivalent brands)",
      "Layered lighting plans: Ambient, Task, Accent, and Decorative fixtures",
      "Grand living room chandeliers, pendant lights, and dimmable bedside reading lights"
    ],
    specs: [
      { title: "Wiring Standard", detail: "Flame Retardant Low Smoke (FRLS) copper wires" },
      { title: "Switchgear Brands", detail: "Anchor, Roma, Polycab or client-preferred modular options" },
      { title: "Automation Ready", detail: "Smart Wi-Fi switch and automation compatible conduits" },
      { title: "Pricing", detail: "Detailed point-by-point quotation after electrical layout planning" }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about electrical wiring & lighting planning for my home. Please share details."
  },
  {
    id: "bathroom-tiles",
    slug: "bathroom-tiles",
    title: "Bathroom & Tiles",
    tagline: "Spa-inspired bathroom transformations with precision plumbing and waterproofing",
    image: "/projects/work-01.png",
    shortDesc: "Capsule LED mirrors, floating vanities, Moroccan feature tiles, complete waterproofing, and premium sanitary fittings.",
    fullDesc: "We convert ordinary bathrooms into personal wellness retreats. Our turnkey bathroom renovation includes robust multi-layer waterproofing, precision slope drainage, large slab tile cladding, custom curved LED mirror consoles, and premium sanitary fittings.",
    features: [
      "3-layer chemical waterproofing to eliminate dampness and seepage permanently",
      "Large-format 4x2 ft and 6x4 ft vitrified wall and floor tiles with minimal grout joints",
      "Custom floating storage vanities with quartz / solid stone tops",
      "Toughened glass shower cubicles and premium CP & sanitary ware installation"
    ],
    specs: [
      { title: "Waterproofing", detail: "Dr. Fixit / Fosroc chemical coating with pressure testing" },
      { title: "Plumbing Conduits", detail: "CPVC & UPVC pipes with brass fittings (Astral / Ashirvad)" },
      { title: "Glass Partitions", detail: "10mm toughened glass with stainless steel 304 hardware" },
      { title: "Pricing", detail: "Turnkey bathroom packages quoted after site evaluation" }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about bathroom renovation and tile installation. Please share details."
  },
  {
    id: "flooring",
    slug: "flooring",
    title: "Flooring Solutions",
    tagline: "Foundations of luxury: Italian marble, vitrified tiles, and wooden floors",
    image: "/projects/work-27.png",
    shortDesc: "Flawless wooden laminate laying, large-format vitrified tiles, Italian marble diamond polishing, and seamless floor transitions.",
    fullDesc: "Flooring forms the fundamental canvas of your home interior. Meet Interior provides master tile layers and wood flooring technicians for Italian marble, granite, double-charged vitrified tiles, and warm wooden laminated flooring.",
    features: [
      "Italian marble installation with diamond polishes and epoxy joint filling",
      "Glazed Vitrified Tiles (GVT) in sizes 4x2 ft, 6x4 ft, and bookmatched designs",
      "Engineered hardwood and AC4-grade scratch-resistant wooden flooring",
      "Precision laser levelling ensuring uniform slopes and zero hollow sounds"
    ],
    specs: [
      { title: "Tile / Stone Laying", detail: "High-bond polymer modified adhesives for zero detachment" },
      { title: "Wooden Floors", detail: "Moisture-barrier underlay with sound dampening" },
      { title: "Finishing", detail: "Mirror-finish diamond polishing & stain-resistant sealers" },
      { title: "Pricing", detail: "Based on square footage, stone type, and floor preparation requirements" }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about premium flooring options. Please share details and pricing guidance."
  },
  {
    id: "home-interiors",
    slug: "home-interiors",
    title: "Complete Home Interiors",
    tagline: "End-to-end turnkey residential renovation across Delhi NCR",
    image: "/projects/work-23.png",
    shortDesc: "Turnkey interior contracting for 1BHK, 2BHK, 3BHK, 4BHK apartments, independent kothis, and boutique spaces.",
    fullDesc: "Meet Interior is your single-source turnkey contractor in Delhi. From civil modifications, plumbing, and electrical conduits to customized carpentry, modular setups, painting, and deep cleaning, we manage the entire project from blueprint to final key handover.",
    features: [
      "Comprehensive Turnkey execution: Civil, Plumbing, Electrical, Carpentry & Finishing",
      "Dedicated site supervision in Delhi NCR ensuring timely phase-wise delivery",
      "Transparent material procurement with zero hidden substitutions",
      "Tailored packages for 1BHK, 2BHK, 3BHK, 4BHK flats, builder floors, and office interiors"
    ],
    specs: [
      { title: "Project Types", detail: "1BHK, 2BHK, 3BHK, 4BHK, Villas, Offices & Commercial retail" },
      { title: "Execution Model", detail: "Turnkey contracting with direct site supervisor coordination" },
      { title: "Coverage Area", detail: "Delhi, Kirti Nagar, West Delhi, South Delhi & surrounding NCR" },
      { title: "Quotation", detail: "Free site measurement visit & comprehensive line-item estimate" }
    ],
    whatsappMessage: "Hello Meet Interior, I would like to enquire about complete turnkey home interior renovation. Please guide me through the consultation process."
  }
];

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Kitchens" | "Living Rooms" | "Bedrooms" | "Wardrobes" | "Ceilings" | "Commercial";
  location: string;
  scope: string;
  materials: string[];
  image: string;
  gallery: string[];
  description: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "royal-fluted-accent-living",
    slug: "modern-minimalist-living",
    title: "Classical Fluted & Gold Living Panelling",
    category: "Living Rooms",
    location: "Kirti Nagar, New Delhi",
    scope: "Gold trim accent wall, wainscoting mouldings, ambient coves & custom furniture",
    materials: ["PVD Gold Trims", "High-density Calibrated Mouldings", "Warm 3000K Lighting", "High-gloss Italian Tile Floor"],
    image: "/projects/work-02.png",
    gallery: [
      "/projects/work-02.png",
      "/projects/work-26.png",
      "/projects/work-18.png"
    ],
    description: "An authentic on-site installation showcasing classical symmetrical wall mouldings with reflective gold inlay borders, transforming a Delhi living room into a stately luxury salon."
  },
  {
    id: "bespoke-two-tone-modular-kitchen",
    slug: "bespoke-acrylic-modular-kitchen",
    title: "Dual-Tone Acrylic Modular Kitchen",
    category: "Kitchens",
    location: "Punjabi Bagh, New Delhi",
    scope: "Parallel modular kitchen with quartz countertop, soft-close hardware & crockery unit",
    materials: ["BWP Marine Ply", "High-Gloss Acrylic Shutters", "Quartz Worktop", "Soft-close Tandem Boxes"],
    image: "/projects/work-14.png",
    gallery: [
      "/projects/work-14.png",
      "/projects/work-11.png",
      "/projects/work-12.png",
      "/projects/work-17.png"
    ],
    description: "Real site execution of a dual-tone parallel kitchen built for intense culinary prep while maintaining immaculate visual order through fluted glass crockery display and seamless acrylic drawers."
  },
  {
    id: "master-bedroom-emerald-wardrobe",
    slug: "master-bedroom-walkin-almirah",
    title: "Emerald Green & Walnut Wardrobe Suite",
    category: "Wardrobes",
    location: "Janakpuri, New Delhi",
    scope: "Floor-to-ceiling modular wardrobe with classical panelling and walnut pullouts",
    materials: ["Calibrated HDHMR", "Matte PU Emerald Paint", "Natural Walnut Finish", "Heavy-Duty Concealed Hinges"],
    image: "/projects/work-04.png",
    gallery: [
      "/projects/work-04.png",
      "/projects/work-06.png",
      "/projects/work-22.png"
    ],
    description: "A tailor-made wardrobe installation featuring floor-to-ceiling emerald green shaker shutters, integrated lower storage drawers in rich walnut, and soft-close mechanisms."
  },
  {
    id: "sculptural-gypsum-cove-ceiling",
    slug: "sculptural-gypsum-cove-ceiling",
    title: "Square Profile & High-Gloss L-Kitchen",
    category: "Ceilings",
    location: "Rohini, New Delhi",
    scope: "Recessed gypsum ceiling with magnetic square profile lights and dual-tier glossy cabinetry",
    materials: ["Saint-Gobain Gyproc 12.5mm", "Linear LED Profile Strips", "Black Quartz Surface", "Acrylic Shutters"],
    image: "/projects/work-20.png",
    gallery: [
      "/projects/work-20.png",
      "/projects/work-09.png",
      "/projects/work-08.png"
    ],
    description: "An architectural ceiling scheme balancing low-glare square linear profile lighting with high-gloss two-tier modular kitchen cabinetry for an expansive, luminous space."
  },
  {
    id: "serene-master-bedroom-sanctuary",
    slug: "serene-master-bedroom-sanctuary",
    title: "Velvet Fluted Hydraulic Bed Suite",
    category: "Bedrooms",
    location: "Dwarka, New Delhi",
    scope: "Vertical fluted velvet headboard, hydraulic lift bed base & wooden laminate flooring",
    materials: ["Plush Velvet Upholstery", "Hydraulic Gas Lift", "Termite-Treated Plywood", "Laminate Wood Floors"],
    image: "/projects/work-27.png",
    gallery: [
      "/projects/work-27.png",
      "/projects/work-25.png",
      "/projects/work-21.png",
      "/projects/work-05.png"
    ],
    description: "A calming residential bedroom master retreat utilizing soft vertical quilted velvet upholstery, spacious hidden hydraulic storage, and warm wood flooring."
  },
  {
    id: "luxury-capsule-mirror-bath-vanity",
    slug: "executive-studio-office",
    title: "Capsule LED Mirror & Floating Vanity",
    category: "Commercial",
    location: "Kirti Nagar Timber Block, New Delhi",
    scope: "Bespoke powder room transformation with LED mirror, floating drawers & designer tiles",
    materials: ["Capsule Backlit Mirror", "Custom Marine Ply Vanity", "Ceramic Basin", "Designer Mosaic Wall Tiles"],
    image: "/projects/work-01.png",
    gallery: [
      "/projects/work-01.png",
      "/projects/work-03.png",
      "/projects/work-23.png"
    ],
    description: "A functional, distinguished bathroom vanity combining double-cove capsule mirror lighting with moisture-proof cabinetry and artisan tile surfaces."
  }
];

export const BUSINESS_INFO = {
  name: "Meet Interior",
  category: "Interior Design, Interior Contractor, Home Renovation",
  tagline: "Let's Build Your Dream Space Together.",
  heroHeadline: "Thoughtfully Designed. Beautifully Lived.",
  heroSubheadline: "Customized interior design, modular carpentry, and turnkey home renovation solutions in Kirti Nagar and across Delhi NCR.",
  phones: [
    { label: "Primary Contact", number: "+91 9990327474", raw: "+919990327474", href: "tel:+919990327474" },
    { label: "Office Contact", number: "+91 9911213974", raw: "+919911213974", href: "tel:+919911213974" }
  ],
  email: "harmeet.singh8311@gmail.com",
  emailHref: "mailto:harmeet.singh8311@gmail.com",
  address: "A-52, W.H.-5, Timber Block, Kirti Nagar, New Delhi, India",
  serviceArea: "Delhi, Kirti Nagar, Punjabi Bagh, Janakpuri, Dwarka, Rohini, South Delhi and surrounding NCR areas",
  whatsappBase: "https://wa.me/919990327474",
  workingHours: "Monday to Sunday: 10:00 AM – 8:00 PM",
  startingPrices: [
    { service: "Modular Kitchens", price: "₹1,199", unit: "per sq. ft.", slug: "modular-kitchens" },
    { service: "Wardrobes & Almirahs", price: "₹1,099", unit: "per sq. ft.", slug: "wardrobes" },
    { service: "False Ceiling Designs", price: "₹100", unit: "per sq. ft.", slug: "false-ceiling" }
  ],
  pricingDisclaimer: "Displayed rates are starting indicative prices for basic specifications and are strictly subject to site inspection, material choices, hardware, dimensions, and project scope. Final project quotation is provided after site survey."
};
