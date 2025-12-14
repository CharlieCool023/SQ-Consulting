import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    icon: 'insights',
    shortDescription: 'Data Analysis, Dashboarding, & Market Research.',
    fullDescription: 'Transform raw data into your most valuable asset. Our BI experts design interactive dashboards in PowerBI and Tableau that give you a pulse on your business performance. From data cleaning to deep-dive competitor analysis, we ensure you make decisions based on facts, not guesswork.',
    features: [
      'Interactive BI Dashboards',
      'Data Cleaning & Entry',
      'Predictive Analytics',
      'Market Trend Analysis'
    ],
    color: 'text-blue-600',
    borderColor: 'border-blue-600',
    iconBg: 'bg-blue-50',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'software-transition',
    title: 'Software Transition',
    icon: 'transform',
    shortDescription: 'Process Mapping, Prototyping & Change Support.',
    fullDescription: 'Adopting new technology is challenging. We streamline your software transition by mapping your existing processes, identifying gaps, and prototyping the future state. We provide change management support to ensure your team adapts quickly and efficiently to new digital tools.',
    features: [
      'Current vs Future State Mapping',
      'Software Prototyping',
      'Gap Analysis',
      'Change Management Support'
    ],
    color: 'text-purple-600',
    borderColor: 'border-purple-600',
    iconBg: 'bg-purple-50',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'accounting-operations',
    title: 'Accounting Operations',
    icon: 'account_balance_wallet',
    shortDescription: 'Tax, Audit, Bookkeeping & Financial Planning.',
    fullDescription: 'Secure your financial future with our comprehensive accounting services. Whether you need monthly management reports, tax remittance filing, or a full internal financial audit, our certified experts ensure compliance and maximize your fiscal efficiency.',
    features: [
      'Management Account Preparation',
      'Tax Remittance & Filing',
      'Internal Financial Audit',
      'Financial Modeling & Planning'
    ],
    color: 'text-green-600',
    borderColor: 'border-green-600',
    iconBg: 'bg-green-50',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop'
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy',
    icon: 'campaign',
    shortDescription: 'Business Plans, SOPs & Licensing.',
    fullDescription: 'A goal without a plan is just a wish. We craft detailed business plans that secure funding, document Standard Operating Procedures (SOPs) for operational excellence, and assist with complex licensing requirements. We position your business for scalable growth.',
    features: [
      'Investor-Ready Business Plans',
      'SOP Documentation',
      'Proposal Writing',
      'Regulatory Compliance'
    ],
    color: 'text-orange-600',
    borderColor: 'border-orange-600',
    iconBg: 'bg-orange-50',
    heroImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'professional-training',
    title: 'Professional Training',
    icon: 'school',
    shortDescription: 'Corporate Workshops for MSMEs & Teams.',
    fullDescription: 'Empower your workforce. We offer specialized training sessions tailored for MSMEs and corporate teams. From advanced Excel for data analysis to customer service excellence and accounting standards (IFRS), we upskill your team to meet modern business demands.',
    features: [
      'Advanced Excel Training',
      'Accounting Standards (IFRS)',
      'Customer Service Excellence',
      'Corporate Leadership Workshops'
    ],
    color: 'text-indigo-600',
    borderColor: 'border-indigo-600',
    iconBg: 'bg-indigo-50',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop'
  },
   {
    id: 'design-branding',
    title: 'Design & Branding',
    icon: 'palette',
    shortDescription: 'Corporate Branding & Visual Identity.',
    fullDescription: 'Stand out in a crowded market. Our design team creates cohesive visual identities, from logos to marketing materials, ensuring your brand communicates professionalism and trust at every touchpoint.',
    features: [
      'Logo & Identity Systems',
      'Marketing Collateral',
      'Brand Guidelines',
      'Digital Asset Creation'
    ],
    color: 'text-pink-600',
    borderColor: 'border-pink-600',
    iconBg: 'bg-pink-50',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b7993143c21?q=80&w=2070&auto=format&fit=crop'
  }
];

export const CHAT_SYSTEM_INSTRUCTION = `You are SQ-Bot, the expert business consultant AI for SQ Consulting.
Your persona is professional, warm, and highly knowledgeable. You are here to impress potential clients.
Your primary goal is to convince the user to "Book a Discovery Call".
SQ Consulting provides: Business Intelligence, Software Transition, Accounting Ops, Business Strategy, and Professional Training.
When answering:
1. Be concise but impactful.
2. Use professional formatting (bullet points).
3. If asked about pricing, state that packages are customized for maximum ROI and urge them to book a free consultation for a quote.
4. End your helpful answers with an inviting prompt to schedule a call.
`;
