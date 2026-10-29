// ============================================================
// ISDM — EVENTS DATA
// ============================================================

// When real events exist, populate this array with verified data.
// Until then, the events page displays an honest empty state.

export const eventCategories = [
  { id: 'all', label: 'All Events' },
  { id: 'ai', label: 'AI in Marketing' },
  { id: 'seo', label: 'SEO Masterclass' },
  { id: 'performance', label: 'Performance Marketing' },
  { id: 'content', label: 'Content Creation' },
  { id: 'analytics', label: 'Analytics' },
];

// Set to true when real events are configured
export const hasPublishedEvents = false;

export const events = [
  // Example structure — uncomment and populate with verified event data:
  // {
  //   id: 'evt-001',
  //   title: 'AI in Marketing Masterclass',
  //   description: 'An intensive session exploring how generative AI tools are changing digital marketing workflows.',
  //   category: 'ai',
  //   date: '2025-02-15',
  //   time: '10:00 AM – 1:00 PM IST',
  //   location: 'Pune Learning Centre / Online',
  //   isOnline: false,
  //   status: 'upcoming', // upcoming | past | cancelled
  //   registrationOpen: true,
  //   registrationLink: '/contact',
  //   image: '/images/09-workshop-seminar.webp',
  // },
];

export default events;
