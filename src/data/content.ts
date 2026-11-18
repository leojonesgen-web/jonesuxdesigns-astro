/**
 * Homepage copy. Everything here comes from the approved brief and Leonard's answers.
 * Do not add facts, metrics, timelines or policies that haven't been approved.
 */
import type { IconName } from '../components/Icon.astro';
import type { ProblemIllustrationName } from '../components/ProblemIllustration.astro';
import understandImg from '../assets/process/understand.png';
import structureImg from '../assets/process/structure.png';
import designImg from '../assets/process/design.png';
import refineImg from '../assets/process/test.png';

export const problems: { title: string; text: string; illustration: ProblemIllustrationName }[] = [
  {
    title: 'Onboarding & activation',
    text: 'New users don’t quickly see what the product can do for them, get stuck setting it up, or leave before their first meaningful result.',
    illustration: 'onboarding',
  },
  {
    title: 'Complex AI workflows',
    text: 'Users get lost in multi-step AI processes: where they are, what is happening and what to do next.',
    illustration: 'workflow',
  },
  {
    title: 'Information & product clarity',
    text: 'Important information, features and actions are poorly organized or prioritized.',
    illustration: 'clarity',
  },
  {
    title: 'AI behavior & user control',
    text: 'Users don’t understand what the AI is doing or why, can’t easily steer or correct it, and don’t know how to recover when it gets something wrong.',
    illustration: 'control',
  },
];

export const processSteps = [
  {
    id: 'understand',
    label: 'Understand',
    title: 'Understand the problem',
    text: 'I explore the problem, identify user needs, and define clear goals before moving into design.',
    focus: [
      'The product, its users and the problem to solve',
      'Where users get stuck today',
      'What a good outcome looks like at this stage',
    ],
    image: understandImg,
  },
  {
    id: 'structure',
    label: 'Structure',
    title: 'Structure the experience',
    text: 'I organize information, map user flows, and create intuitive structures that simplify complex experiences.',
    focus: [
      'Information architecture and priorities',
      'User flows, including where AI steps in and where people stay in control',
      'What users need to see, decide or control at each step',
    ],
    image: structureImg,
  },
  {
    id: 'design',
    label: 'Design',
    title: 'Design the interface',
    text: 'I turn ideas into clear, functional interfaces with thoughtful layouts, interactions, and visual consistency.',
    focus: [
      'Clean UI with a clear visual hierarchy',
      'Interaction states such as loading, progress, errors and corrections',
      'Responsive layouts for desktop and mobile',
    ],
    image: designImg,
  },
  {
    id: 'refine',
    label: 'Refine',
    title: 'Refine with feedback',
    text: 'I review usability, gather feedback, and improve the experience through focused iterations.',
    focus: [
      'Usability review of the designed flows',
      'Feedback from your team and, where possible, real users',
      'Focused iterations on what matters most',
    ],
    image: refineImg,
  },
];

/** About proposals: the six existing skills condensed into four (no new claims). */
export const strengths: { title: string; short: string; text: string; icon: IconName }[] = [
  {
    title: 'Clear structure',
    short: 'Clear structure and information architecture',
    text: 'Organizing features, content and multi-step flows so people can find what matters and follow along.',
    icon: 'sitemap',
  },
  {
    title: 'Visual hierarchy & clean UI',
    short: 'Strong visual hierarchy and clean, consistent UI',
    text: 'Making the most important information and actions obvious, with alignment and consistency that feel trustworthy.',
    icon: 'eye',
  },
  {
    title: 'Responsive design',
    short: 'Responsive design for desktop and mobile',
    text: 'Interfaces that hold up on desktop and mobile.',
    icon: 'devices',
  },
  {
    title: 'AI interaction thinking',
    short: 'AI interactions with status, control and correction',
    text: 'Status, feedback, user control and correction in AI-driven experiences.',
    icon: 'message',
  },
];

export const skills: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Information architecture',
    text: 'Organizing features and content so users can find what matters.',
    icon: 'sitemap',
  },
  {
    title: 'Structure & flows',
    text: 'Turning complex, multi-step processes into flows people can follow.',
    icon: 'workflow',
  },
  {
    title: 'Visual hierarchy',
    text: 'Making the most important information and actions obvious.',
    icon: 'eye',
  },
  {
    title: 'Clean, consistent UI',
    text: 'Alignment, visual rhythm and consistency that make a product feel trustworthy.',
    icon: 'layout',
  },
  {
    title: 'Responsive design',
    text: 'Interfaces that hold up on desktop and mobile.',
    icon: 'devices',
  },
  {
    title: 'AI interaction thinking',
    text: 'Status, feedback, user control and correction in AI-driven experiences.',
    icon: 'message',
  },
];

/**
 * Ways to Start: approachable entry points, ordered small → broader.
 * Pricing is shown as "starting from" (lower bound of the previously approved ranges);
 * final scope and price are agreed together.
 */
