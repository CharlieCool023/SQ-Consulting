import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
               <div className="bg-white p-2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl leading-none">SQ</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">SQ Consulting</span>
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
          <p>© 2023 SQ Consulting. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <Link to="/admin" className="hover:text-white transition opacity-50 hover:opacity-100 flex items-center gap-1">
                <span className="material-icons text-[10px]">admin_panel_settings</span>
                Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
