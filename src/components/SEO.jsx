import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, type = 'website', imageUrl = '/Fav-png.png' }) => {
  const location = useLocation();
  const currentUrl = `https://www.theinceptica.com${location.pathname}`;
  const defaultTitle = 'The Inceptica - AI Solutions & Consulting Services';
  const defaultDescription = 'The Inceptica - Your premier partner for innovative AI solutions. We specialize in custom AI development, consulting, and implementation services.';

  const getSchemaMarkup = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: currentUrl,
      name: title || defaultTitle,
      description: description || defaultDescription,
      publisher: {
        '@type': 'Organization',
        name: 'The Inceptica',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.theinceptica.com/Fav-png.png'
        }
      }
    };

    // Add specific schema based on the page
    switch (location.pathname) {
      case '/services':
        return {
          ...baseSchema,
          '@type': 'Service',
          serviceType: 'AI Development and Consulting',
          provider: {
            '@type': 'Organization',
            name: 'The Inceptica'
          }
        };
      case '/about':
        return {
          ...baseSchema,
          '@type': 'AboutPage'
        };
      case '/contact':
        return {
          ...baseSchema,
          '@type': 'ContactPage',
          mainEntity: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: currentUrl
          }
        };
      default:
        return baseSchema;
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title || defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      <link rel='canonical' href={currentUrl} />

      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`https://www.theinceptica.com${imageUrl}`} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`https://www.theinceptica.com${imageUrl}`} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify(getSchemaMarkup())}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  imageUrl: PropTypes.string
};

export default SEO;
