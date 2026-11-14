import type { ImageMetadata } from 'astro';
import stepwise from '../assets/projects/stepwise.png';
import tripwise from '../assets/projects/tripwise.png';
import pawcare from '../assets/projects/pawcare.png';
import drivePoint from '../assets/projects/drive-point.png';
import stellanTime from '../assets/projects/stellan-time.png';
import nestory from '../assets/projects/nestory.png';
import primeRagent from '../assets/projects/prime-ragent.png';
import filelens from '../assets/projects/filelens.png';

export interface Project {
  /** URL segment: /projects/<slug>/ (matches the paths on the current live site) */
  slug: string;
  title: string;
  /** Short line for cards, meta descriptions and the case-study intro. */
  summary: string;
  thumbnail: ImageMetadata;
  /** Shown in the "Featured work" section on the Homepage. */
  featured?: boolean;
  /** Shown in the "See what I can do" library on the Homepage. */
  library?: boolean;
}

/**
 * Single source of truth for portfolio projects.
 * Order here is the display order on the Homepage.
 */
export const projects: Project[] = [
  {
    slug: 'stepwise',
    title: 'E-Commerce UI Design',
    summary: 'E-commerce UI design case study.',
    thumbnail: stepwise,
    featured: true,
  },
  {
    slug: 'tripwise-casestudy',
    title: 'Tripwise',
    summary: 'Travel planning app case study.',
    thumbnail: tripwise,
    featured: true,
  },
  {
    slug: 'pawcare-redesign',
    title: 'PawCare',
    summary: 'Pet care app redesign case study.',
    thumbnail: pawcare,
    featured: true,
  },
  {
    slug: 'drive-point',
    title: 'Drive Point',
    summary: 'Find your car. Book your appointment.',
    thumbnail: drivePoint,
    library: true,
  },
  {
    slug: 'stellan-time',
    title: 'Stellan Time',
    summary: 'Time thoughtfully presented.',
    thumbnail: stellanTime,
    library: true,
  },
  {
    slug: 'nestory',
    title: 'Nestory',
    summary: 'Interior design, made more accessible.',
    thumbnail: nestory,
    library: true,
  },
  {
    slug: 'prime-ragent',
    title: 'Prime Ragent',
    summary: 'Fragrance with a different presence.',
    thumbnail: primeRagent,
    library: true,
  },
  {
    slug: 'filelens',
    title: 'FileLens',
    summary: 'See your files clearly.',
    thumbnail: filelens,
    library: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const libraryProjects = projects.filter((p) => p.library);
export const projectHref = (p: Project) => `/projects/${p.slug}/`;
