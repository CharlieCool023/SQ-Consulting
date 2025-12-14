import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    icon: 'insights',
    shortDescription: 'Data Analysis, BI Dashboards, Cleaning & Entry.',
    fullDescription: 'Unlock the hidden potential in your data. Our Business Intelligence unit transforms raw numbers into actionable insights. We build bespoke dashboards that monitor your KPIs in real-time, perform deep-dive market research to benchmark your performance against competitors, and ensure your data integrity through rigorous cleaning processes.',
    features: [
      'Interactive Tableau & PowerBI Dashboards',
      'Predictive Analytics & Forecasting',
      'Market & Competitor Research',
      'Automated Reporting Systems'
    ],
    color: 'text-primary',
    borderColor: 'border-primary',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'design-branding',
    title: 'Design & Branding',
    icon: 'brush',
    shortDescription: 'Corporate Branding, UI/UX Prototyping, Content Development.',
    fullDescription: 'Your brand is your promise. We craft visual identities that resonate with your target audience. From logo design to full design systems and high-fidelity UI/UX prototypes for your digital products, we ensure every touchpoint communicates quality and innovation.',
    features: [
      'Logo & Identity Systems',
      'UI/UX Design for Web & Mobile',
      'Brand Guidelines & Voice',
      'Marketing Collateral Design'
    ],
    color: 'text-secondary',
    borderColor: 'border-secondary',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'accounting-operations',
    title: 'Accounting Operations',
    icon: 'calculate',
    shortDescription: 'Tax Remittance, Internal Financial Audit, Financial Planning.',
    fullDescription: 'Financial health is the backbone of any successful enterprise. Our certified accountants and financial analysts handle everything from day-to-day bookkeeping and tax compliance to complex internal audits and long-term financial modeling. We minimize risk and maximize profitability.',
    features: [
      'Tax Planning & Filing Compliance',
      'Internal Audits & Risk Assessment',
      'Cash Flow Management',
      'Payroll & Bookkeeping Services'
    ],
    color: 'text-green-600',
    borderColor: 'border-green-500',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop'
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy',
    icon: 'trending_up',
    shortDescription: 'Process Documentation, Business Plans, Licensing Support.',
    fullDescription: 'Scale with confidence. We work with founders and executives to define clear roadmaps for growth. Whether you are seeking funding with a robust business plan, optimizing your operational SOPs, or navigating complex licensing regulations, SQ Consulting is your strategic partner.',
    features: [
      'Business Plan Writing for Investors',
      'Operational Process Optimization (SOPs)',
      'Regulatory & Licensing Assistance',
      'Change Management Consulting'
    ],
    color: 'text-blue-600',
    borderColor: 'border-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
  }
];

export const CHAT_SYSTEM_INSTRUCTION = `You are SQ-Bot, the intelligent virtual assistant for SQ Consulting. 
Your tone is professional, enthusiastic, and knowledgeable.
Your goal is to briefly explain services and, most importantly, encourage the user to "Book a Call".
SQ Consulting offers: Business Intelligence, Design & Branding, Accounting Operations, and Business Strategy.
If a user asks about pricing, say that solutions are tailored and they should book a free consultation for a quote.
Always keep answers concise (under 3 sentences) to keep the chat flowing.`;
