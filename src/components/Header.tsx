import { useState } from 'react';
import { PROFILE, EXPERIENCES, EDUCATION_LIST, RELEVANT_COURSEWORK } from '../data';
import { 
  Github, Mail, Phone, MapPin, Menu, X, FileText, 
  Printer, ArrowDownToLine, Sparkles, Send, CheckCircle2, Globe 
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handlePrint = () => {
    // Standard secure print trigger for the CV modal
    window.print();
  };

  const handleScroll = (selector: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-100 py-4 h-18">
        <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">
          <div>
            <a href="#" className="font-sans font-black text-slate-900 tracking-tight text-lg hover:text-amber-600 transition-colors">
              NC.
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono font-medium text-slate-600">
            {['#about', '#projects', '#skills', '#experience', '#contact'].map(anchor => (
              <button 
                key={anchor} 
                onClick={() => handleScroll(anchor)}
                className="hover:text-amber-600 transition-colors uppercase cursor-pointer"
              >
                {anchor.substring(1)}
              </button>
            ))}
            <button 
              onClick={() => setCvModalOpen(true)}
              id="btn-navbar-cv"
              className="px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" /> CV Export
            </button>
          </nav>

          {/* Mobile indicator */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setCvModalOpen(true)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors shrink-0"
              title="CV Export"
            >
              <FileText className="w-4 h-4 cursor-pointer" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="btn-mobile-menu-toggle"
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 shrink-0 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="absolute top-18 inset-x-0 bg-white border-b border-slate-200 p-6 shadow-md md:hidden flex flex-col gap-4 text-xs font-mono font-medium text-slate-600">
            {['#about', '#projects', '#skills', '#experience', '#contact'].map(anchor => (
              <button 
                key={anchor} 
                onClick={() => handleScroll(anchor)}
                className="text-left hover:text-amber-600 transition-all py-2 border-b border-slate-50 last:border-0 cursor-pointer"
              >
                {anchor.substring(1).toUpperCase()}
              </button>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setCvModalOpen(true);
              }}
              className="mt-2 w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-center font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> EXPORT PRINTABLE CV
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-60 -z-10" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-50 rounded-full blur-3xl opacity-40 -z-10" />

        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-6">
            
            {/* Availability tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-widest leading-none">
                Open for Opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-slate-900 tracking-tight leading-none mb-1">
              Hi, I'm <span className="text-amber-600">{PROFILE.name}</span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-mono text-slate-600 font-medium">
              {PROFILE.title}
            </h2>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto font-serif">
              {PROFILE.summary}
            </p>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleScroll('#contact')}
                id="btn-hero-contact"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide shadow-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> REACH OUT
              </button>
              <button
                onClick={() => setCvModalOpen(true)}
                id="btn-hero-cv-export"
                className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 font-bold text-xs tracking-wide text-slate-800 transition-all font-mono flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" /> RESUME PORTFOLIO
              </button>
            </div>

            {/* Tiny footer stats */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mzuzu, Malawi</span>
              </div>
              <div className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-amber-600">
                  NancyChilinda03
                </a>
              </div>
              {PROFILE.website && (
                <div className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <a href={PROFILE.website} target="_blank" rel="noreferrer" className="hover:text-amber-600">
                    NancyChilinda03.github.io
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CV Showcase & Print Export Drawer Modal */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-100 rounded-3xl w-full max-w-4xl shadow-xl overflow-hidden flex flex-col max-h-[95vh] print:p-0 print:bg-white print:shadow-none print:max-h-full">
            
            {/* Modal Controls (Hidden during browser prints via css) */}
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between shadow-3xs print:hidden">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-widest">Document Export Console</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  id="btn-cv-print"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 font-mono cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> Save PDF / Print
                </button>
                <button
                  onClick={() => setCvModalOpen(false)}
                  id="btn-close-cv-modal"
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 text-xs font-mono border border-slate-200 cursor-pointer"
                >
                  Close ×
                </button>
              </div>
            </div>

            {/* Structured Page Sheet */}
            <div id="cv-print-sheet" className="p-12 md:p-16 bg-white overflow-y-auto flex-1 font-serif text-slate-900 print:overflow-visible print:px-0 print:py-0">
              <div className="max-w-2xl mx-auto space-y-8">
                
                {/* Header credentials */}
                <div className="text-center pb-5 border-b-2 border-double border-slate-900">
                  <h2 className="text-2xl font-bold font-sans tracking-tight uppercase mb-1">{PROFILE.name}</h2>
                  <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 font-sans mt-2">
                    <span>{PROFILE.location}</span>
                    <span>•</span>
                    <span>{PROFILE.phone}</span>
                    <span>•</span>
                    <a href={`mailto:${PROFILE.email}`} className="underline">{PROFILE.email}</a>
                    <span>•</span>
                    <a href={PROFILE.github} className="underline" target="_blank" rel="noreferrer">github.com/NancyChilinda03</a>
                    <span>•</span>
                    <a href={PROFILE.linkedin} className="underline" target="_blank" rel="noreferrer">linkedin.com/in/nancy-chilinda</a>
                    <span>•</span>
                    <a href={PROFILE.website} className="underline" target="_blank" rel="noreferrer">NancyChilinda03.github.io</a>
                  </div>
                </div>

                {/* Professional summary */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-sans tracking-wide uppercase border-b border-slate-300 pb-1 text-slate-800">Professional Summary</h4>
                  <p className="text-xs leading-relaxed font-serif text-slate-700">
                    {PROFILE.summary}
                  </p>
                </div>

                {/* Academic credentials */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold font-sans tracking-wide uppercase border-b border-slate-300 pb-1 text-slate-800">Education</h4>
                  {EDUCATION_LIST.map((edu, idx) => (
                    <div key={idx} className="space-y-1 text-xs font-serif leading-relaxed">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold block text-slate-900">{edu.degree}</span>
                          <span className="italic block text-slate-600">{edu.school}</span>
                        </div>
                        <div className="text-right text-[11px] font-sans text-slate-600 shrink-0">
                          <span className="font-bold">{edu.period}</span>
                          <span className="block italic">{edu.location}</span>
                        </div>
                      </div>
                      
                      <div className="text-[11px] text-slate-700 space-y-0.5 pl-2 border-l border-slate-200">
                        {edu.notes && <p>{edu.notes}</p>}
                        {edu.awardInfo && <p className="font-medium text-slate-850">{edu.awardInfo}</p>}
                        {edu.credentialId && <p className="text-[10px] font-mono text-slate-500">{edu.credentialId}</p>}
                        {edu.modules && edu.modules.length > 0 && (
                          <p className="text-[10px] text-slate-600 mt-1">
                            <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-slate-500 mr-1 inline-block">Modules Covered:</span>
                            {edu.modules.join(", ")}
                          </p>
                        )}
                        {edu.grades && edu.grades.length > 0 && (
                          <p className="text-[10px] text-slate-600 mt-1">
                            <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-slate-500 mr-1 inline-block">Score Breakdown:</span>
                            {edu.grades.map(g => `${g.subject} (Grade ${g.grade})`).join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Employment history */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold font-sans tracking-wide uppercase border-b border-slate-300 pb-1 text-slate-800">Work History</h4>
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-start text-xs leading-relaxed">
                        <div>
                          <span className="font-bold text-slate-900">{exp.role}</span>
                          <span className="italic block text-slate-600">{exp.company}</span>
                        </div>
                        <div className="text-right text-[11px] font-sans text-slate-600 shrink-0">
                          <span>{exp.period}</span>
                          <span className="block italic">{exp.location}</span>
                        </div>
                      </div>
                      <ul className="list-disc pl-4 space-y-1">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-xs text-slate-700 leading-relaxed font-serif">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Skills overview split */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-sans tracking-wide uppercase border-b border-slate-300 pb-1 text-slate-800">Core Proficiencies</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs font-serif leading-relaxed text-slate-700">
                    <div>
                      <span className="font-bold font-sans text-[11px] block uppercase text-slate-600">Languages & Tools</span>
                      <span>Python, JavaScript (ES6+), Java, C, TypeScript, SQL, Git/GitHub, Postman.</span>
                    </div>
                    <div>
                      <span className="font-bold font-sans text-[11px] block uppercase text-slate-600">Frameworks & Databases</span>
                      <span>Flutter, React, Next.js, Node.js, Express, PHP, Django, Laravel, MySQL, MongoDB, PostgreSQL.</span>
                    </div>
                  </div>
                </div>

                {/* References print footer info */}
                <div className="pt-4 border-t border-slate-200 text-center text-[10px] font-mono text-slate-400">
                  REPRESENTATION CREDENTIALS // REFERENCES AVAILABLE ON REQUEST
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
