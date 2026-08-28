/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  ArrowRight,
  MessageSquare,
  X,
  Calendar,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';

interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Process' | 'Billing';
}

const FAQ_DATA: FaqItem[] = [
  {
    category: 'Services',
    question: 'What services does Jilansoft provide?',
    answer:
      'Jilansoft provides web development, e-commerce development, ready-made business software, custom software development, website and software modification, business consultation, business analysis, and project management services.'
  },

  {
    category: 'Services',
    question: 'Can you build a website for my business?',
    answer:
      'Yes. We build modern, responsive, and professional websites for businesses, organizations, startups, and growing brands based on their goals and requirements.'
  },

  {
    category: 'Services',
    question: 'Can you build an online store for my business?',
    answer:
      'Yes. We develop e-commerce stores using Shopify, WordPress, and custom-coded solutions with features such as product management, secure checkout, order management, and payment integration.'
  },

  {
    category: 'Services',
    question: 'Can you build custom software for my business?',
    answer:
      'Yes. We develop custom software solutions such as business management systems, CRMs, inventory systems, POS systems, ERP solutions, dashboards, and other applications tailored to your specific workflow.'
  },

  {
    category: 'Services',
    question: 'Do you provide ready-made business software?',
    answer:
      'Yes. We provide ready-made software solutions for common business and organizational needs, including accounting, school management, and other operational requirements.'
  },

  {
    category: 'Services',
    question: 'Can you modify or improve my existing website or software?',
    answer:
      'Yes. We can modify, redesign, customize, improve, maintain, or add new features to existing websites and software applications while working around your existing requirements and data where possible.'
  },

  {
    category: 'Services',
    question: 'Do you provide business consultation and analysis?',
    answer:
      'Yes. We provide business and technology consultation, business analysis, requirements analysis, process improvement guidance, and recommendations for suitable digital solutions.'
  },

  {
    category: 'General',
    question: 'Do you work with small businesses and startups?',
    answer:
      'Yes. We work with startups, small businesses, and established organizations to develop practical digital solutions that can support their current needs and future growth.'
  },

  {
    category: 'General',
    question: 'Will my website or software be mobile-friendly and responsive?',
    answer:
      'Yes. Websites and web applications are developed with responsive layouts so they can work effectively across desktops, tablets, and mobile devices.'
  },

  {
    category: 'General',
    question: 'Do you work with clients outside Pakistan?',
    answer:
      'Yes. Jilansoft is ready to work with clients in Pakistan as well as international clients and can provide web, software, e-commerce, and consulting services remotely.'
  },

  {
    category: 'General',
    question: 'How can I contact Jilansoft?',
    answer:
      'You can contact us through WhatsApp, email, or our contact form. Share your requirements with us and we will review your project and get back to you.'
  },

  {
    category: 'Process',
    question: 'How does the project process work?',
    answer:
      'We start by understanding your requirements and business goals, then analyze the project, define the solution, plan the work, develop or configure the required system, test it, and deliver the final solution.'
  },

  {
    category: 'Process',
    question: 'How long does a project take?',
    answer:
      'Project timelines depend on the scope and complexity of the work. A basic website may take around 1–2 weeks, while advanced web applications, dashboards, or custom software may take 3–4 weeks or more.'
  },

  {
    category: 'Process',
    question: 'Can you manage the project from planning to delivery?',
    answer:
      'Yes. We can provide project management support covering planning, requirements, coordination, development oversight, testing, delivery, and project execution.'
  },

  {
    category: 'Billing',
    question: 'How much does a website or software project cost?',
    answer:
      'Pricing depends on the project scope, features, technology, integrations, and complexity. We provide a customized estimate after understanding your specific requirements.'
  },

  {
    category: 'Billing',
    question: 'Are there any hidden charges?',
    answer:
      'No. We follow a transparent pricing approach. Project costs, requirements, and agreed deliverables are discussed clearly before development begins.'
  }
];

