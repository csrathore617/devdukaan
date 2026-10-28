export type ThemeMode = 'light' | 'dark' | 'system'

export type Service = {
  id: string
  slug: string
  name: string
  summary: string
  description: string
  price: string
  icon: string
  technologies: string[]
  features: string[]
  enabled: boolean
}

export type Project = {
  id: string
  slug: string
  name: string
  summary: string
  description: string
  industry: string
  category: string
  projectType: string
  clientName: string
  demoUrl?: string
  productionUrl?: string
  githubUrl?: string
  thumbnail: string
  gallery: string[]
  technologies: string[]
  features: string[]
  challenge: string
  solution: string
  results?: string
  featured: boolean
  published: boolean
  displayOrder: number
  isConcept?: boolean
}

export type DemoSite = {
  id: string
  industry: string
  name: string
  summary: string
  style: string
  pageCount: string
  demoUrl: string
  status: 'concept' | 'live'
  image: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type Reason = {
  title: string
  description: string
}

export const siteSettings = {
  brandName: 'DevDukaan.in',
  businessEmail: 'hello@devdukaan.in',
  whatsappNumber: '+91 8000632162',
  phone: '8000632162',
  domain: 'https://devdukaan.in',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com',
  github: 'https://github.com',
  location: 'Jaipur, Rajasthan, India',
  owner: 'Chetan Singh',
  tagline: 'Your Vision. Our Code. Your Growth.',
  heroDescription:
    'We help businesses build a stronger online presence with professional websites, online stores, custom web solutions, and ongoing support.',
  copyright: '© 2026 DevDukaan.in. All rights reserved.',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export const services: Service[] = [
  {
    id: 'business-website-design',
    slug: 'business-website-design',
    name: 'Business Website Design',
    summary: 'Professional websites that present your business clearly and help visitors take action.',
    description:
      'We build polished business websites that improve trust, explain your services, and encourage enquiries from the right audience.',
    price: 'Custom Quote',
    icon: 'Globe',
    technologies: ['Brand-first design', 'Clear messaging', 'Lead generation'],
    features: ['Professional brand presentation', 'Customer enquiry flow', 'Business-focused storytelling'],
    enabled: true,
  },
  {
    id: 'professional-website-development',
    slug: 'professional-website-development',
    name: 'Professional Website Development',
    summary: 'A stronger digital presence for businesses that want a more credible online presence.',
    description:
      'From concept to launch, we create custom websites designed to help your business look professional and convert more enquiries.',
    price: 'Custom Quote',
    icon: 'Globe',
    technologies: ['Business-first design', 'Conversion strategy', 'Responsive experience'],
    features: ['Responsive business website', 'Clear calls to action', 'Improved customer trust'],
    enabled: true,
  },
  {
    id: 'ecommerce-development',
    slug: 'e-commerce-online-store-development',
    name: 'E-commerce & Online Store Development',
    summary: 'Online stores designed to showcase your products and support customer buying decisions.',
    description:
      'We build e-commerce experiences that make it easier for shoppers to discover products, understand offers, and get in touch with your business.',
    price: 'Custom Quote',
    icon: 'ShoppingBag',
    technologies: ['Product presentation', 'Conversion journey', 'Customer experience'],
    features: ['Category-led shopping flow', 'Product-focused design', 'Customer enquiry and contact paths'],
    enabled: true,
  },
  {
    id: 'custom-web-applications',
    slug: 'custom-web-applications',
    name: 'Custom Web Applications',
    summary: 'Tailored digital tools that simplify your internal processes and customer experience.',
    description:
      'We design business-focused web applications to manage operations, improve workflows, and keep information organised and accessible.',
    price: 'Custom Quote',
    icon: 'LayoutDashboard',
    technologies: ['Process automation', 'Business workflow design', 'User experience'],
    features: ['Operational dashboards', 'Workflow support', 'Faster business decisions'],
    enabled: true,
  },
  {
    id: 'website-redesign-modernization',
    slug: 'website-redesign-modernization',
    name: 'Website Redesign & Modernization',
    summary: 'Refresh outdated websites with a cleaner, more persuasive experience.',
    description:
      'We modernize older websites to improve clarity, visual consistency, and customer conversion without losing your brand identity.',
    price: 'Custom Quote',
    icon: 'RefreshCw',
    technologies: ['Brand refresh', 'UX improvement', 'Performance focus'],
    features: ['Website audit', 'Messaging simplification', 'Modern customer experience'],
    enabled: true,
  },
  {
    id: 'business-automation-solutions',
    slug: 'business-automation-solutions',
    name: 'Business Automation Solutions',
    summary: 'Smart digital processes that reduce manual effort and improve consistency.',
    description:
      'We help businesses automate common tasks, improve handoffs, and create smoother customer or internal journeys.',
    price: 'Custom Quote',
    icon: 'Sparkles',
    technologies: ['Workflow improvement', 'Process clarity', 'Business efficiency'],
    features: ['Automated customer journeys', 'Task streamlining', 'Operational consistency'],
    enabled: true,
  },
  {
    id: 'api-system-integration',
    slug: 'api-system-integration',
    name: 'API & System Integration',
    summary: 'Connect your tools, systems, and customer-facing workflows more effectively.',
    description:
      'We help businesses connect internal and external systems so information moves more smoothly and teams work with less friction.',
    price: 'Custom Quote',
    icon: 'Network',
    technologies: ['System connectivity', 'Data flow', 'Business efficiency'],
    features: ['Workflow integration', 'Data-sharing support', 'Operational coordination'],
    enabled: true,
  },
  {
    id: 'website-maintenance-support',
    slug: 'website-maintenance-support',
    name: 'Website Maintenance & Support',
    summary: 'Ongoing care to keep your website secure, current, and working smoothly.',
    description:
      'Whether you need updates, fixes, or continued support, we help your digital presence stay reliable and ready for business.',
    price: 'Custom Quote',
    icon: 'Sparkles',
    technologies: ['Ongoing support', 'Performance care', 'Business continuity'],
    features: ['Regular website updates', 'Support for improvements', 'Performance and reliability'],
    enabled: true,
  },
  {
    id: 'custom-software-solutions',
    slug: 'custom-software-solutions',
    name: 'Custom Software Solutions',
    summary: 'Digital solutions designed around how your business actually operates.',
    description:
      'We create software experiences that align with your business goals, reduce complexity, and support more efficient growth.',
    price: 'Custom Quote',
    icon: 'Bot',
    technologies: ['Strategic planning', 'Process mapping', 'Practical delivery'],
    features: ['Tailored experience', 'Business logic support', 'Scalable growth planning'],
    enabled: true,
  },
  {
    id: 'seo-friendly-website-development',
    slug: 'seo-friendly-website-development',
    name: 'SEO-Friendly Website Development',
    summary: 'Websites built to perform well in search and communicate value clearly to customers.',
    description:
      'We build websites with stronger structure, clearer messaging, and a more discoverable user journey for better long-term visibility.',
    price: 'Custom Quote',
    icon: 'Search',
    technologies: ['Search visibility', 'Content structure', 'Customer discovery'],
    features: ['Content-ready presentation', 'Search-friendly structure', 'Improved customer discovery'],
    enabled: true,
  },
]

export const projects: Project[] = [
  {
    id: 'project-bhumika-jewellers',
    slug: 'bhumika-jewellers',
    name: 'Bhumika Jewellers',
    summary: 'Jewellery brand website focused on product discovery, collection browsing, and customer enquiries.',
    description:
      'A jewellery business website showcasing gold, silver, diamond, and Rajputi jewellery collections, product enquiries, jewellery categories, brand information, and customer contact options.',
    industry: 'Jewellery & E-commerce',
    category: 'Jewellery & E-commerce',
    projectType: 'Business website',
    clientName: 'Bhumika Jewellers',
    thumbnail:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
    ],
    technologies: ['Brand experience', 'Product browsing', 'Customer enquiry'],
    features: ['Jewellery collection showcase', 'Product enquiry experience', 'Jewellery category browsing', 'Brand and business information', 'Customer contact and enquiry options'],
    challenge: 'The business wanted a premium online presence that showcased its collections clearly and made customer enquiries easier.',
    solution: 'We focused on clean product storytelling, category-led browsing, and a simple enquiry experience aligned with the brand.',
    results: 'A more polished and customer-friendly jewellery presentation for browsing and enquiry.',
    demoUrl: 'https://bhumikajewellers.com/',
    productionUrl: 'https://bhumikajewellers.com/',
    featured: true,
    published: true,
    displayOrder: 1,
    isConcept: false,
  },
  {
    id: 'project-studycatalyst',
    slug: 'studycatalyst',
    name: 'StudyCatalyst',
    summary: 'Education platform focused on learning resources, subject navigation, and exam preparation.',
    description:
      'An educational learning platform designed to help students explore study resources, subject information, chapters, quizzes, and exam preparation material.',
    industry: 'Education & Learning',
    category: 'Education & Learning',
    projectType: 'Educational website',
    clientName: 'StudyCatalyst',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80',
    ],
    technologies: ['Student learning experience', 'Study organisation', 'Educational discovery'],
    features: ['Student-focused learning experience', 'Subject and chapter navigation', 'Study resources and exam preparation', 'Clear organized educational content'],
    challenge: 'The platform needed a clearer learning structure that made educational resources easy to browse and understand.',
    solution: 'We organised subject and chapter-driven content into a clean, user-friendly structure that supports learning journeys.',
    results: 'A more approachable educational experience built around discovery and study clarity.',
    demoUrl: 'https://studycatalyst.in/',
    productionUrl: 'https://studycatalyst.in/',
    featured: true,
    published: true,
    displayOrder: 2,
    isConcept: false,
  },
  {
    id: 'project-medgem-global',
    slug: 'medgem-global-healthcare',
    name: 'Medgem Global Healthcare',
    summary: 'Healthcare website built for doctor discovery, specialist information, and enquiry-driven patient journeys.',
    description:
      'A healthcare platform that helps users discover doctors and hospitals, explore medical specialities, review patient success stories, and submit healthcare enquiries.',
    industry: 'Healthcare & Medical Tourism',
    category: 'Healthcare & Medical Tourism',
    projectType: 'Healthcare website',
    clientName: 'Medgem Global Healthcare',
    thumbnail:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    ],
    technologies: ['Healthcare experience', 'Service discovery', 'Trust-building design'],
    features: ['Doctor and hospital discovery', 'Medical speciality listings', 'Healthcare enquiry journey', 'Patient success stories', 'Contact and consultation enquiry options'],
    challenge: 'The healthcare brand needed a more trustworthy and user-friendly experience to help patients find information and enquire confidently.',
    solution: 'We structured the site around service discovery, trust signals, and a clear patient enquiry journey.',
    results: 'A more informed and conversion-focused healthcare website experience.',
    demoUrl: 'https://medgemglobal.com/',
    productionUrl: 'https://medgemglobal.com/',
    featured: true,
    published: true,
    displayOrder: 3,
    isConcept: false,
  },
  {
    id: 'project-travelgarh',
    slug: 'the-travelgarh',
    name: 'The TravelGarh',
    summary: 'Travel website designed for tour discovery, destination inspiration, and trip enquiries.',
    description:
      'A travel website showcasing domestic and international destinations, tour packages, trip enquiries, travel experiences, and customer reviews.',
    industry: 'Travel & Tourism',
    category: 'Travel & Tourism',
    projectType: 'Travel website',
    clientName: 'The TravelGarh',
    thumbnail:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80',
    ],
    technologies: ['Tour discovery', 'Travel storytelling', 'Trip enquiry'],
    features: ['Tour package showcase', 'Domestic and international destinations', 'Trip enquiry options', 'Travel stories and experiences', 'Customer reviews and testimonials'],
    challenge: 'The brand wanted a destination-first experience that made travel inspiration and enquiry pathways easier to navigate.',
    solution: 'We built a travel-focused layout centred on destinations, package presentation, and customer confidence.',
    results: 'A cleaner, more engaging website experience for destination browsing and trip enquiries.',
    demoUrl: 'https://travelgarh.com/',
    productionUrl: 'https://travelgarh.com/',
    featured: true,
    published: true,
    displayOrder: 4,
    isConcept: false,
  },
]

