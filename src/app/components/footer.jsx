'use client';

import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

// --- SOCIAL & CONTACT LINKS (Customize these) ---
const socialLinks = [
  {
    icon: <Github size={20} />,
    href: 'https://github.com/your-username',
    label: 'GitHub',
  },
  {
    icon: <Linkedin size={20} />,
    href: 'https://linkedin.com/in/your-profile',
    label: 'LinkedIn',
  },
  {
    icon: <Twitter size={20} />,
    href: 'https://twitter.com/your-username',
    label: 'Twitter',
  },
];

const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
];


export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-50 text-slate-700 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 py-5">
        <div className="grid md:grid-cols-12 gap-8">

          {/* Footer branding */}
          <div className="md:col-span-12 lg:col-span-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Shravani
            </h2>
            <p className="text-slate-600 max-w-xs">
              A Web Developer & ML Enthusiast passionate about building modern, scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-slate-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-violet-600 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-slate-800 font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-slate-200 text-slate-600 p-3 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="md:col-span-4 lg:col-span-3">
             <h3 className="text-slate-800 font-semibold mb-4">Get in Touch</h3>
             <a 
                href="mailto:your-email@example.com"
                className="group inline-flex items-center text-violet-600 font-medium hover:text-violet-800 transition-colors duration-300"
              >
                <span>your-email@example.com</span>
                <ArrowUpRight size={18} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Shravani. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}