import {
  BrainCircuit, Check, LayoutTemplate, Linkedin,
  Github,
  Mail,
  Globe, Target
} from 'lucide-react';

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
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left Column: Main Bio & Values */}
          <div className="py-14 lg:col-span-1 bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Who I Am</h3>
              <p className="m-1 text-slate-600 leading-relaxed text-justify">
                I’m a passionate and results-driven <span className="font-semibold">Full Stack Developer</span> and <span className="font-semibold">Machine Learning enthusiast</span>, currently pursuing <span className="font-semibold">B.Tech in Information Technology at VESIT (INFT ’26)</span>. With a strong foundation in software development and a problem-solving mindset, I’ve earned recognition as a <span className="font-semibold">4x Hackathon Winner</span>, including the prestigious <span className="font-semibold">Smart India Hackathon (SIH) 2024</span>. I enjoy crafting <span className="font-semibold">intuitive web experiences</span>, exploring the potential of <span className="font-semibold">AI/ML</span>, and developing solutions that bridge innovation with impact.
              </p>

            </div>

          </div>

          {/* Right Column: Bento Box Cards */}
          <div className="space-y-8">

            {/* Mission Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-5">Quick Highlights</h3>
                  <ul className="space-y-4 text-slate-600">
                    {[
                      "🎓 B.E. IT at VESIT | CGPA: 9.62 (till Sem 6)",
                      "🏆 SIH 2024 Winner | KakushIN 9.0 – 2nd Runners-Up",
                      "🗣️ Strong public speaking & team collaboration skills",
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
            </div>

            {/* Passions Card */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Connect with me!</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/shravanirasam02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-violet-50 p-2 rounded-md transition"
                >
                  <Linkedin className="w-5 h-5 text-violet-600 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Shravani Rasam</span>
                </a>

                <a
                  href="https://github.com/ShravaniR2412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-violet-50 p-2 rounded-md transition"
                >
                  <Github className="w-5 h-5 text-violet-600 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">ShravaniR2412</span>
                </a>

                <a
                  href="mailto:shravanirasam0212@gmail.com"
                  className="flex items-center gap-3 hover:bg-violet-50 p-2 rounded-md transition"
                >
                  <Mail className="w-5 h-5 text-violet-600 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">shravanirasam0212@gmail.com</span>
                </a>

                <a
                  href="https://yourportfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-violet-50 p-2 rounded-md transition"
                >
                  <Globe className="w-5 h-5 text-violet-600 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Portfolio</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}