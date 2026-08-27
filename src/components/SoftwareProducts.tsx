/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Code2,
  Wrench,
  BriefcaseBusiness,
  Database,
  Zap,
  Building2,
  ClipboardCheck,
} from 'lucide-react';
import { useTheme } from './ThemeContext';

interface ServiceCategory {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  services: string[];
  cta: string;
  target: string;
}

export default function Services() {
  const { theme } = useTheme();

  const serviceCategories: ServiceCategory[] = [
    {
      icon: <Globe size={25} />,
      title: 'Web Development',
      subtitle:
        'Professional websites designed around your business, brand, goals, and audience.',
      services: [
        'Business & Corporate Websites',
        'Service-Based Websites',
        'Landing Pages',
        'Portfolio Websites',
        'Responsive Website Development',
      ],
      cta: 'Explore Web Solutions',
      target: '/contact',
    },

    {
      icon: <ShoppingCart size={25} />,
      title: 'E-commerce Development',
      subtitle:
        'Complete online store solutions for businesses looking to sell products and manage their online operations.',
      services: [
        'Shopify Stores',
        'WooCommerce Stores',
        'Custom E-commerce Solutions',
        'Payment Integration',
        'Product & Store Setup',
      ],
      cta: 'Explore E-commerce',
      target: '/contact',
    },

    {
      icon: <Code2 size={25} />,
      title: 'Custom Software Development',
      subtitle:
        'Software developed around your specific business processes, workflows, and operational requirements.',
      services: [
        'Business Management Systems',
        'ERP & CRM Solutions',
        'POS & Accounting Systems',
        'Inventory Management',
        'Custom Business Applications',
      ],
      cta: 'Discuss Your Software',
      target: '/contact',
    },

    {
      icon: <Database size={25} />,
      title: 'Ready-Made Software',
      subtitle:
        'Ready-to-use software solutions for businesses that need practical systems without starting from scratch.',
      services: [
        'School Management Software',
        'Accounting Software',
        'Inventory Management Systems',
        'POS Software',
        'Business Management Software',
      ],
      cta: 'View Software Solutions',
      target: '#work',
    },

    {
      icon: <Wrench size={25} />,
      title: 'Website Modification & Enhancement',
      subtitle:
        'Improve, update, fix, redesign, or extend your existing website without starting the project from zero.',
      services: [
        'Website Redesign & Updates',
        'New Feature Development',
        'UI & Layout Improvements',
        'Bug Fixes & Technical Changes',
        'Performance & Functionality Improvements',
      ],
      cta: 'Improve Your Website',
      target: '/contact',
    },

    {
      icon: <ClipboardCheck size={25} />,
      title: 'Business Consulting & Project Services',
      subtitle:
        'Practical guidance and professional support to help you plan, analyze, manage, and execute your business technology projects.',
      services: [
        'Business Consultation',
        'Business Analysis',
        'Project Management',
        'Requirements Analysis',
        'Technology & Solution Planning',
      ],
      cta: 'Discuss Your Project',
      target: '/contact',
    },
  ];

  return (
    <section
      id="services"
      className={`relative pt-8 pb-24 sm:pt-10 sm:pb-32 border-y transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#F8FAFC] border-slate-200'
          : 'bg-[#0B0F19] border-white/5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] mb-6 ${
              theme === 'light'
                ? 'text-blue-600 bg-blue-50 border border-blue-100'
                : 'text-[#C084FC] bg-[#7C3AED]/10 border border-[#7C3AED]/20'
            }`}
          >
            <Zap size={13} />
            What We Do
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-5 ${
              theme === 'light' ? 'text-[#0F172A]' : 'text-white'
            }`}
          >
            Technology & Business Solutions{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              Built for Your Needs
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              theme === 'light'
                ? 'text-[#64748B]'
                : 'text-[#94A3B8]'
            }`}
          >
            From websites and e-commerce platforms to ready-made and custom
            software, website enhancements, and business project services,
            we provide practical solutions designed around your requirements.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {serviceCategories.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-3xl p-7 sm:p-8 border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40'
                  : 'bg-[#111827] border-white/5 hover:border-[#7C3AED]/30 hover:bg-[#131B2B] hover:shadow-2xl hover:shadow-purple-900/10'
              }`}
            >
              {/* Background Glow */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  theme === 'light'
                    ? 'bg-blue-200/40'
                    : 'bg-purple-600/10'
                }`}
              />

              <div className="relative z-10 flex flex-col h-full">

                {/* Icon */}
                <div
                  className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-7 border transition-all duration-300 group-hover:scale-105 ${
                    theme === 'light'
                      ? 'bg-blue-50 border-blue-100 text-blue-600 group-hover:bg-blue-100'
                      : 'bg-[#7C3AED]/10 border-[#7C3AED]/20 text-[#A855F7] group-hover:bg-[#7C3AED]/15'
                  }`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl sm:text-[22px] font-bold tracking-tight mb-2 transition-colors ${
                    theme === 'light'
                      ? 'text-[#0F172A] group-hover:text-blue-600'
                      : 'text-white group-hover:text-[#C084FC]'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-7 ${
                    theme === 'light'
                      ? 'text-[#64748B]'
                      : 'text-[#94A3B8]'
                  }`}
                >
                  {service.subtitle}
                </p>

                {/* Service List */}
                <div
                  className={`border-t pt-6 mb-8 ${
                    theme === 'light'
                      ? 'border-slate-100'
                      : 'border-white/5'
                  }`}
                >
                  <div className="space-y-3.5">
                    {service.services.map((item) => (
                      <div
                        key={item}
                        className={`flex items-center gap-3 text-sm ${
                          theme === 'light'
                            ? 'text-slate-700'
                            : 'text-slate-200'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            theme === 'light'
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-[#7C3AED]/10 text-[#A855F7]'
                          }`}
                        >
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        </span>

                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {service.target.startsWith('/') ? (
                  <Link
                    to={service.target}
                    state={{
                      inquirySubject: `I'm interested in ${service.title}.`,
                      selectedService: service.title,
                    }}
                    className={`mt-auto inline-flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-slate-50 text-slate-700 hover:bg-blue-600 hover:text-white'
                        : 'bg-white/5 text-white hover:bg-[#7C3AED] hover:text-white'
                    }`}
                  >
                    <span>{service.cta}</span>

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                ) : (
                  <a
                    href={service.target}
                    className={`mt-auto inline-flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-slate-50 text-slate-700 hover:bg-blue-600 hover:text-white'
                        : 'bg-white/5 text-white hover:bg-[#7C3AED] hover:text-white'
                    }`}
                  >
                    <span>{service.cta}</span>

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div
          className={`mt-10 rounded-2xl border px-6 py-5 ${
            theme === 'light'
              ? 'bg-white border-slate-200'
              : 'bg-[#111827] border-white/5'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 text-center">

            <div className="flex items-center gap-2.5">
              <Building2 size={18} className="text-[#7C3AED]" />
              <span
                className={`text-sm font-semibold ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Solutions for Businesses of All Sizes
              </span>
            </div>

            <div
              className={`hidden md:block w-px h-5 ${
                theme === 'light' ? 'bg-slate-200' : 'bg-white/10'
              }`}
            />

            <div className="flex items-center gap-2.5">
              <BriefcaseBusiness size={18} className="text-[#7C3AED]" />
              <span
                className={`text-sm font-semibold ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                For Startups & Established Businesses
              </span>
            </div>

            <div
              className={`hidden md:block w-px h-5 ${
                theme === 'light' ? 'bg-slate-200' : 'bg-white/10'
              }`}
            />

            <div className="flex items-center gap-2.5">
              <Globe size={18} className="text-[#7C3AED]" />
              <span
                className={`text-sm font-semibold ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Serving Pakistan & Ready for International Projects
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}