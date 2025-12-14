import React, { useState } from 'react';
import { BookingForm } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up border border-gray-200">
        {isSubmitted ? (
          <div className="p-12 text-center flex flex-col items-center animate-fade-in">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
              <span className="material-icons text-5xl text-green-600">check_circle</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. We have sent a calendar invitation to <strong>{formData.email}</strong>.<br/> We look forward to strategizing with you.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', company: '', date: '', message: '' });
                onClose();
              }}
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-light transition shadow-lg w-full"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full max-h-[90vh]">
             <div className="bg-primary p-6 text-white flex justify-between items-start bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
               <div>
                 <h2 className="text-2xl font-bold">Schedule Consultation</h2>
                 <p className="text-purple-200 text-sm mt-1">Free 30-minute growth strategy session.</p>
               </div>
               <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition">
                 <span className="material-icons text-lg">close</span>
               </button>
             </div>
             
             <div className="overflow-y-auto p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Full Name</label>
                    <div className="relative">
                        <span className="material-icons absolute left-3 top-2.5 text-gray-400 text-sm">person</span>
                        <input 
                            required
                            type="text" 
                            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Work Email</label>
                    <div className="relative">
                        <span className="material-icons absolute left-3 top-2.5 text-gray-400 text-sm">email</span>
                        <input 
                            required
                            type="email" 
                            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Company</label>
                         <div className="relative">
                            <span className="material-icons absolute left-3 top-2.5 text-gray-400 text-sm">business</span>
                            <input 
                                type="text" 
                                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                placeholder="Acme Inc"
                                value={formData.company}
                                onChange={e => setFormData({...formData, company: e.target.value})}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Preferred Date</label>
                         <div className="relative">
                            <input 
                                required
                                type="date" 
                                className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm text-gray-600"
                                value={formData.date}
                                onChange={e => setFormData({...formData, date: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Project Details</label>
                    <textarea 
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                        placeholder="Briefly describe your goals..."
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                </div>
                
                <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg transform active:scale-95 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                           <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </>
                    ) : (
                        <>
                            Confirm Appointment
                            <span className="material-icons text-sm">arrow_forward</span>
                        </>
                    )}
                </button>
                </form>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
