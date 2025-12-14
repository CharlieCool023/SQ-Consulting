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
  const logoClass = isDarkText ? 'text-primary' : 'text-white';
  const buttonClass = isDarkText 
    ? 'bg-secondary text-white hover:bg-orange-600' 
    : 'bg-white text-primary hover:bg-gray-100';
  const burgerClass = isDarkText ? 'text-gray-800' : 'text-white';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group z-50 relative">
            <div className={`p-2 rounded-lg transition-colors ${isDarkText ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
               <span className="font-bold text-xl leading-none">SQ</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight transition-colors ${logoClass}`}>SQ Consulting</span>
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