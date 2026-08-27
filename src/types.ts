/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface SoftwareProduct {
  id: string;
  name: string;
  description: string;
  heroDescription: string;
  category: 'Accounting' | 'POS' | 'ERP' | 'Healthcare' | 'Education' | 'Manufacturing' | 'Retail' | 'School ERP';
  categoryLabel: string;
  image: string;
  platformBadges: ('Desktop' | 'Cloud-Based' | 'Offline' | 'Android' | "Single User" |'Windows' | 'Multi-User' | "Browser-Based" | "Mobile Friendly" | "SQL Server")[];
  suitablefor: string; // Industries / Target audience
  keyFeatures: string[]; // 5–6 key features
  // Product Details modal specific fields
  heroImage: string;
  overview: string;
 
  modules: {
    name: string;
    description: string;
    features: string[];
  }[];
  screenshots: {
    url: string;
    caption: string;
  }[];
 
  pricingPlans?: ProductPricingPlan[];
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}
export interface ProductPricingPlan {
  title: string;
  monthlyprice: string;
  yearlyprice: string;
  description: string;
  features: string[];
}

export interface PricingPlan {
  badge: string;
  badgeType: 'standard' | 'popular' | 'enterprise';
  name: string;
  description: string;
  price: string;
  period?: string;
  note: string;
  features: {
    text: string;
    included: boolean;
  }[];
  isFeatured?: boolean;
  urgency?: string;
  buttonText: string;
}
