import { useState } from 'react';
import { 
  FolderGit2, 
  ShieldAlert, 
  Database, 
  Users, 
  Bell, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Code2, 
  Info,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import QuickAidModal from './QuickAidModal';

export default function Projects() {
  const [isQuickAidModalOpen, setIsQuickAidModalOpen] = useState(false);
  const quickAid = PROJECTS.find(p => p.id === 'quick-aid')!;
  const studentSys = PROJECTS.find(p => p.id === 'student-management-system')!;

  return (
    <section id="projects" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 flex items-center gap-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 / FEATURED WORK</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Academic & Team Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            Real software systems built collaboratively and individually to solve campus challenges and explore object-oriented design.
          </p>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full mt-3"></div>
        </div>

        {/* 1. FEATURED PROJECT: QUICK AID */}
        <div className="mb-12">
          <div className="bg-white/5 rounded-3xl border border-blue-500/30 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)] relative group backdrop-blur-md">
            
            {/* Top glowing accent line */}
            <div className="h-1 w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side: Project Info */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Sparkles className="w-3.5 h-3.5" /> Featured Project
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code uppercase bg-white/5 text-gray-300 border border-white/10">
                      {quickAid.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code uppercase bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                      Campus Safety Network
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-blue-300 transition-colors">
                      {quickAid.title}
                    </h3>
                    <p className="text-gray-400 font-medium text-base mt-1">
                      {quickAid.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {quickAid.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2.5 pt-1">
                    {quickAid.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Users Matrix */}
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block mb-2">
                      User Personas Served:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {quickAid.users?.map((u, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            u.includes('Primary')
                              ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 font-semibold'
                              : 'bg-white/5 text-gray-300 border border-white/10'
                          }`}
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      id="quick-aid-details-btn"
                      onClick={() => setIsQuickAidModalOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all cursor-pointer group/btn"
                    >
                      <span>Explore Architecture & Details</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

                {/* Right side: Interactive UI Showcase Mockup */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl bg-[#050508]/90 border border-white/10 p-5 sm:p-6 shadow-2xl relative space-y-4">
                    
                    {/* Simulated App Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-xl bg-blue-600/20 text-blue-400">
                          <ShieldAlert className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-white font-display">
                          Quick Aid Portal
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-[10px] font-mono-code uppercase text-gray-400">Campus Active</span>
                      </div>
                    </div>

                    {/* Simulated Issue Submission Card */}
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono-code text-blue-400 font-semibold">Incident Ticket #QA-204</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[9px] font-mono-code uppercase border border-amber-500/20">Pending Review</span>
                      </div>
                      <p className="text-xs text-gray-200 font-medium">
                        University Campus Safety & Facility Report
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-mono-code text-gray-400 pt-1">
                        <span>Role: Registered Student</span>
                        <span>•</span>
                        <span>Direct Admin Dispatch</span>
                      </div>
                    </div>

                    {/* Simulated Notification System */}
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-400">
                        <Bell className="w-3.5 h-3.5" />
                        <span className="text-xs font-semibold">Automated Notification Hub</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        Instant system alert dispatched to department authorities and status updates relayed back to the reporter.
                      </p>
                    </div>

                    {/* Campus Network Note */}
                    <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-center">
                      <p className="text-[11px] text-blue-300 font-mono-code">
                        🏛️ Built specifically for university community environments
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 2. OTHER PROJECT: STUDENT MANAGEMENT SYSTEM */}
        <div className="mt-8">
          <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                    {studentSys.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono-code uppercase bg-white/5 text-gray-400 border border-white/10">
                    Academic Software Project
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {studentSys.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium mt-0.5">
                    {studentSys.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {studentSys.description}
                </p>

                {/* Main Concepts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {studentSys.concepts?.map((concept, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Architecture Mini-card */}
              <div className="lg:col-span-4 p-5 rounded-3xl bg-[#050508]/80 border border-white/10 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-white/10">
                  <Database className="w-4 h-4" />
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider">
                    Core Data Flow
                  </span>
                </div>
                <div className="space-y-2 text-xs font-mono-code">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    [1] Student Record Input (ID, Name, Meta)
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-indigo-300">
                    [2] OOP Structure & Record Persistence
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-emerald-300">
                    [3] Query & Filter-Based Retrieval
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Quick Aid Details Modal */}
      <QuickAidModal
        isOpen={isQuickAidModalOpen}
        onClose={() => setIsQuickAidModalOpen(false)}
      />
    </section>
  );
}
