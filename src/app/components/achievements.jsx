'use client';

import { Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const hackathonWins = [
     {
        imageUrl: '/awards/MumbaiHacks2025.jpeg',
        title: 'MumbaiHacks 2025 - Fintech Track Winner',
        organizer: 'Issued by Tech Entrepreneurs Association of Mumbai (TEAM) / Made in Mumbai',
        date: 'December 2025',
        description: 'Won in the Fintech track at MumbaiHacks 2025 —  out of 3,500+ participants. Built a working mobile + web app during the hackathon powered with Agentic-AI features for personal finance management.',
        linkedinUrl: 'https://www.linkedin.com/posts/shravanirasam02_mumbaihacks-fintech-winners-activity-7400959750026330112-XoIf'
    },
    {
        imageUrl: '/awards/SIH.jpeg',
        title: 'Smart India Hackathon (SIH) 2024 - WINNER',
        organizer: 'Issued by IIT Gandhinagar',
        date: 'December 2024',
        description: 'Won the prestigious National level Smart India Hackathon Software Edition, competing against 300+ teams at IIT Gandhinagar.',
        linkedinUrl: 'https://www.linkedin.com/posts/shravanirasam02_smartindiahackathon-innovation-ministryofhousingandurbanaffairs-activity-7273977337908518912-u-_a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdPJAMBIAXibJ0ZIfY2ZzxURbx4KKtbX18'
    },
    {
        imageUrl: '/awards/Kakushin.jpeg',
        title: 'KakushIN 9.0 - 2nd RunnersUp',
        organizer: 'Issued by Nomura India',
        date: 'July 2025',
        description: 'Built a GenAI powered solution for real-world challenges with strong development skills and user-focused design. Delivered a scalable prototype through collaboration under tight deadlines.',
        linkedinUrl: 'https://www.linkedin.com/posts/shravanirasam02_nomurakakushin9-swachhsagar-innovationunlocked-activity-7352588007767523328-kuh-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdPJAMBIAXibJ0ZIfY2ZzxURbx4KKtbX18'
    },
    {
        imageUrl: '/awards/CodeCrafters.jpeg',
        title: 'CodeCrafters 2.0 Hackathon - 1st RunnersUp',
        organizer: 'Issued by Saraswati College of Engineering',
        date: 'March 2025',
        description: 'Secured 2nd place at CodeCrafters 2.0 Hackathon for building MoneyMitra, a multilingual AI-powered financial companion. Ranked 1st in the Web Development track.',
        linkedinUrl: 'https://www.linkedin.com/posts/shravanirasam02_hackathon-codinggurus-codecrafters2-activity-7307700505764327424-aNiU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdPJAMBIAXibJ0ZIfY2ZzxURbx4KKtbX18'
    },
    {
        imageUrl: '/awards/W3.png',
        title: 'Rotacodefest Hackathon 2024 - 2nd RunersUp',
        organizer: 'Issued by Rotary Club Of Ghatkopar West',
        date: 'March 2024',
        description: 'Built WasteWiseWeb, a web-based solution for efficient waste management, driving impactful digital transformation.',
        linkedinUrl: 'https://www.linkedin.com/posts/darshankhapekar_rotacodefest-hackathonwinners-teamwork-ugcPost-7175136366341570562-dp_X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdPJAMBIAXibJ0ZIfY2ZzxURbx4KKtbX18'
    },
   

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