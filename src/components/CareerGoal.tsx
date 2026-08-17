import { Compass, TrendingUp, Lightbulb, Sparkles, Quote, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CareerGoal() {
  return (
    <section id="career-goal" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 flex items-center gap-2">
            <Target className="w-3.5 h-3.5" />
            <span>08 / ASPIRATIONS & VISION</span>
          </div>
          <h2
            id="direction-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            My Direction
          </h2>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Central Quote / Vision Statement Card */}
        <div className="max-w-4xl mx-auto bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative mb-12 backdrop-blur-md">
          <Quote className="w-10 h-10 text-blue-500/20 absolute top-6 left-6" />
          
          <div className="relative z-10 pt-4 sm:pt-2">
            <p
              id="career-goal-statement"
              className="text-gray-200 text-base sm:text-xl lg:text-xl font-normal leading-relaxed italic text-center sm:text-left"
            >
              "{PERSONAL_INFO.careerGoal}"
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 p-[1px] border border-blue-500/40">
                  <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center font-bold text-blue-400 text-xs">
                    MA
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Mezbah Akash</h4>
                  <span className="text-xs text-blue-400 font-mono-code">Aspiring Software Developer</span>
                </div>
              </div>

              <span className="text-xs font-mono-code text-gray-400 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                Career Roadmap: 2026 – 2030
              </span>
            </div>
          </div>
        </div>

        {/* 3 Visual Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Highlight 1: Grow as a Developer */}
          <div
            id="pillar-grow"
            className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between backdrop-blur-md hover:bg-white/10"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                Grow as a Developer
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                Continuously improve technical and professional skills through hands-on software development and collaborative problem solving.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 text-[11px] font-mono-code text-blue-400">
              Technical Excellence →
            </div>
          </div>

          {/* Highlight 2: Turn Ideas into Solutions */}
          <div
            id="pillar-solutions"
            className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between backdrop-blur-md hover:bg-white/10"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                Turn Ideas into Solutions
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                Transform creative ideas into useful real-world applications that solve genuine community and user needs.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 text-[11px] font-mono-code text-indigo-400">
              Practical Impact →
            </div>
          </div>

          {/* Highlight 3: Keep Learning */}
          <div
            id="pillar-learning"
            className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between backdrop-blur-md hover:bg-white/10"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                Keep Learning
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                Explore new technologies, development frameworks, and emerging industry practices to stay versatile and agile.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 text-[11px] font-mono-code text-purple-400">
              Lifelong Curiosity →
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
