'use client';

import { Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const hackathonWins = [
    {
        imageUrl: '/images/hackathons/postman-hackathon.jpg',
        title: 'Postman API Hackathon - 1st Place',
        organizer: 'Postman & Major League Hacking',
        date: 'October 2024',
        description: 'Led a team to build an innovative wellness app that leveraged a complex suite of APIs, securing the top prize among 500+ teams.',
        linkedinUrl: '#'
    },
    {
        imageUrl: '/images/hackathons/ai-for-good.jpg',
        title: 'AI for Good Challenge - Social Impact Award',
        organizer: 'Google Developer Groups',
        date: 'July 2024',
        description: 'Developed an ML model to predict and report local water shortages, recognized for its significant potential for social impact.',
        linkedinUrl: '#'
    },
    {
        imageUrl: '/images/hackathons/devfest-winner.jpg',
        title: 'DevFest 2023 - Best Web App',
        organizer: 'GDG Cloud City',
        date: 'November 2023',
        description: 'Created a real-time collaborative whiteboard application using Next.js and WebSockets, awarded "Best Web App".',
        linkedinUrl: '#'
    }
];

export default function Achievements() {
    return (
        // --- MODIFICATION --- Added `overflow-hidden` to prevent the glow from causing a horizontal scrollbar
        <section id="achievements" className="relative w-full bg-slate-900 py-20 lg:py-28 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-violet-900/30 rounded-full blur-3xl animate-pulse"></div>

            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-100">
                        Hackathon Trophies & <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Awards</span>
                    </h2>
                    <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">
                        Here are some of the competitions I've participated in and won. Each project was a fantastic learning journey.
                    </p>
                </div>

                {/* --- MODIFICATION --- Changed to `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for better stacking */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {hackathonWins.map((hackathon, index) => (
                        <div 
                          key={index}
                          className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-violet-600/20"
                        >
                            <div className="w-full h-48 relative">
                                <Image
                                    src={hackathon.imageUrl}
                                    alt={`${hackathon.title} image`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent"></div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-100 mb-3">{hackathon.title}</h3>
                                <div className="flex flex-col gap-2 text-sm text-slate-400 mb-4">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck size={16} className="text-violet-400" />
                                        <span>{hackathon.organizer}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-violet-400" />
                                        <span>{hackathon.date}</span>
                                    </div>
                                </div>
                                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{hackathon.description}</p>
                                <a 
                                  href={hackathon.linkedinUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors duration-300"
                                >
                                    <span>View on LinkedIn</span>
                                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}