export const demoSites: DemoSite[] = [
  {
    id: 'demo-1',
    industry: 'Local business',
    name: 'Local Service Studio',
    summary: 'Clean conversion website concept for a small business with service pages and quote flow.',
    style: 'Premium business',
    pageCount: '6 pages',
    demoUrl: 'https://example.com/demo/local-service',
    status: 'concept',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'demo-2',
    industry: 'Restaurant',
    name: 'Modern Table',
    summary: 'Warm hospitality-themed concept for dining and reservations.',
    style: 'Luxury hospitality',
    pageCount: '8 pages',
    demoUrl: 'https://example.com/demo/modern-table',
    status: 'concept',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'demo-3',
    industry: 'E-commerce',
    name: 'Fjord Commerce',
    summary: 'Lifestyle e-commerce concept designed to spotlight categories and product discovery.',
    style: 'Minimal luxury retail',
    pageCount: '10 pages',
    demoUrl: 'https://example.com/demo/fjord-commerce',
    status: 'concept',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Do you build custom websites and software from scratch?',
    answer:
      'Yes. I create tailored front-end and back-end solutions based on your business requirements, workflows, and growth goals.',
  },
  {
    question: 'Can you work with existing sites or redesign outdated ones?',
    answer:
      'Absolutely. I can audit, redesign, optimize, and rebuild existing websites to improve performance, clarity, and conversion.',
  },
  {
    question: 'What kinds of clients do you typically work with?',
    answer:
      'I help businesses, educators, agencies, service brands, and startups that need professional digital products and lead generation websites.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes, maintenance and optimization can be included depending on the agreement and the level of support required.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Use the inquiry form, request a quote page, or contact me directly to share your requirements and budget range.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery and requirements',
    description: 'We clarify the business goals, audience, functionality, and desired outcomes.',
  },
  {
    title: 'Planning and proposal',
    description: 'I define scope, priorities, and timelines before the build begins.',
  },
  {
    title: 'Design and development',
    description: 'The product is built with a focus on clarity, conversion, and usability.',
  },
  {
    title: 'Testing and feedback',
    description: 'We refine the solution based on functionality, feedback, and quality checks.',
  },
  {
    title: 'Deployment and handover',
    description: 'The website or app is deployed and documented for smooth ongoing use.',
  },
  {
    title: 'Maintenance, if included',
    description: 'Optional support covers updates, improvements, and performance follow-up.',
  },
]

