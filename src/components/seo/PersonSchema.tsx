import { SITE, SITE_URL } from '@/lib/site';

/**
 * Schema.org Person / ProfilePage markup. This is the part that actually
 * helps for "find me for a role": it tells search engines who this page is
 * about, what the job title is, which technologies they work in and which
 * social profiles are the same person — rather than leaving them to infer it
 * from prose.
 */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE.fullName,
    alternateName: [SITE.name, 'Errytage'],
    url: SITE_URL,
    email: `mailto:${SITE.email}`,
    jobTitle: SITE.jobTitle,
    description: SITE.description,
    image: `${SITE_URL}/images/sodeeq_olaide_awoyemi.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressCountry: SITE.country,
    },
    sameAs: [
      SITE.socials.github,
      SITE.socials.twitter,
      SITE.socials.whatsapp,
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'React Native',
      'Redux',
      'Zustand',
      'Tailwind CSS',
      'GSAP',
      'Frontend architecture',
      'Web performance',
      'Responsive design',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Pillarsalt',
    },
    seeks: {
      '@type': 'Demand',
      name: 'Frontend engineering roles, contracts and freelance projects',
    },
  },
};

function PersonSchema() {
  return (
    <script
      type='application/ld+json'
      // Serialised from a literal above — no user input reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default PersonSchema;
