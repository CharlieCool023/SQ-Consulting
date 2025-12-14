import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';

interface HomeProps {
  onBookCall: () => void;
}

export const Home: React.FC<HomeProps> = ({ onBookCall }) => {
  return (
    <div id="home">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-purple-900 via-primary to-purple-800">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/20 border border-secondary/50 text-orange-200 text-sm font-semibold tracking-wide uppercase">
                #OpenForBusiness on LinkedIn
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Take your business to the <span className="text-secondary bg-white/10 px-2 rounded-lg inline-block transform -rotate-2">Next Level</span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                From Business Intelligence and Design to Accounting and Strategic Planning. We bring clarity, structure, and momentum to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#services" className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-gray-100 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Explore Services
                  <span className="material-icons text-sm">arrow_forward</span>
                </a>
                <button 
                  onClick={onBookCall}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  Contact Us
                  <span className="material-icons text-sm">call</span>
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:h-[600px] h-[450px] flex items-center justify-center animate-fade-in delay-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500 border border-white/20">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-icons text-9xl text-primary">analytics</span>
                </div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-icons text-3xl text-primary">insights</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Dashboard</h3>
                  <p className="text-gray-600 mb-6">Real-time analysis of your market performance.</p>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-3/4 animate-pulse"></div>
                    </div>
                     <div className="h-2 w-2/3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-1/2 animate-pulse"></div>
                    </div>
                     <div className="flex justify-between items-end mt-4 h-24">
                        <div className="w-8 bg-primary/20 h-[40%] rounded-t-sm"></div>
                        <div className="w-8 bg-primary/40 h-[60%] rounded-t-sm"></div>
                        <div className="w-8 bg-primary/60 h-[80%] rounded-t-sm"></div>
                        <div className="w-8 bg-primary h-[100%] rounded-t-sm shadow-lg"></div>
                     </div>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-6 lg:right-0 right-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-secondary animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-secondary">design_services</span>
                  <div>
                    <p className="text-xs text-gray-500">Design</p>
                    <p className="text-sm font-bold text-gray-900">Brand & Logo</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 lg:left-0 left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-green-500 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-green-500">account_balance</span>
                  <div>
                    <p className="text-xs text-gray-500">Finance</p>
                    <p className="text-sm font-bold text-gray-900">Accounting Ops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit CTA Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-light/5 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm border border-gray-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Not sure where your business stands?</h2>
                <p className="text-gray-600 text-lg">Take our quick Business Audit Quiz to identify gaps in your strategy, compliance, or financial health.</p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <button 
                  onClick={onBookCall}
                  className="group bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-lg transition flex items-center gap-3"
                >
                  Start Free Audit
                  <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Comprehensive Business Solutions</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features/About Section */}
      <section id="about" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 w-full bg-gray-200">
                <img 
                    alt="Team meeting" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-bold text-xl">Driving Growth</h4>
                  <p className="text-sm opacity-90">Across startups, fintechs, and SMEs.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Partner With <span className="text-primary">SQ Consulting?</span></h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                After years of driving growth and transformation, we now offer our services directly to help you fix strategy, systems, and scaling issues. We don't just advise; we accelerate.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-primary">psychology</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Strategic Expertise</h4>
                    <p className="text-gray-500 text-sm">Core expertise in Business Analysis, Process Automation, and Change Management.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-secondary">verified</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Tailored Solutions</h4>
                    <p className="text-gray-500 text-sm">We provide clarity, structure, and momentum specific to your business needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="material-icons text-green-600">rocket_launch</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Results Driven</h4>
                    <p className="text-gray-500 text-sm">Focus on measurable outcomes, from financial audits to brand policy documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <h3 className="text-xl text-gray-500 uppercase tracking-widest font-semibold">Trusted by Innovative Brands</h3>
        </div>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-500">
           {['FinTech', 'AgroCorp', 'EduSystems', 'HealthPlus'].map((brand, i) => (
             <div key={i} className="flex items-center space-x-2">
                <div className={`h-8 w-8 bg-gray-400 rounded-${i % 2 === 0 ? 'full' : 'md'}`}></div>
                <span className="font-bold text-xl text-gray-500">{brand}</span>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Accelerate Your Business?</h2>
          <p className="text-lg text-purple-100 mb-10">Contact us today for a consultation or reach out directly to discuss your project.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a href="mailto:sqconsultinginc@gmail.com" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl hover:bg-white/20 transition">
              <span className="material-icons">email</span>
              <span>sqconsultinginc@gmail.com</span>
            </a>
            <button 
                onClick={onBookCall}
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-4 rounded-xl transition shadow-lg"
            >
              <span className="material-icons">calendar_today</span>
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
