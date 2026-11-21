/**
 * JSON-LD (schema.org) for the site. Only facts already published on the site are used.
 * Entities share stable @ids so every page points at the same Person and WebSite.
 */
import { contact, site } from './site';
import type { Project } from './projects';

const ORIGIN = 'https://jonesuxdesigns.com';
export const ids = {
  person: `${ORIGIN}/#person`,
  website: `${ORIGIN}/#website`,
};

const person = {
  '@type': 'Person',
  '@id': ids.person,
  name: site.ownerFullName,
  jobTitle: 'Product Designer',
  // Same wording as the portfolio assistant's approved answer.
  description:
    'Product Designer helping early-stage consumer (B2C) AI startups turn powerful but confusing products into clear, intuitive experiences.',
  url: `${ORIGIN}/`,
  email: `mailto:${contact.email}`,
  sameAs: [contact.linkedinUrl],
  knowsAbout: ['Product design', 'UX design', 'UI design', 'Consumer (B2C) AI products'],
};

const website = {
  '@type': 'WebSite',
  '@id': ids.website,
  name: site.name,
  url: `${ORIGIN}/`,
  description: site.description,
  inLanguage: 'en',
  publisher: { '@id': ids.person },
};

/** Homepage: a profile page about Leonard, on the Jones UX Designs website. */
export const homeSchema = (portraitUrl: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    website,
    { ...person, image: portraitUrl },
    {
      '@type': 'ProfilePage',
      '@id': `${ORIGIN}/#profilepage`,
      url: `${ORIGIN}/`,
      name: `${site.name} | ${site.role}`,
      isPartOf: { '@id': ids.website },
      mainEntity: { '@id': ids.person },
      inLanguage: 'en',
    },
  ],
});

/** Project pages: the case study as a CreativeWork by Leonard, plus a breadcrumb trail. */
export const projectSchema = (project: Project, summary: string, imageUrl: string) => {
  const url = `${ORIGIN}/projects/${project.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: project.title,
        description: summary,
        url,
        image: imageUrl,
        genre: project.category,
        inLanguage: project.lang ?? 'en',
        creator: { '@id': ids.person },
        isPartOf: { '@id': ids.website },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: project.title, item: url },
        ],
      },
      { ...person },
      { ...website },
    ],
  };
};
