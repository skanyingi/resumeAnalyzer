import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';
import Footer from '@/components/ui/Footer';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar isDashboard />
      
      <div className="flex flex-1 pt-20">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-8">
          <div className="max-w-5xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline mb-2">Resume Intelligence Engine</h1>
              <p className="text-slate-500 font-body max-w-2xl">Upload your professional story. Our editorial AI will curate your experience, identifying skill gaps and optimizing for senior leadership roles.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Upload Zone */}
              <div className="lg:col-span-8 space-y-8">
                <section className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/15 transition-all hover:bg-white group">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 font-headline">Document Submission</h2>
                    <span className="text-xs font-medium text-secondary bg-secondary-container/30 px-3 py-1 rounded-full font-label">PDF Preferred</span>
                  </div>
                  
                  {/* Drag & Drop Zone */}
                  <div className="relative bg-surface-container-low rounded-2xl border-2 border-dashed border-outline-variant/30 py-20 flex flex-col items-center justify-center transition-all duration-300 hover:border-secondary hover:bg-secondary-container/10 group/drop cursor-pointer">
                    <div className="w-16 h-16 editorial-gradient rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 transition-transform group-hover/drop:scale-110">
                      <MaterialIcon icon="upload_file" className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1">Drop your resume here</h3>
                    <p className="text-slate-500 text-sm mb-6 font-body">Or click to browse your local files</p>
                    <button className="px-8 py-3 bg-white text-primary border border-outline-variant/30 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 font-body">
                      Select Document
                    </button>
                    <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                  </div>
                </section>

                <section className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/15">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 font-headline">Editorial Paste</h2>
                    <MaterialIcon icon="content_paste" className="text-slate-300" />
                  </div>
                  <textarea 
                    className="w-full h-48 bg-surface-container-low rounded-2xl border-0 p-6 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all font-body resize-none" 
                    placeholder="Paste your resume text here for a quick scan..."
                  ></textarea>
                </section>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-primary text-white rounded-[2rem] p-8 shadow-2xl shadow-primary/20 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <MaterialIcon icon="auto_awesome" className="text-[120px]" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4 leading-tight relative z-10">Ready to transform your career?</h3>
                  <p className="text-primary-fixed-dim font-body text-sm leading-relaxed mb-8 relative z-10">Our AI uses high-end editorial standards to ensure your resume speaks the language of recruiters and hiring managers at the world&apos;s leading firms.</p>
                  <button className="w-full bg-white text-primary py-4 rounded-2xl font-bold text-base shadow-xl hover:bg-slate-50 transition-all active:scale-[0.98] relative z-10 font-body">
                    Analyze Resume
                  </button>
                </div>

                {/* Progress Card */}
                <div className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/10">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-headline mb-6">Analysis Status</h4>
                  <div className="space-y-6">
                    {[
                      { width: 'w-24', full: 'w-full', opacity: 'opacity-100' },
                      { width: 'w-16', full: 'w-2/3', opacity: 'opacity-50' },
                      { width: 'w-32', full: 'w-1/2', opacity: 'opacity-30' }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center space-x-4 ${item.opacity}`}>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="flex-1">
                          <div className={`h-2 ${item.width} bg-slate-200 rounded-full mb-2`}></div>
                          <div className={`h-1.5 ${item.full} bg-slate-100 rounded-full`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-4">
                      <MaterialIcon icon="hourglass_empty" className="text-slate-400" />
                    </div>
                    <p className="text-xs font-medium text-slate-400 font-body">Waiting for document upload...</p>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] p-8 border border-outline-variant/5 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary font-headline mb-4">Pro Tip</h4>
                  <p className="text-sm text-slate-600 font-body leading-relaxed italic">&quot;Executive resumes often benefit from a &apos;Skills at a Glance&apos; section. Our AI will help you curate these keywords once you upload.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
