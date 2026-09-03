import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Utensils,
  Plane,
  Smartphone,
  Hotel,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Building2,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext'

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const businessFields = [
    {
      name: "Restaurants",
      icon: Utensils,
    },
    {
      name: "Travel Agencies",
      icon: Plane,
    },
    {
      name: "Mobile Shops",
      icon: Smartphone,
    },
    {
      name: "Hotels",
      icon: Hotel,
    },
    {
      name: "Retail Stores",
      icon: ShoppingBag,
    },
    {
      name: "Clinics",
      icon: Stethoscope,
    },
    {
      name: "Schools",
      icon: GraduationCap,
    },
    {
      name: "Companies",
      icon: Building2,
    },
    {
      name: "Other Businesses",
      icon: Store,
    },
  ];

  return (
    <section
      id="hero"
      className={`relative min-h-screen overflow-hidden pt-28 pb-20 ${
        isLight ? "bg-white text-slate-900" : "bg-slate-950 text-white"
      }`}
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -left-40 top-20 h-[420px] w-[420px] rounded-full blur-3xl ${
            isLight ? "bg-blue-100/60" : "bg-blue-600/10"
          }`}
        />

        <div
          className={`absolute right-[-180px] top-10 h-[500px] w-[500px] rounded-full blur-3xl ${
            isLight ? "bg-indigo-100/50" : "bg-indigo-600/10"
          }`}
        />

        <div
          className={`absolute bottom-[-220px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full blur-3xl ${
            isLight ? "bg-slate-100" : "bg-blue-950/20"
          }`}
        />

        {/* Grid */}
        <div
          className={`absolute inset-0 opacity-[0.035] ${
            isLight ? "bg-slate-900" : "bg-white"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-[radial-gradient(circle_at_center,transparent_0%,white_78%)]"
              : "bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]"
          }`}
        />

        <div
          className={`absolute bottom-0 left-0 right-0 h-40 ${
            isLight
              ? "bg-gradient-to-t from-white to-transparent"
              : "bg-gradient-to-t from-slate-950 to-transparent"
          }`}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
                isLight
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-blue-500/20 bg-blue-500/10 text-blue-300"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Software Solutions Company
              </span>

              <span
                className={`h-4 w-px ${
                  isLight ? "bg-blue-200" : "bg-blue-500/30"
                }`}
              />

              <span className="text-xs font-medium">
                Established 2009
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[62px]"
            >
              Modern Websites, E-commerce & Custom Web Applications{" "}
              <span className="relative inline-block text-blue-600">
                for Businesses.
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-blue-600/20" />
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`mt-7 max-w-2xl text-base leading-8 sm:text-lg ${
                isLight ? "text-slate-600" : "text-slate-300"
              }`}
            >
              We design and develop modern websites, eCommerce stores, custom
              software, and digital solutions tailored to your needs. From
              simple websites to complete business systems, we build solutions
              for projects of every scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#portfolio"
                className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  isLight
                    ? "border-slate-200 bg-white text-slate-800 hover:border-blue-200 hover:bg-blue-50"
                    : "border-slate-800 bg-slate-900/60 text-white hover:border-blue-500/30 hover:bg-slate-900"
                }`}
              >
                View Our Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
            >
              {[
                "Web & Software Development",
                "Requirement-Based Solutions",
                "Transparent Pricing",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 text-sm ${
                    isLight ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${
                      isLight ? "bg-blue-50" : "bg-blue-500/10"
                    }`}
                  >
                    <Check size={13} className="text-blue-600" />
                  </span>
                  {item}
                </div>
              ))}
            </motion.div>

            {/* Company Signature */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className={`mt-12 grid max-w-xl grid-cols-3 border-t pt-7 ${
                isLight ? "border-slate-200" : "border-slate-800"
              }`}
            >
              <div>
                <div className="text-xl font-bold">2009</div>
                <div
                  className={`mt-1 text-xs ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Established
                </div>
              </div>

              <div>
                <div className="text-xl font-bold">Custom</div>
                <div
                  className={`mt-1 text-xs ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Solutions
                </div>
              </div>

              <div>
                <div className="text-xl font-bold">Global</div>
                <div
                  className={`mt-1 text-xs ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Project Reach
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — BUSINESSES WE SERVE */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative overflow-hidden rounded-[30px] border p-5 shadow-2xl sm:p-6 ${
                isLight
                  ? "border-slate-200 bg-white/90 shadow-slate-200/70 backdrop-blur-xl"
                  : "border-slate-800 bg-slate-900/80 shadow-black/30 backdrop-blur-xl"
              }`}
            >
              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

              {/* Panel Header */}
              <div className="relative mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isLight ? "bg-blue-50" : "bg-blue-500/10"
                    }`}
                  >
                    <Globe2 size={16} className="text-blue-600" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Businesses We Serve
                  </span>
                </div>

                <h2
                  className={`text-2xl font-bold sm:text-3xl ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}
                >
                  Built for Businesses Like Yours
                </h2>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Website & software solutions tailored for different
                  business fields.
                </p>
              </div>

              {/* Business Fields — 3 PER ROW */}
              <div className="relative grid grid-cols-3 gap-3">
                {businessFields.map((field, index) => {
                  const Icon = field.icon;

                  return (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.35 + index * 0.06,
                      }}
                      whileHover={{ y: -4 }}
                      className={`group rounded-2xl border p-3 sm:p-4 transition-all duration-300 ${
                        isLight
                          ? "border-slate-200 bg-slate-50/80 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-md"
                          : "border-slate-800 bg-slate-950/60 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-lg"
                      }`}
                    >
                      <div
                        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-300 sm:h-10 sm:w-10 ${
                          isLight
                            ? "bg-white text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white"
                            : "bg-slate-900 text-blue-400 group-hover:bg-blue-600 group-hover:text-white"
                        }`}
                      >
                        <Icon size={19} />
                      </div>

                      <h3
                        className={`text-xs font-semibold leading-5 sm:text-sm ${
                          isLight ? "text-slate-800" : "text-slate-100"
                        }`}
                      >
                        {field.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Note */}
              <div
                className={`relative mt-5 flex items-center gap-3 rounded-2xl border px-4 py-3 ${
                  isLight
                    ? "border-blue-100 bg-blue-50/60"
                    : "border-blue-500/10 bg-blue-500/5"
                }`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <Check size={16} className="text-white" />
                </div>

                <div>
                  <p
                    className={`text-xs font-semibold ${
                      isLight ? "text-slate-800" : "text-slate-200"
                    }`}
                  >
                    Need a solution for your business?
                  </p>

                  <p
                    className={`text-[11px] ${
                      isLight ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    We can build it according to your requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}