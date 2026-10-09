import { company, contact } from '../config/contact';
import { brandAssets } from '../config/brandAssets';
import { visibleLocales } from '../config/locales';

export function organizationSchema(site: URL, description: string) {
  const siteUrl = new URL('/', site).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: company.brandName,
    legalName: company.legalName,
    url: siteUrl,
    description,
    logo: {
      '@type': 'ImageObject',
      url: new URL(brandAssets.logo, site).href,
      width: 1254,
      height: 1254,
    },
    email: contact.email,
    telephone: contact.phoneE164,
    sameAs: [contact.instagramUrl],
    vatID: `PL${company.identifiers.nip}`,
    taxID: company.identifiers.nip,
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'KRS', value: company.identifiers.krs },
      { '@type': 'PropertyValue', propertyID: 'REGON', value: company.identifiers.regon },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.registeredOffice.street,
      postalCode: company.registeredOffice.postalCode,
      addressLocality: company.registeredOffice.city,
      addressCountry: 'PL',
    },
    location: {
      '@type': 'Place',
      name: `${company.brandName} — magazyn`,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: contact.workingHours.split('–')[0],
        closes: contact.workingHours.split('–')[1],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.warehouse.street,
        postalCode: company.warehouse.postalCode,
        addressLocality: company.warehouse.city,
        addressCountry: 'PL',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phoneE164,
      email: contact.email,
      contactType: 'sales',
      areaServed: { '@type': 'Country', name: 'Polska', identifier: 'PL' },
      availableLanguage: visibleLocales,
    },
    areaServed: { '@type': 'Country', name: 'Polska', identifier: 'PL' },
  };
}
