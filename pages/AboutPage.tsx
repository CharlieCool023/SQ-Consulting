import React, { useEffect } from 'react';

interface AboutPageProps {
  onBookCall: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookCall }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
       {/* Header */}
       <div className="bg-white py-20 border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Delivering Value, <br/>Driving Innovation.</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    SQ Consulting is more than just an advisory firm. We are your strategic partners in navigating the complex landscape of modern business. From financial restructuring to digital transformation, we are committed to your success.
                </p>
            </div>
         </div>
       </div>

       {/* Visual + Mission */}
       <div className="py-20 bg-background-light">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 opacity-20"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                            alt="Team brainstorming" 
                            className="relative rounded-3xl shadow-2xl z-10"
                        />
                   </div>
                   <div>
                       <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                       <p className="text-gray-600 mb-6 text-lg">
                           To empower MSMEs and large enterprises alike with the tools, strategies, and insights needed to thrive in a competitive global market.
                       </p>
                       <ul className="space-y-4">
                           <li className="flex items-start gap-4">
                               <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                                   <span className="material-icons text-primary">visibility</span>
                               </div>
                               <div>
                                   <h4 className="font-bold text-gray-900">Clarity</h4>
                                   <p className="text-sm text-gray-500">Demystifying complex data and regulations.</p>
                               </div>
                           </li>
                           <li className="flex items-start gap-4">
                               <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                                   <span className="material-icons text-secondary">speed</span>
                               </div>
                               <div>
                                   <h4 className="font-bold text-gray-900">Momentum</h4>
                                   <p className="text-sm text-gray-500">Accelerating growth through proven strategies.</p>
                               </div>
                           </li>
                       </ul>
                       <div className="mt-10">
                            <button onClick={onBookCall} className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-light transition">
                                Join our list of success stories
                            </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       {/* Values Grid */}
       <div className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[
                       { icon: 'verified_user', title: 'Integrity', desc: 'We operate with complete transparency and ethical standards in all financial and strategic dealings.' },
                       { icon: 'psychology', title: 'Innovation', desc: 'We constantly explore new technologies and methodologies to give our clients an edge.' },
                       { icon: 'handshake', title: 'Partnership', desc: 'We treat your business as our own, investing deep interest in your long-term success.' }
                   ].map((item, i) => (
                       <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition duration-300 text-center border border-gray-100">
                           <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
                               <span className="material-icons text-3xl">{item.icon}</span>
                           </div>
                           <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                           <p className="text-gray-600">{item.desc}</p>
                       </div>
                   ))}
               </div>
           </div>
       </div>
    </div>
  );
};
