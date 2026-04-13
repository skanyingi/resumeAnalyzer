import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 w-full py-12 px-8 border-t border-outline-variant/10 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="font-headline font-bold text-blue-900 text-lg">
          The Intelligent Architect
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-inter text-xs tracking-wide uppercase font-medium">
          <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors">Terms of Service</Link>
          <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors">AI Ethics</Link>
          <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors">Contact</Link>
        </div>
        <div className="text-slate-500 text-[10px] font-medium opacity-80 uppercase tracking-widest">
          © 2024 The Intelligent Architect. Editorial Precision in Career Growth.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
