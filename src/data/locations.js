// ============================================================
// ISDM — LOCATIONS DATA
// ============================================================

export const locationStatuses = {
  OPERATIONAL: 'operational',
  ENQUIRY_ONLY: 'enquiry-only',
  PLANNED: 'planned',
};

export const locations = [
  {
    id: 'pune',
    slug: 'pune',
    city: 'Pune',
    country: 'India',
    region: 'Maharashtra',
    hubCode: 'HUB / PNQ',
    timezone: 'UTC+5:30 · IST',
    status: locationStatuses.ENQUIRY_ONLY,
    // Illustrative area description — not a verified ISDM premises
    addressLabel: 'Baner Area, Pune, Maharashtra 411045, India',
    addressNote: 'Enquiry-based — exact address shared upon confirmation',
    image: '/images/06-pune-branch.webp',
    intro:
      'Pune is one of India\'s fastest-growing technology and education hubs. ISDM\'s Pune learning centre is currently available for programme enquiries. Details will be confirmed upon verification.',
    programs: ['digital-marketing', 'performance-marketing', 'seo', 'social-media', 'ai-marketing', 'business-marketing'],
    whatsappMessage: 'Hello ISDM team, I would like to enquire about programs at the Pune location.',
  },
  {
    id: 'us',
    slug: 'us',
    city: 'United States',
    country: 'United States',
    region: 'New York, USA',
    hubCode: 'HUB / USA',
    timezone: 'UTC-5:00 · EST',
    status: locationStatuses.OPERATIONAL,
    addressLabel: 'Manhattan Tech District, New York, NY 10001, United States',
    addressNote: 'Admissions Open — connect with ISDM US admissions desk',
    image: '/images/11-us-branch.jpg',
    intro:
      'The United States is the global epicenter for digital advertising, venture tech, and marketing innovation. ISDM\'s US learning presence in New York prepares ambitious marketers with practical, cutting-edge industry frameworks.',
    programs: ['digital-marketing', 'performance-marketing', 'ai-marketing', 'seo'],
    whatsappMessage: 'Hello ISDM team, I would like to enquire about programs at the US location.',
  },
  {
    id: 'uk',
    slug: 'uk',
    city: 'United Kingdom',
    country: 'United Kingdom',
    region: 'London, UK',
    hubCode: 'HUB / GBR',
    timezone: 'UTC+0:00 · GMT',
    status: locationStatuses.OPERATIONAL,
    addressLabel: 'Tech City & Financial Quarter, London EC2A, United Kingdom',
    addressNote: 'Admissions Open — connect with ISDM UK admissions desk',
    image: '/images/12-uk-branch.jpg',
    intro:
      'The United Kingdom stands at the crossroads of international business, creative strategy, and advanced technology. ISDM\'s London learning hub provides world-class digital marketing and AI education.',
    programs: ['digital-marketing', 'performance-marketing', 'ai-marketing', 'social-media'],
    whatsappMessage: 'Hello ISDM team, I would like to enquire about programs at the UK location.',
  },
  {
    id: 'singapore',
    slug: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Central Business District',
    hubCode: 'HUB / SIN',
    timezone: 'UTC+8:00 · SGT',
    status: locationStatuses.OPERATIONAL,
    addressLabel: 'Central Business District, Singapore',
    addressNote: 'Admissions Open — connect with ISDM Singapore admissions desk',
    image: '/images/04-singapore-branch.webp',
    intro:
      'Singapore is a global centre for marketing, fintech, and media innovation. ISDM\'s Singapore learning presence serves learners across South-East Asia and international cohorts.',
    programs: ['digital-marketing', 'performance-marketing', 'ai-marketing'],
    whatsappMessage: 'Hello ISDM team, I would like to know more about the Singapore learning programs.',
  },
  {
    id: 'germany',
    slug: 'germany',
    city: 'Germany',
    country: 'Germany',
    region: 'Europe',
    hubCode: 'HUB / GER',
    timezone: 'UTC+1:00 · CET',
    status: locationStatuses.OPERATIONAL,
    addressLabel: 'Germany Centre, Europe',
    addressNote: 'Admissions Open — connect with ISDM Germany admissions desk',
    image: '/images/07-germany-branch.webp',
    intro:
      'Germany is one of Europe\'s most dynamic creative and technology economies. ISDM\'s European learning hub provides cutting-edge marketing and AI curriculum for international learners.',
    programs: ['digital-marketing', 'ai-marketing'],
    whatsappMessage: 'Hello ISDM team, I would like to know more about the Germany learning programs.',
  },
];

export const getLocationStatusLabel = (status) => {
  switch (status) {
    case locationStatuses.OPERATIONAL:
      return 'Admissions Open';
    case locationStatuses.ENQUIRY_ONLY:
      return 'Enquiry Open';
    default:
      return 'Admissions Open';
  }
};

export const getLocationStatusColor = (status) => {
  switch (status) {
    case locationStatuses.OPERATIONAL:
      return '#D5FF3F';
    case locationStatuses.ENQUIRY_ONLY:
      return '#D5FF3F';
    default:
      return '#D5FF3F';
  }
};

export default locations;
