export const BRAND = {
  name: "MasterWood",
  tagline: "Fine Carpentry & Custom Woodwork",
  phone: "+1 (555) 234-7890",
  email: "hello@masterwood.com",
  address: "124 Oak Workshop Lane, Portland, OR 97201",
  whatsapp: "15552347890",
  hours: "Mon–Sat: 8:00 AM – 6:00 PM",
}

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
]

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=80",
  "https://images.unsplash.com/photo-1589939705382-701eca4c7940?w=1920&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
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
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    icon: "furniture",
  },
  {
    id: "kitchen",
    title: "Kitchen Cabinets",
    description:
      "Solid wood and premium laminate cabinetry with soft-close hardware and perfect finishes.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
    icon: "kitchen",
  },
  {
    id: "interior",
    title: "Interior Woodwork",
    description:
      "Wall paneling, ceiling beams, built-in shelves, and architectural details that elevate any space.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    icon: "interior",
  },
  {
    id: "doors",
    title: "Doors & Windows",
    description:
      "Custom entry doors, sliding partitions, and window frames with precision joinery.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    icon: "doors",
  },
  {
    id: "repair",
    title: "Restoration & Repair",
    description:
      "Antique furniture restoration, structural repairs, and refinishing to like-new condition.",
    image:
      "https://images.unsplash.com/photo-1581578731548-7f23fd20e123?w=600&q=80",
    icon: "repair",
  },
  {
    id: "commercial",
    title: "Commercial Fit-Out",
    description:
      "Office reception desks, retail displays, and restaurant interiors delivered on schedule.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    icon: "commercial",
  },
]

export const GALLERY_CATEGORIES = ["All", "Furniture", "Kitchen", "Interior", "Commercial"]

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Oak Dining Set",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
  },
  {
    id: 2,
    title: "Modern Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556912173-46bfcf36f9f1?w=800&q=80",
  },
  {
    id: 3,
    title: "Living Room Paneling",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: 4,
    title: "Executive Desk",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
  },
  {
    id: 5,
    title: "Walnut Bookshelf",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
  },
  {
    id: 6,
    title: "Farmhouse Island",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d4046?w=800&q=80",
  },
  {
    id: 7,
    title: "Ceiling Beams",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 8,
    title: "Boutique Counter",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 9,
    title: "Custom Wardrobe",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80",
  },
]

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    text: "MasterWood transformed our kitchen beyond expectations. Every joint is perfect and the team was professional from start to finish.",
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
    text: "I partner with MasterWood on client projects regularly. Their attention to detail and communication is unmatched in the area.",
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