export default function Faq() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<
    'All' | 'General' | 'Services' | 'Process' | 'Billing'
  >('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories: (
    | 'All'
    | 'General'
    | 'Services'
    | 'Process'
    | 'Billing'
  )[] = ['All', 'General', 'Services', 'Process', 'Billing'];

  /*
   * FAQ structured data is generated from the same FAQ_DATA
   * that is displayed on the page.
   *
   * This keeps the visible FAQ and SEO schema synchronized.
   */
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;

      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
        }}
      />

      <section
        className={`py-24 sm:py-32 transition-all duration-[400ms] ease-in-out border-y ${
          theme === 'light'
            ? 'bg-[#F8FAFC] border-slate-200 text-slate-900'
            : 'bg-[#0B0F19] border-white/5 text-white'
        }`}
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="max-w-[1240px] mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 transition-colors duration-[400ms] ${
                theme === 'light'
                  ? 'text-blue-600 bg-blue-500/5 border border-blue-500/15'
                  : 'text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20'
              }`}
            >
              <HelpCircle size={14} className="animate-pulse" />
              Have Questions?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              id="faq-title"
              className={`font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.15] mb-6 tracking-tight transition-colors duration-[400ms] ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`}
            >
              Let's Clear{' '}
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  theme === 'light'
                    ? 'from-blue-600 to-indigo-500'
                    : 'from-[#A855F7] via-[#7C3AED] to-[#C084FC]'
                }`}
              >
                Things Up
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-base sm:text-lg max-w-2xl mx-auto transition-colors duration-[400ms] ${
                theme === 'light'
                  ? 'text-slate-500'
                  : 'text-[#A09BB8]'
              }`}
            >
              Find answers about our services, development process, pricing,
              timelines, communication, and business solutions.
            </motion.p>
          </div>

          {/* Search and Category Filters */}
          <div className="max-w-[850px] mx-auto mb-10 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

              {/* Search */}
              <div className="relative w-full md:max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300">
                  <Search
                    className={`transition-colors duration-300 ${
                      theme === 'light'
                        ? 'text-slate-400'
                        : 'text-[#6B6590]'
                    }`}
                    size={18}
                  />
                </span>

                <input
                  id="faq-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search FAQs (e.g., responsive, pricing, software...)"
                  aria-label="Search frequently asked questions"
                  className={`w-full rounded-xl pl-12 pr-10 py-3.5 text-sm outline-none border transition-all duration-300 font-sans ${
                    theme === 'light'
                      ? 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm'
                      : 'bg-[#111128]/50 border-white/5 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:ring-4 focus:ring-[#7C3AED]/10'
                  }`}
                />

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search input"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <X
                      size={14}
                      className={
                        theme === 'light'
                          ? 'text-slate-400'
                          : 'text-[#A09BB8]'
                      }
                    />
                  </button>
                )}
              </div>

              {/* Category Selectors */}
              <div
                className="flex flex-wrap gap-2 justify-center"
                role="tablist"
                aria-label="FAQ Categories"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setExpandedIndex(null);
                    }}
                    className={`relative px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 ${
                      activeCategory === cat
                        ? theme === 'light'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md shadow-blue-500/25 focus:ring-blue-500'
                          : 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg shadow-purple-500/25 focus:ring-[#7C3AED]'
                        : theme === 'light'
                          ? 'bg-white border border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-50 focus:ring-blue-500'
                          : 'bg-[#111128]/30 border border-white/5 text-[#A09BB8] hover:border-white/10 hover:text-white focus:ring-[#7C3AED]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-[850px] mx-auto space-y-4">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {filteredFaqs.map((faq, index) => {
                    const isExpanded = expandedIndex === index;

                    return (
                      <motion.div
                        layout
                        key={faq.question}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isExpanded
                            ? theme === 'light'
                              ? 'bg-white border-blue-500/30 shadow-md shadow-blue-500/5'
                              : 'bg-[#111128]/80 border-purple-500/30 shadow-xl shadow-purple-500/5'
                            : theme === 'light'
                              ? 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                              : 'bg-[#111128]/30 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <button
                          onClick={() => toggleExpand(index)}
                          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                          aria-expanded={isExpanded}
                        >
                          <span
                            className={`font-sans font-bold text-sm sm:text-base tracking-tight transition-colors duration-200 ${
                              isExpanded
                                ? theme === 'light'
                                  ? 'text-blue-600'
                                  : 'text-[#A855F7]'
                                : theme === 'light'
                                  ? 'text-slate-800'
                                  : 'text-slate-100'
                            }`}
                          >
                            {faq.question}
                          </span>

                          <span
                            className={`p-1.5 rounded-lg transition-all duration-300 shrink-0 ${
                              isExpanded
                                ? theme === 'light'
                                  ? 'bg-blue-50 text-blue-600 rotate-180'
                                  : 'bg-purple-500/15 text-[#A855F7] rotate-180'
                                : theme === 'light'
                                  ? 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
                            }`}
                          >
                            <ChevronDown size={16} />
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.25,
                                ease: 'easeInOut'
                              }}
                            >
                              <div
                                className={`px-6 pb-6 pt-1 text-sm leading-relaxed transition-colors font-sans font-normal ${
                                  theme === 'light'
                                    ? 'text-slate-600 border-t border-slate-50'
                                    : 'text-[#A09BB8] border-t border-white/5'
                                }`}
                              >
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                /* Empty Search State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`text-center py-16 px-6 border border-dashed rounded-3xl ${
                    theme === 'light'
                      ? 'border-slate-300 bg-white'
                      : 'border-white/10 bg-[#111128]/20'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      theme === 'light'
                        ? 'bg-slate-100 text-slate-400'
                        : 'bg-white/5 text-slate-500'
                    }`}
                  >
                    <ShieldAlert size={24} />
                  </div>

                  <h3
                    className={`text-lg font-bold font-sans mb-1.5 ${
                      theme === 'light'
                        ? 'text-slate-800'
                        : 'text-white'
                    }`}
                  >
                    No results match "{searchQuery}"
                  </h3>

                  <p
                    className={`text-xs max-w-sm mx-auto mb-6 ${
                      theme === 'light'
                        ? 'text-slate-400'
                        : 'text-[#6B6590]'
                    }`}
                  >
                    Try keywords like "responsive", "pricing", "software", or
                    "store" to find what you need.
                  </p>

                  <button
                    onClick={() => setSearchQuery('')}
                    className={`px-5 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105 cursor-pointer focus:outline-none ${
                      theme === 'light'
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
                    }`}
                  >
                    Clear Search Filter
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Conversion CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`max-w-[850px] mx-auto mt-20 p-8 sm:p-10 rounded-3xl border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-[400ms] ${
              theme === 'light'
                ? 'bg-gradient-to-tr from-blue-50/50 via-indigo-50/20 to-white border-blue-100 shadow-md shadow-slate-100/50'
                : 'bg-gradient-to-tr from-[#111128]/80 via-[#181832]/40 to-[#0B0F19] border-[#7C3AED]/15 shadow-xl'
            }`}
          >
            {/* Subtle Design Flare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex gap-4 items-center text-left relative z-10">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-white border-blue-200 text-blue-600 shadow-sm'
                    : 'bg-[#7C3AED]/10 border-[#7C3AED]/20 text-[#A855F7] shadow-lg'
                }`}
              >
                <MessageSquare size={24} className="animate-pulse" />
              </div>

              <div>
                <h4
                  className={`font-sans font-extrabold text-lg sm:text-xl tracking-tight leading-snug ${
                    theme === 'light'
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}
                >
                  Still Have Questions?
                </h4>

                <p
                  className={`text-sm mt-1 leading-relaxed ${
                    theme === 'light'
                      ? 'text-slate-500'
                      : 'text-[#A09BB8]'
                  }`}
                >
                  Let's discuss your requirements and find the right solution
                  for your business.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative z-10 shrink-0">

              {/* Primary Action */}
              <a
                href="#contact"
                className={`px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 ${
                  theme === 'light'
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/10 focus:ring-blue-500'
                    : 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-95 text-white shadow-lg shadow-purple-500/20 focus:ring-[#7C3AED]'
                }`}
              >
                <span>Book Free Consultation</span>
                <Calendar size={13} />
              </a>

              {/* Secondary Action */}
              <a
                href="mailto:jilansoft@gmail.com"
                className={`px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 border focus:outline-none focus:ring-2 ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 focus:ring-blue-500'
                    : 'bg-transparent border-white/10 hover:bg-white/5 text-white focus:ring-white/20'
                }`}
              >
                <span>Contact Us</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}