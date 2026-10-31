# ISDM — International School of Digital Marketing

> **Learn Digital. Think Global.**  
> *Where Marketing Meets Technology.*

An award-level, editorial digital marketing education website built with React, Tailwind CSS, custom design tokens, and GSAP motion design. Designed with a warm ivory and charcoal aesthetic, electric lime accents, Space Grotesk / Inter / Instrument Serif typography, and mobile-first responsive architecture.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Routing**: React Router DOM v7 (Data Router with route-level code splitting via `React.lazy` and `Suspense`)
- **Styling**: Tailwind CSS v4 + Custom Design System (`globals.css`, `animations.css`, `components.css`)
- **Typography**: Google Fonts — Space Grotesk (headings), Inter (body), Instrument Serif (editorial accents)
- **Animation / Motion**: GSAP 3 + ScrollTrigger (context-scoped with `prefers-reduced-motion` support)
- **Icons**: Lucide React + custom SVGs
- **Deployment / SPA**: `public/_redirects` configured for single-page application routing on Netlify / Vercel

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Starts Vite development server at http://localhost:5173/
```

### Production Build
```bash
npm run build
# Compiles optimized production bundle to /dist
```

### Preview Production Build
```bash
npm run preview
# Serves the local /dist build
```

---

## 🗺️ Complete Routing Overview

| Route | Page | Description |
|---|---|---|
| `/` | `HomePage` | Full editorial homepage (Hero, Intro, Programs, Curriculum, Doing, Locations, Community, Events, Careers, Gallery, FAQ, CTA, Footer) |
| `/about` | `AboutPage` | Brand philosophy, landscape changes, strategic learning principles, office visual |
| `/programs` | `ProgramsPage` | Directory of 6 core digital marketing diploma & professional programs |
| `/programs/digital-marketing` | `ProgramDetailPage` | Full curriculum breakdown, target audience, assignments, FAQs, enquiry form |
| `/programs/performance-marketing` | `ProgramDetailPage` | Google Ads, Meta Ads, ROAS, CAC, analytics focus |
| `/programs/seo` | `ProgramDetailPage` | Technical SEO, crawling, indexing, Search Console, keyword strategy |
| `/programs/social-media` | `ProgramDetailPage` | Content planning, copywriting, short-form video, engagement |
| `/programs/ai-marketing` | `ProgramDetailPage` | Generative AI, LLMs, prompt engineering, automated workflows |
| `/programs/business-marketing` | `ProgramDetailPage` | Local SEO, lead generation, website fundamentals, business growth |
| `/curriculum` | `CurriculumPage` | 12 full modules with searchable topics, expandable learning outcomes, and assignments |
| `/learning-experience` | `LearningExperiencePage` | Hands-on project methodology, peer feedback, workshop seminars |
| `/events` | `EventsPage` | Masterclasses, workshops, honest upcoming batch announcements |
| `/careers` | `CareersPage` | Portfolio building, client discovery, interview prep, freelancing |
| `/locations` | `LocationsPage` | Multi-city directory: Pune, United States, United Kingdom, Singapore, Germany |
| `/locations/:slug` | `LocationDetailPage` | Individual location enquiry cards with honest status badges |
| `/gallery` | `GalleryPage` | Data-driven gallery with category filter and keyboard-accessible lightbox |
| `/contact` | `ContactPage` | Direct phone lines, WhatsApp integration, and controlled enquiry form |
| `/privacy-policy` | `PrivacyPolicyPage` | Data privacy, cookies, and learner rights policy |
| `/terms-and-conditions` | `TermsPage` | Enrolment terms, intellectual property, and guidelines |
| `/*` (404) | `NotFoundPage` | Custom branded 404 page with return-home CTA |

---

## 🖼️ Actual Image Inventory & Mapping

All assets are located in `public/images/` and handled gracefully with fallback placeholders:

| Image File | Actual Asset | Website Section Mapping |
|---|---|---|
| `Modern-ISDM-Campus-Entrance.webp` | Hero campus exterior | Hero Section, About Page, Open Graph Preview |
| `02-classroom-training.png.webp` | Interactive training classroom | "Learn by Doing" Section, Learning Experience, Digital Marketing Program |
| `03-office-interior.webp` | Contemporary office & workspaces | About Page, Program Feature, Gallery |
| `04-singapore-branch.webp` | Singapore skyline & business district | Singapore Location Card & Detail Page |
| `06-pune-branch.webp` | Pune education and IT corridor | Pune Location Card & Detail Page |
| `07-germany-branch.webp` | Berlin, Germany European hub | Germany Location Card & Detail Page |
| `11-us-branch.jpg` | United States campus & tech quarter | US Location Card & Detail Page, Gallery |
| `12-uk-branch.jpg` | United Kingdom London campus & hub | UK Location Card & Detail Page, Gallery |
| `08-student-collaboration.webp` | Students collaborating on campaign | Community Section, Learning Experience, Gallery |
| `09-workshop-seminar.webp` | Seminar & workshop presentation | Events & Workshops Section, Gallery |
| `10-student-community.webp` | Student team in discussion | Career Development Section, Gallery |

---

## 💬 WhatsApp Integration

- **Primary WhatsApp Number**: `+91 8080152238` (configured in `src/utils/whatsapp.js`)
- **Direct Link**: [https://wa.me/918080152238](https://wa.me/918080152238)
- **Utility Function**: `createWhatsAppLink(message)` provides URL-safe encoding and message templating for:
  - General enquiries
  - Specific course & curriculum queries
  - Location and branch queries
  - Workshop registrations
- **Touchpoints**:
  - Floating WhatsApp action button (bottom-right on all screens)
  - Desktop announcement bar and header CTA
  - Mobile slide-out drawer
  - Every program and location detail page
  - Enquiry form fallback

---

## 📞 Contact Information

Stored centrally in `src/data/siteConfig.js`:
- **Enquiries**: `+91 80876 01850`
- **WhatsApp**: `+91 8080152238`
- **Support**: `+91 9850941120`
- **Email Placeholder**: `enquiry@isdm.edu.in` (flagged as placeholder until official domain mailbox is configured)

---

## 📝 Form Submissions & Demo Mode

The reusable `EnquiryForm` component (`src/components/forms/EnquiryForm.jsx`) includes:
- Controlled inputs with real-time validation for Name, Phone, Email, Program, Location, and Consent.
- **Honest Demo Notice**: When `DEMO_MODE = true`, the form does not simulate a false backend success; it clearly informs prospective students that the form is in demonstration mode and provides a direct, one-click WhatsApp handoff button pre-filled with their entered details.
- To connect a real backend, set `DEMO_MODE = false` and insert your API endpoint into `handleSubmit`.

---

## ⚡ Outstanding Business Items to Verify

1. **Physical Branch Addresses**: Locations (Pune, United States, United Kingdom, Singapore, Berlin) currently display regional area descriptions with `enquiry-only` and `planned` statuses. Update `src/data/locations.js` when physical branch leases or verified addresses are finalized.
2. **Batch Dates & Fees**: Honest placeholders are maintained without inventing fabricated fees or guaranteed placement figures.
3. **Official Email**: Update `enquiry@isdm.edu.in` in `siteConfig.js` once the organizational mail server is established.
