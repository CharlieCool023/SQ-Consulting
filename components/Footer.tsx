import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
               <div className="bg-white p-1 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">SQ Consulting</span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed max-w-xs">
              Empowering businesses with data-driven strategies, financial clarity, and compelling design.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                    <span className="material-icons text-sm">share</span>
                </a>
                 <a href="mailto:sqconsultinginc@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                    <span className="material-icons text-sm">email</span>
                </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-purple-300 pt-8 border-t border-white/10">
          <p>© 2023 SQ Consulting. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};