import { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Layers, 
  Sparkles, 
  Check, 
  Cpu, 
  Terminal, 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Globe, 
  GitBranch,
  Laptop
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case 'C':
      case 'C++':
      case 'Java':
      case 'Python':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'Flutter':
      case 'Dart':
      case 'Android Studio':
        return <Smartphone className="w-4 h-4 text-indigo-400" />;
      case 'MySQL':
      case 'Supabase':
      case 'Basic Database Concepts':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Microsoft Word':
        return <FileText className="w-4 h-4 text-blue-400" />;
      case 'Microsoft Excel':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
      case 'Microsoft PowerPoint':
        return <Presentation className="w-4 h-4 text-amber-400" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'Software Development':
      case 'Modern Development Practices':
        return <GitBranch className="w-4 h-4 text-purple-400" />;
      default:
        return <Check className="w-4 h-4 text-blue-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL SKILLSET</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            An honest overview of programming languages, development toolsets, and databases I've worked with through university coursework and projects.
          </p>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="skill-filter-all"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            All Areas ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              id={`skill-filter-${category.id}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span>{category.title}</span>
              <span className="text-[10px] opacity-75">({category.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={`skill-category-${category.id}`}
              className="bg-white/5 hover:bg-white/[0.08] p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-105 group-hover:bg-blue-600/30 transition-all">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-gray-400">
                        {category.skills.length} core items
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Individual Skill Badges & descriptions */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-white/5 border border-white/5 group/item hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {getSkillIcon(skill.name)}
                          <span className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono-code uppercase text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                          Active
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 pl-6 leading-tight">
                        {skill.levelDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code uppercase text-gray-400">
                <span>Academic & Practical</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">Active Focus →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine growth mindset */}
        <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 text-center max-w-3xl mx-auto backdrop-blur-md">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            💡 <strong className="text-white">Honest Skill Representation:</strong> I believe in genuine competence over inflated metrics. As a 4th-year student, I am continuously practicing foundational architecture, writing clean code, and broadening my hands-on project experience.
          </p>
        </div>

      </div>
    </section>
  );
}