export const reasons: Reason[] = [
  {
    title: 'Direct communication',
    description: 'You work with a single developer who stays close to the project decisions and build process.',
  },
  {
    title: 'Tailored solutions',
    description: 'Every design and feature is chosen to serve your business instead of forcing a generic template.',
  },
  {
    title: 'Clear project scope',
    description: 'Requirements, deliverables, and priorities are defined in a practical and transparent way.',
  },
  {
    title: 'Responsive design',
    description: 'The user experience is designed to feel polished across mobile, tablet, and desktop screens.',
  },
  {
    title: 'Documented delivery',
    description: 'Work is organized for easy review, handover, and future maintenance.',
  },
]

export const adminMetrics = [
  { label: 'Total inquiries', value: '18' },
  { label: 'New inquiries', value: '6' },
  { label: 'Qualified leads', value: '9' },
  { label: 'Published projects', value: '4' },
  { label: 'Configured services', value: '6' },
  { label: 'Published demos', value: '3' },
]

export const recentInquiries = [
  { id: 'INQ-1042', name: 'Aarav Mehta', project: 'Business website', status: 'New', source: 'Organic' },
  { id: 'INQ-1041', name: 'Poonam Saini', project: 'E-commerce platform', status: 'Discussing', source: 'Google Ads' },
  { id: 'INQ-1038', name: 'Rohit Sharma', project: 'Automation app', status: 'Proposal sent', source: 'Referral' },
  { id: 'INQ-1035', name: 'Nisha Verma', project: 'Service redesign', status: 'Won', source: 'Instagram' },
]

export const blogPosts = [
  { title: 'How to choose the right website stack for your business', excerpt: 'A practical guide to aligning your website goals to a sustainable tech stack.' },
  { title: 'Common reasons small businesses lose leads online', excerpt: 'A look at conversion friction and weak trust signals that reduce inquiry quality.' },
  { title: 'What makes a service website worth contacting?', excerpt: 'Key UX and messaging principles that help visitors understand your offer quickly.' },
]
