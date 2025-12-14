import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
               <div className="bg-white p-2 rounded-lg w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70 20C50 20 40 35 40 45C40 55 60 55 60 65C60 75 40 75 30 65" stroke="#8B2474" strokeWidth="12" strokeLinecap="round" />
                    <path d="M30 35C20 45 20 65 35 75C50 85 70 80 80 60" stroke="#F37225" strokeWidth="12" strokeLinecap="round" />
                    <path d="M65 70L85 90" stroke="#F37225" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tight">SQ Consulting</span>
                    <span className="font-script text-secondary text-lg">Delivering Values...</span>
                </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed max-w-sm">
              Empowering businesses with data-driven strategies, financial clarity, and compelling design. We are your partners in sustainable growth.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-purple-200 text-sm">
              <li><Link to="/" className="hover:text-white transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition group">
                    <span className="material-icons text-sm group-hover:scale-110 transition">share</span>
                </a>
                 <a href="mailto:sqconsultinginc@gmail.com" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition group">
                    <span className="material-icons text-sm group-hover:scale-110 transition">email</span>
                </a>
            </div>
            <div className="text-sm text-purple-200">
                <p>Lagos, Nigeria</p>
                <p>09037551127</p>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-purple-300 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 SQ Consulting. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            {/* Admin link removed for security as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
};