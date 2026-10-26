export interface GalleryItem {
  id: string;
  title: string;
  category: "Kitchens" | "Wardrobes" | "Bedrooms" | "Living & Walls" | "Vanities & Baths" | "Commercial & Carpentry" | "Additional Works";
  image: string;
  dimensions: string;
  aspect: "portrait" | "landscape" | "square";
  description: string;
}

export const REAL_WORK_GALLERY: GalleryItem[] = [
  {
    id: "work-01",
    title: "Luxury Capsule LED Mirror & Floating Vanity",
    category: "Vanities & Baths",
    image: "/projects/work-01.png",
    dimensions: "606x867",
    aspect: "portrait",
    description: "Curved backlit vanity mirror with dual warm coves, composite sink counter, and slate grey storage drawers.",
  },
  {
    id: "work-02",
    title: "Royal Fluted & Gold Inlay Accent Wall Panelling",
    category: "Living & Walls",
    image: "/projects/work-02.png",
    dimensions: "750x1030",
    aspect: "portrait",
    description: "Architectural wall panelling with brushed gold metallic profile borders and geometric wainscoting.",
  },
  {
    id: "work-03",
    title: "Contemporary Moroccan Tile Bathroom Vanity",
    category: "Vanities & Baths",
    image: "/projects/work-03.png",
    dimensions: "517x911",
    aspect: "portrait",
    description: "Backlit rectangular grooming mirror with artisan patterned wall backdrop and soft-close vanity unit.",
  },
  {
    id: "work-04",
    title: "Bespoke Emerald Green & Walnut Wardrobe Suite",
    category: "Wardrobes",
    image: "/projects/work-04.png",
    dimensions: "1280x960",
    aspect: "landscape",
    description: "Floor-to-ceiling modular wardrobe suite with classical mouldings, dual-tone matte PU finish, and walnut lower drawers.",
  },
  {
    id: "work-05",
    title: "Channel Tufted Headboard & Floating Bed Frame",
    category: "Bedrooms",
    image: "/projects/work-05.png",
    dimensions: "593x567",
    aspect: "square",
    description: "Custom geometric velvet upholstered bed backrest with matching upholstered base and fluted side nightstands.",
  },
  {
    id: "work-06",
    title: "Direct Workshop Hydraulic Bed Frame Assembly",
    category: "Commercial & Carpentry",
    image: "/projects/work-06.png",
    dimensions: "750x626",
    aspect: "landscape",
    description: "Precision engineered storage bed carcass made from calibrated plywood with heavy-duty gas hydraulic lift mechanism.",
  },
  {
    id: "work-07",
    title: "High-Gloss Modular Kitchen Upper Cabinetry",
    category: "Kitchens",
    image: "/projects/work-07.png",
    dimensions: "1032x774",
    aspect: "landscape",
    description: "Pure white UV high-gloss upper wall cabinets with soft-close hinges, integrated loft storage, and ceramic tile backsplash.",
  },
  {
    id: "work-08",
    title: "Contemporary Charcoal Gloss Parallel Kitchen",
    category: "Kitchens",
    image: "/projects/work-08.png",
    dimensions: "736x920",
    aspect: "portrait",
    description: "Deep charcoal acrylic shutters, seamless built-in black gas hob, profile cove lights, and quartz stone prep counter.",
  },
  {
    id: "work-09",
    title: "Designer Champagne Gloss Galley Kitchen",
    category: "Kitchens",
    image: "/projects/work-09.png",
    dimensions: "735x929",
    aspect: "portrait",
    description: "Ergonomic parallel kitchen with linear ceiling coves, frosted glass entry partition, and under-cabinet strip illumination.",
  },
  {
    id: "work-10",
    title: "Modern Plum & Off-White Modular Kitchen",
    category: "Kitchens",
    image: "/projects/work-10.png",
    dimensions: "581x1032",
    aspect: "portrait",
    description: "Dual-tone modular kitchen configuration with high-gloss wine base drawers and clean white overhead storage units.",
  },
  {
    id: "work-11",
    title: "L-Shaped Pearl White Modular Kitchen with Island",
    category: "Kitchens",
    image: "/projects/work-11.png",
    dimensions: "736x981",
    aspect: "portrait",
    description: "Full L-layout modular setup featuring warm task spotlights, designer mosaic feature wall, and soft-close tandem drawers.",
  },
  {
    id: "work-12",
    title: "Matte Anthracite & White Modern Kitchen Suite",
    category: "Kitchens",
    image: "/projects/work-12.png",
    dimensions: "736x981",
    aspect: "portrait",
    description: "Sophisticated dual-finish modular layout with heritage mosaic backsplash tiles, integrated chimney, and concealed refrigerator nook.",
  },
  {
    id: "work-13",
    title: "Turnkey Luxury Kitchen with Appliance Bank",
    category: "Kitchens",
    image: "/projects/work-13.png",
    dimensions: "683x1024",
    aspect: "portrait",
    description: "Comprehensive luxury kitchen installation featuring built-in microwave and oven tower, angled chimney, and seamless quartz slabs.",
  },
  {
    id: "work-14",
    title: "Two-Tone Acrylic Modular Kitchen with Crockery Unit",
    category: "Kitchens",
    image: "/projects/work-14.png",
    dimensions: "736x1104",
    aspect: "portrait",
    description: "Fluted glass display crockery cabinet, quartz worktop with integrated under-mount sink, and dual-finish soft-close drawers.",
  },
  {
    id: "work-15",
    title: "Linear Profile Kitchen with Slanted Glass Chimney",
    category: "Kitchens",
    image: "/projects/work-15.png",
    dimensions: "636x960",
    aspect: "portrait",
    description: "Minimalist handle-less Gola profile cabinetry, slanted designer black glass hood, and warm under-counter lighting.",
  },
  {
    id: "work-16",
    title: "Diagonal Accent Striped Kitchen with Coffee Station",
    category: "Kitchens",
    image: "/projects/work-16.png",
    dimensions: "736x1103",
    aspect: "portrait",
    description: "Bold monochromatic striped backsplash, built-in espresso station, dark quartz surface, and champagne gloss shutters.",
  },
  {
    id: "work-17",
    title: "Reflective Slate Grey Modular Kitchen with Open Ledge",
    category: "Kitchens",
    image: "/projects/work-17.png",
    dimensions: "736x981",
    aspect: "portrait",
    description: "Mirror-finish slate grey acrylic shutters, warm wood display niche, concealed task downlights, and black granite surface.",
  },
  {
    id: "work-18",
    title: "U-Shaped Modular Kitchen with Architectural Archway",
    category: "Kitchens",
    image: "/projects/work-18.png",
    dimensions: "736x981",
    aspect: "portrait",
    description: "Expansive U-shaped layout framed by a rich walnut portal with spotlights, circular POP ceiling details, and dual pantries.",
  },
  {
    id: "work-19",
    title: "Gloss Off-White & Soft Grey Dual-Line Kitchen",
    category: "Kitchens",
    image: "/projects/work-19.png",
    dimensions: "736x1104",
    aspect: "portrait",
    description: "Ergonomic multi-drawer storage zoning with integrated gas hob, slim black accent handles, and Italian marble wall tiles.",
  },
  {
    id: "work-20",
    title: "Geometric False Ceiling & High-Gloss L-Kitchen",
    category: "Kitchens",
    image: "/projects/work-20.png",
    dimensions: "736x981",
    aspect: "portrait",
    description: "Modern false ceiling with square linear profile lights, two-tier glossy cabinetry, and glass display loft cabinets.",
  },
  {
    id: "work-21",
    title: "Master Tufted Cream Velvet Storage Bed",
    category: "Bedrooms",
    image: "/projects/work-21.png",
    dimensions: "1280x720",
    aspect: "landscape",
    description: "Wingback vertical cushioned headboard with dual hydraulic storage base and minimal white bedside nightstand.",
  },
  {
    id: "work-22",
    title: "Rich Walnut King Bed with Integrated Switch Consoles",
    category: "Bedrooms",
    image: "/projects/work-22.png",
    dimensions: "1280x960",
    aspect: "landscape",
    description: "Bespoke walnut wood panel bed backboard with pre-cut electrical conduit points, twin side drawers, and hydraulic platform.",
  },
  {
    id: "work-23",
    title: "Royal Blue Suede & Mirror Headboard Installation",
    category: "Bedrooms",
    image: "/projects/work-23.png",
    dimensions: "721x1280",
    aspect: "portrait",
    description: "Lacquered white fluted wall cladding, beveled diamond-cut mirror niche, and rich royal blue velvet acoustic headboard.",
  },
  {
    id: "work-24",
    title: "Arched Diamond Tufted Custom Bed Suite",
    category: "Bedrooms",
    image: "/projects/work-24.png",
    dimensions: "1200x1600",
    aspect: "portrait",
    description: "Curved high-back diamond stitched leatherette headboard with crisp white framing and reinforced heavy plywood platform.",
  },
  {
    id: "work-25",
    title: "Suede Fluted Floor Bed with Hidden Lift Storage",
    category: "Bedrooms",
    image: "/projects/work-25.png",
    dimensions: "1280x1280",
    aspect: "square",
    description: "Low-profile upholstered bed base with brass perimeter accent lines, textured fluted backrest, and four-chamber storage.",
  },
  {
    id: "work-26",
    title: "Geometric Gold Line Accent Wall & Master Bed",
    category: "Living & Walls",
    image: "/projects/work-26.png",
    dimensions: "780x1040",
    aspect: "portrait",
    description: "Designer geometric wallpaper featuring metallic gold inlays, framed acoustic leatherette headboard, and oak finish flooring.",
  },
  {
    id: "work-27",
    title: "Velvet Vertical Fluted Hydraulic Bed Suite",
    category: "Bedrooms",
    image: "/projects/work-27.png",
    dimensions: "1200x1600",
    aspect: "portrait",
    description: "Plush vertical ribbed velvet fabric backrest, deep storage platform on wooden laminate flooring, and adjoining wardrobe woodwork.",
  },

  {
    id: "work-28",
    title: "Luxury Interior Installation – Delhi NCR",
    category: "Living & Walls",
    image: "/projects/work-28.jpg",
    dimensions: "auto",
    aspect: "landscape",
    description: "Completed interior installation showcasing premium finishes and craftsmanship."
  },
  {
    id: "work-29",
    title: "Bespoke Interior Woodwork & Finishes",
    category: "Commercial & Carpentry",
    image: "/projects/work-29.jpg",
    dimensions: "auto",
    aspect: "landscape",
    description: "Custom carpentry and interior woodwork executed with precision at client site."
  },
  {
    id: "work-30",
    title: "Modular Interior Setup – On-Site Execution",
    category: "Kitchens",
    image: "/projects/work-30.jpg",
    dimensions: "auto",
    aspect: "landscape",
    description: "Turnkey modular interior work delivered at Delhi NCR residential project."
  },
  {
    id: "work-31",
    title: "Premium Wardrobe & Storage Solution",
    category: "Wardrobes",
    image: "/projects/work-31.jpg",
    dimensions: "auto",
    aspect: "portrait",
    description: "Custom floor-to-ceiling wardrobe with superior finish and hardware."
  },
  {
    id: "work-32",
    title: "Designer Bedroom Interior – Complete Setup",
    category: "Bedrooms",
    image: "/projects/work-32.jpg",
    dimensions: "auto",
    aspect: "landscape",
    description: "Full bedroom interior with upholstered headboard, wardrobes, and panelling."
  },
  {
    id: "work-33",
    title: "Contemporary Kitchen & Interior Works",
    category: "Kitchens",
    image: "/projects/work-33.jpg",
    dimensions: "auto",
    aspect: "landscape",
    description: "Modern modular kitchen with integrated appliances and custom cabinetry."
  },
  {
    id: "work-34",
    title: "Accent Wall & Living Space Design",
    category: "Living & Walls",
    image: "/projects/work-34.jpg",
    dimensions: "auto",
    aspect: "landscape",
    description: "Designer feature wall with wallpanelling and living area interior complete."
  },
  {
    id: "work-35",
    title: "Bathroom Vanity & Tile Work",
    category: "Vanities & Baths",
    image: "/projects/work-35.jpg",
    dimensions: "auto",
    aspect: "landscape",
    description: "Complete bathroom renovation with premium vanity, tiles, and fittings."
  }
];

// Video data for video slider section
export interface VideoItem {
  src: string;
  title: string;
  subtitle: string;
}

export const SITE_VIDEOS: VideoItem[] = [
  {
    src: "/videos/video-01.mp4",
    title: "Luxury Interior Execution – Meet Interior",
    subtitle: "Kirti Nagar Studio • Delhi NCR"
  },
  {
    src: "/videos/video-02.mp4",
    title: "Modular Kitchen Installation Tour",
    subtitle: "On-Site Walkthrough • Delhi NCR"
  },
  {
    src: "/videos/video-03.mp4",
    title: "Bespoke Wardrobe & Bedroom Setup",
    subtitle: "Premium Craftsmanship • Delhi NCR"
  },
  {
    src: "/videos/video-04.mp4",
    title: "Complete Turnkey Home Interior",
    subtitle: "Full Renovation Showcase • Delhi NCR"
  },
  {
    src: "/videos/video-05.mp4",
    title: "Designer False Ceiling & Lighting",
    subtitle: "Architectural Detailing • Delhi NCR"
  },
  {
    src: "/videos/video-06.mp4",
    title: "Accent Walls & Living Room Interiors",
    subtitle: "Contemporary Design • Delhi NCR"
  }
];
