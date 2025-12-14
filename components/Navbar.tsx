import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-primary shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3 cursor-pointer">
            <div className="bg-white p-1 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-primary font-bold text-2xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-none">SQ Consulting</span>
              <span className="text-white/80 text-xs italic">Delivering Values...</span>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => handleScroll('home')} className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium transition">Home</button>
              <button onClick={() => handleScroll('services')} className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium transition">Services</button>
              <button onClick={() => handleScroll('about')} className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium transition">About Us</button>
              <button onClick={() => handleScroll('contact')} className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium transition">Contact</button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={onBookCall}
              className="bg-secondary hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg transform hover:-translate-y-0.5 transition duration-200"
            >
              Book Free Call
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary-light inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleScroll('home')} className="text-white hover:bg-primary-light block w-full text-left px-3 py-2 rounded-md text-base font-medium">Home</button>
            <button onClick={() => handleScroll('services')} className="text-white hover:bg-primary-light block w-full text-left px-3 py-2 rounded-md text-base font-medium">Services</button>
            <button onClick={() => handleScroll('about')} className="text-white hover:bg-primary-light block w-full text-left px-3 py-2 rounded-md text-base font-medium">About Us</button>
            <button onClick={() => handleScroll('contact')} className="text-white hover:bg-primary-light block w-full text-left px-3 py-2 rounded-md text-base font-medium">Contact</button>
            <button 
              onClick={() => {
                setIsOpen(false);
                onBookCall();
              }}
              className="mt-4 w-full bg-secondary text-white px-5 py-3 rounded-md font-bold text-center"
            >
              Book Free Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
