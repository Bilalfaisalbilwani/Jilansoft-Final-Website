import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Layers, PhoneCall } from 'lucide-react';
import { useTheme } from '../components/ThemeContext';

export default function HomePage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareCompany',
        '@id': 'https://jilansoft.com/#organization',
        'name': 'JilanSoft',
        'url': 'https://jilansoft.com/',
        'logo': 'https://jilansoft.com/favicon.svg',
        'image': 'https://jilansoft.com/favicon.svg',
        'description': 'Custom software development agency specializing in ERP systems, POS software, web development, and e-commerce solutions for Pakistan and international clients.',
        'foundingDate': '2009',
        'telephone': '+923315424466',
        'email': 'jilansoft@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Office #604, 6th Floor, LandMark Plaza, I. I. Chundrigar Road',
          'addressLocality': 'Karachi',
          'addressRegion': 'Sindh',
          'addressCountry': 'PK'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '24.8532',
          'longitude': '67.0008'
        },
        'areaServed': ['Pakistan', 'Worldwide'],
        'sameAs': [
          'https://www.linkedin.com/company/jilansoft',
          'https://www.facebook.com/Jilansoft786/',
          'https://youtube.com/@jilansoft'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://jilansoft.com/#website',
        'url': 'https://jilansoft.com/',
        'name': 'JilanSoft',
        'description': 'Custom Software Development, ERP & Web Development Agency',
        'publisher': {
          '@id': 'https://jilansoft.com/#organization'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://jilansoft.com/#webpage',
        'url': 'https://jilansoft.com/',
        'name': 'JilanSoft | Custom Software Development, ERP & Web Development',
        'isPartOf': {
          '@id': 'https://jilansoft.com/#website'
        },
        'about': {
          '@id': 'https://jilansoft.com/#organization'
        },
        'description': 'Discover custom software development, accounting POS systems, school ERPs, e-commerce stores, and responsive web development tailored for businesses in Pakistan and internationally.',
        'inLanguage': 'en-US'
      }
    ]
  };

  return (
    <>
      <SEO
        title="JilanSoft | Custom Software Development, ERP & Web Development"
        description="JilanSoft is a custom software development agency offering web development, ERP systems, e-commerce solutions, and POS software for Pakistan & worldwide clients."
        canonical="/"
        jsonLd={homeJsonLd}
      />

      <main id="main-content">
        <Hero /> 
        <About />
        <WhyChooseUs />

        {/* Home Page Call To Action */}
        <section className={`py-20 border-b transition-colors ${
          isLight ? 'bg-slate-50 border-slate-200/80 text-slate-900' : 'bg-[#0B0F19] border-white/5 text-white'
        }`}>
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 ${
              isLight ? 'bg-blue-100 text-blue-700' : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
            }`}>
              Ready to Accelerate Your Growth?
            </div>

            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto mb-6 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Let's build reliable digital solutions tailored to your business.
            </h2>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Explore our core software products & web services or talk directly with our technology team to discuss your custom project requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition shadow-lg ${
                  isLight
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
                    : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-purple-500/25'
                }`}
              >
                <Layers size={18} />
                <span>Explore Services & Pricing</span>
              </Link>

              <Link
                to="/portfolio"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border transition ${
                  isLight
                    ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
                <Code2 size={18} />
                <span>View Our Work</span>
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border transition ${
                  isLight
                    ? 'bg-slate-900 hover:bg-slate-800 text-white border-transparent'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent'
                }`}
              >
                <PhoneCall size={18} />
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
