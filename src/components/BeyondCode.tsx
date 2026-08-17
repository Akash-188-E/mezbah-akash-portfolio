import { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Shield, 
  Zap, 
  Target, 
  Disc, 
  CircleDot, 
  Grid, 
  Waves, 
  Video, 
  Film, 
  Compass, 
  Dumbbell, 
  Terminal,
  Heart
} from 'lucide-react';
import { BEYOND_CODE_INTERESTS } from '../data/portfolioData';

export default function BeyondCode() {
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'secondary' | 'creative' | 'lifestyle' | 'technology'>('all');

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-orange-400" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-blue-400" />;
      case 'CircleDot':
        return <CircleDot className="w-5 h-5 text-indigo-400" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-purple-400" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-cyan-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-rose-400" />;
      case 'Film':
        return <Film className="w-5 h-5 text-pink-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-lime-400" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredInterests = activeTab === 'all'
    ? BEYOND_CODE_INTERESTS
    : BEYOND_CODE_INTERESTS.filter(item => item.category === activeTab);

  return (
    <section id="beyond-code" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-2 flex items-center gap-2">
            <Heart className="w-3.5 h-3.5" />
            <span>07 / PERSONAL PASSIONS</span>
          </div>
          <h2
            id="beyond-code-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Beyond Code
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mt-3 font-normal">
            "When I'm away from my screen, I enjoy sports, travelling, creating visual content, and staying active."
          </p>
          <div className="w-12 h-0.5 bg-purple-500 rounded-full mt-3"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            All Passions ({BEYOND_CODE_INTERESTS.length})
          </button>
          <button
            onClick={() => setActiveTab('primary')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'primary'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Primary Sports
          </button>
          <button
            onClick={() => setActiveTab('secondary')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'secondary'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Indoor & Court
          </button>
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'creative'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Creative Media
          </button>
          <button
            onClick={() => setActiveTab('lifestyle')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'lifestyle'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Fitness & Travel
          </button>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredInterests.map((interest, index) => (
            <div
              key={index}
              id={`beyond-code-item-${index}`}
              className="bg-white/5 p-5 rounded-3xl border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 shadow-md group flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-2xl bg-[#050508]/80 border border-white/10 group-hover:scale-110 transition-transform">
                    {getInterestIcon(interest.iconName)}
                  </div>
                  <span className="text-[9px] font-mono-code uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {interest.category}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                  {interest.name}
                </h3>

                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {interest.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-gray-500">
                <span>Active Pursuit</span>
                <span className="text-purple-400">●</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
