import React, { useEffect } from 'react';
import { CAREER_OPENINGS } from '../constants';

export const CareersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
            <div className="lg:w-1/2">
                <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] block mb-4">Join the Elite</span>
                <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">Shape the Future of <span className="text-primary">Consulting.</span></h1>
                <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl">
                    We're building an institution of excellence. If you're driven by impact and thrive in high-stakes environments, we want to hear from you.
                </p>
                <div className="flex items-center gap-8 border-t border-gray-100 pt-10">
                    <div className="text-center">
                        <span className="text-3xl font-black text-gray-900 block tracking-tight">100%</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Growth Focused</span>
                    </div>
                    <div className="text-center">
                        <span className="text-3xl font-black text-gray-900 block tracking-tight">Hybrid</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Work Model</span>
                    </div>
                    <div className="text-center">
                        <span className="text-3xl font-black text-gray-900 block tracking-tight">Impact</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Driven DNA</span>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop" className="w-full" alt="Team work" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 flex items-center gap-4 animate-float">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <span className="material-icons">diversity_3</span>
                    </div>
                    <div>
                        <p className="text-sm font-black text-gray-900">Culture First</p>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Collab Systems</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Culture Grid */}
        <div className="mb-32">
            <h2 className="text-3xl font-black text-gray-900 mb-12 tracking-tight flex items-center gap-4">
                <span className="w-12 h-px bg-primary"></span>
                The SQ DNA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: "Radical Integrity", desc: "We provide the unvarnished truth to our clients. Always.", icon: "security" },
                    { title: "Obsessive Growth", desc: "If you aren't learning, you aren't leading. We invest in you.", icon: "trending_up" },
                    { title: "High-Stakes Focus", desc: "We solve the problems that keep CEOs awake at night.", icon: "bolt" }
                ].map((item, i) => (
                    <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500">
                        <span className="material-icons text-primary text-4xl mb-6">{item.icon}</span>
                        <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{item.title}</h4>
                        <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Openings */}
        <div>
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Active Inquiries</h2>
                <span className="px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">Hiring for 2025</span>
            </div>
            <div className="grid gap-6">
                {CAREER_OPENINGS.map((job) => (
                    <div key={job.id} className="group bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">{job.department}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{job.type}</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                            <p className="text-gray-500 font-medium flex items-center gap-2">
                                <span className="material-icons text-xs">location_on</span>
                                {job.location}
                            </p>
                        </div>
                        <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95 text-xs">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 p-10 md:p-16 bg-primary-dark rounded-[3rem] text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight relative z-10">Don't see a fit? Send an open pitch.</h3>
                <p className="text-purple-100/70 mb-10 max-w-xl mx-auto font-medium relative z-10">
                    If you believe you have something unique to offer SQ Consulting, reach out. We hire talent, not just positions.
                </p>
                <a href="mailto:sqconsultinginc@gmail.com" className="inline-block bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-2xl relative z-10 text-xs">
                    Email Talent Acquisition
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};