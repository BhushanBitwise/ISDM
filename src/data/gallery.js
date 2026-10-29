// ============================================================
// ISDM — GALLERY DATA
// Built from actual images in public/images/
// ============================================================

// Image inventory (based on actual files found in public/images/):
// Modern-ISDM-Campus-Entrance.webp   — Campus exterior / hero
// 02-classroom-training.png.webp     — Classroom / learning
// 03-office-interior.webp            — Office interior / campus
// 04-singapore-branch.webp           — Singapore skyline / location
// 05-nagpur-branch.webp              — Nagpur location
// 06-pune-branch.webp                — Pune location
// 07-germany-branch.webp             — Germany location
// 08-student-collaboration.webp      — Students collaborating
// 09-workshop-seminar.webp           — Workshop / seminar
// 10-student-community.webp          — Student community

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'campus', label: 'Campus' },
  { id: 'learning', label: 'Learning' },
  { id: 'community', label: 'Community' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'locations', label: 'Locations' },
];

export const galleryItems = [
  {
    id: 'g01',
    src: '/images/Modern-ISDM-Campus-Entrance.webp',
    alt: 'ISDM campus entrance — modern architecture and welcoming learning environment',
    title: 'ISDM Campus',
    caption: 'A modern learning environment built for the digital generation.',
    category: 'campus',
    location: 'ISDM Campus',
  },
  {
    id: 'g02',
    src: '/images/02-classroom-training.png.webp',
    alt: 'Students engaged in a structured classroom training session at ISDM',
    title: 'Classroom Training',
    caption: 'Structured learning sessions that combine theory with practical application.',
    category: 'learning',
    location: 'ISDM Learning Centre',
  },
  {
    id: 'g03',
    src: '/images/03-office-interior.webp',
    alt: 'ISDM office interior showing a modern, collaborative workspace',
    title: 'Learning Environment',
    caption: 'Thoughtfully designed spaces for focused learning and collaboration.',
    category: 'campus',
    location: 'ISDM Office',
  },
  {
    id: 'g04',
    src: '/images/08-student-collaboration.webp',
    alt: 'ISDM students collaborating on a digital marketing project',
    title: 'Student Collaboration',
    caption: 'Peer learning and collaborative projects build real-world skills.',
    category: 'community',
    location: 'ISDM Campus',
  },
  {
    id: 'g05',
    src: '/images/09-workshop-seminar.webp',
    alt: 'Participants at an ISDM digital marketing workshop and seminar',
    title: 'Workshop & Masterclass',
    caption: 'Intensive workshops led by experienced practitioners.',
    category: 'workshops',
    location: 'ISDM Campus',
  },
  {
    id: 'g06',
    src: '/images/10-student-community.webp',
    alt: 'ISDM student community gathering and networking event',
    title: 'Student Community',
    caption: 'Building connections that extend well beyond the classroom.',
    category: 'community',
    location: 'ISDM Campus',
  },
  {
    id: 'g07',
    src: '/images/04-singapore-branch.webp',
    alt: 'Singapore — a global business and marketing hub where ISDM is expanding',
    title: 'Singapore',
    caption: 'ISDM\'s planned Singapore presence in the heart of South-East Asia.',
    category: 'locations',
    location: 'Singapore',
  },
  {
    id: 'g08',
    src: '/images/05-nagpur-branch.webp',
    alt: 'Nagpur, India — ISDM learning centre location',
    title: 'Nagpur',
    caption: 'Serving learners in the heart of India.',
    category: 'locations',
    location: 'Nagpur, India',
  },
  {
    id: 'g09',
    src: '/images/06-pune-branch.webp',
    alt: 'Pune, India — ISDM learning centre location in Maharashtra',
    title: 'Pune',
    caption: 'Maharashtra\'s technology capital — home to ISDM\'s Pune centre.',
    category: 'locations',
    location: 'Pune, India',
  },
  {
    id: 'g10',
    src: '/images/07-germany-branch.webp',
    alt: 'Berlin, Germany — ISDM\'s planned European location',
    title: 'Berlin, Germany',
    caption: 'ISDM\'s planned European base in one of the world\'s great creative capitals.',
    category: 'locations',
    location: 'Berlin, Germany',
  },
];

export default galleryItems;
