export const site = {
  name: 'Jones UX Designs',
  owner: 'Leonard',
  ownerFullName: 'Leonard Jones',
  role: 'Product Designer for Early-Stage B2C AI Products',
  description:
    'I help early-stage consumer AI startups turn complex ideas and AI-powered features into clear, intuitive products people can understand and use.',
};

/** Approved contact methods. */
export const contact = {
  email: 'contact@jonesuxdesigns.com',
  whatsappNumber: '972535030959',
  linkedinUrl: 'https://www.linkedin.com/in/leonard-jones-6212b324b/',
};

export const whatsappHref = (message?: string) =>
  `https://wa.me/${contact.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const emailHref = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${contact.email}${query ? `?${query}` : ''}`;
};

/** Main navigation: homepage anchors. Contact is rendered separately as the primary button. */
export const mainNav = [
  { label: 'Home', href: '/#top' },
  { label: 'About Me', href: '/#about' },
  { label: 'My Portfolio', href: '/#work' },
  { label: 'How Do I Work', href: '/#process' },
];

export const contactHref = '/#contact';
