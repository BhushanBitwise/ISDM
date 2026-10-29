// ============================================================
// ISDM — NAVIGATION DATA
// ============================================================

export const navigation = [
  {
    label: 'Programs',
    href: '/programs',
    dropdown: [
      { label: 'Digital Marketing Professional', href: '/programs/digital-marketing', number: '01' },
      { label: 'Performance Marketing', href: '/programs/performance-marketing', number: '02' },
      { label: 'SEO & Organic Growth', href: '/programs/seo', number: '03' },
      { label: 'Social Media & Content', href: '/programs/social-media', number: '04' },
      { label: 'AI for Digital Marketing', href: '/programs/ai-marketing', number: '05' },
      { label: 'Marketing for Business Owners', href: '/programs/business-marketing', number: '06' },
    ],
  },
  {
    label: 'Curriculum',
    href: '/curriculum',
  },
  {
    label: 'Learning',
    href: '/learning-experience',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Locations',
    href: '/locations',
    dropdown: [
      { label: 'Pune', href: '/locations/pune', region: 'Maharashtra, India' },
      { label: 'Nagpur', href: '/locations/nagpur', region: 'Maharashtra, India' },
      { label: 'Singapore', href: '/locations/singapore', region: 'South-East Asia' },
      { label: 'Germany', href: '/locations/germany', region: 'Europe' },
    ],
  },
];

export default navigation;
