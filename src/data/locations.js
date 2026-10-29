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
    id: 'nagpur',
    slug: 'nagpur',
    city: 'Nagpur',
    country: 'India',
    region: 'Maharashtra',
    hubCode: 'HUB / NAG',
    timezone: 'UTC+5:30 · IST',
    status: locationStatuses.ENQUIRY_ONLY,
    addressLabel: 'Dharampeth Area, Nagpur, Maharashtra 440010, India',
    addressNote: 'Enquiry-based — exact address shared upon confirmation',
    image: '/images/05-nagpur-branch.webp',
    intro:
      'Nagpur, located at the geographical heart of India, is an emerging education and business centre. ISDM\'s Nagpur learning centre is open for enquiries from prospective students.',
    programs: ['digital-marketing', 'seo', 'social-media', 'business-marketing'],
    whatsappMessage: 'Hello ISDM team, I would like to enquire about programs at the Nagpur location.',
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
