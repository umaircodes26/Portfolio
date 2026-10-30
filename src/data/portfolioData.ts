export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  description?: string;
  tags: string[];
  thumbnails?: string[];
  isExpandedDefault?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  imageExact: string;
  imageHD: string;
  linkText: string;
  summary: string;
  year: string;
  services: string[];
  liveUrl?: string;
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageExact: string;
  imageHD: string;
  excerpt: string;
  content: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Web Developer Intern',
    location: '',
    period: '6 Months (Recent)',
    role: 'Working on website design and development tasks, building responsive layouts, and improving frontend UI/UX skills.',
    description: 'Working on website design and development tasks, building responsive layouts, and improving frontend UI/UX skills.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Frontend'],
    thumbnails: [
      '/images/web_dev_intern.jpg',
      '/images/ft_business.png',
      '/images/ft_product.jpg'
    ],
    isExpandedDefault: true
  },
  {
    id: 'exp-2',
    company: 'Junior Frontend Developer, Tech Startups',
    location: '',
    period: 'January 2024 - June 2025',
    role: 'Developing interactive UI components and optimizing web application performance.',
    description: 'Developing interactive UI components and optimizing web application performance.',
    tags: ['React', 'Tailwind', 'Git'],
    thumbnails: [
      '/images/junior_frontend_team.jpg',
      '/images/junior_frontend_code.jpg',
      '/images/web_dev_intern.jpg'
    ]
  },
  {
    id: 'exp-3',
    company: 'Freelance Web Developer, Self-Employed',
    location: '',
    period: 'June 2022 - December 2023',
    role: 'Built custom WordPress websites, landing pages, and responsive client layouts.',
    description: 'Built custom WordPress websites, landing pages, and responsive client layouts.',
    tags: ['WordPress', 'Web Dev', 'CSS'],
    thumbnails: [
      '/images/freelance_client_review.jpg',
      '/images/freelance_ui_mockup.jpg',
      '/images/freelance_web_screen.jpg'
    ]
  },
  {
    id: 'exp-4',
    company: 'Frontend Development Learner, Self-Taught',
    location: '',
    period: 'January 2021 - May 2022',
    role: 'Practiced HTML, CSS, and JS through personal projects and cloned UI/UX designs.',
    description: 'Practiced HTML, CSS, and JS through personal projects and cloned UI/UX designs.',
    tags: ['HTML', 'CSS', 'JS'],
    thumbnails: [
      '/images/learner_study_desk.jpg',
      '/images/learner_terminal_portfolio.png',
      '/images/learner_ui_clone.jpg'
    ]
  }
];

export const CAROUSEL_PROJECTS: ProjectItem[] = [
  {
    id: 'car-1',
    title: 'Molo Digital Agency website',
    client: 'Molo Studio',
    category: 'Web Design / Art Direction',
    imageExact: '/images/upscaled/carousel_1.png',
    imageHD: '/images/carousel_1.jpg',
    linkText: 'View Project',
    summary: 'A warm, tactile digital presence designed for an elite boutique design and branding studio.',
    year: '2024',
    services: ['Web Design', '3D Direction', 'Design System']
  },
  {
    id: 'car-2',
    title: 'Nova Digital Agency website',
    client: 'Nova Interactive',
    category: 'Brand Identity / Development',
    imageExact: '/images/upscaled/carousel_2.png',
    imageHD: '/images/carousel_2.jpg',
    linkText: 'View Project',
    summary: 'A minimalist architectural web experience featuring organic spatial compositions and ambient interactions.',
    year: '2024',
    services: ['Brand Strategy', 'Interaction Design', 'WebGL']
  },
  {
    id: 'car-3',
    title: 'Apex Digital Agency website',
    client: 'Apex Labs',
    category: 'Product Design / UI/UX',
    imageExact: '/images/upscaled/carousel_3.png',
    imageHD: '/images/carousel_3.jpg',
    linkText: 'View Project',
    summary: 'Sculptural digital showcase balancing editorial elegance with hyper-fast performance.',
    year: '2023',
    services: ['UI/UX Design', 'Custom Animations', 'Frontend']
  }
];

