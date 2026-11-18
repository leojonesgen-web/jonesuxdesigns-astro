import type { ImageMetadata } from 'astro';
import stepwise from '../assets/projects/stepwise.png';
import tripwise from '../assets/projects/tripwise.png';
import pawcare from '../assets/projects/pawcare.png';
import filelens from '../assets/projects/filelens.png';
import drivePoint from '../assets/projects/drive-point.png';
import primeRegent from '../assets/projects/prime-regent.png';
import stellarTime from '../assets/projects/stellar-time.png';
import nestStory from '../assets/projects/nest-story.png';

/** Case-study presentation images, in display order (1440×1024 each). */
const tripwiseGallery = Object.values(
  import.meta.glob<{ default: ImageMetadata }>('../assets/projects/tripwise/*.png', { eager: true }),
).map((m) => m.default);

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
    category: 'UI/UX Design',
    summary:
      'A German-language shoe e-commerce experience designed for a German-speaking audience.',
    image: stepwise,
    imageAlt: 'StepWise shoe e-commerce website shown on a laptop screen',
    group: 'selected',
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
  },
  {
    slug: 'filelens',
    title: 'FileLens',
    category: 'AI-powered file management',
    summary: 'AI-powered file and storage-management work.',
    image: filelens,
    imageAlt: 'FileLens website shown on a laptop screen',
    group: 'broader',
  },
  {
    slug: 'drive-point',
    title: 'Drive Point',
    category: 'App Design',
    summary: 'App design.',
    image: drivePoint,
    imageAlt: 'Drive Point app screen on a phone',
    group: 'broader',
  },
  {
    slug: 'prime-regent',
    title: 'Prime Regent',
    category: 'Landing Page Design',
    summary: 'Landing page design.',
    image: primeRegent,
    imageAlt: 'Prime Regent landing page shown on a laptop screen',
    group: 'broader',
  },
  {
    slug: 'stellar-time',
    title: 'Stellar Time',
    category: 'Landing Page Design',
    summary: 'Landing page design.',
    image: stellarTime,
    imageAlt: 'Stellar Time landing page shown on a laptop screen',
    group: 'broader',
  },
  {
    slug: 'nest-story',
    title: 'Nest Story',
    category: 'Landing Page Design',
    summary: 'Landing page design.',
    image: nestStory,
    imageAlt: 'Nest Story landing page shown on a laptop screen',
    group: 'broader',
  },
];

export const selectedProjects = projects.filter((p) => p.group === 'selected');
export const broaderProjects = projects.filter((p) => p.group === 'broader');
export const projectHref = (p: Project) => `/projects/${p.slug}/`;
