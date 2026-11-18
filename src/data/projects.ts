import type { ImageMetadata } from 'astro';
import stepwise from '../assets/projects/stepwise.png';
import tripwise from '../assets/projects/tripwise.png';
import pawcare from '../assets/projects/pawcare.png';
import filelens from '../assets/projects/filelens.png';
import drivePoint from '../assets/projects/drive-point.png';
import primeRagent from '../assets/projects/prime-ragent.png';
import stellanTime from '../assets/projects/stellan-time.png';
import nestory from '../assets/projects/nestory.png';

/** Case-study presentation images, ordered by file name 01, 02, … */
const slides = (modules: Record<string, { default: ImageMetadata }>) =>
  Object.keys(modules)
    .sort()
    .map((k) => modules[k].default);
const tripwiseGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/tripwise/*.png', { eager: true }),
);
const stepwiseGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/stepwise/*.png', { eager: true }),
);
const filelensGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/filelens/*.png', { eager: true }),
);
const drivePointGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/drive-point/*.png', { eager: true }),
);
const nestoryGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/nestory/*.png', { eager: true }),
);
const primeRagentGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/prime-ragent/*.png', { eager: true }),
);
const stellanTimeGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/stellan-time/*.png', { eager: true }),
);
const pawcareGallery = slides(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/pawcare/*.png', { eager: true }),
);

export interface Project {
  /** URL segment: /projects/<slug>/ */
  slug: string;
  /** Canonical project name (may differ from text baked into older images). */
  title: string;
  category: string;
  /** Only approved information. Kept short where no detail has been provided. */
  summary: string;
  image: ImageMetadata;
  /** Describes what the image shows, for screen readers. */
  imageAlt: string;
  group: 'selected' | 'broader';
  /** Presentation images shown full width on the project page, in order. */
  gallery?: ImageMetadata[];
  /** Optional 1px stroke colour around each gallery image. */
  galleryStroke?: string;
  /** Language of the project's own text (card + page) when it isn't English, e.g. 'de'. */
  lang?: 'de';
}

export const projects: Project[] = [
  {
    slug: 'tripwise',
    title: 'TripWise',
    category: 'UX Case Study',
    summary:
      'A cross-service trip-planning platform designed to create a clearer, more coherent travel-planning experience across the planning journey.',
    image: tripwise,
    imageAlt: 'TripWise trip-planning interface shown on a laptop screen',
    group: 'selected',
    gallery: tripwiseGallery,
  },
  {
    slug: 'stepwise',
    title: 'StepWise',
    category: 'E-Commerce-UI-Design',
    summary:
      'Ein Einkaufserlebnis für Schuhe mit klarer Hierarchie, markanter Produktpräsentation und einheitlicher Interaktion.',
    lang: 'de',
    image: stepwise,
    imageAlt: 'StepWise shoe e-commerce website shown on a laptop screen',
    group: 'selected',
    gallery: stepwiseGallery,
  },
  {
    slug: 'pawcare',
    title: 'PawCare',
    category: 'UX Case Study',
    summary:
      'A veterinary booking experience focused on making finding and scheduling veterinary appointments clearer and easier.',
    image: pawcare,
    imageAlt: 'PawCare veterinary booking app screens on three phones',
    group: 'selected',
    gallery: pawcareGallery,
    galleryStroke: '#B8C2D0',
  },
  {
    slug: 'filelens',
    title: 'FileLens',
    category: 'AI-powered file management',
    summary: 'AI-powered file and storage-management work.',
    image: filelens,
    imageAlt: 'FileLens website shown on a laptop screen',
    group: 'broader',
    gallery: filelensGallery,
  },
  {
    slug: 'drive-point',
    title: 'Drive Point',
    category: 'App Design',
    summary: 'App design.',
    image: drivePoint,
    imageAlt: 'Drive Point app screen on a phone',
    group: 'broader',
    gallery: drivePointGallery,
    galleryStroke: '#B8C2D0',
  },
  {
    slug: 'prime-ragent',
    title: 'Prime Ragent',
    category: 'Landing Page Design',
    summary: 'Fragrance with a distinct presence.',
    image: primeRagent,
    imageAlt: 'Prime Ragent landing page shown on a laptop screen',
    group: 'broader',
    gallery: primeRagentGallery,
  },
  {
    slug: 'stellan-time',
    title: 'Stellan Time',
    category: 'Landing Page Design',
    summary: 'Time, thoughtfully presented.',
    image: stellanTime,
    imageAlt: 'Stellan Time landing page shown on a laptop screen',
    group: 'broader',
    gallery: stellanTimeGallery,
  },
  {
    slug: 'nestory',
    title: 'Nestory',
    category: 'Landing Page Design',
    summary: 'Interior design, made more accessible.',
    image: nestory,
    imageAlt: 'Nestory landing page shown on a laptop screen',
    group: 'broader',
    gallery: nestoryGallery,
  },
];

export const selectedProjects = projects.filter((p) => p.group === 'selected');
export const broaderProjects = projects.filter((p) => p.group === 'broader');
export const projectHref = (p: Project) => `/projects/${p.slug}/`;
