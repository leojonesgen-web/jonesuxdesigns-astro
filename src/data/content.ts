/**
 * Homepage copy. Everything here comes from the approved brief and Leonard's answers.
 * Do not add facts, metrics, timelines or policies that haven't been approved.
 */
import type { IconName } from '../components/Icon.astro';
import understandImg from '../assets/process/understand.png';
import structureImg from '../assets/process/structure.png';
import designImg from '../assets/process/design.png';
import refineImg from '../assets/process/test.png';

export const problems: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Onboarding & activation',
    text: 'Users struggle to get started, configure the product or reach their first meaningful result.',
    icon: 'play',
  },
  {
    title: 'Complex AI workflows',
    text: 'Users get lost in multi-step AI processes: where they are, what is happening and what to do next.',
    icon: 'workflow',
  },
  {
    title: 'Information & product clarity',
    text: 'Important information, features and actions are poorly organized or prioritized.',
    icon: 'layers',
  },
  {
    title: 'AI behavior & user control',
    text: 'Users may not understand what the AI is doing, what is happening next, what requires their input, or what they can control.',
    icon: 'sliders',
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
      'User flows, including AI steps and handoffs',
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
      'Interaction states such as progress, errors and approvals',
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
      'Feedback from your team',
      'Focused iterations on what matters most',
    ],
    image: refineImg,
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
    text: 'Status, progress, user control and handoffs in AI-driven experiences.',
    icon: 'message',
  },
];

export const packages = [
  {
    id: 'ux-review',
    name: 'UX Review & Direction',
    price: 'From €250–€400',
    text: 'For an existing AI product that needs professional UX/UI review and clearer product direction. The engagement can cover important friction points, information hierarchy, onboarding/workflow issues, usability and product clarity, followed by prioritized recommendations.',
  },
  {
    id: 'focused-flow',
    name: 'Focused Product Flow',
    price: 'From €600–€900',
    text: 'For improving or designing one meaningful product area, such as onboarding/activation, AI setup/configuration, a core AI workflow, user control, approvals/corrections, or another important flow. It can include UX structure, flow thinking, UI design and relevant interaction states.',
  },
  {
    id: 'sprint',
    name: 'Product UX/UI Sprint',
    price: 'From €1,200–€1,800',
    text: 'For a broader product challenge involving several connected screens or flows and deeper Product/UX/UI work. The exact scope should adapt to the product and problem rather than being defined by a rigid screen count.',
  },
];

export const consultation = {
  id: 'consultation',
  name: 'Complimentary initial UX consultation',
  text: 'A short initial conversation/review to understand your product, identify the main UX problem and determine whether working together makes sense. If you go ahead, scope and price are discussed based on your product.',
};

/** DRAFT: awaiting Leonard's approval. */
export const faqs = [
  {
    q: 'What kind of products do you work on?',
    a: 'Early-stage B2B AI products, especially ones that are powerful but confusing to use. Typical areas are onboarding and activation, complex AI workflows, information architecture, AI setup and configuration, system status and progress, user control, approvals and corrections, and AI-to-human handoffs.',
  },
  {
    q: 'Do you work on existing products or new ones?',
    a: 'Both. A UX Review & Direction looks at an existing product. A Focused Product Flow can improve an existing area or design a new one. A Product UX/UI Sprint covers a broader challenge across several connected screens or flows.',
  },
  {
    q: 'Is it only UI design?',
    a: 'No. Depending on the engagement, the work can include UX structure, flow thinking, information hierarchy, UI design and the relevant interaction states.',
  },
  {
    q: 'Are the package prices fixed?',
    a: 'No. These packages are starting points, not rigid scopes. The engagement can be adjusted around the product, priorities, stage and actual problem, and scope and pricing remain open to discussion.',
  },
  {
    q: 'How do we get started?',
    a: 'With a complimentary initial UX consultation: a short conversation/review to understand your product, identify the main UX problem and decide whether working together makes sense. If you go ahead, scope and price are discussed based on your product.',
  },
  {
    q: 'Does clicking Contact on a package commit me to anything?',
    a: 'No. It only starts a conversation. It doesn’t book, purchase or commit either of us to the package or the displayed price.',
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
    keywords: ['who is', 'who are you', 'what does leonard do', 'what do you do', 'services', 'service', 'offer', 'designer', 'leonard'],
    answer:
      'Leonard is a Product Designer helping early-stage B2B AI startups turn powerful but confusing products into clear, usable experiences.',
    link: { label: 'Where he can help', href: '#problems' },
  },
  {
    id: 'problems',
    question: 'What problems can he help with?',
    keywords: ['problem', 'problems', 'onboarding', 'workflow', 'workflows', 'activation', 'user control', 'clarity', 'confusing', 'help with'],
    answer:
      'Onboarding and activation, complex AI workflows, information and product clarity, and helping users understand what the AI is doing and what they can control.',
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
    question: 'What are the packages and prices?',
    keywords: ['price', 'prices', 'pricing', 'cost', 'costs', 'how much', 'package', 'packages', 'budget', 'rate', 'rates', '€'],
    answer:
      'UX Review & Direction from €250–€400, Focused Product Flow from €600–€900 and Product UX/UI Sprint from €1,200–€1,800. These are starting points, not rigid scopes.',
    link: { label: 'See the packages', href: '#packages' },
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
