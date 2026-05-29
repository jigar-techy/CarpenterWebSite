export const BRAND = {
  name: "Brahamani Furniture Shop",
  shortName: "Brahamani",
  subtitle: "Furniture Shop",
  tagline: "Handcrafted Furniture & Custom Woodwork",
  phone: "+91 98254 57053",
  phoneRaw: "9825457053",
  email: "hello@brahamanifurniture.com",
  address: "Shree Brahamani Furniture Mart, Bharat Nagar, Gandhidham, Kutch, Gujarat 370210, India",
  mapsUrl: "https://maps.app.goo.gl/DXmgumf9qBPQyjbs9",
  mapsEmbed:
    "https://maps.google.com/maps?q=Shree+Brahamani+Furniture+Mart,+Gandhidham,+Gujarat+370210&hl=en&z=16&output=embed",
  whatsapp: "919825457053",
  hours: "All Days 9:00 AM – 7:00 PM Exclude Amavasya",
  instagram:
    "https://www.instagram.com/brahamanifurniture",
  logo: "/logo.png",
}

export const ABOUT_IMAGES = {
  main: "/images/about-main.png",
  tools: "/images/about-tools.webp",
}

export const CONTACT_IMAGE = "/images/contact.webp"

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
]

/** Local WebP assets — served from same origin for instant loading */
export const HERO_IMAGES = [
  "/images/hero-1.webp",
  "/images/hero-2.webp",
  "/images/hero-3.webp",
]

export const HERO_PLACEHOLDERS = [
  "/images/hero-1-tiny.webp",
  "/images/hero-2-tiny.webp",
  "/images/hero-3-tiny.webp",
]

/** All site images — preloaded after first paint */
export const ALL_IMAGES = [
  ...HERO_IMAGES,
  ...HERO_PLACEHOLDERS,
  ABOUT_IMAGES.main,
  ABOUT_IMAGES.tools,
  CONTACT_IMAGE,
  "/images/service-furniture.webp",
  "/images/service-kitchen.webp",
  "/images/service-interior.webp",
  "/images/service-doors.webp",
  "/images/service-repair.webp",
  "/images/service-commercial.webp",
  ...Array.from({ length: 9 }, (_, i) => `/images/gallery-${i + 1}.webp`),
]

export const STATS = [
  { value: 18, suffix: "+", label: "Years Experience" },
  { value: 850, suffix: "+", label: "Projects Completed" },
  { value: 420, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "", label: "Expert Craftsmen" },
]

export const SERVICES = [
  {
    id: "furniture",
    title: "Custom Furniture",
    description:
      "Handcrafted tables, chairs, beds, and storage built to your exact dimensions and style.",
    image: "/images/service-furniture.webp",
    icon: "furniture",
  },
  {
    id: "kitchen",
    title: "Kitchen Cabinets",
    description:
      "Solid wood and premium laminate cabinetry with soft-close hardware and perfect finishes.",
    image: "/images/service-kitchen.webp",
    icon: "kitchen",
  },
  {
    id: "interior",
    title: "Interior Woodwork",
    description:
      "Wall paneling, ceiling beams, built-in shelves, and architectural details that elevate any space.",
    image: "/images/service-interior.webp",
    icon: "interior",
  },
  {
    id: "doors",
    title: "Doors & Windows",
    description:
      "Custom entry doors, sliding partitions, and window frames with precision joinery.",
    image: "/images/service-doors.webp",
    icon: "doors",
  },
  {
    id: "repair",
    title: "Restoration & Repair",
    description:
      "Antique furniture restoration, structural repairs, and refinishing to like-new condition.",
    image: "/images/service-repair.webp",
    icon: "repair",
  },
  {
    id: "commercial",
    title: "Commercial Fit-Out",
    description:
      "Office reception desks, retail displays, and restaurant interiors delivered on schedule.",
    image: "/images/service-commercial.webp",
    icon: "commercial",
  },
]

export const GALLERY_CATEGORIES = ["All", "Furniture", "Kitchen", "Interior", "Commercial"]

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Oak Dining Set",
    category: "Furniture",
    image: "/images/gallery-1.webp",
  },
  {
    id: 2,
    title: "Modern Kitchen",
    category: "Kitchen",
    image: "/images/gallery-2.webp",
  },
  {
    id: 3,
    title: "Living Room Paneling",
    category: "Interior",
    image: "/images/gallery-3.webp",
  },
  {
    id: 4,
    title: "Executive Desk",
    category: "Commercial",
    image: "/images/gallery-4.webp",
  },
  {
    id: 5,
    title: "Walnut Bookshelf",
    category: "Furniture",
    image: "/images/gallery-5.webp",
  },
  {
    id: 6,
    title: "Farmhouse Island",
    category: "Kitchen",
    image: "/images/gallery-6.webp",
  },
  {
    id: 7,
    title: "Ceiling Beams",
    category: "Interior",
    image: "/images/gallery-7.webp",
  },
  {
    id: 8,
    title: "Boutique Counter",
    category: "Commercial",
    image: "/images/gallery-8.webp",
  },
  {
    id: 9,
    title: "Custom Wardrobe",
    category: "Furniture",
    image: "/images/gallery-9.webp",
  },
]

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    text: "Brahamani Furniture Shop transformed our kitchen beyond expectations. Every joint is perfect and the team was professional from start to finish.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Restaurant Owner",
    text: "They delivered our entire bar and seating area on a tight deadline. Quality craftsmanship that our customers notice every day.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    text: "I partner with Brahamani Furniture Shop on client projects regularly. Their attention to detail and communication is unmatched in the area.",
    rating: 5,
  },
]

export const WOOD_TYPES = [
  { id: "pine", label: "Pine", rate: 45 },
  { id: "oak", label: "Oak", rate: 85 },
  { id: "walnut", label: "Walnut", rate: 120 },
  { id: "teak", label: "Teak", rate: 150 },
]

export const PROJECT_TYPES = [
  { id: "furniture", label: "Furniture", multiplier: 1 },
  { id: "kitchen", label: "Kitchen", multiplier: 1.4 },
  { id: "interior", label: "Interior", multiplier: 1.2 },
  { id: "commercial", label: "Commercial", multiplier: 1.6 },
]
