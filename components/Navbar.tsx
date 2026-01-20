import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }
  }, [isOpen]);

  const isHome = location.pathname === '/';
  const isDarkText = scrolled || !isHome || isOpen;

  const navClass = `fixed w-full z-[160] transition-all duration-500 ${
    scrolled || isOpen ? 'bg-white shadow-xl py-2' : 'bg-transparent py-5'
  }`;

  const textClass = isDarkText ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-secondary';
  const logoTextClass = isDarkText ? 'text-primary' : 'text-white';
  const mottoClass = isDarkText ? 'text-secondary' : 'text-orange-300';

  const menuItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Expertise', path: '/services', icon: 'business_center' },
    { name: 'Insights', path: '/insights', icon: 'article' },
    { name: 'Results', path: '/success-stories', icon: 'auto_graph' },
    { name: 'Careers', path: '/careers', icon: 'work' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Contact', path: '/contact', icon: 'alternate_email' }
  ];

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 z-[170] group">
            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1.5 rounded-xl transition-all duration-300 ${isDarkText ? 'bg-primary/5' : 'bg-white/10'}`}>
                <svg viewBox="0 0 100 100" className="w-full h-full group-hover:rotate-12 transition-transform" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75 25C60 25 50 35 50 45C50 55 65 55 65 65C65 75 50 75 40 65" stroke={isDarkText ? "#8B2474" : "#FFFFFF"} strokeWidth="12" strokeLinecap="round" />
                    <path d="M35 40C25 50 25 70 40 80C55 90 75 85 85 65" stroke={isDarkText ? "#F37225" : "#FFA726"} strokeWidth="12" strokeLinecap="round" />
                </svg>
            </div>
            <div className="flex flex-col -space-y-1.5 text-left">
              <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${logoTextClass}`}>SQ Consulting</span>
              <span className={`font-script text-lg transition-colors leading-none ${mottoClass}`}>Delivering Values...</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full ${textClass}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center z-[170]">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${isOpen ? 'bg-primary text-white' : isDarkText ? 'text-primary bg-primary/5' : 'text-white bg-white/10'}`}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Solid High-Contrast Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[150] bg-white transition-all duration-500 ease-in-out lg:hidden flex flex-col ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          {/* Top buffer to protect Logo & Header space - Significantly increased */}
          <div className="h-32 md:h-40 flex-shrink-0 border-b border-gray-50"></div>
          
          <div className="flex-1 flex flex-col justify-start px-8 sm:px-12 overflow-y-auto pt-10 pb-20">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-gray-200"></span>
              Navigation
            </p>
            <div className="flex flex-col space-y-1">
              {menuItems.map((item, idx) => (
                 <Link 
                  key={item.name}
                  to={item.path} 
                  className={`group flex items-center justify-between py-6 border-b border-gray-50 transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                 >
                   <div className="flex items-center gap-6">
                     <span className="material-icons text-primary/40 text-xl group-hover:text-primary transition-colors">{item.icon}</span>
                     <span className="text-3xl font-black text-gray-900 tracking-tighter group-hover:text-primary transition-all">
                       {item.name}
                     </span>
                   </div>
                   <span className="material-icons text-gray-200 group-hover:text-primary transition-all transform group-hover:translate-x-2">arrow_forward</span>
                 </Link>
              ))}
            </div>
          </div>
          
          {/* Bottom Branding / Context */}
          <div className={`p-10 border-t border-gray-50 flex flex-col items-center bg-gray-50/50 transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
             <span className="font-script text-4xl text-secondary">Delivering Values...</span>
             <p className="text-gray-400 text-[10px] mt-4 font-black uppercase tracking-[0.3em] flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               Lagos, Nigeria • MSME Growth Partner
             </p>
          </div>
      </div>
    </nav>
  );
};