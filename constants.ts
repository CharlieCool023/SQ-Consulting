import { Service, BlogPost, CareerOpening } from './types';

export const SERVICES: Service[] = [
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Data Analytics',
    icon: 'insights',
    shortDescription: 'Advanced Data Storytelling, Predictive Modeling & Real-time Dashboards.',
    fullDescription: 'Stop flying blind. We transform your fragmented data into a strategic roadmap. Our BI methodology goes beyond simple charts; we build living ecosystems in PowerBI or Tableau that predict market shifts before they happen. Whether you are a retail chain in Lagos or a pan-African logistics firm, we provide the "Signal" within the "Noise."',
    features: [
      'Interactive ROI Dashboards',
      'Revenue Leakage Detection',
      'Automated Inventory Forecasting',
      'Customer Lifetime Value (CLV) Analytics'
    ],
    color: 'text-primary',
    borderColor: 'border-primary',
    iconBg: 'bg-primary/10',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'software-transition',
    title: 'Digital Transformation & Software Transition',
    icon: 'transform',
    shortDescription: 'Seamless ERP Migrations, Cloud Adoption & Process Automation.',
    fullDescription: 'Technology should empower, not hinder. We manage the delicate transition from legacy systems to modern ERPs or custom software. Our approach focuses on "The Human Element"—ensuring your staff in Lagos or anywhere across Nigeria are trained, motivated, and productive from day one of the rollout.',
    features: [
      'Legacy Data Migration & Cleaning',
      'Custom ERP/CRM Prototyping',
      'UAT (User Acceptance Testing) Management',
      'Staff Training & Knowledge Transfer'
    ],
    color: 'text-accent-blue',
    borderColor: 'border-accent-blue',
    iconBg: 'bg-accent-blue/10',
    heroImage: 'https://images.unsplash.com/photo-1573161559521-3aba817926c1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'accounting-operations',
    title: 'Accounting Operations & Financial Strategy',
    icon: 'account_balance_wallet',
    shortDescription: 'Audit Readiness, Tax Optimization & Fractional CFO Services.',
    fullDescription: 'Financial clarity is the bedrock of scalability. We don’t just "do books"; we engineer your financial health. From ensuring IFRS compliance to optimizing your tax position for the Nigerian market, our experts act as your internal audit team and financial strategists.',
    features: [
      'IFRS/Local GAAP Compliance',
      'Strategic Tax Planning & Remittance',
      'Fractional CFO & Advisory',
      'Internal Control & Fraud Prevention'
    ],
    color: 'text-green-600',
    borderColor: 'border-green-600',
    iconBg: 'bg-green-50',
    heroImage: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy & Operational Excellence',
    icon: 'campaign',
    shortDescription: 'Investor-Ready Business Plans, SOP Design & Licensing.',
    fullDescription: 'Position your business for the next decade. We craft rigorous business strategies that survive real-world pressures. From securing capital via high-impact proposals to documenting the SOPs that allow your business to run without you, we build institutions, not just jobs.',
    features: [
      'Institutional SOP Development',
      'High-Conversion Proposals & Pitch Decks',
      'Regulatory Licensing Support (Lagos/Nigeria)',
      'Growth Scenarios & Stress Testing'
    ],
    color: 'text-secondary',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/10',
    heroImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'nigerian-tax-2025',
    title: 'Navigating the 2025 Nigerian Tax Landscape',
    excerpt: 'Key changes in fiscal policy every MSME owner needs to prepare for this year.',
    content: 'The Nigerian fiscal landscape is undergoing a radical shift in 2025. With new digital tax collection mandates and changes to VAT thresholds, small and medium enterprises must audit their books to avoid heavy penalties...',
    category: 'Finance',
    author: 'Adebayo Smith',
    date: 'Feb 15, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1770&auto=format&fit=crop',
    readTime: '6 min read'
  },
  {
    id: 'bi-for-msmes',
    title: 'Why Data is the New Oil for Lagos Retailers',
    excerpt: 'How local businesses are using predictive analytics to double their seasonal revenue.',
    content: 'Data is no longer a luxury for big corporations. Local retailers in areas like Ikeja and Lekki are increasingly leveraging customer purchase patterns to optimize inventory and predict demand...',
    category: 'Data',
    author: 'Grace Uzor',
    date: 'Jan 28, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop',
    readTime: '4 min read'
  },
  {
    id: 'scaling-without-chaos',
    title: 'Scaling Operations Without the Chaos',
    excerpt: 'SOPs are the hidden engine behind Nigeria’s fastest-growing startups.',
    content: 'Many businesses fail during the scaling phase because their internal processes cannot keep up with demand. Standard Operating Procedures (SOPs) are not just documents; they are the blueprint for excellence...',
    category: 'Strategy',
    author: 'Michael Okun',
    date: 'Dec 12, 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1770&auto=format&fit=crop',
    readTime: '8 min read'
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'senior-strategy-consultant',
    title: 'Senior Strategy Consultant',
    department: 'Advisory',
    type: 'Full-time',
    location: 'Lagos, Nigeria (Hybrid)',
    description: 'We are looking for a visionary strategist to lead our high-impact transformation projects.',
    requirements: [
      '7+ years in management consulting',
      'Deep understanding of the Nigerian MSME ecosystem',
      'Proven track record of delivering measurable ROI',
      'Masters degree in Business or Finance'
    ]
  },
  {
    id: 'bi-analyst',
    title: 'Business Intelligence Analyst',
    department: 'Data Intelligence',
    type: 'Full-time',
    location: 'Remote / Lagos',
    description: 'Help our clients see the future through data storytelling.',
    requirements: [
      'Expertise in PowerBI or Tableau',
      'SQL proficiency and data cleaning skills',
      'Ability to translate complex data into executive insights',
      '3+ years relevant experience'
    ]
  },
  {
    id: 'accounting-intern',
    title: 'Financial Strategy Intern',
    department: 'Finance',
    type: 'Internship',
    location: 'Lagos Island',
    description: 'Learn from the best in the business. Ideal for final-year students or recent graduates.',
    requirements: [
      'Strong academic background in Accounting or Finance',
      'Attention to detail and eagerness to learn',
      'Basic knowledge of IFRS standards',
      'Good communication skills'
    ]
  }
];

