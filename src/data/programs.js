// ============================================================
// ISDM — PROGRAMS DATA
// ============================================================

export const programs = [
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    number: '01',
    title: 'Digital Marketing Professional',
    shortTitle: 'Digital Marketing',
    description:
      'A comprehensive foundation in modern digital marketing — from audience research and SEO to campaign planning and analytics. Designed for those starting their marketing journey or looking to formalise their skills.',
    topics: [
      'Marketing fundamentals',
      'Audience research',
      'SEO essentials',
      'Digital advertising',
      'Content strategy',
      'Analytics & reporting',
    ],
    modules: ['01', '02', '03', '04', '05', '06', '07', '08', '10', '12'],
    image: '/images/02-classroom-training.png.webp',
    color: '#D5FF3F',
    audience: [
      'Marketing graduates and freshers',
      'Business owners entering digital channels',
      'Career changers seeking marketing roles',
      'Communication and media graduates',
    ],
    outcomes: [
      'Understand digital marketing channels and how they work together',
      'Plan and execute SEO, content, and social media strategies',
      'Set up and manage advertising campaigns on Google and Meta',
      'Measure and report marketing performance effectively',
    ],
    projects: [
      {
        title: 'Full-Channel Campaign Plan',
        description:
          'Develop a 90-day digital marketing plan covering SEO, social media, content, and paid advertising for a sample brand.',
      },
      {
        title: 'SEO & Analytics Audit',
        description:
          'Conduct a technical SEO audit and create a Google Analytics report using demonstration data.',
      },
    ],
  },
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    number: '02',
    title: 'Performance Marketing',
    shortTitle: 'Performance Marketing',
    description:
      'Master the art and science of paid media. Learn to plan, execute, and optimise campaigns across Google Ads and Meta platforms, with a focus on measurable outcomes and return on investment.',
    topics: [
      'Google Ads',
      'Meta Ads',
      'Campaign planning',
      'Audience targeting',
      'Conversion tracking',
      'Campaign optimisation',
    ],
    modules: ['06', '07', '08', '10'],
    image: '/images/09-workshop-seminar.webp',
    color: '#435BFF',
    audience: [
      'Digital marketers wanting specialisation',
      'Media buyers and PPC managers',
      'E-commerce marketers',
      'Business owners running paid campaigns',
    ],
    outcomes: [
      'Plan and launch Google Search, Display, and Video campaigns',
      'Build and optimise Meta ad campaigns across multiple objectives',
      'Implement conversion tracking and measure ROAS accurately',
      'Scale profitable campaigns using data-driven optimisation',
    ],
    projects: [
      {
        title: 'Multi-Platform Campaign Strategy',
        description:
          'Design a full-funnel paid campaign across Google and Meta for a sample e-commerce brand, including budget allocation and KPIs.',
      },
      {
        title: 'Campaign Audit & Optimisation Report',
        description:
          'Analyse sample campaign data, identify inefficiencies, and present an optimisation roadmap.',
      },
    ],
  },
  {
    id: 'seo',
    slug: 'seo',
    number: '03',
    title: 'SEO & Organic Growth',
    shortTitle: 'SEO',
    description:
      'Build sustainable organic visibility through technical SEO, keyword strategy, on-page optimisation, and content development. Understand how search engines work and how to make them work for your brand.',
    topics: [
      'Keyword research',
      'Technical SEO',
      'On-page optimisation',
      'Content strategy',
      'Search Console',
      'Competitor analysis',
    ],
    modules: ['03', '05', '10'],
    image: '/images/08-student-collaboration.webp',
    color: '#D5FF3F',
    audience: [
      'Content creators and writers',
      'Website owners seeking organic traffic',
      'Marketers adding SEO to their skillset',
      'Freelancers offering SEO services',
    ],
    outcomes: [
      'Conduct thorough keyword research and map intent to content',
      'Perform technical SEO audits and fix crawling issues',
      'Optimise on-page elements and site architecture',
      'Develop content strategies that attract and convert organic traffic',
    ],
    projects: [
      {
        title: 'Complete SEO Audit',
        description:
          'Audit a demonstration website for technical, on-page, and content SEO issues, and deliver an actionable report.',
      },
      {
        title: 'Content Strategy Blueprint',
        description:
          'Create a keyword-driven content plan for a chosen niche, including pillar pages and supporting articles.',
      },
    ],
  },
  {
    id: 'social-media',
    slug: 'social-media',
    number: '04',
    title: 'Social Media & Content',
    shortTitle: 'Social Media',
    description:
      'Develop the skills to build and grow brand presence across social platforms. From content strategy and creative direction to community management and analytics — learn what works in today\'s social landscape.',
    topics: [
      'Content calendars',
      'Copywriting',
      'Creative strategy',
      'Social media management',
      'Short-form video',
      'Platform analytics',
    ],
    modules: ['04', '05', '10'],
    image: '/images/10-student-community.webp',
    color: '#435BFF',
    audience: [
      'Social media managers and coordinators',
      'Content creators and influencers',
      'Brand managers and marketers',
      'Business owners managing their own channels',
    ],
    outcomes: [
      'Build platform-specific content strategies for Instagram, LinkedIn, and YouTube',
      'Write compelling copy for social media, ads, and brand communications',
      'Plan, produce, and repurpose short-form video content',
      'Analyse and report on social media performance effectively',
    ],
    projects: [
      {
        title: 'Brand Social Media Campaign',
        description:
          'Develop a 30-day social media content calendar, creative direction, and performance measurement plan for a sample brand.',
      },
      {
        title: 'Content Performance Report',
        description:
          'Analyse sample social media data and present insights with recommendations for content improvement.',
      },
    ],
  },
  {
    id: 'ai-marketing',
    slug: 'ai-marketing',
    number: '05',
    title: 'AI for Digital Marketing',
    shortTitle: 'AI Marketing',
    description:
      'Explore how generative AI and large language models are reshaping digital marketing workflows. Learn to use AI tools responsibly for research, content creation, campaign planning, and performance analysis.',
    topics: [
      'Generative AI tools',
      'Prompt engineering',
      'AI-assisted research',
      'Content workflows',
      'AI automation',
      'Responsible AI',
    ],
    modules: ['09', '05', '10'],
    image: '/images/03-office-interior.webp',
    color: '#D5FF3F',
    audience: [
      'Marketers curious about AI tools',
      'Content creators exploring AI-assisted workflows',
      'Business owners looking to scale content production',
      'Digital professionals adapting to the AI era',
    ],
    outcomes: [
      'Use generative AI tools effectively for marketing research and content',
      'Write structured prompts that produce high-quality, usable outputs',
      'Build efficient AI-assisted workflows for content and campaigns',
      'Evaluate and verify AI outputs with critical thinking',
    ],
    projects: [
      {
        title: 'AI Marketing Workflow Design',
        description:
          'Create a documented AI-assisted marketing workflow covering research, content creation, review, and performance tracking.',
      },
      {
        title: 'Prompt Library & Content Audit',
        description:
          'Build a tested prompt library for a specific marketing use case and evaluate the quality of AI-generated outputs.',
      },
    ],
  },
  {
    id: 'business-marketing',
    slug: 'business-marketing',
    number: '06',
    title: 'Marketing for Business Owners',
    shortTitle: 'Business Marketing',
    description:
      'A practical program designed for entrepreneurs and business owners who want to understand and manage their own digital marketing. Cover local SEO, advertising basics, brand strategy, and lead generation.',
    topics: [
      'Local SEO',
      'Digital brand strategy',
      'Lead generation',
      'Website fundamentals',
      'Advertising basics',
      'Analytics for decisions',
    ],
    modules: ['01', '02', '03', '04', '06', '07', '10'],
    image: '/images/Modern-ISDM-Campus-Entrance.webp',
    color: '#435BFF',
    audience: [
      'Small and medium business owners',
      'Entrepreneurs building online presence',
      'Founders managing their own marketing',
      'Professionals transitioning to business ownership',
    ],
    outcomes: [
      'Develop a simple but effective digital marketing strategy for your business',
      'Set up and optimise Google Business Profile and local SEO',
      'Run basic advertising campaigns on Google and Meta',
      'Read and act on marketing analytics data confidently',
    ],
    projects: [
      {
        title: 'Business Digital Marketing Plan',
        description:
          'Create a 6-month digital marketing plan tailored to a real or sample business, covering all key channels.',
      },
      {
        title: 'Local SEO & Lead Generation Setup',
        description:
          'Design a local SEO strategy and lead generation framework for a sample local business.',
      },
    ],
  },
];

export default programs;
