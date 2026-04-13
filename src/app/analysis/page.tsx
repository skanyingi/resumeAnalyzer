import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';
import Footer from '@/components/ui/Footer';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function AnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar isDashboard />
      
      <div className="flex flex-1 pt-20">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-12 min-h-screen">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Hero Analysis Section */}
            <header className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 lg:col-span-5 space-y-6">
                <h1 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface">Curated<br/><span className="text-primary">Performance Insights</span></h1>
                <p className="text-lg text-on-surface-variant leading-relaxed max-w-md font-body">Our AI curation engine has meticulously reviewed your profile against industry benchmarks for Senior Creative roles.</p>
              </div>
              <div className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 editorial-gradient opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle className="text-surface-container-high" cx="80" cy="80" fill="transparent" r="72" stroke="currentColor" strokeWidth="6"></circle>
                      <circle className="text-primary" cx="80" cy="80" fill="transparent" r="72" stroke="currentColor" strokeDasharray="452.39" strokeDashoffset="113.1" strokeWidth="6"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-5xl font-headline font-extrabold">8.5</span>
                      <span className="text-[10px] font-label uppercase tracking-widest text-slate-500 font-bold">Overall Score</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-xs font-label uppercase tracking-[0.15em] text-secondary font-bold mb-4">Benchmark Comparison</h2>
                    <div className="space-y-4">
                      {[
                        { label: 'Industry Average', score: '7.2', width: '72%', color: 'bg-outline-variant' },
                        { label: 'Top Tier candidates', score: '8.9', width: '89%', color: 'bg-secondary' }
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium mb-1 font-body">
                            <span>{item.label}</span>
                            <span>{item.score}</span>
                          </div>
                          <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} ${item.width}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Skills & Improvement Grid */}
            <div className="grid grid-cols-12 gap-8">
              {/* Extracted Skills */}
              <section className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                <h3 className="text-sm font-label font-bold uppercase tracking-widest mb-8 flex items-center text-slate-500">
                  <MaterialIcon icon="category" className="mr-2 scale-75" /> Extracted Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'User Experience', color: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
                    { label: 'Product Strategy', color: 'bg-primary-fixed text-on-primary-fixed-variant' },
                    { label: 'Design Systems', color: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
                    { label: 'Stakeholder Management', color: 'bg-slate-100 text-slate-700' },
                    { label: 'Prototyping', color: 'bg-slate-100 text-slate-700' },
                    { label: 'Agile Methods', color: 'bg-slate-100 text-slate-700' },
                    { label: 'User Testing', color: 'bg-slate-100 text-slate-700' },
                    { label: 'Figma Mastery', color: 'bg-slate-100 text-slate-700' }
                  ].map((skill, idx) => (
                    <span key={idx} className={`px-4 py-2 ${skill.color} rounded-full text-xs font-semibold font-body`}>
                      {skill.label}
                    </span>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-surface-container-low rounded-xl">
                  <p className="text-[10px] uppercase font-bold tracking-tighter text-slate-400 mb-1 font-label">Missing Key Skill</p>
                  <p className="text-xs font-medium text-error font-body">Conversion Rate Optimization (CRO)</p>
                </div>
              </section>

              {/* Top 3 Improvement Suggestions */}
              <section className="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                <h3 className="text-sm font-label font-bold uppercase tracking-widest mb-8 flex items-center text-slate-500">
                  <MaterialIcon icon="auto_awesome" className="mr-2 scale-75" /> Top 3 Improvements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Quantify Impact', icon: 'bolt', color: 'text-secondary', borderColor: 'bg-secondary-fixed', hoverColor: 'group-hover:bg-secondary', desc: 'Instead of &quot;Led team,&quot; use &quot;Managed a team of 12 to deliver 15% revenue growth.&quot;', action: 'APPLY NOW' },
                    { title: 'Action Verbs', icon: 'psychology_alt', color: 'text-primary', borderColor: 'bg-primary-fixed', hoverColor: 'group-hover:bg-primary', desc: 'Strengthen your bullet points by starting with Orchestrated, Scaled, or Navigated.', action: 'SEE LIST' },
                    { title: 'ATS Optimization', icon: 'target', color: 'text-tertiary', borderColor: 'bg-tertiary-fixed', hoverColor: 'group-hover:bg-tertiary', desc: 'Integrate "Cross-functional Leadership" naturally within your first 100 words.', action: 'KEYWORD MAP' }
                  ].map((item, idx) => (
                    <div key={idx} className="relative group cursor-pointer">
                      <div className={`absolute -left-4 top-0 h-full w-1 ${item.borderColor} rounded-full ${item.hoverColor} transition-colors`}></div>
                      <div className="space-y-3">
                        <MaterialIcon icon={item.icon} className={item.color} fill />
                        <h4 className="font-bold text-sm text-primary font-headline">{item.title}</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed font-body">{item.desc}</p>
                        <button className={`text-[10px] font-bold ${item.color.replace('text-', 'text-')} flex items-center group-hover:translate-x-1 transition-transform font-label`}>
                          {item.action} <MaterialIcon icon="chevron_right" className="text-[12px] ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Work Experience Narrative */}
            <section id="experience" className="bg-surface-container-low rounded-3xl overflow-hidden shadow-sm">
              <div className="px-8 py-6 border-b border-outline-variant/10 bg-surface-container-high flex justify-between items-center">
                <h3 className="text-sm font-label font-bold uppercase tracking-widest text-slate-600">Work Experience Narrative</h3>
                <span className="text-xs font-semibold text-primary px-3 py-1 bg-white rounded-lg shadow-sm font-body">Strong Continuity</span>
              </div>
              <div className="p-8 grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-4 space-y-4">
                  <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm">
                    <p className="text-3xl font-headline font-bold text-primary">12+</p>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-tighter font-label">Years of Seniority</p>
                  </div>
                  <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm">
                    <div className="flex items-center space-x-2 text-tertiary mb-1">
                      <MaterialIcon icon="trending_up" className="text-sm" fill />
                      <span className="text-xs font-bold font-body">Consistently Upskilling</span>
                    </div>
                    <p className="text-xs text-on-surface-variant font-body">Profile shows career advancement every 2.4 years on average.</p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 space-y-8">
                  <div className="relative pl-8 border-l-2 border-slate-200 space-y-12">
                    <div className="relative">
                      <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-slate-100"></div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-base text-primary font-headline">Global Design Lead</h4>
                          <p className="text-sm font-medium text-slate-600 font-body">Tech Giants Inc. | 2019 – Present</p>
                        </div>
                        <span className="text-[10px] font-bold text-tertiary px-2 py-1 bg-tertiary-fixed rounded uppercase font-label">High Impact</span>
                      </div>
                      <p className="mt-3 text-sm text-on-surface-variant leading-relaxed font-body">Successfully managed cross-continental teams. The AI identified strong leadership metrics but noted a lack of specific budget management details which are critical for Executive roles.</p>
                    </div>
                    <div className="relative opacity-60">
                      <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100"></div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-base text-primary font-headline">Senior Product Designer</h4>
                          <p className="text-sm font-medium text-slate-600 font-body">Creative Solutions Co. | 2015 – 2019</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-on-surface-variant leading-relaxed font-body">Strong focus on execution and system architecture. Experience aligns well with the &quot;Technical Breadth&quot; requirements of your target roles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
