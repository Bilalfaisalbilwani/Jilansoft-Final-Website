/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Code2,
  ShoppingCart,
  Database,
  Layers3,
  Sparkles,
} from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const services = [
    {
      icon: Code2,
      title: 'Web',
      subtitle: 'Development',
      position: 'top-[5%] left-[0%]',
      delay: 0,
    },
    {
      icon: Layers3,
      title: 'Software',
      subtitle: 'Solutions',
      position: 'top-[14%] right-[-1%]',
      delay: 0.15,
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce',
      subtitle: 'Systems',
      position: 'bottom-[10%] right-[2%]',
      delay: 0.3,
    },
  ];
  return (
    <section
      id="hero"
      className={`relative min-h-screen overflow-hidden flex items-center pt-28 pb-20 transition-colors duration-500 ${isLight
          ? 'bg-[#fafafd] text-slate-900'
          : 'bg-[#05060a] text-white'
        }`}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Main ambient glow */}
        <div
          className={`absolute -top-[300px] left-[40%] w-[850px] h-[850px] rounded-full blur-[160px] ${isLight
              ? 'bg-violet-500/[0.055]'
              : 'bg-violet-600/[0.11]'
            }`}
        />

        {/* Blue ambient glow */}
        <div
          className={`absolute top-[35%] -right-[350px] w-[700px] h-[700px] rounded-full blur-[170px] ${isLight
              ? 'bg-blue-500/[0.035]'
              : 'bg-blue-600/[0.06]'
            }`}
        />

        {/* Bottom glow */}
        <div
          className={`absolute -bottom-[300px] left-[20%] w-[600px] h-[600px] rounded-full blur-[160px] ${isLight
              ? 'bg-purple-500/[0.025]'
              : 'bg-purple-600/[0.04]'
            }`}
        />

        {/* Grid */}
        <div
          className={`absolute inset-0 ${isLight ? 'opacity-[0.3]' : 'opacity-[0.16]'
            }`}
          style={{
            backgroundImage: isLight
              ? `
                linear-gradient(
                  rgba(15,23,42,0.035) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(15,23,42,0.035) 1px,
                  transparent 1px
                )
              `
              : `
                linear-gradient(
                  rgba(255,255,255,0.035) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.035) 1px,
                  transparent 1px
                )
              `,
            backgroundSize: '56px 56px',
          }}
        />

        {/* Radial fade */}
        <div
          className="absolute inset-0"
          style={{
            background: isLight
              ? 'radial-gradient(circle at 55% 45%, transparent 0%, rgba(250,250,253,0.35) 55%, rgba(250,250,253,0.85) 100%)'
              : 'radial-gradient(circle at 55% 45%, transparent 0%, rgba(5,6,10,0.25) 55%, rgba(5,6,10,0.8) 100%)',
          }}
        />

        {/* Bottom fade */}
        <div
          className={`absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t ${isLight
              ? 'from-[#fafafd] to-transparent'
              : 'from-[#05060a] to-transparent'
            }`}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-7 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 xl:gap-16 items-center">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="lg:col-span-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border mb-7 ${isLight
                  ? 'bg-white border-slate-200 text-violet-700 shadow-sm'
                  : 'bg-white/[0.025] border-white/[0.09] text-violet-300'
                }`}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
                <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em]">
                Software Solutions Company
              </span>

              <span
                className={`w-1 h-1 rounded-full ${isLight
                    ? 'bg-slate-300'
                    : 'bg-white/20'
                  }`}
              />

              <span className="text-[10px] sm:text-[11px] font-semibold">
                Established 2009
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className={`font-sans font-black text-[38px] sm:text-[48px] md:text-[54px] lg:text-[60px] xl:text-[66px] leading-[1.05] tracking-[-0.045em] max-w-[820px] ${isLight
                  ? 'text-slate-950'
                  : 'text-white'
                }`}
            >
              Modern Websites, E-commerce & Custom Web Applications

              <span className="block mt-2 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                for  Businesses.
              </span>
            </motion.h1>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 82 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="h-[3px] rounded-full bg-gradient-to-r from-violet-500 to-blue-500 mt-7 mb-6"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.18,
              }}
              className={`max-w-[650px] text-[15px] sm:text-[17px] leading-[1.75] ${isLight
                  ? 'text-slate-600'
                  : 'text-slate-400'
                }`}
            >
              We design and develop modern websites, eCommerce stores, custom software, and digital solutions tailored to your needs. From simple websites to complete business systems, we build solutions for projects of every scale.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.28,
              }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >

              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold shadow-xl shadow-violet-600/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative">
                  Start Your Project
                </span>

                <ArrowRight
                  size={17}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>



              <Link
                to="/portfolio"
                className={`group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${isLight
                    ? 'bg-white border-slate-200 text-slate-800 hover:border-violet-200 hover:bg-violet-50/40'
                    : 'bg-white/[0.025] border-white/[0.09] text-slate-200 hover:bg-white/[0.05] hover:border-white/[0.15]'
                  }`}
              >
                View Our Work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className={`flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-7 text-[10px] sm:text-xs font-medium ${isLight
                  ? 'text-slate-400'
                  : 'text-slate-500'
                }`}
            >

              <span className="flex items-center gap-1.5">
                <Check
                  size={13}
                  className="text-emerald-500"
                />
                Web & Software Development
              </span>

              <span className="flex items-center gap-1.5">
                <Check
                  size={13}
                  className="text-emerald-500"
                />
                Requirement-Based Solutions
              </span>

              <span className="flex items-center gap-1.5">
                <Check
                  size={13}
                  className="text-emerald-500"
                />
                Transparent Pricing
              </span>

            </motion.div>

            {/* ===================================================
                COMPANY SIGNATURE
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className={`grid grid-cols-2 sm:grid-cols-4 mt-11 pt-7 border-t ${isLight
                  ? 'border-slate-200'
                  : 'border-white/[0.07]'
                }`}
            >

              {/* 2009 */}
              <div className="pr-5 sm:border-r border-slate-200 dark:border-white/[0.07]">

                <div
                  className={`text-2xl sm:text-[27px] font-black ${isLight
                      ? 'text-slate-900'
                      : 'text-white'
                    }`}
                >
                  2009
                </div>

                <div
                  className={`text-[9px] uppercase tracking-[0.14em] font-bold mt-1 ${isLight
                      ? 'text-slate-400'
                      : 'text-slate-500'
                    }`}
                >
                  Established
                </div>

              </div>

              {/* Custom */}
              <div className="sm:px-5 sm:border-r border-slate-200 dark:border-white/[0.07]">

                <div
                  className={`text-xl sm:text-[23px] font-black ${isLight
                      ? 'text-slate-900'
                      : 'text-white'
                    }`}
                >
                  Custom
                </div>

                <div
                  className={`text-[9px] uppercase tracking-[0.14em] font-bold mt-1 ${isLight
                      ? 'text-slate-400'
                      : 'text-slate-500'
                    }`}
                >
                  Solutions
                </div>

              </div>

              {/* Global */}
              <div className="pr-5 sm:px-5 sm:border-r border-slate-200 dark:border-white/[0.07]">

                <div className="flex items-center gap-1.5">

                  <Globe2
                    size={16}
                    className="text-violet-500"
                  />

                  <span
                    className={`text-lg sm:text-xl font-black ${isLight
                        ? 'text-slate-900'
                        : 'text-white'
                      }`}
                  >
                    Global
                  </span>

                </div>

                <div
                  className={`text-[9px] uppercase tracking-[0.14em] font-bold mt-1 ${isLight
                      ? 'text-slate-400'
                      : 'text-slate-500'
                    }`}
                >
                  Project Reach
                </div>

              </div>

              {/* All Sizes */}
              <div className="sm:pl-5">

                <div
                  className={`text-lg sm:text-xl font-black ${isLight
                      ? 'text-slate-900'
                      : 'text-white'
                    }`}
                >
                  All Sizes
                </div>

                <div
                  className={`text-[9px] uppercase tracking-[0.14em] font-bold mt-1 ${isLight
                      ? 'text-slate-400'
                      : 'text-slate-500'
                    }`}
                >
                  Businesses
                </div>

              </div>

            </motion.div>

          </div>

          {/* =====================================================
              RIGHT DIGITAL COMMAND CENTER
          ====================================================== */}

          <div className="lg:col-span-5 hidden lg:block relative">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-[570px]"
            >

              {/* =================================================
                  LARGE ORBIT
              ================================================== */}

              <div className="absolute inset-0 flex items-center justify-center">

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className={`absolute w-[480px] h-[480px] rounded-full border border-dashed ${isLight
                      ? 'border-violet-200'
                      : 'border-violet-500/[0.12]'
                    }`}
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 27,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className={`absolute w-[360px] h-[360px] rounded-full border ${isLight
                      ? 'border-blue-200/70'
                      : 'border-blue-500/[0.10]'
                    }`}
                />

              </div>

              {/* =================================================
                  CONNECTION LINES
              ================================================== */}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                <div className="absolute w-[330px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent rotate-[25deg]" />

                <div className="absolute w-[330px] h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent rotate-[-25deg]" />

                <div className="absolute h-[330px] w-px bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />

              </div>

              {/* =================================================
                  CENTRAL BUSINESS SYSTEM
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[215px] h-[215px] rounded-[42px] border backdrop-blur-2xl flex items-center justify-center shadow-2xl z-10 ${isLight
                    ? 'bg-white/90 border-slate-200 shadow-violet-200/50'
                    : 'bg-[#0d1018]/90 border-white/[0.10] shadow-black/50'
                  }`}
              >

                {/* Inner glow */}
                <div className="absolute inset-6 rounded-[34px] bg-gradient-to-br from-violet-500/[0.12] via-transparent to-blue-500/[0.08]" />

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40" />

                <div className="relative text-center">

                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/10 border border-violet-500/10 flex items-center justify-center">

                    <Sparkles
                      size={29}
                      strokeWidth={1.6}
                      className="text-violet-500"
                    />

                  </div>

                  <div
                    className={`mt-4 text-[13px] font-black ${isLight
                        ? 'text-slate-900'
                        : 'text-white'
                      }`}
                  >
                    Jilansoft
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.18em] text-slate-400 mt-1">
                    Digital Layer
                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  SERVICE NODES
              ================================================== */}

              {services.map((service, index) => {

                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + service.delay,
                    }}
                    className={`absolute ${service.position} w-[142px] z-20`}
                  >

                    <motion.div
                      animate={{
                        y:
                          index % 2 === 0
                            ? [0, -6, 0]
                            : [0, 6, 0],
                      }}
                      transition={{
                        duration:
                          4.5 + index * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`relative p-4 rounded-2xl border backdrop-blur-xl shadow-xl ${isLight
                          ? 'bg-white/95 border-slate-200 shadow-slate-200/60'
                          : 'bg-[#0e1119]/90 border-white/[0.08] shadow-black/40'
                        }`}
                    >

                      <div className="flex items-center gap-3">

                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${index === 0
                              ? 'bg-violet-500/10'
                              : index === 1
                                ? 'bg-blue-500/10'
                                : index === 2
                                  ? 'bg-emerald-500/10'
                                  : 'bg-purple-500/10'
                            }`}
                        >

                          <Icon
                            size={16}
                            className={
                              index === 0
                                ? 'text-violet-500'
                                : index === 1
                                  ? 'text-blue-500'
                                  : index === 2
                                    ? 'text-emerald-500'
                                    : 'text-purple-500'
                            }
                          />

                        </div>

                        <div>

                          <div
                            className={`text-[11px] font-black ${isLight
                                ? 'text-slate-800'
                                : 'text-slate-200'
                              }`}
                          >
                            {service.title}
                          </div>

                          <div className="text-[8px] text-slate-400 mt-0.5">
                            {service.subtitle}
                          </div>

                        </div>

                      </div>

                    </motion.div>

                  </motion.div>
                );
              })}

              {/* =================================================
                  LIVE STATUS
              ================================================== */}



              {/* =================================================
                  SMALL ORBIT DOTS
              ================================================== */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 pointer-events-none"
              >

                <div className="absolute top-[68px] right-[108px] w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/60" />

              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 pointer-events-none"
              >

                <div className="absolute bottom-[100px] left-[95px] w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60" />

              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <div
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] font-bold ${isLight
            ? 'text-slate-300'
            : 'text-slate-700'
          }`}
      >
        <span className="w-7 h-px bg-current" />
        Scroll
        <span className="w-7 h-px bg-current" />
      </div>

    </section>
  );
}