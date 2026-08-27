/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import {
  Building2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

export default function About() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const solutionAreas = [
    'Accounting & Finance',
    'Inventory Management',
    'Point of Sale (POS)',
    'Distribution Management',
    'Manufacturing',
    'Human Resources & Payroll',
    'Attendance Management',
    'Schools & Colleges',
    'Hospitals & Clinics',
    'Laboratories',
  ];

  return (

    <section
      id="about"
      className={`relative overflow-hidden border-b transition-colors duration-500 ${isLight
        ? 'bg-white border-slate-100 text-slate-900'
        : 'bg-[#070910] border-white/[0.05] text-white'
        }`}
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Top-left violet glow */}
        <div
          className={`absolute -top-56 -left-56 w-[650px] h-[650px] rounded-full blur-[150px] ${isLight
            ? 'bg-violet-500/[0.055]'
            : 'bg-violet-600/[0.085]'
            }`}
        />

        {/* Bottom-right blue glow */}
        <div
          className={`absolute -bottom-56 -right-56 w-[650px] h-[650px] rounded-full blur-[150px] ${isLight
            ? 'bg-blue-500/[0.045]'
            : 'bg-blue-500/[0.055]'
            }`}
        />

        {/* Subtle center glow */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[160px] ${isLight
            ? 'bg-violet-400/[0.018]'
            : 'bg-violet-500/[0.025]'
            }`}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 py-24 sm:py-32 relative z-10">

        {/* =====================================================
            INTRO
        ====================================================== */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end mb-16 lg:mb-20">

          {/* LEFT — HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.65,
              ease: 'easeOut',
            }}
            className="lg:col-span-7"
          >
            {/* Label */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.17em] mb-6 ${isLight
                ? 'bg-violet-50 text-violet-700 border border-violet-100'
                : 'bg-violet-500/[0.08] text-violet-300 border border-violet-500/[0.18]'
                }`}
            >
              <Building2
                size={13}
                strokeWidth={2.2}
              />

              About Jilansoft
            </div>

            {/* Main Heading */}
            <h2
              className={`text-[38px] sm:text-5xl lg:text-[58px] font-black tracking-[-0.05em] leading-[1.03] ${isLight
                ? 'text-slate-950'
                : 'text-white'
                }`}
            >
              Technology built around

              <span className="block mt-2 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                real business needs.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT — INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: 'easeOut',
            }}
            className="lg:col-span-5"
          >
            <div
              className={`relative pl-5 border-l-2 ${isLight
                ? 'border-violet-200'
                : 'border-violet-500/30'
                }`}
            >
              <p
                className={`text-[15px] sm:text-base leading-[1.8] ${isLight
                  ? 'text-slate-600'
                  : 'text-slate-400'
                  }`}
              >
                Jilansoft is a technology company that has been providing
                software solutions to businesses and organizations since
                2009. We develop practical systems that help businesses
                manage their operations.
              </p>
            </div>
          </motion.div>

        </div>


        {/* =====================================================
            COMPANY STORY + ESTABLISHED CARD
        ====================================================== */}

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">

          {/* =================================================
              COMPANY STORY CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            whileHover={{
              y: -3,
            }}
            className={`group relative rounded-[28px] p-7 sm:p-8 lg:p-9 border h-full min-h-[430px] transition-all duration-500 ${isLight
              ? 'bg-slate-50/80 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]'
              : 'bg-white/[0.025] border-white/[0.07] hover:bg-white/[0.035] hover:border-white/[0.11] hover:shadow-[0_25px_80px_rgba(0,0,0,0.28)]'
              }`}
          >

            {/* Card hover glow */}
            <div
              className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isLight
                ? 'bg-violet-400/[0.10]'
                : 'bg-violet-500/[0.08]'
                }`}
            />

            <div className="relative z-10 h-full flex flex-col">

              {/* CARD HEADER */}
              <div className="flex items-center gap-3 mb-8">

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-[14px] flex items-center justify-center transition-all duration-500 ${isLight
                    ? 'bg-white border border-slate-200 shadow-sm group-hover:border-violet-200'
                    : 'bg-white/[0.04] border border-white/[0.07] group-hover:bg-violet-500/[0.08] group-hover:border-violet-500/[0.15]'
                    }`}
                >
                  <Sparkles
                    size={18}
                    className="text-violet-500"
                  />
                </div>

                {/* Heading */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-violet-500">
                    What We Do
                  </p>

                  <h3
                    className={`text-[17px] sm:text-lg font-bold mt-1 tracking-[-0.02em] ${isLight
                      ? 'text-slate-900'
                      : 'text-white'
                      }`}
                  >
                    Practical software for everyday operations.
                  </h3>
                </div>

              </div>


              {/* CARD CONTENT */}
              <div className="space-y-5">

                <p
                  className={`text-sm sm:text-[15px] leading-[1.8] ${isLight
                    ? 'text-slate-600'
                    : 'text-slate-400'
                    }`}
                >
                  JilanSoft provides practical business management systems covering areas such as accounting, inventory, point of sale (POS), distribution, manufacturing, human resources, payroll, attendance, and other operational requirements.
                </p>

                <p
                  className={`text-sm sm:text-[15px] leading-[1.8] ${isLight
                    ? 'text-slate-600'
                    : 'text-slate-400'
                    }`}
                >
                  Our solutions also include management systems for schools, colleges, institutes, hospitals, clinics, and laboratories.
                  
                </p>
                <p
                  className={`text-sm sm:text-[15px] leading-[1.8] ${isLight
                    ? 'text-slate-600'
                    : 'text-slate-400'
                    }`}
                >
                  In addition, we develop tailored digital solutions for businesses and organizations, including modern websites, e-commerce platforms, custom software, and other technology solutions built around specific business requirements.
                </p>
              </div>

              {/* BOTTOM ACCENT */}
              <div className="mt-auto pt-8">

                <div
                  className={`h-px w-full ${isLight
                    ? 'bg-gradient-to-r from-violet-200 via-slate-200 to-transparent'
                    : 'bg-gradient-to-r from-violet-500/20 via-white/[0.06] to-transparent'
                    }`}
                />

              </div>

            </div>
          </motion.div>


          {/* =================================================
              ESTABLISHED SINCE 2009 CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: 'easeOut',
            }}
            whileHover={{
              y: -3,
            }}
            className={`group relative overflow-hidden rounded-[28px] p-7 sm:p-8 lg:p-9 border h-full min-h-[430px] transition-all duration-500 ${isLight
              ? 'bg-slate-950 text-white border-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.18)]'
              : 'bg-gradient-to-br from-[#181229] via-[#100D1C] to-[#090B11] border-white/[0.08] hover:border-white/[0.12] hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]'
              }`}
          >

            {/* Decorative rings */}
            <div className="absolute -right-28 -top-28 w-72 h-72 rounded-full border border-violet-400/[0.08]" />

            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-violet-400/[0.08]" />

            <div className="absolute -right-4 -top-4 w-28 h-28 rounded-full border border-violet-400/[0.06]" />


            {/* Background glow */}
            <div className="absolute -right-24 top-16 w-64 h-64 rounded-full bg-violet-600/[0.08] blur-[100px]" />


            <div className="relative z-10 h-full flex flex-col">

              {/* TOP CONTENT */}
              <div>

                {/* Icon + Since */}
                <div className="flex items-center justify-between">

                  <div className="w-11 h-11 rounded-[14px] bg-white/[0.07] border border-white/[0.09] flex items-center justify-center transition-all duration-500 group-hover:bg-violet-500/[0.12] group-hover:border-violet-400/[0.18]">
                    <ShieldCheck
                      size={20}
                      className="text-violet-300"
                    />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/35">
                    Since
                  </span>

                </div>


                {/* YEAR */}
                <div className="mt-10">

                  <div className="text-[72px] sm:text-[88px] font-black tracking-[-0.075em] leading-[0.9] bg-gradient-to-br from-white via-white to-white/45 bg-clip-text text-transparent">
                    2009
                  </div>

                  <p className="mt-6 max-w-[300px] text-sm leading-[1.75] text-white/50">
                    Providing software solutions for businesses and
                    organizations
                  </p>

                </div>

              </div>


              {/* BOTTOM INFORMATION */}
              <div className="mt-auto pt-10 space-y-4">

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/[0.10] via-white/[0.05] to-transparent mb-5" />


                {/* Business solutions */}
                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">

                    <Building2
                      size={15}
                      className="text-violet-300"
                    />

                  </div>

                  <span className="text-xs font-semibold text-white/65">
                    Business & organizational solutions
                  </span>

                </div>


                {/* Industry systems */}
                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">

                    <Users
                      size={15}
                      className="text-violet-300"
                    />

                  </div>

                  <span className="text-xs font-semibold text-white/65">
                    Multiple industry-specific systems
                  </span>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );


}