export const SUCCESS_STORIES = [
  {
    id: 1,
    client: "Lagos Agri-Industrial Group",
    industry: "Agriculture",
    challenge: "Manual tracking led to significant waste and untraceable losses across 5 regional hubs.",
    solution: "Custom inventory BI dashboard and localized staff training in ERP basics.",
    impact: "Reduced operational waste by 22% in 6 months and secured expansion funding.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    client: "Sterling FinServe",
    industry: "FinTech",
    challenge: "Struggling with complex regulatory reporting and tax compliance during a high-growth phase.",
    solution: "Fractional CFO services and automated tax remittance workflow implementation.",
    impact: "Zero-penalty audit record and 15% increase in operational efficiency.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  }
];

export const CHAT_SYSTEM_INSTRUCTION = `You are SQ-Bot, the elite business growth AI for SQ Consulting (Current year: 2025).
Motto: "Delivering Values..."
Location: Lagos, Nigeria.

TONE: Friendly, sharp, authoritative yet accessible.

RESPONSE RULES:
1. **CONCISE**: Max 2-3 short sentences.
2. **FORMATTING**: Use **bolding** for high-impact terms. Use numbered lists (1. 2. 3.) only for processes.
3. **VALUE DRIVEN**: Focus on ROI, Efficiency, and Growth.
4. **CALL TO ACTION**: Always end by suggesting they "Book a Strategy Call" or "Chat with an Expert."

Example: "We specialize in **Business Intelligence** for Nigerian MSMEs. Our dashboards help you spot **revenue leaks** in real-time. Shall we book a call to discuss your data strategy?"
`;