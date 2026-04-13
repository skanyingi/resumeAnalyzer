import React from 'react';
import Link from 'next/link';
import MaterialIcon from './MaterialIcon';

const Sidebar: React.FC = () => {
  return (
    <aside className="h-full w-64 fixed left-0 border-r border-outline-variant/10 flex flex-col h-screen py-8 pl-4 bg-slate-50 mt-[72px] z-40">
      <div className="px-4 mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-12 bg-surface-container-high rounded-lg flex items-center justify-center overflow-hidden">
            <MaterialIcon icon="description" className="text-primary" />
          </div>
          <div>
            <h3 className="text-xs font-label uppercase tracking-widest text-slate-500 font-bold">Current Analysis</h3>
            <p className="text-sm font-bold text-primary truncate w-32">Senior Product Designer</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-2 pr-4">
        <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-3 bg-white text-blue-900 rounded-l-xl border-l-4 border-blue-900 shadow-sm transition-transform duration-200">
          <MaterialIcon icon="dashboard" />
          <span className="font-inter text-sm font-medium">Overview</span>
        </Link>
        <Link href="/analysis" className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-200 hover:translate-x-1 transition-transform duration-200">
          <MaterialIcon icon="psychology" />
          <span className="font-inter text-sm font-medium">Skill Gaps</span>
        </Link>
        <Link href="/analysis#experience" className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-200 hover:translate-x-1 transition-transform duration-200">
          <MaterialIcon icon="work" />
          <span className="font-inter text-sm font-medium">Experience</span>
        </Link>
        <Link href="/comparison" className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-200 hover:translate-x-1 transition-transform duration-200">
          <MaterialIcon icon="description" />
          <span className="font-inter text-sm font-medium">Final Review</span>
        </Link>
      </nav>
      
      <div className="mt-auto pr-4 pt-8 border-t border-slate-100/50 space-y-4">
        <Link href="#" className="flex items-center space-x-3 px-4 py-2 text-slate-500 hover:text-primary transition-colors">
          <MaterialIcon icon="help_outline" />
          <span className="text-xs font-medium">Help Center</span>
        </Link>
        <button className="w-full editorial-gradient text-white py-3 rounded-xl font-bold text-sm scale-95 active:scale-100 transition-transform shadow-lg">
          Export PDF
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
