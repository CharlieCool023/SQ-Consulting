export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'inquiry' | 'booking';
  details?: any; // For booking specific fields
}

const STORAGE_KEY = 'sq_consulting_data';

export const saveSubmission = (data: Omit<Message, 'id' | 'timestamp' | 'read'>) => {
  const currentData = getSubmissions();
  const newItem: Message = {
    ...data,
    id: Date.now(),
    timestamp: new Date().toISOString(),
    read: false
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newItem, ...currentData]));
  return newItem;
};

export const getSubmissions = (): Message[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const markAsRead = (id: number) => {
  const current = getSubmissions();
  const updated = current.map(msg => msg.id === id ? { ...msg, read: true } : msg);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteSubmission = (id: number) => {
  const current = getSubmissions();
  const updated = current.filter(msg => msg.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
