import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

interface ServiceDetailProps {
  onBookCall: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ onBookCall }) => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" />;
  }

  const steps = [
    { title: "Strategic Discovery", desc: "We audit your current posture and define specific, measurable KPIs." },
    { title: "Blueprint Design", desc: "Our experts design a custom solution mapped to your operational needs." },
    { title: "Agile Implementation", desc: "Controlled rollout with real-time feedback loops and team training." },
    { title: "Continuous Optimization", desc: "Post-launch support to ensure sustainability and ROI maximization." }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background-light">
        {/* Service Hero */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center">
            <div className="absolute inset-0">
                <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-dark/85"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className={`w-20 h-20 ${service.iconBg} backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-2xl animate-float`}>
                    <span className={`material-icons text-4xl ${service.color}`}>{service.icon}</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">{service.title}</h1>
                <p className="text-xl md:text-2xl text-purple-100 max-w-3xl font-medium leading-relaxed opacity-90">{service.shortDescription}</p>
            </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 space-y-16">
                    {/* Overview */}
                    <section className="animate-fade-in">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-6">Expert Methodology</div>
                        <h2 className="text-3xl md:text-4xl font-black mb-8 text-gray-900 tracking-tight italic">Why it Matters.</h2>
                        <p className="text-gray-600 leading-relaxed text-xl font-medium">{service.fullDescription}</p>
                    </section>

                    {/* Execution Plan */}
                    <section className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h2 className="text-3xl font-black mb-12 text-gray-900 tracking-tight">Our 4-Stage Execution Plan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="absolute -left-6 top-0 text-7xl font-black text-gray-50 opacity-100 select-none group-hover:text-primary/10 transition-colors">0{idx + 1}</div>
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Features List */}
                    <section>
                        <h2 className="text-3xl font-black mb-10 text-gray-900 tracking-tight">Core Deliverables</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="material-icons text-green-500">verified</span>
                                    </div>
                                    <span className="text-gray-800 font-bold text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-4">
                    <div className="sticky top-28 bg-white p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-primary space-y-8">
                        <div>
                            <h3 className="text-2xl font-black mb-4 text-gray-900 tracking-tight">Accelerate Your Results.</h3>
                            <p className="text-gray-500 font-medium text-lg leading-relaxed">
                                Don't let operational friction hold you back. Let's build your {service.title} roadmap today.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <button 
                                onClick={onBookCall}
                                className="w-full bg-secondary hover:bg-orange-600 text-white font-black py-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
                            >
                                Book Strategy Session
                            </button>
                            <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest">No Obligation • Expert Feedback</p>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=12" alt="Advisor" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Expert Advisor on Standby</p>
                                    <p className="text-xs text-green-500 font-black uppercase tracking-tighter">Available for Lagos & Remote</p>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-500 italic font-medium">
                                "Our mission is to ensure you see tangible ROI within the first 90 days."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};