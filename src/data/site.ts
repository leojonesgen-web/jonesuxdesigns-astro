import whatsapp from '../assets/social/whatsapp.svg';
import instagram from '../assets/social/instagram.png';
import linkedin from '../assets/social/linkedin.svg';
import email from '../assets/social/email.svg';
import behance from '../assets/social/behance.svg';

export const site = {
  name: 'Jones UX Designs',
  description:
    'UX/UI design for websites, apps and AI products, with a focus on clear experiences and real user needs.',
  email: 'contact@jonesuxdesigns.com',
};

export type NavKey = 'home' | 'about' | 'best' | 'work';

/** Main navigation. Section links use absolute paths so they also work from project pages. */
export const mainNav: { key: NavKey; label: string; href: string }[] = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About me', href: '/#about' },
  { key: 'best', label: 'Best work', href: '/#featured' },
  { key: 'work', label: 'Portfolio', href: '/#work' },
];

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/#work' },
  { label: 'About me', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/972535030959', icon: whatsapp },
  { label: 'Instagram', href: 'https://www.instagram.com/leonard.jones1/', icon: instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leonard-jones-6212b324b/', icon: linkedin },
  { label: 'Email', href: 'mailto:contact@jonesuxdesigns.com', icon: email },
  { label: 'Behance', href: 'https://www.behance.net/leojones5', icon: behance },
];
