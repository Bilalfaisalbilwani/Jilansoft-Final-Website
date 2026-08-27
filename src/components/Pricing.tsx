/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  Sparkles,
  Clock,
  ShieldCheck,
  User,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useTheme } from './ThemeContext';

interface PricingPlan {
  name: string;
  badge: string;
  badgeType: 'standard' | 'popular' | 'enterprise';
  priceText: string;
  subPrice?: string;
  description: string;
  deliveryTime: string;
  idealFor: string;
  supportLevel: string;
  features: string[];
  ctaText: string;
}

const SERVICE_PRICING: Record<
  'webDevelopment' | 'customSoftwareDevelopment' | 'ecommerceSolutions',
  PricingPlan[]
> = {
  webDevelopment: [
    {
      name: 'Starter Website',
      badge: 'THE FOUNDATION',
      badgeType: 'standard',
      priceText: 'Custom Quote',
      subPrice: 'Tailored scope & investment. Delivered in 1 week.',
      description:
        'For startups, freelancers, and small businesses looking for a professional online presence.',
      deliveryTime: '1 Week',
      idealFor: 'Local Businesses, Startups, Landing Pages',
      supportLevel: '15-Day Support',
      ctaText: 'Start Your Project',
      features: [
        'Up to 5 responsive pages',
        'Professional design',
        'Mobile-friendly layout',
        'Domain & hosting setup',
        'Contact form',
        'WhatsApp chat integration',
        'Google Maps integration',
        'Social media integration',
        'Basic SEO setup',
        'Website deployment',
      ],
    },
    {
      name: 'Business Website',
      badge: 'FOR GROWING BUSINESS',
      badgeType: 'popular',
      priceText: 'Custom Quote',
      subPrice: 'Tailored scope & investment. Delivered in 3 weeks.',
      description:
        'Designed for businesses that need additional functionality and room to grow.',
      deliveryTime: '3 Weeks',
      idealFor: 'Growing Companies, Service Agencies, Brands',
      supportLevel: '15-Day Support',
      ctaText: 'Start Your Project',
      features: [
        'Everything in Starter',
        'Up to 15 responsive pages',
        'Custom UI/UX',
        'Blog or News section',
        'Advanced SEO setup',
        'Performance optimization',
        'Admin panel',
        'Google Analytics integration',
        'Priority support',
      ],
    },
    {
      name: 'Custom Website Solution',
      badge: 'TAILORED FOR YOUR BUSINESS',
      badgeType: 'enterprise',
      priceText: 'Custom Quote',
      subPrice:
        'Tailored scope, timeline, and pricing based on your business requirements.',
      description:
        'A custom website solution designed for businesses that need unique functionality.',
      deliveryTime: 'Based on Project Requirements',
      idealFor:
        'Growing Businesses, Enterprises, Organizations & Custom Projects',
      supportLevel: '30-Day Support',
      ctaText: 'Start Your Project',
      features: [
        'Everything in Business Website',
        'Fully Custom UI/UX Design',
        'Custom Admin Dashboard',
        'Customer Portal / Client Login',
        'Appointment & Booking System',
        'Secure Payment Gateway Integration',
        'Third-Party API Integrations',
        'Multi-language Website',
        'Daily Automated Backups',
        'Custom database functionality',
      ],
    },
  ],

  customSoftwareDevelopment: [
    {
      name: 'Custom Software Development',
      badge: 'TAILORED FOR YOUR BUSINESS',
      badgeType: 'enterprise',
      priceText: 'Custom Quote',
      subPrice:
        'Pricing, timeline, and scope are tailored to your business requirements.',
      description:
        "Get a software solution designed around your business requirements, whether it's a web application, mobile app, desktop software, ERP, CRM, POS, or another custom business system.",
      deliveryTime: 'Based on Project Scope',
      idealFor: 'Startups, SMEs, Enterprises & Organizations',
      supportLevel: 'Flexible Support & Maintenance Plans',
      ctaText: 'Request Custom Quote',
      features: [
        'Custom Web, Mobile & Desktop Applications',
        'ERP, CRM, POS & Business Management Systems',
        'Custom Dashboard & Business Reports',
        'Role-Based User Access & Security',
        'Third-Party API & Payment Gateway Integrations',
        'Cloud or On-Premise Deployment',
        'Custom Integrations & Workflow Automation',
        'Training & Deployment Assistance',
      ],
    },
  ],

  ecommerceSolutions: [
    {
      name: 'Starter Store',
      badge: 'RAPID STORE LAUNCH',
      badgeType: 'standard',
      priceText: 'Custom Quote',
      subPrice: 'Tailored scope & investment. Delivered in 1 week.',
      description:
        'Build an online store to showcase and sell your products.',
      deliveryTime: '1 Week',
      idealFor: 'New E-commerce Brands, D2C Sellers, Small Retailers',
      supportLevel: '7-Day Support',
      ctaText: 'Start Your Project',
      features: [
        'Shopify or WooCommerce Store Setup',
        'Secure Payment Gateway Integration',
        'Product Catalog Setup & Organization',
        'Mobile-Optimized Responsive Design',
        'WhatsApp Order Integration',
        'Shipping & Tax Configuration',
        'Basic SEO Optimization',
        'Training Guide for Store Management',
      ],
    },
    {
      name: 'Growth Store',
      badge: 'FOR GROWING BUSINESS',
      badgeType: 'popular',
      priceText: 'Custom Quote',
      subPrice: 'Tailored scope & investment. Delivered in 2 weeks.',
      description: 'Advanced e-commerce solution for growing businesses.',
      deliveryTime: '2 Weeks',
      idealFor:
        'Growing E-commerce Businesses & Established Retailers',
      supportLevel: '15-Day Support',
      ctaText: 'Start Your Project',
      features: [
        'Everything in Starter Store',
        'Up to 100 Product Listings',
        'Product Categories & Collections',
        'Product Filtering',
        'Wishlist Functionality',
        'Customer Accounts & Order History',
        'Discounts, Coupons & Bundle Offers',
        'Advanced Analytics & Tracking',
      ],
    },
    {
      name: 'Custom Commerce Solution',
      badge: 'FULLY CUSTOM BUILD',
      badgeType: 'enterprise',
      priceText: 'Custom Quote',
      subPrice:
        'Tailored architecture, features, and timeline based on your business.',
      description:
        'Custom e-commerce solution built for enterprise growth.',
      deliveryTime: 'Based on Project Requirements',
      idealFor:
        'Large Brands, Multi-Vendor Stores, Enterprise E-commerce',
      supportLevel: '30-Day Support',
      ctaText: 'Start Your Project',
      features: [
        'Everything in Growth Store',
        'Custom E-commerce Architecture',
        'Multi-Vendor Marketplace System',
        'Advanced Checkout & Payment Flows',
        'ERP & Inventory System Integration',
        'Customer Accounts & Loyalty System',
        'Advanced Business Automation Tools',
        'Third-Party API Integrations',
        'Multi-language Store Support',
      ],
    },
  ],
};

