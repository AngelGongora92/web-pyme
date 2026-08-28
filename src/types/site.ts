export interface SiteTheme {
  primary: string;
  secondary: string;
  cta: string;
  neutral: string;
}

export interface SiteContact {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapsUrl: string;
  lat: number;
  lng: number;
  showMap: boolean;
}

export interface SiteSocial {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  tiktok?: string;
}

export interface SiteImages {
  logo: string;
  hero: string;
  about: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  whatsappMessage?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DailyHours {
  open: string;
  close: string;
}

export interface Schedule {
  showIndicator: boolean;
  summary: string[];
  hours: {
    "0"?: DailyHours | null;
    "1"?: DailyHours | null;
    "2"?: DailyHours | null;
    "3"?: DailyHours | null;
    "4"?: DailyHours | null;
    "5"?: DailyHours | null;
    "6"?: DailyHours | null;
  };
}

export interface SiteData {
  demoMode: boolean;
  name: string;
  description: string;
  promoBadge: string;
  headline: string;
  subheadline: string;
  sectionTitles: {
    whyUs: string;
    services: string;
    gallery: string;
    testimonials: string;
    location: string;
    faq: string;
  };
  theme: SiteTheme;
  contact: SiteContact;
  schedule: Schedule;
  social: SiteSocial;
  images: SiteImages;
  hero?: {
    ctaText?: string;
    whatsappDefaultMessage?: string;
  };
  whyUs?: { title: string; description: string }[];
  trustBadges?: string[];
  services: Service[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}
