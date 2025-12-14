import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onBookCall: () => void;
}

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    title: "Take Your Business to the Next Level",
    subtitle: "Strategic guidance for scalable growth.",
    align: "center"
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    title: "Data-Driven Intelligence",
    subtitle: "Turn raw numbers into actionable insights.",
    align: "left"
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070&auto=format&fit=crop',
    title: "Professional Excellence",
    subtitle: "Accounting, Compliance, and Training for MSMEs.",
    align: "right"
  }
];

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] lg:h-[750px] overflow-hidden bg-primary-dark">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Zoom Effect Image */}
          <div className={`w-full h-full transform transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}>
            <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
            />
          </div>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-primary-dark/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent mix-blend-multiply"></div>
        </div>
      ))}

      {/* Content Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {SLIDES.map((slide, index) => {
                 if (index !== currentSlide) return null;
                 return (
                    <div key={slide.id} className={`max-w-4xl ${slide.align === 'center' ? 'mx-auto text-center' : slide.align === 'right' ? 'ml-auto text-right' : 'text-left'} animate-slide-up`}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                        {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-10 font-light drop-shadow-lg max-w-2xl inline-block">
                        {slide.subtitle}
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 ${slide.align === 'center' ? 'justify-center' : slide.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                            <button 
                                onClick={onBookCall}
                                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-orange-900/20 transform hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2"
                            >
                                <span className="material-icons">calendar_today</span>
                                Book Consultation
                            </button>
                            <Link 
                                to="/services" 
                                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition duration-300 flex items-center justify-center gap-2"
                            >
                                Explore Services
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                 )
            })}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-secondary w-12' : 'bg-white/30 w-6 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
