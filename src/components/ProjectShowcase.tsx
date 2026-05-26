import React, { useState } from 'react';
import { PROJECTS, Project } from '../data';
import { 
  Github, Image as ImageIcon, ExternalLink, 
  Check, FileText, ChevronRight, Sparkles 
} from 'lucide-react';

interface ScreenshotMap {
  [key: string]: string;
}

const PROJECT_SCREENSHOTS: ScreenshotMap = {
  "skin-disease": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  "recipe-gen": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
  "pharmacy-sys": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80",
  "portfolio": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
};

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Mobile' | 'Full-Stack'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeScreenshotUrl, setActiveScreenshotUrl] = useState<string | null>(null);
  const [activeModalScreenshotIndex, setActiveModalScreenshotIndex] = useState<number>(0);

  const filteredProjects = PROJECTS.filter(p => 
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  const handleOpenScreenshot = (projectId: string) => {
    const proj = PROJECTS.find(p => p.id === projectId);
    if (proj && proj.hideScreenshotAndCode) return;
    
    if (proj && proj.screenshots && proj.screenshots.length > 0) {
      setActiveScreenshotUrl(proj.screenshots[0]);
    } else {
      setActiveScreenshotUrl(PROJECT_SCREENSHOTS[projectId] || null);
    }
  };

  const handleOpenProjectModal = (proj: Project) => {
    setSelectedProject(proj);
    setActiveModalScreenshotIndex(0);
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-amber-600 font-mono font-medium tracking-wider uppercase text-xs mb-2">My Work</div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">Project Showcase</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              An inventory of mobile deployments and enterprise web services I've designed and engineered.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {(['All', 'Mobile', 'Full-Stack'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`btn-cat-${cat.toLowerCase()}`}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(proj => {
            const displayImage = proj.screenshots && proj.screenshots.length > 0 
              ? proj.screenshots[0] 
              : PROJECT_SCREENSHOTS[proj.id];

            return (
              <div 
                key={proj.id} 
                id={`project-card-${proj.id}`}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-600/50 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card visual mockup top container */}
                <div 
                  className={`h-44 bg-slate-100 overflow-hidden relative ${proj.hideScreenshotAndCode ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={() => !proj.hideScreenshotAndCode && handleOpenScreenshot(proj.id)}
                >
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors z-10" />
                  <img 
                    src={displayImage} 
                    alt={`${proj.title} Mockup Preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!proj.hideScreenshotAndCode && (
                    <div className="absolute bottom-4 right-4 z-20 p-2 rounded-lg bg-white/90 backdrop-blur-xs text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ImageIcon className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-medium tracking-wider uppercase rounded-md bg-amber-50 text-amber-800 border border-amber-100">
                        {proj.category}
                      </span>
                      <button 
                        onClick={() => handleOpenProjectModal(proj)}
                        id={`btn-explore-${proj.id}`}
                        className="text-slate-400 hover:text-amber-600 transition-colors cursor-pointer"
                        title="Read specs"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                      {proj.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono font-normal rounded-full bg-slate-100 text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2.5">
                      {/* View screenshot (if allowed) */}
                      {!proj.hideScreenshotAndCode ? (
                        <button 
                          onClick={() => handleOpenScreenshot(proj.id)}
                          id={`btn-screenshot-${proj.id}`}
                          className="text-xs font-semibold text-slate-800 hover:text-amber-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <ImageIcon className="w-3.5 h-3.5" /> View Screenshot
                        </button>
                      ) : (
                        <span className="text-[10px] font-mono font-semibold text-slate-400 italic">
                          
                        </span>
                      )}

                      {/* Code Github link (if allowed) */}
                      {!proj.hideScreenshotAndCode && proj.codeLink ? (
                        <a 
                          href={proj.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          id={`link-code-${proj.id}`}
                          className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" /> Code <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : proj.hideScreenshotAndCode ? (
                        <span className="text-[10px] font-mono font-semibold text-slate-400 italic">
                          
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Screenshot Lightbox Overlay */}
        {activeScreenshotUrl && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveScreenshotUrl(null)}
          >
            <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <button 
                onClick={() => setActiveScreenshotUrl(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-900/65 text-white hover:bg-slate-900 cursor-pointer text-xs font-bold"
              >
                Close ×
              </button>
              <img 
                src={activeScreenshotUrl} 
                alt="High-Fidelity Project Screenshot Mockup" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}

        {/* Detailed Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl w-full max-w-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
              
              <div className="p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-medium tracking-wider uppercase rounded-md bg-amber-50 text-amber-800 border border-amber-100">
                    {selectedProject.category}
                  </span>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    id="btn-close-modal"
                    className="text-slate-400 hover:text-slate-600 text-xs font-mono border border-slate-200 rounded-lg px-2.5 py-1 cursor-pointer"
                  >
                    Close ×
                  </button>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  {selectedProject.title}
                </h3>
                
                <p className="mt-3 text-slate-600 text-xs leading-relaxed font-serif">
                  {selectedProject.description}
                </p>

                {/* 5-Screenshot Gallery Panel (for visible projects) */}
                {!selectedProject.hideScreenshotAndCode && selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <div className="mt-6 border-t border-slate-150 pt-6">
                    <h4 className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase mb-3 flex items-center gap-1.5 text-amber-800">
                      <ImageIcon className="w-3.5 h-3.5" /> Interactive Demonstration Gallery (5 HD Views)
                    </h4>
                    
                    {/* Active Screenshot Display in Modal */}
                    <div className="relative h-60 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md group">
                      <img 
                        src={selectedProject.screenshots[activeModalScreenshotIndex]} 
                        alt={`${selectedProject.title} Demo ${activeModalScreenshotIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/70 backdrop-blur-xs rounded text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                        Screen {activeModalScreenshotIndex + 1} of 5
                      </div>
                      
                      {/* Fullscreen Magnifier Overlay */}
                      <button 
                        onClick={() => {
                          if (selectedProject.screenshots) {
                            setActiveScreenshotUrl(selectedProject.screenshots[activeModalScreenshotIndex]);
                          }
                        }}
                        className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer text-white"
                      >
                        <span className="px-3 py-1.5 bg-black/80 backdrop-blur-xs text-[10px] font-bold rounded-lg flex items-center gap-1.5">
                          <ExternalLink className="w-3 h-3" /> Fullscreen Lightbox
                        </span>
                      </button>
                    </div>

                    {/* Thumbnail Rows */}
                    <div className="grid grid-cols-5 gap-2 mt-2">
                      {selectedProject.screenshots.map((screen, idx) => (
                        <button
                          key={idx}
                          id={`btn-thumb-${idx}`}
                          onClick={() => setActiveModalScreenshotIndex(idx)}
                          className={`relative h-12 rounded-lg overflow-hidden border bg-slate-100 transition-all cursor-pointer ${
                            activeModalScreenshotIndex === idx 
                              ? 'border-amber-500 ring-2 ring-amber-500/20' 
                              : 'border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img 
                            src={screen} 
                            alt={`Preview Thumbnail ${idx + 1}`} 
                            className="w-full h-full object-cover pointer-events-none"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase mb-3">Key Implementations</h4>
                  <ul className="space-y-2.5">
                    {selectedProject.details.map((d, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 py-4 px-5 bg-amber-50/50 border border-amber-100 rounded-xl">
                  <h4 className="text-xs font-mono font-bold text-amber-800 tracking-wider uppercase mb-2">Core Successes</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedProject.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-2 items-center">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer buttons based on privacy flag */}
                {!selectedProject.hideScreenshotAndCode ? (
                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                    <button
                      onClick={() => {
                        if (selectedProject.screenshots && selectedProject.screenshots.length > 0) {
                          setActiveScreenshotUrl(selectedProject.screenshots[activeModalScreenshotIndex]);
                        } else {
                          handleOpenScreenshot(selectedProject.id);
                        }
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ImageIcon className="w-4 h-4" /> View Fullscreen Active Screen
                    </button>
                    {selectedProject.codeLink && (
                      <a
                        href={selectedProject.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Github className="w-4 h-4" /> View GitHub Repository
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer"
                    >
                      Return to Showcase
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
