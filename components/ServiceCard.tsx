import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 group border-t-4 ${service.borderColor} flex flex-col h-full`}>
      <div className={`w-14 h-14 ${service.iconBg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300`}>
        <span className={`material-icons ${service.color} text-3xl`}>{service.icon}</span>
      </div>
      <h3 className={`text-xl font-bold mb-3 text-gray-900 group-hover:${service.color} transition`}>{service.title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{service.shortDescription}</p>
      
      <div className="mt-auto">
        <Link 
            to={`/service/${service.id}`}
            className={`inline-flex items-center gap-2 text-sm font-bold ${service.color} hover:underline`}
        >
            Learn More
            <span className="material-icons text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};