export const waysToStart = [
  {
    id: 'ux-clarity-review',
    step: '01',
    tag: 'Smallest first step',
    name: 'UX Clarity Review',
    text: 'A focused review of one important screen, flow or product experience. I identify friction, unclear decisions and UX problems, and point out clear opportunities to improve clarity and usability. An easy way to try working together without committing to a large project.',
    from: 'Starting from €250',
  },
  {
    id: 'focused-product-flow',
    step: '02',
    tag: 'One important journey',
    name: 'Focused Product Flow',
    text: 'A more substantial engagement focused on one important product journey, such as onboarding, activation, an important AI interaction or another critical product flow. The goal is to improve its structure, UX, interaction and interface.',
    from: 'Starting from €600',
  },
  {
    id: 'product-design-sprint',
    step: '03',
    tag: 'Broader engagement',
    name: 'Product Design Sprint',
    text: 'A broader engagement for an early-stage product that needs several connected flows, a more substantial UX/UI direction, or a larger product-design intervention than a single flow.',
    from: 'Starting from €1,200',
  },
];

export const consultation = {
  id: 'consultation',
  name: 'Complimentary initial UX consultation',
  text: 'A short initial conversation/review to understand your product, identify the main UX problem and determine whether working together makes sense. If you go ahead, scope and price are discussed based on your product.',
};

/** Approved FAQ copy. */
export const faqs = [
  {
    q: 'What kind of products do you work on?',
    a: 'Early-stage consumer (B2C) AI products, especially ones that are powerful but confusing for everyday users. Typical areas are onboarding and activation, complex AI flows, information and product clarity, helping users understand what the AI is doing, and user control, feedback, correction and recovery.',
  },
  {
    q: 'Do you work on existing products or new ones?',
    a: 'Both. A UX Clarity Review looks at one important screen or flow in an existing product. A Focused Product Flow can improve an existing journey or design a new one. A Product Design Sprint covers a broader challenge across several connected flows.',
  },
  {
    q: 'Are the prices fixed?',
    a: 'No. The ways to start are starting points, not rigid scopes, and the prices shown are where they start. The engagement can be adjusted around the product, priorities, stage and actual problem, and scope and pricing remain open to discussion.',
  },
  {
    q: 'How do we get started?',
    a: 'With a complimentary initial UX consultation: a short conversation/review to understand your product, identify the main UX problem and decide whether working together makes sense. If you go ahead, scope and price are discussed based on your product.',
  },
  {
    q: 'Does clicking Contact on one of the ways to start commit me to anything?',
    a: 'No. It only starts a conversation. It doesn’t book, purchase or commit either of us to that option or the displayed price.',
  },
  {
    q: 'How can I contact you?',
    a: 'By WhatsApp, email or LinkedIn, whichever is most comfortable for you.',
  },
];

/** Prepared answers for the prototype assistant. Not generative; matched by topic. */
export const assistantTopics = [
  {
    id: 'what',
    question: 'What does Leonard do?',
    keywords: ['who is', 'who are you', 'what does leonard do', 'what do you do', 'services', 'service', 'offer', 'designer', 'leonard', 'consumer', 'b2c'],
    answer:
      'Leonard is a Product Designer helping early-stage consumer (B2C) AI startups turn powerful but confusing products into clear, intuitive experiences.',
    link: { label: 'Where he can help', href: '#problems' },
  },
  {
    id: 'problems',
    question: 'What problems can he help with?',
    keywords: ['problem', 'problems', 'onboarding', 'workflow', 'workflows', 'activation', 'user control', 'clarity', 'confusing', 'help with', 'correction', 'recovery', 'trust'],
    answer:
      'Onboarding and activation, complex AI workflows, information and product clarity, and helping users understand what the AI is doing, stay in control, and correct or recover when it gets things wrong.',
    link: { label: 'See the problems', href: '#problems' },
  },
  {
    id: 'work',
    question: 'Can I see his work?',
    keywords: ['portfolio', 'project', 'projects', 'case study', 'case studies', 'examples', 'your work', 'his work', 'tripwise', 'stepwise', 'pawcare', 'filelens'],
    answer:
      'Selected projects are TripWise and PawCare (UX case studies) and StepWise (UI/UX design), plus more app and landing-page design work.',
    link: { label: 'View selected work', href: '#work' },
  },
  {
    id: 'process',
    question: 'How does he work?',
    keywords: ['process', 'approach', 'steps', 'method', 'how do you work', 'how does he work', 'how you work', 'how he works'],
    answer:
      'A structured process: Understand the problem, Structure the experience, Design the interface, and Refine with feedback.',
    link: { label: 'See the process', href: '#process' },
  },
  {
    id: 'pricing',
    question: 'How can we start, and what does it cost?',
    keywords: ['price', 'prices', 'pricing', 'cost', 'costs', 'how much', 'package', 'packages', 'budget', 'rate', 'rates', '€', 'ways to start', 'review', 'sprint'],
    answer:
      'There are three ways to start: a UX Clarity Review (from €250), a Focused Product Flow (from €600) and a Product Design Sprint (from €1,200). They are starting points, not rigid scopes.',
    link: { label: 'See ways to start', href: '#packages' },
  },
  {
    id: 'start',
    question: 'How do we start working together?',
    keywords: ['get started', 'start', 'begin', 'consultation', 'complimentary', 'free', 'work together', 'working together', 'hire'],
    answer:
      'With a complimentary initial UX consultation: a short conversation to understand your product, identify the main UX problem and see whether working together makes sense.',
    link: { label: 'Contact options', href: '#contact' },
  },
];
