import { ArrowUp, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#050508] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-gray-400">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-36 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center justify-between">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-xs font-display">
                MA
              </div>
              <span className="font-display text-xl font-extrabold text-white tracking-wider uppercase">
                {PERSONAL_INFO.displayName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-mono-code">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-gray-400 max-w-sm">
              Leading University • 4th Year Computer Science & Engineering
            </p>
          </div>

          {/* Social icons */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-3">
            <span className="text-xs font-mono-code text-gray-400">
              Connect Across Platforms
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Mezbah"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Quick Nav Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors cursor-pointer">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="hover:text-white transition-colors cursor-pointer">
              Education
            </button>
            <button onClick={() => scrollToSection('achievements')} className="hover:text-white transition-colors cursor-pointer">
              Achievements
            </button>
            <button onClick={() => scrollToSection('activities')} className="hover:text-white transition-colors cursor-pointer">
              Activities
            </button>
            <button onClick={() => scrollToSection('beyond-code')} className="hover:text-white transition-colors cursor-pointer">
              Passions
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 Mezbah Akash. All rights reserved.</span>
            
            {/* Back to top button */}
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono-code">Top</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
