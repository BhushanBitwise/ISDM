// ============================================================
// ISDM — SITE CONFIGURATION
// Central config for all brand, contact, and SEO settings
// ============================================================

export const siteConfig = {
  brand: {
    name: 'International School of Digital Marketing',
    shortName: 'ISDM',
    tagline: 'Learn Digital. Think Global.',
    supportingLine: 'Where Marketing Meets Technology.',
    description:
      'ISDM offers a practical, modern approach to digital marketing education — combining strategy, creativity, technology, and analytics for a digital-first world.',
    logoText: 'ISDM',
    year: 2024,
  },

  contact: {
    phones: [
      { label: 'Enquiries', number: '+91 80876 01850', tel: '+918087601850' },
      { label: 'WhatsApp', number: '+91 8080152238', tel: '+918080152238' },
      { label: 'Support', number: '+91 9850941120', tel: '+919850941120' },
    ],
    whatsapp: {
      number: '918080152238',
      link: 'https://wa.me/918080152238',
    },
    // Placeholder – replace with a real email once available
    email: 'enquiry@isdm.edu.in',
    emailIsPlaceholder: true,
  },

  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },

  seo: {
    siteName: 'ISDM — International School of Digital Marketing',
    defaultTitle: 'ISDM | Learn Digital. Think Global.',
    defaultDescription:
      'International School of Digital Marketing (ISDM) offers practical digital marketing education across Pune, United States, United Kingdom, Singapore, and Germany. Explore programs in SEO, Performance Marketing, AI Marketing, and more.',
    // Replace with verified production domain
    siteUrl: 'https://isdm.edu.in',
    ogImage: '/images/Modern-ISDM-Campus-Entrance.webp',
  },

  announcement: {
    text: 'Admissions and Program Enquiries — Connect With ISDM',
    link: '/contact',
    active: true,
  },

  hero: {
    eyebrow: 'International School of Digital Marketing',
    headline1: 'Your Future Is Digital.',
    headline2: 'Make It Remarkable.',
    subheading:
      'Explore digital marketing, AI-assisted marketing, performance strategy, and practical learning experiences designed for a digital-first world.',
    cta1: { label: 'Explore Programs', link: '/programs' },
    cta2: { label: 'Talk to an Advisor', link: '/contact' },
    supportingLine: 'Practical Learning · Modern Marketing · Global Perspective',
    heroImage: '/images/Modern-ISDM-Campus-Entrance.webp',
  },
};

export default siteConfig;
