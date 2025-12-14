import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { Link } from 'react-router-dom';

interface HomeProps {
  onBookCall: () => void;
}

export const Home: React.FC<HomeProps> = ({ onBookCall }) => {
  return (
    <div id="home">
      <Hero onBookCall={onBookCall} />

      {/* Audit CTA Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-sm border border-primary/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="md:w-2/3 text-center md:text-left">
                <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-secondary mb-6 shadow-sm uppercase tracking-wide">
                    🚀 Limited Time Offer
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Unclear on your next step? <br className="hidden md:block" /> Let's audit your business in 60 seconds.
                </h2>
                <ul className="space-y-4 mb-8 text-left inline-block md:block">
                    <li className="flex items-center gap-4 text-gray-700 text-base md:text-lg">
                        <span className="material-icons text-green-500 flex-shrink-0">check_circle</span>
                        <span>Identify hidden growth opportunities</span>
                    </li>
                    <li className="flex items-center gap-4 text-gray-700 text-base md:text-lg">
                        <span className="material-icons text-green-500 flex-shrink-0">check_circle</span>
                        <span>Optimize operations for maximum efficiency</span>
                    </li>
                     <li className="flex items-center gap-4 text-gray-700 text-base md:text-lg">
                        <span className="material-icons text-green-500 flex-shrink-0">check_circle</span>
                        <span>Get expert roadmap guidance</span>
                    </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex flex-col gap-6 items-center w-full">
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-xs text-center border border-gray-100 transform rotate-1">
                    <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-widest">Availability</p>
                    <p className="text-4xl font-bold text-primary mb-2">5 Spots</p>
                    <p className="text-sm text-gray-500">For free discovery calls this week</p>
                </div>
                <button 
                  onClick={onBookCall}
                  className="w-full max-w-xs group bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-900/20 transition flex items-center justify-center gap-3"
                >
                  Schedule Free Call
                  <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gray-900">Holistic Business Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed px-4">
                From streamlining software transitions to training your workforce. We cover every angle of your growth strategy with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition text-lg group">
                  View All Services
                  <span className="material-icons group-hover:translate-x-1 transition">arrow_forward</span>
              </Link>
          </div>
        </div>
      </section>

      {/* Training / Poster Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div className="w-full lg:w-1/2 relative group px-4 md:px-0">
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
                        className="relative rounded-3xl shadow-2xl z-10 w-full transform group-hover:scale-[1.01] transition duration-700"
                        alt="Professional Training"
                    />
                    <div className="absolute -bottom-6 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl z-20 border border-gray-100">
                        <div className="flex items-center gap-4 md:gap-5">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg flex-shrink-0">
                                %
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-base md:text-lg">Become a Professional</h4>
                                <p className="text-xs md:text-sm text-gray-600">Specialized trainings for MSMEs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <div className="inline-block px-3 py-1 bg-purple-50 text-primary rounded-lg text-sm font-bold mb-4">Upskill Your Team</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Empower Your Team with Professional Training</h2>
                    <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
                        Technical skills are the currency of the future. We offer specialized training workshops designed to help you and your staff master critical business functions immediately.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {['Accounting Standards (IFRS)', 'Advanced Excel Analysis', 'Corporate Brand Design', 'Customer Service Excellence'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition">
                                <span className="material-icons text-primary text-sm">school</span>
                                <span className="font-medium text-gray-800 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={onBookCall}
                        className="w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-xl flex items-center justify-center gap-2"
                    >
                        Inquire About Training
                         <span className="material-icons text-sm">email</span>
                    </button>
                </div>
            </div>
        </div>
      </section>

      <Testimonials />

      {/* Trust/Stats */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
                  <div className="p-2 md:p-4">
                      <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">50+</div>
                      <div className="text-purple-200 text-xs md:text-sm font-medium uppercase tracking-wider">Businesses Scaled</div>
                  </div>
                  <div className="p-2 md:p-4">
                      <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">100%</div>
                      <div className="text-purple-200 text-xs md:text-sm font-medium uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                  <div className="p-2 md:p-4">
                      <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">10+</div>
                      <div className="text-purple-200 text-xs md:text-sm font-medium uppercase tracking-wider">Training Modules</div>
                  </div>
                   <div className="p-2 md:p-4">
                      <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">24/7</div>
                      <div className="text-purple-200 text-xs md:text-sm font-medium uppercase tracking-wider">Support Available</div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};