export const LATEST_WORKS: ProjectItem[] = [
  {
    id: 'work-1',
    title: 'Personal Portfolio Website',
    client: 'Practice Project',
    category: 'HTML / CSS / JavaScript',
    imageExact: '/images/project_personal_portfolio.jpg',
    imageHD: '/images/project_personal_portfolio.jpg',
    linkText: 'View Project',
    summary: 'A clean and responsive personal developer portfolio built with semantic HTML5, modern CSS3, and JavaScript. Features dynamic typing roles, interactive skill badges, and contact form validation.',
    year: '2026',
    services: ['Semantic HTML5', 'Modern CSS3', 'Vanilla JavaScript', 'Responsive Design'],
    liveUrl: '/projects/personal-portfolio/index.html'
  },
  {
    id: 'work-2',
    title: 'Business Landing Page',
    client: 'BrandCo Solutions',
    category: 'HTML / CSS / JavaScript',
    imageExact: '/images/project_business_landing.jpg',
    imageHD: '/images/project_business_landing.jpg',
    linkText: 'View Project',
    summary: 'A high-converting business agency landing page featuring an interactive monthly/yearly pricing toggle, responsive service feature cards, and clean typography.',
    year: '2026',
    services: ['Landing Page Architecture', 'Pricing Switcher JS', 'Responsive Layout', 'Clean CSS'],
    liveUrl: '/projects/business-landing/index.html'
  },
  {
    id: 'work-3',
    title: 'Product Showcase',
    client: 'ShopZone Audio',
    category: 'HTML / CSS / JavaScript',
    imageExact: '/images/project_product_showcase.jpg',
    imageHD: '/images/project_product_showcase.jpg',
    linkText: 'View Project',
    summary: 'An interactive e-commerce product showcase for wireless smart headphones. Includes real-time 360-color switcher, quantity price counter, specification tabs, and animated add-to-cart cart badge.',
    year: '2026',
    services: ['JavaScript State Management', 'E-Commerce UX', 'Dynamic Color Switcher', 'Cart Counter'],
    liveUrl: '/projects/product-showcase/index.html'
  }
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: 'blog-1',
    title: 'Luminating UX: Depth Focused in Web UI & Usability Testing',
    category: 'UI/UX DESIGN',
    date: '12 FEB 2024',
    readTime: '5 min read',
    imageExact: '/images/upscaled/blog_1.png',
    imageHD: '/images/blog_ux.jpg',
    excerpt: 'Exploring spatial lighting, shadows, and tactical depth cues that intuitively guide user behavior in modern web interfaces.',
    content: `Spatial hierarchy has become one of the most critical elements in contemporary digital product design. By carefully calibrating contrast, elevation, and realistic lighting sources, interfaces communicate purpose and intuitive affordances before a single word is read.

Key Takeaways:
1. Directional illumination establishes natural hierarchy without visual clutter.
2. Micro-depth cues enhance touch and click confidence by 34%.
3. Combining flat typography with dimensional geometric elements produces timeless editorial layouts.`
  },
  {
    id: 'blog-2',
    title: 'Designing cohesive strategies and visual identities',
    category: 'BRANDING',
    date: '15 JAN 2024',
    readTime: '6 min read',
    imageExact: '/images/upscaled/blog_2.png',
    imageHD: '/images/blog_branding.jpg',
    excerpt: 'How bold color blocking and disciplined typographic systems form unforgettable brand experiences across physical and digital touchpoints.',
    content: `Consistency is not about repetition; it is about coherence. A brand system that thrives across multiple mediums requires clear fundamental rules accompanied by expressive freedom.

In this piece, we break down our exact design framework for establishing color harmonies that command attention while remaining accessible and enduring.`
  },
  {
    id: 'blog-3',
    title: 'Architecting agile sprints and design systems',
    category: 'AI TOOLS',
    date: '04 JAN 2024',
    readTime: '4 min read',
    imageExact: '/images/upscaled/blog_3.png',
    imageHD: '/images/blog_ai.jpg',
    excerpt: 'Streamlining cross-functional handoffs, component tokens, and automated design validation for high-velocity teams.',
    content: `Modern product teams cannot afford fragmented component libraries. By connecting Figma tokens directly to production-ready React components, teams reduce delivery friction and eliminate design debt before release.`
  }
];
