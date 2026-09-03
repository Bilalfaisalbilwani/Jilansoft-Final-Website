import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

import {
  Code2,
  ExternalLink,
  ArrowRight,
  Globe,
  Sparkles,
  PhoneCall,
} from 'lucide-react';

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  liveUrl: string;
  image: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'portfolio',
    name: 'Interactive Portfolio Website',
    category: 'Portfolio Website',
    description:
      'A modern corporate portfolio website showcasing a software and technology company, its digital services, solutions, and projects. It includes service pages, e-commerce solutions, ERP/CRM, project showcases, consultation workflows, responsive layouts, dark/light mode, and smooth animations.',
    liveUrl: 'https://portfolio-website-orcin-omega-89.vercel.app/',
    image: project1,
    
  },

  {
    id: 'foodora-cafe',
    name: 'Foodora Cafe',
    category: 'Restaurant Website',
    description:
      'A modern restaurant website featuring table reservations, a digital menu with dietary filters, image gallery, customer testimonials, chef profile, smooth animations, and instant booking feedback.',
    liveUrl: 'https://foodora-cafe.vercel.app/',
    image: project2,
    
  },
  {
    id: 'shoes-website',
    name: 'Shoes Website',
    category: 'E-commerce Website',
    description:
      'Shoes  website built with React, Tailwind CSS and other technologies, this is an e-commerce website concept created as a showcase.',
    liveUrl: 'https://shoes-ecommerce-website-eight.vercel.app/',
    image: project3,
    
  },
];

export default function PortfolioPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('All');

  /*
   * Categories are automatically generated.
   * When you add a new project with a new category,
   * the category will automatically appear here.
   */
  const categories = [
    'All',
    ...Array.from(
      new Set(portfolioProjects.map((project) => project.category))
    ),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === selectedCategory
        );

  /*
   * SEO Structured Data
   */
  const portfolioJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://jilansoft.com/portfolio#webpage',
        url: 'https://jilansoft.com/portfolio',
        name: 'Web Development Portfolio | Jilansoft',
        description:
          'Explore websites, e-commerce projects, business websites, portfolio websites, and custom web solutions developed by Jilansoft.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Jilansoft',
          url: 'https://jilansoft.com/',
        },
      },

      {
        '@type': 'ItemList',
        name: 'Jilansoft Web Development Portfolio',
        numberOfItems: portfolioProjects.length,
        itemListElement: portfolioProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'WebSite',
            name: project.name,
            description: project.description,
            url: project.liveUrl,
          },
        })),
      },
    ],
  };

  const handleInquire = (projectName: string) => {
    navigate('/contact', {
      state: {
        inquirySubject: `Inquiry regarding a website similar to ${projectName}`,
      },
    });
  };

  return (
    <>
      <SEO
        title="Web Development Portfolio | Jilansoft"
        description="Explore Jilansoft's web development portfolio featuring business websites, restaurant websites, portfolio websites, e-commerce solutions, and custom web projects."
        canonical="/portfolio"
        jsonLd={portfolioJsonLd}
      />

      <main id="main-content" className="pt-24 sm:pt-28">

        {/* =========================================
            PAGE HEADER
        ========================================== */}
        <section
          className={`pt-8 pb-14 sm:pt-10 sm:pb-16 border-b ${
            isLight
              ? 'bg-slate-50/70 border-slate-200/80'
              : 'bg-[#0A0E17] border-white/5'
          }`}
        >
          <div className="max-w-[1100px] mx-auto px-6 text-center">

            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 ${
                isLight
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
              }`}
            >
              <Code2 size={14} />
              Our Portfolio
            </div>

            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5 ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}
            >
              Web Development Projects
            </h1>

            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Explore selected websites and digital solutions created by
              Jilansoft for businesses, professionals, and organizations.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mt-7">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    selectedCategory === category
                      ? isLight
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-[#7C3AED] text-white shadow-md'
                      : isLight
                      ? 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================
            PROJECTS
        ========================================== */}
        <section
          className={`py-14 sm:py-20 ${
            isLight
              ? 'bg-white text-slate-900'
              : 'bg-[#070910] text-white'
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className={`group flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    isLight
                      ? 'bg-white border-slate-200 shadow-lg hover:shadow-xl'
                      : 'bg-[#0E1322] border-white/10 shadow-xl'
                  }`}
                >

                  {/* =========================================
                      PROJECT IMAGE
                  ========================================== */}
                  <div className="relative w-full overflow-hidden bg-slate-950">

                    <img
                      src={project.image}
                      alt={`${project.name} - Jilansoft web development project`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg">
                        {project.category}
                      </span>
                    </div>

                  </div>

                  {/* =========================================
                      PROJECT CONTENT
                  ========================================== */}
                  <div className="flex flex-col flex-1 p-6 sm:p-7">

                    <div className="flex-1">

                      <h2
                        className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
                          isLight
                            ? 'text-slate-900'
                            : 'text-white'
                        }`}
                      >
                        {project.name}
                      </h2>

                      <p
                        className={`text-sm sm:text-base leading-relaxed mb-5 ${
                          isLight
                            ? 'text-slate-600'
                            : 'text-slate-300'
                        }`}
                      >
                        {project.description}
                      </p>

                  

                    </div>

                    {/* =========================================
                        ACTIONS
                    ========================================== */}
                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live website`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md transition"
                      >
                        <Globe size={16} />
                        <span>View Live Website</span>
                        <ExternalLink size={14} />
                      </a>

                      <button
                        onClick={() => handleInquire(project.name)}
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border transition cursor-pointer ${
                          isLight
                            ? 'border-slate-200 text-slate-700 hover:bg-slate-100'
                            : 'border-white/10 text-white hover:bg-white/10'
                        }`}
                      >
                        <PhoneCall size={15} />
                        <span>Build Similar</span>
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </div>

            {/* =========================================
                BOTTOM CTA
            ========================================== */}
            <div
              className={`mt-16 p-8 sm:p-12 rounded-3xl text-center border ${
                isLight
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/80'
                  : 'bg-gradient-to-br from-purple-950/30 to-slate-900 border-white/10'
              }`}
            >

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-blue-600 text-white">
                <Sparkles size={14} />
                Start Your Project
              </div>

              <h2
                className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                  isLight
                    ? 'text-slate-900'
                    : 'text-white'
                }`}
              >
                Need a Website for Your Business?
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto mb-8 leading-relaxed ${
                  isLight
                    ? 'text-slate-600'
                    : 'text-slate-300'
                }`}
              >
                Jilansoft creates professional websites, e-commerce stores,
                and custom web solutions tailored to your business needs.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl transition hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}