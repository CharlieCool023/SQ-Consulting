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

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const textClass = scrolled || location.pathname !== '/' ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-orange-200';
  const logoClass = scrolled || location.pathname !== '/' ? 'text-primary' : 'text-white';
  const buttonClass = scrolled || location.pathname !== '/' 
    ? 'bg-secondary text-white hover:bg-orange-600' 
    : 'bg-white text-primary hover:bg-gray-100';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group">
            <div className={`p-2 rounded-lg transition-colors ${scrolled || location.pathname !== '/' ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
               <span className="font-bold text-xl leading-none">SQ</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight transition-colors ${logoClass}`}>SQ Consulting</span>
            </div>
          </Link>
          
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

          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition ${textClass}`}
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">Contact</Link>
            <button 
              onClick={() => {
                setIsOpen(false);
                onBookCall();
              }}
              className="mt-4 w-full bg-secondary text-white px-5 py-3 rounded-xl font-bold text-center shadow-lg"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
