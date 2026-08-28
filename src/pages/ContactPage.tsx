import SEO from '../components/SEO';
import Contact from '../components/Contact';
import { useTheme } from '../components/ThemeContext';
import { MessageSquare, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://jilansoft.com/contact#webpage',
        'url': 'https://jilansoft.com/contact',
        'name': 'Contact Us & Project Inquiries | Jilansoft',
        'description': 'Contact Jilansoft for custom software, accounting POS systems, school ERPs, and web development inquiries.',
        'isPartOf': {
          '@type': 'WebSite',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        }
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://jilansoft.com/contact#contactpage',
        'url': 'https://jilansoft.com/contact',
        'name': 'Jilansoft Contact & Project Inquiry',
        'mainEntity': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'telephone': '+923315424466',
          'email': 'jilansoft@gmail.com',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Office #604, 6th Floor, LandMark Plaza, I. I. Chundrigar Road',
            'addressLocality': 'Karachi',
            'addressRegion': 'Sindh',
            'addressCountry': 'PK'
          }
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Contact Us & Project Inquiries | Jilansoft"
        description="Contact Jilansoft for custom software development, accounting POS systems, school ERPs, and web development inquiries. Phone: +92 331 5424466, Email: jilansoft@gmail.com."
        canonical="/contact"
        jsonLd={contactJsonLd}
      />

      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Page Header Banner */}
        <section className={`py-14 sm:py-16 border-b ${
          isLight ? 'bg-slate-50/70 border-slate-200/80 text-slate-900' : 'bg-[#0A0E17] border-white/5 text-white'
        }`}>
          <div className="max-w-[1240px] mx-auto px-6 text-center">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 ${
              isLight ? 'bg-blue-100 text-blue-700' : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
            }`}>
              <MessageSquare size={14} /> Start A Conversation
            </div>

            <h1 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4 max-w-3xl mx-auto ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              Contact Jilansoft for Custom Software & Web Projects
            </h1>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Have a project requirement or software question? Fill out the form below or reach out directly via WhatsApp, Email, or Phone.
            </p>
          </div>
        </section>

        {/* Contact Form & Direct Channels Component */}
        <Contact />
      </main>
    </>
  );
}
