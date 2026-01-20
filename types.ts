
export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  color: string;
  borderColor: string;
  iconBg: string;
  heroImage: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Strategy' | 'Data' | 'Finance' | 'Digital';
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  location: string;
  description: string;
  requirements: string[];
}

export interface BookingForm {
  name: string;
  email: string;
  company: string;
  date: string;
  message: string;
}

// Added ChatMessage interface to resolve the export error in Chatbot.tsx
export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
