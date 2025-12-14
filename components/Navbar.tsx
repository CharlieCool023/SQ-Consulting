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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || location.pathname !== '/' || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const isDarkText = scrolled || location.pathname !== '/' || isOpen;

  const textClass = isDarkText ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-orange-200';
  const logoTextClass = isDarkText ? 'text-primary' : 'text-white';
  const logoSubClass = isDarkText ? 'text-secondary' : 'text-orange-200';
  const buttonClass = isDarkText 
    ? 'bg-secondary text-white hover:bg-orange-600' 
    : 'bg-white text-primary hover:bg-gray-100';
  const burgerClass = isDarkText ? 'text-gray-800' : 'text-white';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group z-50 relative">
            {/* SVG Logo approximating the 'SQ' image */}
            <div className={`w-10 h-10 flex items-center justify-center ${isDarkText ? '' : 'bg-white/10 rounded-lg p-1'}`}>
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Purple S part */}
                    <path d="M70 20C50 20 40 35 40 45C40 55 60 55 60 65C60 75 40 75 30 65" stroke={isDarkText ? "#8B2474" : "white"} strokeWidth="12" strokeLinecap="round" />
                    {/* Orange Q part */}
                    <path d="M30 35C20 45 20 65 35 75C50 85 70 80 80 60" stroke={isDarkText ? "#F37225" : "#FFA726"} strokeWidth="12" strokeLinecap="round" />
                    <path d="M65 70L85 90" stroke={isDarkText ? "#F37225" : "#FFA726"} strokeWidth="12" strokeLinecap="round" />
                </svg>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`font-bold text-xl tracking-tight transition-colors ${logoTextClass}`}>SQ Consulting</span>
              <span className={`font-script text-lg transition-colors ${logoSubClass}`}>Delivering Values...</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${textClass}`}>Home</Link>
              <Link to="/services" className={`px-3 py-2 text-sm font-medium transition-colors ${textClass}`}>Services</Link>
              <Link to="/about" className={`px-3 py-2 text-sm font-medium transition-colors ${textClass}`}>About Us</Link>
              <Link to="/contact" className={`px-3 py-2 text-sm font-medium transition-colors ${textClass}`}>Contact</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={onBookCall}
              className={`px-6 py-2.5 rounded-full text-sm font-bold shadow-md transform hover:-translate-y-0.5 transition duration-200 ${buttonClass}`}
            >
              Book Discovery Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden z-50 relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition ${burgerClass}`}
              aria-label="Main menu"
            >
              <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="px-6 space-y-4">
            <Link to="/" className="block px-4 py-4 rounded-xl text-lg font-bold text-gray-800 hover:bg-gray-50 border-b border-gray-100">Home</Link>
            <Link to="/services" className="block px-4 py-4 rounded-xl text-lg font-bold text-gray-800 hover:bg-gray-50 border-b border-gray-100">Services</Link>
            <Link to="/about" className="block px-4 py-4 rounded-xl text-lg font-bold text-gray-800 hover:bg-gray-50 border-b border-gray-100">About Us</Link>
            <Link to="/contact" className="block px-4 py-4 rounded-xl text-lg font-bold text-gray-800 hover:bg-gray-50 border-b border-gray-100">Contact</Link>
            
            <div className="pt-6">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onBookCall();
                }}
                className="w-full bg-secondary text-white px-5 py-4 rounded-xl font-bold text-center shadow-lg text-lg flex items-center justify-center gap-2"
              >
                <span className="material-icons">calendar_today</span>
                Book Discovery Call
              </button>
            </div>
          </div>
      </div>
    </nav>
  );
};