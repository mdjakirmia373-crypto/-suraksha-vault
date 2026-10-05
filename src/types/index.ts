export type Language = 'bn' | 'en';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type ThemePalette = 'emerald' | 'navy' | 'slate' | 'crimson' | 'amber';

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  deliverables: string[];
  deliverablesEn: string[];
  timeline: string;
  timelineEn: string;
  startingPrice: string;
  startingPriceEn: string;
  featured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  metric: string;
  metricEn: string;
  metricContext: string;
  metricContextEn: string;
  description: string;
  descriptionEn: string;
  imageSrc: string;
  client: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  company: string;
  content: string;
  contentEn: string;
  outcome: string;
  outcomeEn: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export interface WebsiteConfig {
  id: string;
  categoryName: string;
  categoryNameEn: string;
  brandName: string;
  brandNameEn: string;
  tagline: string;
  taglineEn: string;
  heroHeadline: string;
  heroHeadlineEn: string;
  heroSubheadline: string;
  heroSubheadlineEn: string;
  heroImage: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  locationEn: string;
  stats: {
    value: string;
    label: string;
    labelEn: string;
  }[];
  services: ServiceItem[];
  caseStudies: CaseStudyItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
}

export interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  packageType: string;
  budget: string;
  message: string;
  createdAt: string;
}
