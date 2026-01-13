import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isHome = location.pathname === '/';
  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isHome || isOpen ? 'bg-white shadow-lg py-1' : 'bg-transparent py-4'
  }`;

  const isDarkText = scrolled || !isHome || isOpen;

  const textClass = isDarkText ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-secondary';
  const logoTextClass = isDarkText ? 'text-primary' : 'text-white';
  const mottoClass = isDarkText ? 'text-secondary' : 'text-orange-300';
  const buttonClass = isDarkText 
    ? 'bg-secondary text-white hover:bg-orange-600' 
    : 'bg-white text-primary hover:bg-gray-100';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group z-[60]">
            <div className={`w-12 h-12 flex items-center justify-center p-1.5 rounded-xl transition-all duration-300 ${isDarkText ? 'bg-primary/5' : 'bg-white/10'}`}>
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75 25C60 25 50 35 50 45C50 55 65 55 65 65C65 75 50 75 40 65" stroke={isDarkText ? "#8B2474" : "#FFFFFF"} strokeWidth="12" strokeLinecap="round" />
                    <path d="M35 40C25 50 25 70 40 80C55 90 75 85 85 65" stroke={isDarkText ? "#F37225" : "#FFA726"} strokeWidth="12" strokeLinecap="round" />
                    <path d="M70 75L90 95" stroke={isDarkText ? "#F37225" : "#FFA726"} strokeWidth="12" strokeLinecap="round" />
                </svg>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`text-xl font-bold tracking-tight transition-colors ${logoTextClass}`}>SQ Consulting</span>
              <span className={`font-script text-lg transition-colors leading-none ${mottoClass}`}>Delivering Values...</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/" className={`text-sm font-semibold tracking-wide transition-all ${textClass}`}>Home</Link>
            <Link to="/services" className={`text-sm font-semibold tracking-wide transition-all ${textClass}`}>Expertise</Link>
            <Link to="/success-stories" className={`text-sm font-semibold tracking-wide transition-all ${textClass}`}>Success Stories</Link>
            <Link to="/about" className={`text-sm font-semibold tracking-wide transition-all ${textClass}`}>About</Link>
            <Link to="/contact" className={`text-sm font-semibold tracking-wide transition-all ${textClass}`}>Contact</Link>
            <button 
              onClick={onBookCall}
              className={`px-8 py-3 rounded-full text-sm font-bold shadow-xl transform hover:-translate-y-1 active:scale-95 transition-all duration-300 ${buttonClass}`}
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center z-[60]">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isDarkText ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle Menu"
            >
              <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-white transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-center px-8 py-20 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20%] pointer-events-none'}`}>
          <div className="flex flex-col space-y-8">
            {['Home', 'Services', 'Success Stories', 'About', 'Contact'].map((item) => (
               <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-4xl font-bold text-gray-900 hover:text-primary transition-colors flex justify-between items-center"
               >
                 {item}
                 <span className="material-icons text-primary/30">chevron_right</span>
               </Link>
            ))}
            <div className="pt-10">
              <button 
                onClick={onBookCall}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                <span className="material-icons">calendar_today</span>
                Book Strategy Call
              </button>
            </div>
          </div>
          
          <div className="mt-auto border-t pt-10 flex flex-col items-center">
             <span className="font-script text-2xl text-secondary">Delivering Values...</span>
             <p className="text-gray-400 text-sm mt-4">Lagos, Nigeria • 09037551127</p>
          </div>
      </div>
    </nav>
  );
};