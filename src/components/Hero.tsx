import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { ArrowDown, Mail, Github, Linkedin, Facebook, Instagram, Sparkles, Code, Terminal, Compass, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import akashProfilePhoto from '../assets/images/akash-profile-photo.jpg';

export default function Hero() {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('mezbah_profile_avatar');
    if (savedImage) {
      setCustomImage(savedImage);
    }
  }, []);

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomImage(result);
          try {
            localStorage.setItem('mezbah_profile_avatar', result);
          } catch {
            // Storage quota warning fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const scrollTo = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Sophisticated Dark radial corner glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status pill */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-code uppercase tracking-widest text-blue-400 bg-blue-600/15 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Projects & Learning</span>
            </div>

            {/* Title & Headline */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold flex items-center gap-2">
                <span>Computer Science & Engineering</span>
                <span className="h-[1px] w-8 bg-blue-500/40"></span>
              </span>
              <h1
                id="hero-main-name"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
              >
                Mezbah Akash
              </h1>
              <div className="flex items-center gap-2 pt-1">
                <p className="text-blue-400 text-sm sm:text-base font-bold uppercase tracking-wider font-mono-code">
                  CSE STUDENT & ASPIRING SOFTWARE DEVELOPER
                </p>
              </div>
            </div>

            {/* Introduction paragraph */}
            <p
              id="hero-introduction"
              className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.introduction}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                id="hero-cta-explore"
                onClick={() => scrollTo('projects')}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                Explore My Work
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Technology Tags */}
            <div className="pt-4 border-t border-white/10 w-full">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block mb-3">
                Core Technologies & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.heroTags.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] bg-white/5 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white px-3 py-1 rounded-full font-mono-code transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mr-1">Connect:</span>
              <a
                id="hero-social-github"
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-social-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Mezbah Akash"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                id="hero-social-facebook"
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-all shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="hero-social-instagram"
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Profile Image Frame with Subtle Interactive Hover Animation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoUpload}
              accept="image/*"
              className="hidden"
              id="hero-photo-file-input"
            />

            <div
              onClick={() => fileInputRef.current?.click()}
              title="Click to load or replace with your exact photo file from device"
              className="group/avatar relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.03]"
            >
              
              {/* Outer Decorative Gradient Rings & Multi-color Ambient Glow with Hover Enhancement */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/35 via-purple-600/30 to-indigo-500/35 rounded-full opacity-80 blur-2xl animate-pulse-slow group-hover/avatar:opacity-100 group-hover/avatar:scale-110 group-hover/avatar:blur-3xl group-hover/avatar:from-blue-500/50 group-hover/avatar:to-purple-500/50 transition-all duration-700 pointer-events-none" />
              
              <div className="absolute -inset-[2px] bg-gradient-to-b from-blue-500 via-purple-500/40 to-transparent rounded-full group-hover/avatar:from-blue-400 group-hover/avatar:via-purple-400 group-hover/avatar:to-indigo-400 transition-all duration-500 pointer-events-none" />

              {/* Circular Frame Container */}
              <div className="relative w-full h-full rounded-full bg-[#050508] p-2 overflow-hidden border-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover/avatar:border-blue-400/70 group-hover/avatar:shadow-[0_0_55px_rgba(59,130,246,0.45)] transition-all duration-500 flex items-center justify-center">
                
                {/* Photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#090b10]">
                  <img
                    id="hero-profile-photo"
                    src={customImage || '/mezbah.jpg'}
                    onError={(e) => {
                      if (e.currentTarget.src !== '/akash-profile-photo.jpg') {
                        e.currentTarget.src = '/akash-profile-photo.jpg';
                      }
                    }}
                    alt="Mezbah Akash - CSE Student & Aspiring Software Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover/avatar:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle upload hint icon on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white/90 text-xs font-mono-code gap-1 pointer-events-none">
                    <Camera className="w-6 h-6 text-blue-400" />
                    <span className="text-[11px] bg-black/70 px-2.5 py-1 rounded-full border border-white/20">Click to choose image file</span>
                  </div>
                </div>

              </div>

              {/* Floating aesthetic badge top right */}
              <div className="absolute top-2 -right-2 bg-[#050508]/90 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5 text-xs text-gray-200 group-hover/avatar:-translate-y-1.5 group-hover/avatar:border-blue-400/50 group-hover/avatar:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <Code className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-blue-300">CSE @ LU</span>
              </div>

              {/* Floating aesthetic badge bottom left */}
              <div className="absolute bottom-2 -left-2 bg-[#050508]/90 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5 text-xs text-gray-200 group-hover/avatar:translate-y-1.5 group-hover/avatar:border-purple-400/50 group-hover/avatar:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[10px] font-mono-code uppercase font-bold text-purple-300">4th Year • 2027</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <button
            id="hero-scroll-indicator"
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-blue-400">
              Scroll Down
            </span>
            <div className="w-5 h-9 rounded-full border border-white/20 group-hover:border-blue-400/60 flex items-start justify-center p-1 transition-colors">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
