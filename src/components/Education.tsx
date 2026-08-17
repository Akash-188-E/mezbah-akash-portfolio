import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export default function Education() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'BookOpen':
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="education" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04 / ACADEMIC BACKGROUND</span>
          </div>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Education Timeline
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            Academic milestones, foundational science education, and ongoing Computer Science degree.
          </p>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 opacity-30"></div>

          <div className="space-y-12 relative">
            {EDUCATION_LIST.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  id={`education-node-${index}`}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#050508] border-2 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                  </div>

                  {/* Spacer for symmetrical desktop grid */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl backdrop-blur-md group hover:bg-white/10">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase bg-blue-600/20 text-blue-300 border border-blue-500/30">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>

                        {item.gpa && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-mono-code bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            <Award className="w-3.5 h-3.5" />
                            GPA: {item.gpa}
                          </span>
                        )}

                        {item.statusBadge && !item.gpa && (
                          <span className="px-3 py-1 rounded-full text-xs font-mono-code font-semibold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {item.statusBadge}
                          </span>
                        )}
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-sm font-semibold text-indigo-300 mt-1 mb-3">
                        {item.institution}
                      </p>

                      {/* Details list */}
                      <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs sm:text-sm text-gray-300">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
