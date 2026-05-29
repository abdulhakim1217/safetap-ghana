// Site configuration constants
export const SITE_CONFIG = {
  name: "SafeTap Ghana",
  description:
    "Low-cost, touchless smart water dispensing for schools and public facilities across Northern Ghana. Safer hands, healthier children, resilient communities.",
  url: "https://safetap.gh",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/SafeTapGhana",
    linkedin: "https://linkedin.com/company/safetap-ghana",
    instagram: "https://instagram.com/safetapghana",
    email: "hello@safetap.gh",
  },
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: "#problem", label: "The Problem" },
  { href: "#mission", label: "The Mission" },
  { href: "#tech", label: "Our Tech" },
  { href: "#impact", label: "Impact" },
] as const;

// Impact statistics
export const IMPACT_STATS = {
  communities: "24",
  waterDispensed: "400k L",
  facilities: "42",
  illnessReduction: "45%",
  studentsServed: "12k+",
} as const;

// Contact information
export const CONTACT_INFO = {
  email: "hello@safetap.gh",
  phone: "+233 XX XXX XXXX",
  address: "Tamale, Northern Region, Ghana",
} as const;
