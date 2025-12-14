import React, { useState } from 'react';
import { BookingForm } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    company: '',
    date: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up">
        {isSubmitted ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="material-icons text-4xl text-green-600">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-8">
              Thanks {formData.name}. We've sent a calendar invite to {formData.email}. We look forward to speaking with you.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-light transition"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
             <div className="bg-primary p-6 text-white flex justify-between items-start">
               <div>
                 <h2 className="text-2xl font-bold">Schedule Consultation</h2>
                 <p className="text-purple-200 text-sm mt-1">Free 30-minute strategy session.</p>
               </div>
               <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition">
                 <span className="material-icons">close</span>
               </button>
             </div>
             
             <form onSubmit={handleSubmit} className="p-6 space-y-4">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                 <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                 <input 
                    required
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                 <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                 <input 
                    required
                    type="date" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                 <textarea 
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                 />
               </div>
               
               <button 
                 type="submit"
                 className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition duration-200 mt-2"
               >
                 Confirm Booking
               </button>
             </form>
          </div>
        )}
      </div>
    </div>
  );
};