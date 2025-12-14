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

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BookingForm {
  name: string;
  email: string;
  company: string;
  date: string;
  message: string;
}