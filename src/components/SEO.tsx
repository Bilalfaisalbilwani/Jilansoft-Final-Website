import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  jsonLd?: object;
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  jsonLd,
}: SEOProps) {
  const fullCanonical = canonical.startsWith('http')
    ? canonical
    : `https://jilansoft.com${canonical}`;

  return (
    <Helmet>
      {/* Primary HTML Meta */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://jilansoft.com/favicon.svg" />
      <meta property="og:site_name" content="JilanSoft" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://jilansoft.com/favicon.svg" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
