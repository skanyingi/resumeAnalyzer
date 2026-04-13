import React from 'react';
import Link from 'next/link';
import MaterialIcon from './MaterialIcon';

interface NavbarProps {
  className?: string;
  isDashboard?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ className = '', isDashboard = false }) => {
  return (
    <header className={`fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl transition-all duration-300 ease-in-out border-b border-outline-variant/10 ${className}`}>
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter text-blue-900 font-headline">
          The Intelligent Architect
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-headline text-sm font-semibold tracking-tight">
          <Link href="/dashboard" className="text-blue-900 border-b-2 border-blue-900 pb-1">Dashboard</Link>
          <Link href="/analysis" className="text-slate-500 hover:text-blue-800 transition-colors">Analysis</Link>
          <Link href="/comparison" className="text-slate-500 hover:text-blue-800 transition-colors">Comparison</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex space-x-2">
            <button className="p-2 hover:bg-slate-200/50 rounded-lg transition-colors">
              <MaterialIcon icon="notifications" className="text-slate-500" />
            </button>
            <button className="p-2 hover:bg-slate-200/50 rounded-lg transition-colors">
              <MaterialIcon icon="settings" className="text-slate-500" />
            </button>
          </div>
          <Link href="/dashboard" className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm">
            Upload Resume
          </Link>
          {isDashboard && (
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container ml-2">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApUCqPRl9yozlHLwob2vzLRYlOvhj2Ncg66QAZ6XGorDHoFIyDpzRhiZJIzVNsT2FPSLt8jurdXyJuf8L_g0_v7RdGKuKzsXh6-VPOEYFc7RffR6XBNMosIuzc8MQcqn3YstMJE1Dv322KhHZpR8wVT3CdpdECDhCnZrpCFMqUt339bcwcQQImnk3YwriX0jUB_8S18gShwmWC9ogI3KgtTC_3sO_KkIJuud-ZVCNktivdwd759HfhoAM6LETfTKpb1H2URj-yVdo" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
