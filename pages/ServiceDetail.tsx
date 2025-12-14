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

  return (
    <div className="min-h-screen pt-20">
        {/* Service Hero */}
        <div className="relative h-[50vh] min-h-[400px] flex items-center">
            <div className="absolute inset-0">
                <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900/80"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    <span className={`material-icons text-3xl ${service.color}`}>{service.icon}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-gray-200 max-w-2xl">{service.shortDescription}</p>
            </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">What We Deliver</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <span className="material-icons text-green-500 mt-0.5">check_circle</span>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-background-light p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Why is this critical for your business?</h3>
                        <p className="text-gray-600 mb-4">
                            In today's competitive landscape, relying on intuition isn't enough. {service.title} provides the structural backbone 
                            needed to scale efficiently. Without it, companies often face operational bottlenecks and compliance risks.
                        </p>
                    </div>
                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary">
                        <h3 className="text-xl font-bold mb-2">Transform your Business</h3>
                        <p className="text-gray-500 mb-6 text-sm">
                            Ready to implement our {service.title} solutions? Schedule a free discovery call with our experts.
                        </p>
                        <button 
                            onClick={onBookCall}
                            className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1"
                        >
                            Book Consultation
                        </button>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-sm text-gray-600">Available Now</span>
                            </div>
                            <p className="text-xs text-gray-400">Response time: usually within 2 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
