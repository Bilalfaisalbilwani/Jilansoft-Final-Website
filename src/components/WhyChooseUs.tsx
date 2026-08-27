/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CheckCircle2,
  Settings2,
  RefreshCw,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Headphones,
} from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function WhyChooseUs() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const reasons = [
    {
      title: 'Solutions Based on Your Requirements',
      description:
        'We first understand what your business needs and then help you choose or build a solution that fits those requirements.',
      icon: CheckCircle2,
    },
    {
      title: 'Ready-Made or Custom',
      description:
        'You can choose an existing software solution where it fits your needs, or have a custom solution developed for requirements that need something different.',
      icon: Settings2,
    },
    {
      title: 'Work With What You Already Have',
      description:
        'You do not always need to start from scratch. We can modify, improve, update, or extend an existing website according to your requirements.',
      icon: RefreshCw,
    },
    {
      title: 'Technology & Business Support',
      description:
        'Along with development services, we provide business consultation, business analysis, and project management support when a project requires it.',
      icon: BriefcaseBusiness,
    },
    {
      title: 'Solutions for Different Business Needs',
      description:
        'From a business website or online store to business software and project support, we work with different types of business requirements.',
      icon: Building2,
    },
    {
      title: 'Pakistan-Based, Internationally Ready',
      description:
        'We are based in Pakistan and provide services for Pakistani businesses while being ready to collaborate remotely with international clients.',
      icon: Globe2,
    },
  ];

  return (
    <section
      className={`py-24 sm:py-32 border-b transition-colors duration-300 ${
        isLight
          ? 'bg-white text-slate-900 border-slate-200'
          : 'bg-[#0A0A14] text-white border-white/5'
      }`}
      id="why-choose-us"
    >
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
              isLight
                ? 'bg-blue-100 text-blue-700'
                : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
            }`}
          >
            Why JilanSoft
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-4 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Why Choose Us
          </h2>

          <p
            className={`text-base leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            We work with your requirements and provide practical technology
            and business solutions based on what your project actually needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isLight
                    ? 'bg-slate-50/70 border-slate-200 hover:border-blue-300 shadow-sm'
                    : 'bg-[#111827]/40 border-white/5 hover:border-purple-500/30'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    isLight
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-purple-500/15 text-purple-400 border border-purple-500/25'
                  }`}
                >
                  <Icon size={24} />
                </div>

                <h3
                  className={`font-display text-lg font-bold mb-3 ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Support / Communication Note */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-center ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          <Headphones size={18} />
          <span>
            We build solutions around your business requirements and project goals.
          </span>
        </div>

      </div>
    </section>
  );
}