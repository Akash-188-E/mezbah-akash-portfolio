import { GraduationCap, Code2, Lightbulb, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-12 text-center sm:text-left">
          <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            A Little About Me
          </h2>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden backdrop-blur-md">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
              
              <p className="font-medium text-white text-lg sm:text-xl leading-snug">
                Hello! I'm <span className="text-blue-400 font-semibold">{PERSONAL_INFO.displayName}</span>, a Computer Science and Engineering student driven by a deep curiosity for technology and creative engineering.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Currently in my 4th year of CSE at <span className="text-blue-300 font-medium">{PERSONAL_INFO.institution}</span>, I focus on understanding foundational computing concepts while building hands-on applications across mobile and desktop platforms.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I enjoy transforming everyday challenges into intuitive digital tools, from campus safety reporting platforms to structured academic management systems. I believe that thoughtful software begins with active listening, disciplined coding, and an eager appetite to learn continuously.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono-code text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Academic Rigor
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Team Collaboration
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-purple-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Continuous Growth
                </span>
              </div>
            </div>

            {/* Currently Exploring Tags Area */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-300">
                  Currently Exploring
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.currentlyExploring.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-200 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3 Interactive Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Card 1: CSE Student */}
            <div
              id="about-card-student"
              className="bg-white/5 hover:bg-white/[0.08] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 group relative backdrop-blur-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                      CSE Student
                    </h3>
                    <span className="text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      4th Year
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-300">
                    Leading University
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed pt-1">
                    Pursuing B.Sc. in Computer Science & Engineering with strong coursework in algorithms, data structures, and software engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Developer */}
            <div
              id="about-card-developer"
              className="bg-white/5 hover:bg-white/[0.08] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group relative backdrop-blur-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                      Developer
                    </h3>
                    <span className="text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                      Crafting
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-300">
                    Learning & Building Software
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed pt-1">
                    Gaining practical experience through hands-on development in Flutter, Dart, C++, Java, and modern database systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Problem Solver */}
            <div
              id="about-card-solver"
              className="bg-white/5 hover:bg-white/[0.08] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group relative backdrop-blur-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                      Problem Solver
                    </h3>
                    <span className="text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30">
                      Impact
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-300">
                    Turning Ideas into Solutions
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed pt-1">
                    Passionate about breaking down complex real-world requirements into clean, practical, and dependable digital workflows.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
