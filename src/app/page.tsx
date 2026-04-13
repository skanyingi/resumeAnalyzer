import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import MaterialIcon from '@/components/ui/MaterialIcon';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="pt-24 flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-8 py-20 lg:py-32 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-wider">
                AI-Powered Career Intelligence
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] font-headline">
                Architect Your <span className="text-primary italic">Perfect</span> Career Path.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
                The Intelligent Architect uses advanced editorial-grade AI to dissect, analyze, and optimize your professional narrative for the world&apos;s most competitive roles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard" className="bg-primary bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all active:scale-95 text-center">
                  Get Started Free
                </Link>
                <button className="border border-outline-variant/30 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-low transition-all">
                  View Sample Report
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium font-body">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-200 overflow-hidden">
                      <img 
                        src={`https://lh3.googleusercontent.com/aida-public/AB6AXuC${i === 1 ? '2fkXR4AlzKNjpQ7A-L_NfPKVF7neD2twvF5fDcF_gYy9fk822Rvcti0kqjdQmXx1eKNo0ch1uunBezd2jyFRgZ-ul_Sen6WmWn4Ex7RyNzsHcT2BsVtJGVfDR5IvptEOdFaMgl0-6VatowV7kyIShwMqjzEcFnxblEO6Bnji8nXac-bk15YltpdIuOtqEXWFoyLQtHFwN2D9X_SfACnr165a7LIFV1zYk0qwMiObW5ZeTf8qBIqPCHEhhvxROEWtU7PX4UqV4oQQ' : i === 2 ? '3mGCbd3gia59C4GuzdNdq9C-vSP7slC2mju7amNIzm7naUUki2nbnI8QZBDuLnW0sjYKTETXkzceonpWcf7KL1nX17isFD7dyolIDLtmLhC8vD_bXzBRxKUipftZFqlqaimmHLHbie4Ac9IE6sWZtMYhJpt1079Qm5RLPUR3UJma2jM7K2Yw7N37nreR0QyDwgKV6ZDwY-fNTq7JvaYc2cGJL7T7OZU_8mzap6_xDIkt8hwwdMSH7uSuEFS_U7pJrZ6Sxi_il5Co' : 'Avi-FWQuC3av7tm5xvpZKK_s21B4-5YSTRrlg9Zc3TUvsHGtnSVXhee0r6jMXi9bPSY2p4Xp9S24fpTOJYPZ7acqvhO7AxSG-XHvXB0YeJn6emluyS6flYI_mt-yq0Y_EuvkN9lcnDnwgbHH8PxSaMEao_h5dQHCvNbKcoo7A4DqpOrqfGCffudZCeUtkprkJlMMdpDB8MbFM8vIggmw3X17MBHiU47izNTYhegVcKho51gk2ocKJD8mTFpKOis6CuJB0u9Jh-Mio'}`} 
                        alt="User" 
                      />
                    </div>
                  ))}
                </div>
                <span>Trusted by 10,000+ top-tier candidates</span>
              </div>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative bg-surface-container-lowest p-6 rounded-[2rem] shadow-2xl border border-outline-variant/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                      <MaterialIcon icon="description" className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm font-headline">resume_final_v2.pdf</h4>
                      <p className="text-[10px] text-slate-500 font-label">Analyzed 2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary font-bold">
                    <MaterialIcon icon="check_circle" className="text-sm" fill />
                    <span className="text-xs font-label">Optimized</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 font-label">Architectural Score</p>
                      <h2 className="text-6xl font-extrabold text-primary font-headline">88</h2>
                    </div>
                    <div className="w-32 h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="w-[88%] h-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container-low p-4 rounded-xl">
                      <p className="text-[10px] font-bold text-slate-500 uppercase mb-2 font-label">Impact Keywords</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed-variant rounded text-[9px] font-bold">Scalability</span>
                        <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed-variant rounded text-[9px] font-bold">Leadership</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl">
                      <p className="text-[10px] font-bold text-slate-500 uppercase mb-2 font-label">Structure</p>
                      <div className="flex items-center gap-2">
                        <div className="w-full h-1.5 bg-surface-container-high rounded-full">
                          <div className="w-[92%] h-full bg-tertiary"></div>
                        </div>
                        <span className="text-[10px] font-bold">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight font-headline">Precision Insight Tools</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto font-body">Our multi-layered analysis engine provides clinical critiques across three core dimensions of your professional brand.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 flex flex-col justify-between group hover:shadow-lg transition-all">
                <div className="max-w-md space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <MaterialIcon icon="psychology" fill />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">AI-Driven Strategic Insights</h3>
                  <p className="text-on-surface-variant leading-relaxed font-body">Go beyond simple grammar checks. Our AI understands the &quot;why&quot; behind your career trajectory, identifying hidden strengths and strategic narrative gaps that humans often miss.</p>
                </div>
                <div className="mt-12 flex items-center text-primary font-bold gap-2 cursor-pointer group-hover:gap-4 transition-all font-body">
                  <span>Explore Strategic Engine</span>
                  <MaterialIcon icon="arrow_forward" />
                </div>
              </div>
              <div className="bg-primary p-8 rounded-[2rem] text-on-primary flex flex-col justify-between overflow-hidden relative shadow-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <MaterialIcon icon="bolt" className="text-8xl" />
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MaterialIcon icon="terminal" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">Skill Extraction</h3>
                  <p className="text-blue-100/80 leading-relaxed font-body">Automatically map your experiences to industry-standard taxonomies. Ensure your technical and soft skills are visible to both ATS systems and recruiters.</p>
                </div>
                <div className="mt-8 relative z-10">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                    <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                    <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-8 rounded-[2rem] text-on-secondary flex flex-col justify-between shadow-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MaterialIcon icon="edit_note" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">Editorial Precision</h3>
                  <p className="text-secondary-fixed/70 leading-relaxed font-body">Line-by-line improvement suggestions focused on impact-oriented language and executive-level vocabulary.</p>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 flex items-center gap-12 overflow-hidden hover:shadow-lg transition-all">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold font-headline">Benchmarking Analysis</h3>
                  <p className="text-on-surface-variant leading-relaxed font-body">Compare your credentials against successful candidates at Fortune 500 companies to see exactly where you stand.</p>
                  <button className="text-primary font-bold underline underline-offset-4 decoration-primary-container/30 font-body">View Benchmarking Model</button>
                </div>
                <div className="hidden lg:block w-48 shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTVtcgFTE2egsMvUD0zpp0pbX3sQtC_L0CgS_OXfnU3i9z8H5IqXyc6Yv_AB1EHqxaK6uC4f15uBgmpxRLgTIRYJysRm4RIBt9AZgYcaXsyC2FoCm_4t4zf5PrQftvZgQX6z-sKq25ppTKzA25U68O2dSORqGoq5U510bA4Lar1tbMIfJMY5I4v4o_tnRe3rm2Mpa825HifiULui90Wsi5_cGGzCue_YWEXI5daXoK2iT-pGWTXDwoMhp-pdGV0Iv0UhnYXE5FG8I" alt="Chart" className="w-full grayscale opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight font-headline">The Curation Workflow</h2>
              <p className="text-on-surface-variant leading-relaxed font-body">A simple three-step process to transform your resume from a document into a powerful career asset.</p>
              <div className="pt-8">
                <div className="p-8 bg-surface-container rounded-[2rem] border-l-4 border-primary shadow-sm">
                  <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest font-label">Active Phase</p>
                  <p className="text-on-surface font-medium italic font-body">&quot;Designing your future through data-driven refinement.&quot;</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                { step: '01', title: 'Secure Upload', desc: 'Drop your PDF or DOCX file into our encrypted portal. We respect your privacy and never sell your professional data.' },
                { step: '02', title: 'Architectural Scan', desc: 'Our AI parses your content, looking for quantitative impact, structural flow, and industry relevance.' },
                { step: '03', title: 'Guided Revision', desc: 'Receive a detailed dashboard with specific, actionable edits to boost your score and land more interviews.' },
                { step: '04', title: 'Global Ready', desc: 'Download your optimized resume and apply with confidence to any top-tier organization worldwide.', highlight: true }
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className={`text-6xl font-bold ${item.highlight ? 'text-primary/20' : 'text-surface-container-high'} font-headline`}>{item.step}</div>
                  <h4 className="text-xl font-bold font-headline">{item.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 pb-24">
          <div className="max-w-7xl mx-auto bg-primary-container rounded-[3rem] p-12 lg:p-20 text-center space-y-8 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-on-primary-container tracking-tighter relative z-10 font-headline">Ready to build your breakthrough?</h2>
            <p className="text-xl text-on-primary-container/80 max-w-2xl mx-auto relative z-10 font-body">Join thousands of professionals who have secured roles at Google, Meta, and McKinsey using our architectural insights.</p>
            <div className="pt-4 relative z-10">
              <Link href="/dashboard" className="inline-block bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-surface-bright transition-all shadow-xl hover:-translate-y-1 font-body">
                Start Your Analysis Now
              </Link>
              <p className="text-on-primary-container/60 text-sm mt-6 font-label">No credit card required. First scan is completely free.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
