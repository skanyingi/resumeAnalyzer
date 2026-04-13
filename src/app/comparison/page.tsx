import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';
import Footer from '@/components/ui/Footer';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function ComparisonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar isDashboard />
      
      <div className="flex flex-1 pt-20">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 pt-[10px] pb-12 px-8">
          <div className="max-w-6xl mx-auto mt-8">
            {/* Page Header */}
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-2xl">
                <span className="font-inter text-xs tracking-wide uppercase font-bold text-secondary mb-2 block font-label">Resume Evolution</span>
                <h1 className="text-4xl font-extrabold text-on-surface mb-4 font-headline">Compare & Finalize</h1>
                <p className="text-slate-600 font-inter leading-relaxed font-body">Review the structural improvements and semantic enhancements made by our AI curator. Once satisfied, export your polished dossier in multiple professional formats.</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 border border-outline-variant/30 rounded-full font-inter text-sm font-semibold hover:bg-surface-container transition-colors font-body">
                  <MaterialIcon icon="terminal" className="text-primary" />
                  Download as Markdown
                </button>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              {/* Original (Left) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-8 bg-slate-300 rounded-full"></div>
                  <h2 className="text-lg font-bold font-manrope text-slate-500 uppercase tracking-tight">Original Version</h2>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 min-h-[600px] relative overflow-hidden shadow-sm">
                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <span className="text-9xl font-black rotate-[-45deg] font-headline">LEGACY</span>
                  </div>
                  <div className="relative z-10 space-y-8 font-inter text-on-surface-variant">
                    <section>
                      <div className="w-1/3 h-6 bg-slate-200 rounded mb-4"></div>
                      <div className="space-y-3">
                        <p className="text-sm border-l-4 border-slate-200 pl-4 py-1 italic font-body">Responsible for designing interfaces and working with developers to build apps.</p>
                      </div>
                    </section>
                    <section>
                      <div className="w-1/2 h-6 bg-slate-200 rounded mb-4"></div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="h-4 w-full bg-slate-100 rounded"></div>
                          <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                          <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
                        </div>
                        <ul className="list-disc list-inside text-xs space-y-2 font-body">
                          <li>Fixed many bugs in the existing UI system.</li>
                          <li>Communicated with cross-functional teams.</li>
                          <li>Helped with the rebranding of the product.</li>
                        </ul>
                      </div>
                    </section>
                    <section>
                      <div className="w-1/4 h-6 bg-slate-200 rounded mb-4"></div>
                      <div className="flex flex-wrap gap-2">
                        {['Photoshop', 'HTML/CSS', 'Figma'].map(skill => (
                          <span key={skill} className="px-2 py-1 bg-slate-100 text-[10px] rounded font-label">{skill}</span>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/* AI Improved (Right) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <h2 className="text-lg font-bold font-manrope text-primary uppercase tracking-tight">AI-Improved Dossier</h2>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-10 border border-primary/5 min-h-[600px] shadow-2xl shadow-blue-900/5 relative">
                  <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                    <MaterialIcon icon="auto_awesome" className="text-sm" fill />
                    <span className="text-[10px] font-bold uppercase tracking-wider font-label">Optimized for ATS</span>
                  </div>
                  <div className="space-y-12 font-inter text-on-surface">
                    <header className="border-b border-outline-variant/10 pb-8">
                      <h3 className="text-3xl font-black font-manrope text-primary tracking-tighter mb-1 uppercase">ALEX RIVERA</h3>
                      <p className="text-secondary font-bold text-sm tracking-widest uppercase font-headline">Senior Product Designer & Systems Strategist</p>
                    </header>
                    <section className="relative group">
                      <div className="absolute -left-6 top-0 bottom-0 w-1 bg-secondary-fixed rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <p className="text-base leading-relaxed font-medium font-body">
                        Strategic Product Designer with over 8 years of experience in <span className="bg-secondary-container/30 px-1 rounded">scaling design systems</span> and spearheading high-conversion digital ecosystems. Expert at bridging the gap between <span className="bg-secondary-container/30 px-1 rounded">architectural complexity</span> and user-centric simplicity.
                      </p>
                    </section>
                    <section className="space-y-8">
                      <h4 className="font-manrope font-extrabold text-xs uppercase tracking-[0.2em] text-slate-400">Professional Impact</h4>
                      <div className="space-y-8">
                        {[
                          { title: 'Led Re-Architecture of Enterprise Design System', desc: 'Systematized 1,200+ components, resulting in a ', highlight: '40% reduction', suffix: ' in development hand-off time and unified branding across 4 flagship products.' },
                          { title: 'Cross-Functional Strategy Optimization', desc: 'Spearheaded collaborative workshops between Engineering and Product, increasing ', highlight: 'Agile sprint velocity by 25%', suffix: ' and improving internal stakeholder NPS scores.' }
                        ].map((item, idx) => (
                          <div key={idx} className="relative group">
                            <div className="absolute -left-6 top-1">
                              <MaterialIcon icon="add_circle" className="text-secondary text-sm" />
                            </div>
                            <h5 className="text-sm font-bold mb-1 font-headline">{item.title}</h5>
                            <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                              {item.desc}<span className="text-tertiary font-bold">{item.highlight}</span>{item.suffix}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                    <section>
                      <h4 className="font-manrope font-extrabold text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">Semantic Core Skills</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-primary shadow-sm">
                          <p className="text-[10px] uppercase font-bold text-primary mb-1 font-label">Systems Architecture</p>
                          <p className="text-xs font-semibold font-body">Atomic Design, Component Libraries</p>
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-secondary shadow-sm">
                          <p className="text-[10px] uppercase font-bold text-secondary mb-1 font-label">UX Strategy</p>
                          <p className="text-xs font-semibold font-body">Heuristic Analysis, User Testing</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            {/* Scoring Insights Bar */}
            <div className="bg-primary text-white rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="40" cy="40" fill="transparent" r="36" stroke="rgba(255,255,255,0.1)" strokeWidth="8"></circle>
                    <circle cx="40" cy="40" fill="transparent" r="36" stroke="#a3f69c" strokeDasharray="226" strokeDashoffset="45" strokeWidth="8"></circle>
                  </svg>
                  <span className="text-2xl font-black font-headline">92</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-manrope">Significant Uplift Detected</h4>
                  <p className="text-blue-200 text-sm font-body">Your ATS score improved by +34 points. Keywords are now 98% aligned with top-tier vacancies.</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: 'Action Verbs', value: '18 → 32' },
                  { label: 'Quantifiable Data', value: '2 → 14' },
                  { label: 'Clarity', value: 'Low → Expert', noBorder: true }
                ].map((stat, idx) => (
                  <div key={idx} className={`text-center px-6 ${stat.noBorder ? '' : 'border-r border-white/10'}`}>
                    <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold mb-1 font-label">{stat.label}</p>
                    <p className="text-lg font-bold font-headline">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