interface PricingSectionProps {
  onPlanSelect?: (service: string, plan: string) => void;
}

export default function PricingSection({
  onPlanSelect,
}: PricingSectionProps = {}) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState<
    'webDevelopment' | 'customSoftwareDevelopment' | 'ecommerceSolutions'
  >('webDevelopment');

  const [expandedPlans, setExpandedPlans] = useState<
    Record<string, boolean>
  >({});

  const handleServiceChange = (
    service:
      | 'webDevelopment'
      | 'customSoftwareDevelopment'
      | 'ecommerceSolutions'
  ) => {
    setSelectedService(service);
    setExpandedPlans({});
  };

  const toggleFeatures = (planName: string) => {
    setExpandedPlans((previous) => ({
      ...previous,
      [planName]: !previous[planName],
    }));
  };

  const plans = SERVICE_PRICING[selectedService];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-28 border-y transition-colors duration-[400ms] ${
        theme === 'light'
          ? 'bg-white border-slate-200'
          : 'bg-[#0B0F19] border-white/5'
      }`}
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] pointer-events-none blur-3xl rounded-full ${
          theme === 'light'
            ? 'bg-blue-500/[0.035]'
            : 'bg-purple-600/[0.055]'
        }`}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-5 ${
              theme === 'light'
                ? 'text-blue-600 bg-blue-500/5 border border-blue-500/15'
                : 'text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20'
            }`}
          >
          
            Transparent Pricing Models
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="pricing-title"
            className={`font-sans text-[30px] sm:text-4xl lg:text-[46px] font-bold leading-[1.12] mb-5 sm:mb-6 tracking-tight ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}
          >
            Choose the Right Digital{' '}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'light'
                  ? 'from-blue-600 to-indigo-500'
                  : 'from-[#A855F7] via-[#7C3AED] to-[#C084FC]'
              }`}
            >
              Solution for Your Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              theme === 'light'
                ? 'text-[#64748B]'
                : 'text-[#A09BB8]'
            }`}
          >
            Whether you need a professional website, a custom software
            solution, or a complete e-commerce platform, we provide
            tailored quotations and project proposals designed around your specific business requirements.
          </motion.p>
        </div>

        {/* =========================================================
            SERVICE SELECTOR
            FITS MOBILE — NO HORIZONTAL SCROLL
        ========================================================= */}

        <div className="max-w-[780px] mx-auto mb-10 sm:mb-14">
          <div
            className={`grid grid-cols-3 p-1 rounded-2xl border ${
              theme === 'light'
                ? 'bg-slate-100/80 border-slate-200'
                : 'bg-[#111128]/60 border-white/5'
            }`}
          >
            {/* WEB */}
            <button
              type="button"
              onClick={() => handleServiceChange('webDevelopment')}
              className={`min-h-[52px] sm:min-h-[56px] px-2 sm:px-5 rounded-xl text-[9px] sm:text-xs font-bold tracking-[0.04em] sm:tracking-[0.07em] uppercase leading-tight transition-all duration-300 ${
                selectedService === 'webDevelopment'
                  ? theme === 'light'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-[#7C3AED] text-white shadow-lg shadow-purple-500/20'
                  : theme === 'light'
                    ? 'text-slate-500 hover:text-slate-800'
                    : 'text-[#A09BB8] hover:text-white'
              }`}
            >
              Web Development
            </button>

            {/* SOFTWARE */}
            <button
              type="button"
              onClick={() =>
                handleServiceChange('customSoftwareDevelopment')
              }
              className={`min-h-[52px] sm:min-h-[56px] px-2 sm:px-5 rounded-xl text-[9px] sm:text-xs font-bold tracking-[0.04em] sm:tracking-[0.07em] uppercase leading-tight transition-all duration-300 ${
                selectedService === 'customSoftwareDevelopment'
                  ? theme === 'light'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-[#7C3AED] text-white shadow-lg shadow-purple-500/20'
                  : theme === 'light'
                    ? 'text-slate-500 hover:text-slate-800'
                    : 'text-[#A09BB8] hover:text-white'
              }`}
            >
              Software Development
            </button>

            {/* ECOMMERCE */}
            <button
              type="button"
              onClick={() =>
                handleServiceChange('ecommerceSolutions')
              }
              className={`min-h-[52px] sm:min-h-[56px] px-2 sm:px-5 rounded-xl text-[9px] sm:text-xs font-bold tracking-[0.04em] sm:tracking-[0.07em] uppercase leading-tight transition-all duration-300 ${
                selectedService === 'ecommerceSolutions'
                  ? theme === 'light'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-[#7C3AED] text-white shadow-lg shadow-purple-500/20'
                  : theme === 'light'
                    ? 'text-slate-500 hover:text-slate-800'
                    : 'text-[#A09BB8] hover:text-white'
              }`}
            >
              E-commerce Solutions
            </button>
          </div>
        </div>

        {/* =========================================================
            PRICING GRID
        ========================================================= */}

        <div
          className={
            selectedService === 'customSoftwareDevelopment'
              ? 'flex justify-center'
              : 'grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'
          }
        >
          <AnimatePresence mode="wait">
            {plans.map((plan, index) => {
              const isFeatured = index === 1;
              const isExpanded = !!expandedPlans[plan.name];

              const visibleMobileFeatures = plan.features.slice(0, 4);

              return (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`relative flex flex-col rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 lg:p-9 border overflow-hidden transition-all duration-300 ${
                    selectedService ===
                    'customSoftwareDevelopment'
                      ? 'w-full max-w-5xl'
                      : ''
                  } ${
                    isFeatured
                      ? theme === 'light'
                        ? 'bg-white border-blue-500 shadow-2xl shadow-blue-500/10 md:scale-[1.025] z-10'
                        : 'bg-gradient-to-b from-[#17112D] via-[#111128] to-[#0B0F19] border-[#7C3AED]/40 shadow-2xl shadow-purple-500/15 md:scale-[1.025] z-10'
                      : theme === 'light'
                        ? 'bg-[#F8FAFC] border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-xl'
                        : 'bg-[#111128]/30 border-white/5 hover:bg-[#111128]/50 hover:border-white/10 hover:shadow-xl'
                  }`}
                >
                  {/* Featured top accent */}
                  {isFeatured && (
                    <>
                      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-purple-400" />

                      <div className="absolute -top-28 -right-28 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                    </>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* =====================================================
                        BADGE
                    ===================================================== */}

                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold leading-none ${
                          plan.badgeType === 'popular'
                            ? 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-md'
                            : plan.badgeType === 'enterprise'
                              ? theme === 'light'
                                ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                                : 'bg-[#7C3AED]/15 text-[#C084FC] border border-[#7C3AED]/30'
                              : theme === 'light'
                                ? 'bg-slate-200/70 text-slate-700'
                                : 'bg-white/5 text-[#A09BB8]'
                        }`}
                      >
                        {plan.badge}
                      </span>

                      {isFeatured && (
                        <span
                          className={`hidden lg:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${
                            theme === 'light'
                              ? 'text-blue-600'
                              : 'text-[#C084FC]'
                          }`}
                        >
                         
                        </span>
                      )}
                    </div>

                    {/* =====================================================
                        TITLE
                    ===================================================== */}

                    <h3
                      className={`text-[25px] sm:text-3xl font-bold leading-tight mb-3 ${
                        theme === 'light'
                          ? 'text-slate-900'
                          : 'text-white'
                      }`}
                    >
                      {plan.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`text-[14px] sm:text-[15px] leading-relaxed mb-5 ${
                        theme === 'light'
                          ? 'text-[#64748B]'
                          : 'text-[#94A3B8]'
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* =====================================================
                        PRICE
                    ===================================================== */}

                    <div className="mb-1">
                      <span
                        className={`text-[30px] sm:text-4xl font-extrabold tracking-tight ${
                          theme === 'light'
                            ? 'text-[#0F172A]'
                            : 'text-white'
                        }`}
                      >
                        {plan.priceText}
                      </span>
                    </div>

                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed mb-7 ${
                        theme === 'light'
                          ? 'text-slate-400'
                          : 'text-[#6B6590]'
                      }`}
                    >
                      {plan.subPrice}
                    </p>

                    {/* =====================================================
                        QUICK INFORMATION
                    ===================================================== */}

                    <div
                      className={`rounded-2xl p-4 mb-6 border ${
                        theme === 'light'
                          ? 'bg-slate-50 border-slate-200'
                          : 'bg-white/[0.025] border-white/5'
                      }`}
                    >
                      <div className="space-y-3.5">
                        {/* Delivery */}
                        <div className="flex items-start gap-2.5">
                          <Clock
                            size={15}
                            className="text-blue-500 shrink-0 mt-0.5"
                          />

                          <div className="text-[13px] leading-relaxed">
                            <span
                              className={
                                theme === 'light'
                                  ? 'text-slate-500 font-medium'
                                  : 'text-[#A09BB8] font-medium'
                              }
                            >
                              Delivery Time:
                            </span>

                            <span
                              className={`ml-1 font-bold ${
                                theme === 'light'
                                  ? 'text-slate-800'
                                  : 'text-slate-200'
                              }`}
                            >
                              {plan.deliveryTime}
                            </span>
                          </div>
                        </div>

                        {/* Support */}
                        <div className="flex items-start gap-2.5">
                          <ShieldCheck
                            size={15}
                            className="text-blue-500 shrink-0 mt-0.5"
                          />

                          <div className="text-[13px] leading-relaxed">
                            <span
                              className={
                                theme === 'light'
                                  ? 'text-slate-500 font-medium'
                                  : 'text-[#A09BB8] font-medium'
                              }
                            >
                              Support Period:
                            </span>

                            <span
                              className={`ml-1 font-bold ${
                                theme === 'light'
                                  ? 'text-slate-800'
                                  : 'text-slate-200'
                              }`}
                            >
                              {plan.supportLevel}
                            </span>
                          </div>
                        </div>

                        {/* Best For */}
                        <div className="flex items-start gap-2.5">
                          <User
                            size={15}
                            className="text-blue-500 shrink-0 mt-0.5"
                          />

                          <div className="text-[13px] leading-relaxed">
                            <span
                              className={
                                theme === 'light'
                                  ? 'text-slate-500 font-medium'
                                  : 'text-[#A09BB8] font-medium'
                              }
                            >
                              Best For:
                            </span>

                            <span
                              className={`ml-1 font-bold ${
                                theme === 'light'
                                  ? 'text-slate-800'
                                  : 'text-slate-200'
                              }`}
                            >
                              {plan.idealFor}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* =====================================================
                        FEATURES — MOBILE
                    ===================================================== */}

                    <div className="md:hidden mb-5">
                      <div
                        className={`text-[11px] uppercase tracking-widest font-bold mb-3 ${
                          theme === 'light'
                            ? 'text-slate-400'
                            : 'text-[#716B91]'
                        }`}
                      >
                        Included
                      </div>

                      <div className="space-y-3">
                        {visibleMobileFeatures.map(
                          (feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className={`flex items-start gap-3 text-sm ${
                                theme === 'light'
                                  ? 'text-[#0F172A]'
                                  : 'text-[#F8FAFC]'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                                  theme === 'light'
                                    ? 'bg-blue-50 border-blue-200'
                                    : 'bg-[#7C3AED]/20 border-[#7C3AED]/40'
                                }`}
                              >
                                <Check
                                  size={11}
                                  className={
                                    theme === 'light'
                                      ? 'text-blue-600'
                                      : 'text-[#A855F7]'
                                  }
                                  strokeWidth={3}
                                />
                              </span>

                              <span className="leading-relaxed font-medium">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* =====================================================
                        MOBILE ADDITIONAL FEATURES
                    ===================================================== */}

                    {plan.features.length > 4 && (
                      <div className="md:hidden mb-6">
                        <button
                          type="button"
                          onClick={() => toggleFeatures(plan.name)}
                          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl border text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all ${
                            theme === 'light'
                              ? 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                              : 'border-white/10 bg-white/[0.025] text-[#D8D4E8] hover:bg-white/[0.06]'
                          }`}
                        >
                          {isExpanded
                            ? 'Hide Additional Features'
                            : 'View All Features'}

                          {isExpanded ? (
                            <ChevronUp size={15} />
                          ) : (
                            <ChevronDown size={15} />
                          )}
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: 'auto',
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-3">
                                {plan.features
                                  .slice(4)
                                  .map(
                                    (feature, featureIndex) => (
                                      <div
                                        key={featureIndex}
                                        className={`flex items-start gap-3 text-sm ${
                                          theme === 'light'
                                            ? 'text-[#0F172A]'
                                            : 'text-[#F8FAFC]'
                                        }`}
                                      >
                                        <span
                                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                                            theme === 'light'
                                              ? 'bg-blue-50 border-blue-200'
                                              : 'bg-[#7C3AED]/20 border-[#7C3AED]/40'
                                          }`}
                                        >
                                          <Check
                                            size={11}
                                            className={
                                              theme === 'light'
                                                ? 'text-blue-600'
                                                : 'text-[#A855F7]'
                                            }
                                            strokeWidth={3}
                                          />
                                        </span>

                                        <span className="leading-relaxed font-medium">
                                          {feature}
                                        </span>
                                      </div>
                                    )
                                  )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* =====================================================
                        FEATURES — DESKTOP
                    ===================================================== */}

                    <div className="hidden md:block mb-9">
                      <div
                        className={`text-[11px] uppercase tracking-widest font-bold mb-4 ${
                          theme === 'light'
                            ? 'text-slate-400'
                            : 'text-[#716B91]'
                        }`}
                      >
                        What's Included
                      </div>

                      <div className="space-y-3.5">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className={`flex items-start gap-3 text-sm ${
                              theme === 'light'
                                ? 'text-[#0F172A]'
                                : 'text-[#F8FAFC]'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                                theme === 'light'
                                  ? 'bg-blue-50 border-blue-200'
                                  : 'bg-[#7C3AED]/20 border-[#7C3AED]/40'
                              }`}
                            >
                              <Check
                                size={11}
                                className={
                                  theme === 'light'
                                    ? 'text-blue-600'
                                    : 'text-[#A855F7]'
                                }
                                strokeWidth={3}
                              />
                            </span>

                            <span className="leading-relaxed font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* =====================================================
                        CTA
                    ===================================================== */}

                    <button
                      type="button"
                      onClick={() => {
                        if (onPlanSelect) {
                          onPlanSelect(selectedService, plan.name);
                        } else {
                          navigate('/contact', {
                            state: { inquirySubject: `Inquiry for ${plan.name} (${selectedService})` },
                          });
                        }
                      }}
                      className={`group mt-auto w-full py-4 rounded-xl text-center font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-xl shadow-blue-500/20 hover:shadow-purple-500/30 hover:scale-[1.01] focus:ring-blue-500'
                          : theme === 'light'
                            ? 'border border-slate-300 hover:border-blue-400 text-[#0F172A] hover:bg-blue-50/50 focus:ring-blue-500'
                            : 'border border-white/10 hover:border-[#7C3AED]/50 text-[#F8FAFC] hover:bg-[#7C3AED]/10 focus:ring-[#7C3AED]'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {plan.ctaText}

                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}