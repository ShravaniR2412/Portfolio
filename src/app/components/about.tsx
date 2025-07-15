import { BrainCircuit, Check, LayoutTemplate, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            About Me
          </h2>
          <p className="mt-3 text-lg text-slate-600">A little bit about my journey and my mission.</p>
          <div className="w-24 h-1 bg-violet-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Main Bio & Values */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Who I Am</h3>
              <p className="text-slate-600 leading-relaxed">
                I'm a web developer with a passion for creating clean, responsive interfaces and exploring the vast possibilities of machine learning. I enjoy blending thoughtful design with powerful data to build applications that are both functional and delightful to use.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-5">My Approach</h3>
              <ul className="space-y-4 text-slate-600">
                {[
                  "A problem-solving and analytical mindset",
                  "A commitment to being a continuous learner",
                  "A highly collaborative and communicative team player",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="bg-violet-100 p-1.5 rounded-full">
                      <Check className="w-4 h-4 text-violet-700" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Bento Box Cards */}
          <div className="space-y-8">
            
            {/* Mission Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-violet-100 p-3 rounded-full mt-1">
                  <Target className="w-6 h-6 text-violet-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">My Mission</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2">
                    To craft modern web apps that solve real-world problems by merging great UI with machine learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Passions Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Core Passions</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <LayoutTemplate className="w-5 h-5 text-violet-600 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Elegant & Responsive Interfaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-5 h-5 text-violet-600 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Exploring Machine Learning</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}