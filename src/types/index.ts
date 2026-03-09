export interface Product {
  id: string;
  slug: string;
  model: string;
  name: string;
  category: 'night-vision' | 'thermal';
  subcategory: string;
  description: string;
  specs: ProductSpec[];
  markets: ('MIL' | 'LE' | 'CIV')[];
  price: number | null;
  images: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Course {
  id: string;
  slug: string;
  name: string;
  category: 'long-range' | 'pistol' | 'custom';
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'professional' | 'tactical';
  description: string;
  duration: string;
  format: string;
  date: string;
  location: string;
  spotsRemaining: number;
  price: number;
  includes: string[];
}

export interface RangeBuild {
  id: string;
  name: string;
  location: string;
  type: string;
  lanes: number;
  maxDistance: string;
  image: string;
}

export interface Instructor {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'ar' | 'ja' | 'ko' | 'zh';
