import { useState } from 'react';
import { Trophy, Medal, Flame, Target, Disc, Shield, Activity, Sparkles, Award } from 'lucide-react';
import { SPORTS_ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const [filter, setFilter] = useState<'all' | 'champions' | 'multi'>('all');

  const getSportIcon = (sport: string) => {
    switch (sport) {
      case 'Cricket':
        return <Shield className="w-5 h-5 text-amber-400" />;
      case 'Basketball':
        return <Target className="w-5 h-5 text-orange-400" />;
      case 'Table Tennis':
        return <Disc className="w-5 h-5 text-blue-400" />;
      case 'Football':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Hockey':
        return <Medal className="w-5 h-5 text-indigo-400" />;
      case 'Sprint':
        return <Flame className="w-5 h-5 text-rose-400" />;
      case 'Carrom':
        return <Trophy className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredList = SPORTS_ACHIEVEMENTS.filter((item) => {
    if (filter === 'champions') return item.isChampion;
    if (filter === 'multi') return (item.count && item.count > 1);
    return true;
  });

  return (
    <section id="achievements" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-2 flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>05 / ATHLETIC DISTINCTION</span>
          </div>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Sports Achievements
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            A testament to discipline, competitive spirit, teamwork, and agility earned across school and college tournaments.
          </p>
          <div className="w-12 h-0.5 bg-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Summary Counter Highlight Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 p-5 rounded-3xl border border-white/10 text-center backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-amber-400">14+</span>
            <span className="text-[11px] font-mono-code uppercase text-gray-400 block mt-1">Tournament Podiums</span>
          </div>
          <div className="bg-white/5 p-5 rounded-3xl border border-white/10 text-center backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-400">6</span>
            <span className="text-[11px] font-mono-code uppercase text-gray-400 block mt-1">Disciplines Conquered</span>
          </div>
          <div className="bg-white/5 p-5 rounded-3xl border border-white/10 text-center backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-blue-400">11×</span>
            <span className="text-[11px] font-mono-code uppercase text-gray-400 block mt-1">Championship Titles</span>
          </div>
          <div className="bg-white/5 p-5 rounded-3xl border border-white/10 text-center backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-indigo-400">100%</span>
            <span className="text-[11px] font-mono-code uppercase text-gray-400 block mt-1">Team Commitment</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-amber-500 text-black font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            All Achievements ({SPORTS_ACHIEVEMENTS.length})
          </button>
          <button
            onClick={() => setFilter('champions')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'champions'
                ? 'bg-amber-500 text-black font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Champions Only
          </button>
          <button
            onClick={() => setFilter('multi')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'multi'
                ? 'bg-amber-500 text-black font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Multi-Time Winners
          </button>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredList.map((item, index) => (
            <div
              key={index}
              id={`achievement-card-${index}`}
              className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all duration-300 shadow-xl backdrop-blur-md group relative flex flex-col justify-between"
            >
              {/* Card Top Accent */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#050508]/80 border border-white/10 group-hover:scale-110 transition-transform">
                    {getSportIcon(item.sport)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {item.result}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  {item.sport}
                </h3>

                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  {item.tournament}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-gray-400">
                <span className="uppercase">{item.category}</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Trophy className="w-3 h-3" /> Winner
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
