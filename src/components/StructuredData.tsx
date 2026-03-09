interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Breaker Tactical Solutions',
    description: 'Premium night vision & thermal optics. Turnkey range design & construction. Expert-led tactical training programs.',
    url: 'https://breakertactical.com',
    logo: 'https://breakertactical.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-827-3253',
      contactType: 'sales',
      availableLanguage: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Arabic', 'Japanese', 'Korean', 'Chinese'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1200 Defense Industrial Parkway, Suite 400',
      addressLocality: 'Colorado Springs',
      addressRegion: 'CO',
      postalCode: '80916',
      addressCountry: 'US',
    },
    sameAs: [],
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breaker Tactical Solutions',
    description: 'Premium night vision & thermal optics manufacturer. Turnkey gun range design, construction & outfitting. Expert-led tactical training programs.',
    url: 'https://breakertactical.com',
    telephone: '+1-555-827-3253',
    email: 'contact@breakertactical.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1200 Defense Industrial Parkway, Suite 400',
      addressLocality: 'Colorado Springs',
      addressRegion: 'CO',
      postalCode: '80916',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  };
}
