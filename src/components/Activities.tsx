import { Users, Award, Shield, Compass, Sparkles, Building, Star } from 'lucide-react';
import { LEADERSHIP_ACTIVITIES } from '../data/portfolioData';

export default function Activities() {
  const getRoleIcon = (type: string) => {
    switch (type) {
      case 'scout':
        return <Star className="w-5 h-5 text-amber-400" />;
      case 'society':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'club':
        return <Users className="w-5 h-5 text-indigo-400" />;
      case 'school':
      default:
        return <Building className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="activities" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-2 flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            <span>06 / COMMUNITY & LEADERSHIP</span>
          </div>
          <h2
            id="activities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Leadership & Activities
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            Executive club responsibilities, national scout honors, and institutional leadership roles.
          </p>
          <div className="w-12 h-0.5 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_ACTIVITIES.map((activity, index) => {
            const isScout = activity.type === 'scout';

            return (
              <div
                key={index}
                id={`activity-card-${index}`}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-xl relative flex flex-col justify-between group backdrop-blur-md ${
                  isScout
                    ? 'border-amber-500/40 bg-amber-500/5 hover:border-amber-400/60'
                    : 'bg-white/5 border-white/10 hover:border-indigo-500/40 hover:bg-white/10'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-[#050508]/80 border border-white/10 group-hover:scale-105 transition-transform">
                      {getRoleIcon(activity.type)}
                    </div>
                    {activity.period && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono-code uppercase bg-white/5 text-gray-300 border border-white/10">
                        {activity.period}
                      </span>
                    )}
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                    {activity.role}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm font-semibold text-gray-300 mt-1 mb-3">
                    {activity.organization}
                  </p>

                  {/* Description */}
                  {activity.description && (
                    <p className="text-xs text-gray-400 leading-relaxed pt-1">
                      {activity.description}
                    </p>
                  )}
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-gray-400">
                  <span className="capitalize">{activity.type} Executive</span>
                  <span className="text-indigo-400">Active Contributor</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
