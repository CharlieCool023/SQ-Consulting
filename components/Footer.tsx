import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PolicyModal } from './PolicyModal';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <div className="space-y-4">
      <p className="font-bold text-gray-900">Effective Date: January 1, 2025</p>
      <p>At SQ Consulting, we value your privacy. This policy outlines how we handle your personal information when you use our website and services.</p>
      <h4 className="font-bold text-gray-900">1. Data We Collect</h4>
      <p>We collect information you provide directly through our contact and booking forms, including your name, email address, company name, and project details.</p>
      <h4 className="font-bold text-gray-900">2. How We Use Data</h4>
      <p>Your data is used solely to respond to inquiries, schedule strategy sessions, and provide our consulting services. We do not sell your data to third parties.</p>
      <h4 className="font-bold text-gray-900">3. Security</h4>
      <p>We implement industry-standard security measures to protect your information from unauthorized access or disclosure.</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4">
      <p className="font-bold text-gray-900">Last Updated: January 2025</p>
      <p>By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
      <h4 className="font-bold text-gray-900">1. Consulting Services</h4>
      <p>SQ Consulting provides strategic advisory services. Our recommendations are based on available data and professional expertise; however, we do not guarantee specific financial outcomes.</p>
      <h4 className="font-bold text-gray-900">2. Intellectual Property</h4>
      <p>The content on this website, including logos, text, and methodologies, is the property of SQ Consulting and protected by copyright laws.</p>
      <h4 className="font-bold text-gray-900">3. Limitation of Liability</h4>
      <p>In no event shall SQ Consulting be liable for any damages arising out of the use or inability to use the materials on this website.</p>
    </div>
  );

  return (
    <>
      <footer className="bg-[#0F172A] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-center sm:text-left">
            <div className="lg:col-span-1 space-y-8 flex flex-col items-center sm:items-start">
              <Link to="/" className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-2xl w-14 h-14 flex items-center justify-center shadow-2xl">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75 25C60 25 50 35 50 45C50 55 65 55 65 65C65 75 50 75 40 65" stroke="#8B2474" strokeWidth="12" strokeLinecap="round" />
                    <path d="M35 40C25 50 25 70 40 80C55 90 75 85 85 65" stroke="#F37225" strokeWidth="12" strokeLinecap="round" />
                    <path d="M70 75L90 95" stroke="#F37225" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl font-bold tracking-tight">SQ Consulting</span>
                  <span className="font-script text-secondary text-xl">Delivering Values...</span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                Lagos-based strategic advisory firm dedicated to scaling MSMEs through data intelligence and financial excellence.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Expertise</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                <li><Link to="/service/business-intelligence" className="hover:text-secondary transition">Business Intelligence</Link></li>
                <li><Link to="/service/software-transition" className="hover:text-secondary transition">Software Transition</Link></li>
                <li><Link to="/service/accounting-operations" className="hover:text-secondary transition">Accounting Operations</Link></li>
                <li><Link to="/service/business-strategy" className="hover:text-secondary transition">Strategic Growth</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Navigation</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                <li><Link to="/about" className="hover:text-secondary transition">Our Story</Link></li>
                <li><Link to="/success-stories" className="hover:text-secondary transition">Success Stories</Link></li>
                <li><Link to="/contact" className="hover:text-secondary transition">Contact Us</Link></li>
                <li><Link to="/services" className="hover:text-secondary transition">All Services</Link></li>
              </ul>
            </div>

            <div className="space-y-8 flex flex-col items-center sm:items-start">
              <h4 className="text-white font-bold tracking-widest uppercase text-xs">Contact Details</h4>
              <div className="space-y-4 text-sm text-slate-400">
                <p className="flex items-center gap-3 justify-center sm:justify-start">
                  <span className="material-icons text-secondary text-sm">location_on</span> Lagos, Nigeria
                </p>
                <p className="flex items-center gap-3 justify-center sm:justify-start">
                  <span className="material-icons text-secondary text-sm">phone</span> 09037551127
                </p>
                <p className="flex items-center gap-3 justify-center sm:justify-start">
                  <span className="material-icons text-secondary text-sm">email</span> sqconsultinginc@gmail.com
                </p>
              </div>
              <div className="flex gap-4">
                {['linkedin', 'instagram', 'facebook'].map(platform => (
                  <a key={platform} href={`#${platform}`} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1">
                    <span className="material-icons text-lg">public</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">© 2025 SQ Consulting Group</p>
            <div className="flex gap-6 sm:gap-10 text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition uppercase">Privacy Policy</button>
              <button onClick={() => setActiveModal('terms')} className="hover:text-white transition uppercase">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      <PolicyModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy" 
        content={privacyContent} 
      />
      <PolicyModal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service" 
        content={termsContent} 
      />
    </>
  );
};