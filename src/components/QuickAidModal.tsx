import { X, ShieldAlert, Bell, Users, CheckCircle, FileText, University, AlertTriangle } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface QuickAidModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickAidModal({ isOpen, onClose }: QuickAidModalProps) {
  if (!isOpen) return null;

  const quickAid = PROJECTS.find(p => p.id === 'quick-aid');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="quick-aid-modal"
        className="relative w-full max-w-3xl bg-[#050508] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Featured Project Architecture</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Quick Aid — Campus Safety Network
          </h3>
          <p className="text-sm text-gray-400">
            {quickAid?.type} • Designed for university community security and efficient incident resolution.
          </p>
        </div>

        {/* Overview Box */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6 space-y-3">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-400">
            Project Overview
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            {quickAid?.description}
          </p>
        </div>

        {/* User Role Matrix */}
        <div className="mb-6 space-y-3">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-300 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>Target User Groups</span>
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-center">
              <span className="text-xs font-bold text-blue-300 block">Registered Students</span>
              <span className="text-[9px] text-blue-400 font-mono-code uppercase">Primary Users</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-xs font-bold text-gray-200 block">Faculty / Teachers</span>
              <span className="text-[9px] text-gray-400 font-mono-code uppercase">Campus Community</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-xs font-bold text-gray-200 block">Campus Staff</span>
              <span className="text-[9px] text-gray-400 font-mono-code uppercase">Support & Facilities</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-xs font-bold text-gray-200 block">University Admin</span>
              <span className="text-[9px] text-gray-400 font-mono-code uppercase">Resolution Authority</span>
            </div>
          </div>
        </div>

        {/* Key Features Breakdown */}
        <div className="space-y-3 mb-6">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-300 flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Core Modules & Workflow</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="p-2 w-fit rounded-xl bg-blue-600/20 text-blue-400">
                <FileText className="w-4 h-4" />
              </div>
              <h5 className="text-xs font-bold text-white">Problem & Issue Reporting</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Allows students and campus members to document problems, categorize issues, and submit emergency or maintenance tickets.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="p-2 w-fit rounded-xl bg-indigo-600/20 text-indigo-400">
                <Bell className="w-4 h-4" />
              </div>
              <h5 className="text-xs font-bold text-white">Notification System</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Alerts stakeholders and provides automated notifications to users when problem tickets are acknowledged or resolved.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="p-2 w-fit rounded-xl bg-purple-600/20 text-purple-400">
                <University className="w-4 h-4" />
              </div>
              <h5 className="text-xs font-bold text-white">Campus Assistance</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Direct channel to university authority personnel without relying on complex external dependencies or GPS tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Notice */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-gray-400 text-xs mb-6">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-gray-200">Technical Scope Note:</strong> This project intentionally relies on direct campus categorization and university credentials for reporting rather than live GPS tracking, prioritizing data privacy and rapid institutional deployment.
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
