'use client';

import React, { useState } from 'react';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiGit, SiFigma, SiVercel, SiPython, SiTensorflow, SiPandas, SiScikitlearn, SiJupyter
} from 'react-icons/si';

const techCategories = [
  {
    name: 'Frontend',
    tools: [
      { name: 'JavaScript', icon: <SiJavascript size={32} className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript size={32} className="text-blue-400" /> },
      { name: 'React', icon: <SiReact size={32} className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs size={32} className="text-slate-300" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-teal-400" /> },
      { name: 'CSS', icon: <SiTailwindcss size={32} className="text-teal-400" /> },
    ],
  },
  {
    name: 'Backend',
    tools: [
      { name: 'Node.js', icon: <SiNodedotjs size={32} className="text-green-400" /> },
      { name: 'Express', icon: <SiExpress size={32} className="text-slate-300" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={32} className="text-sky-400" /> },
      { name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
      { name: 'Prisma', icon: <SiPrisma size={32} className="text-slate-300" /> },
    ],
  },
  {
    name: 'Machine Learning',
    tools: [
      { name: 'Python', icon: <SiPython size={32} className="text-yellow-400" /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={32} className="text-orange-500" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={32} className="text-orange-400" /> },
      { name: 'Pandas', icon: <SiPandas size={32} className="text-indigo-400" /> },
      { name: 'Jupyter', icon: <SiJupyter size={32} className="text-orange-500" /> },
    ],
  },
  {
    name: 'Tools & Deployment',
    tools: [
      { name: 'Git', icon: <SiGit size={32} className="text-red-500" /> },
      { name: 'Figma', icon: <SiFigma size={32} className="text-pink-500" /> },
      { name: 'Vercel', icon: <SiVercel size={32} className="text-slate-300" /> },
    ],
  },
];

export default function SkillsSection() {
  // Set the first category as the default active tab
  const [activeTab, setActiveTab] = useState(techCategories[0].name);

  return (
    <section id="skills" className="py-10 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-100">
            My Tech Stack
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            Technologies I use to bring ideas to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {techCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === category.name
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-700/50 border border-slate-800 rounded-xl p-8 min-h-[200px]">
          {techCategories.map((category) =>
            // Only render the content for the active tab
            activeTab === category.name && (
              <div
                key={category.name}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-8"
              >
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center text-center gap-2"
                  >
                    <div className="p-4 bg-slate-900/50 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-900">
                      {tool.icon}
                    </div>
                    <span className="text-xs text-slate-400 transition-colors group-hover:text-slate-200">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}