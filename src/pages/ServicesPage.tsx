import SEO from '../components/SEO';
import SoftwareProducts from '../components/SoftwareProducts';
import SoftwareShowcase from '../components/SoftwareShowcase';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function ServicesPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://jilansoft.com/services#webpage',
        'url': 'https://jilansoft.com/services',
        'name': 'Services | Web Development, E-commerce & Business Software | Jilansoft',
        'description':
          'Explore Jilansoft services including web development, e-commerce development, ready-made business software, custom software development, website and software modification, business consultation, business analysis, and project management.',
        'isPartOf': {
          '@type': 'WebSite',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        }
      },

      {
        '@type': 'Service',
        'name': 'Web Development Services',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'Web Development',
        'description':
          'Modern, responsive websites and web applications for businesses, organizations, startups, and growing brands.'
      },

      {
        '@type': 'Service',
        'name': 'E-commerce Development Services',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'E-commerce Development',
        'description':
          'E-commerce stores with product management, secure checkout, payment integration, order management, and other business-focused features.'
      },

      {
        '@type': 'Service',
        'name': 'Ready-Made Business Software',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'Business Software',
        'description':
          'Ready-made software solutions for accounting, school management, and other common business and organizational needs.'
      },

      {
        '@type': 'Service',
        'name': 'Custom Software Development',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'Custom Software Development',
        'description':
          'Custom software solutions designed around specific business processes, workflows, reporting requirements, and automation goals.'
      },

      {
        '@type': 'Service',
        'name': 'Website and Software Modification',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'Website and Software Modification',
        'description':
          'Modification, redesign, customization, feature enhancement, maintenance, and improvement of existing websites and software applications.'
      },

      {
        '@type': 'Service',
        'name': 'Business Consultation',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'Business Consulting',
        'description':
          'Business and technology consultation to help organizations identify requirements, improve processes, and choose suitable digital solutions.'
      },

      {
        '@type': 'Service',
        'name': 'Business Analysis',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'Business Analysis',
        'description':
          'Business analysis focused on understanding requirements, evaluating workflows, identifying improvements, and defining practical software solutions.'
      },

      {
        '@type': 'Service',
        'name': 'Project Management',
        'provider': {
          '@type': 'Organization',
          'name': 'Jilansoft',
          'url': 'https://jilansoft.com/'
        },
        'serviceType': 'Project Management',
        'description':
          'Technology project management covering planning, requirements, coordination, development oversight, testing, delivery, and project execution.'
      }
    ]
  };

  return (
    <>
      <SEO
        title="Services | Web Development, E-commerce & Business Software | Jilansoft"
        description="Jilansoft provides web development, e-commerce development, ready-made business software, custom software development, website and software modification, business consultation, business analysis, and project management services."
        canonical="/services"
        jsonLd={servicesJsonLd}
      />

      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Primary Software Products & Solutions Showcase */}
        <SoftwareProducts />

        {/* Detailed Showcase */}
        <SoftwareShowcase />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <Faq />

        {/* Conversion CTA */}

      </main>
    </>
  );
}