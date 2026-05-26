import { useState } from 'react';
import { EXPERIENCES, EDUCATION_LIST, RELEVANT_COURSEWORK, LANGUAGES, HOBBIES } from '../data';
import { 
  Briefcase, Landmark, BookOpen, Languages, Heart, Calendar, MapPin, 
  CheckCircle, Award, Printer, FileText 
} from 'lucide-react';

export default function EducationExperience() {
  const [selectedCertificate, setSelectedCertificate] = useState<'lusekero' | 'msce' | null>(null);

  return (
    <section id="experience" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Timeline and History Side (Experience & Education) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Experience timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-slate-900 rounded-lg text-slate-100 text-xs">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-wider uppercase text-slate-500">Employment</div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Work History</h3>
                </div>
              </div>

              <div className="border-l-2 border-slate-200 ml-4 pl-8 space-y-12">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Ring dot on vertical rail */}
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-50 bg-amber-600 transition-transform group-hover:scale-110" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 tracking-tight">{exp.role}</h4>
                        <span className="text-sm font-semibold text-amber-700">{exp.company}</span>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                        <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {exp.period}
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 items-start text-xs text-slate-600 leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-slate-900 rounded-lg text-slate-100 text-xs">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-wider uppercase text-slate-500">Academic History</div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Education</h3>
                </div>
              </div>

              <div className="border-l-2 border-slate-200 ml-4 pl-8 space-y-12">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Ring dot on vertical rail */}
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-50 bg-slate-400 transition-transform group-hover:scale-110" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 tracking-tight">{edu.degree}</h4>
                        <span className="text-sm font-semibold text-slate-600">{edu.school}</span>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                        <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {edu.period}
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" /> {edu.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 font-serif italic mt-2">
                      {edu.notes}
                    </p>

                    {edu.awardInfo && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{edu.awardInfo}</span>
                      </div>
                    )}

                    {edu.credentialId && (
                      <div className="mt-2 text-[10px] font-mono text-slate-400">
                        {edu.credentialId}
                      </div>
                    )}

                    {/* Interactive Certificates Triggers: Click to view and download */}
                    {(edu.modules || edu.grades) && (
                      <div className="mt-4">
                        <button
                          onClick={() => setSelectedCertificate(edu.modules ? 'lusekero' : 'msce')}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-amber-500 hover:bg-slate-50 text-slate-800 transition-all font-bold text-xs font-mono cursor-pointer shadow-3xs group"
                        >
                          <Award className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                          VIEW & EXPORT CERTIFICATE
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Coursework, Hobbies & Languages badges/bars) */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Coursework block */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">Relevant Coursework</h4>
              </div>
              <div className="flex flex-col gap-1.5">
                {RELEVANT_COURSEWORK.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 py-1 border-b border-slate-50 last:border-0">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages level block */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 mb-5 border-b border-slate-100 pb-3">
                <Languages className="w-4 h-4 text-emerald-600" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">Languages Spoken</h4>
              </div>
              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-800">
                      <span>{lang.name}</span>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded-sm">{lang.level}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${lang.name === 'English' ? 'bg-amber-600' : 'bg-emerald-600'}`}
                        style={{ width: lang.name === 'English' ? '85%' : '100%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies block */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <Heart className="w-4 h-4 text-rose-600" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">Hobbies & Interests</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {HOBBIES.map((hobby, idx) => (
                  <li key={idx} className="flex gap-2 items-start leading-relaxed">
                    <span className="text-rose-500 font-bold shrink-0">✦</span>
                    <span>{hobby}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Certificate Overlays */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-100 rounded-3xl w-full max-w-3xl shadow-xl overflow-hidden flex flex-col max-h-[95vh] print:p-0 print:bg-white print:shadow-none print:max-h-full">
            
            {/* Control Bar (Hidden during prints) */}
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between shadow-3xs print:hidden">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-widest">
                  {selectedCertificate === 'lusekero' ? 'Lusekero Certificate Viewer' : 'MANEB MSCE Certificate Viewer'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 font-mono cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> Save PDF / Print
                </button>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 text-xs font-mono border border-slate-200 cursor-pointer"
                >
                  Close ×
                </button>
              </div>
            </div>

            {/* Print style block for ONLY certificate modal content printing */}
            <style dangerouslySetInnerHTML={{ __html: `
              @media print {
                body > * {
                  display: none !important;
                }
                #certificate-modal-container {
                  display: block !important;
                  position: absolute !important;
                  left: 0 !important;
                  top: 0 !important;
                  width: 100% !important;
                  height: 100% !important;
                  padding: 0 !important;
                  margin: 0 !important;
                  background: white !important;
                }
                #certificate-printable-content {
                  box-shadow: none !important;
                  border: none !important;
                  padding: 2.5rem !important;
                  margin: 0 !important;
                  background: white !important;
                  width: 100% !important;
                  max-width: 100% !important;
                }
              }
            `}} />

            {/* Certificate Canvas Sheet */}
            <div id="certificate-modal-container" className="p-8 md:p-12 bg-slate-150 overflow-y-auto flex-1 flex justify-center items-center print:overflow-visible print:p-0 print:bg-white">
              <div id="certificate-printable-content" className="w-full max-w-2xl bg-white shadow-lg p-10 md:p-14 border border-slate-200 relative overflow-hidden transition-all print:shadow-none print:border-none print:p-8">
                
                {selectedCertificate === 'lusekero' ? (
                  /* Lusekero ICT Certificate */
                  <div className="border-[14px] border-double border-red-800 p-8 min-h-[620px] flex flex-col justify-between relative bg-amber-50/10">
                    
                    {/* Background faint digital seal logo watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-80 h-80 text-red-900">
                        <path fill="currentColor" d="M50,5 L85,25 L85,65 L50,95 L15,65 L15,25 Z" />
                      </svg>
                    </div>

                    {/* Certificate Crest and Logo representation */}
                    <div className="text-center relative">
                      <div className="flex justify-center mb-3">
                        <div className="relative">
                          {/* Candle overlaying sun rays matching the original crest logo */}
                          <div className="w-16 h-16 rounded-full border border-red-800 flex items-center justify-center bg-white shadow-3xs">
                            <svg viewBox="0 0 24 24" className="w-10 h-10 text-red-700">
                              <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <line x1="5" y1="5" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <line x1="17.5" y1="17.5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <line x1="5" y1="19" x2="6.5" y2="17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <line x1="17.5" y1="6.5" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M10,13 L14,13 L14,21 L10,21 Z M12,6 C13,8 13,11 12,12 C11,11 11,8 12,6 Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <h2 className="text-xl md:text-2xl font-serif font-black tracking-wide text-red-900 uppercase">Lusekero School of Computing</h2>
                      <p className="text-[10px] md:text-xs font-sans font-extrabold tracking-widest text-slate-500 uppercase mt-0.5 border-b border-red-800/15 pb-2.5 max-w-sm mx-auto">Certificate of Completion</p>
                    </div>

                    {/* Recipient Details */}
                    <div className="text-center my-6 space-y-4">
                      <p className="font-serif italic text-sm text-slate-600 leading-none">This is to certify that</p>
                      
                      <div className="space-y-1">
                        <span className="block text-2.5xl md:text-3xl font-serif font-black tracking-wide text-slate-950 border-b border-red-800/20 max-w-md mx-auto pb-1.5 uppercase">
                          NANCY W. CHILINDA
                        </span>
                      </div>
                      
                      <p className="font-serif italic text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        is awarded a <strong className="text-red-900 not-italic font-sans font-extrabold uppercase tracking-wider bg-red-50 border border-red-100 px-2 py-0.5 rounded text-xs">Credit</strong> in <br />
                        <span className="not-italic text-base md:text-lg font-bold font-sans tracking-tight text-slate-800">"Information and Computer Technology"</span> <br />
                        at Lusekero School of Computing.
                      </p>
                    </div>

                    {/* Modules block from physical page */}
                    <div className="my-2 p-4 bg-slate-50/85 border border-slate-200 rounded-xl max-w-lg mx-auto w-full">
                      <div className="text-[9px] font-mono font-bold uppercase text-slate-500 tracking-wider text-center mb-2.5 border-b border-slate-200 pb-1.5">Modules Covered</div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-2 text-[10px] font-sans text-slate-700">
                        {[
                          "Internet", "Entrepreneurship", "Computer Theory", 
                          "Communication Skills", "Microsoft Office Excel", "Microsoft Office Access", 
                          "Microsoft Office Publisher", "Microsoft Office Power Point", "Microsoft Office Word & Typing"
                        ].map((mod, mIdx) => (
                          <div key={mIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                            <span className="truncate leading-none">{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Metadata & Signatures */}
                    <div className="pt-6 border-t border-slate-200/60">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-[10px] text-slate-500 font-sans">
                        <div className="space-y-1 mt-auto">
                          <p className="font-mono text-[9px] text-slate-400 tracking-tight leading-none uppercase">ISSUED IN</p>
                          <p className="font-bold text-slate-800">Mzuzu, March 2022</p>
                          <div className="text-[8px] font-mono italic text-slate-400 leading-none">Ungweru Organization</div>
                        </div>
                        
                        {/* Decorative digital representation of Seal */}
                        <div className="hidden sm:flex justify-center items-center">
                          <div className="w-12 h-12 rounded-full border border-dashed border-red-800/40 flex items-center justify-center">
                            <span className="text-[7px] font-bold font-mono tracking-tighter text-red-800/85 uppercase">Certified</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="font-serif italic text-xs text-slate-400 border-b border-slate-300 w-32 mx-auto h-6 flex items-end justify-center">
                            [Signed Director]
                          </div>
                          <p className="font-mono text-[8px] uppercase tracking-wide leading-none">Executive Director / Head of School</p>
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* MSCE MANEB Certificate */
                  <div className="border-[14px] border-double border-slate-900 p-8 min-h-[620px] flex flex-col justify-between relative bg-stone-50/5">
                    
                    {/* Watermark backdrop of MANEB */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                      <div className="text-8xl font-black font-sans rotate-12 text-slate-900 select-none">
                        MANEB
                      </div>
                    </div>

                    {/* Logo/Crest mockup representation */}
                    <div className="text-center relative">
                      <div className="flex justify-center mb-3">
                        <div className="w-16 h-16 rounded-full border-2 border-slate-900 flex items-center justify-center bg-white shadow-3xs">
                          <svg viewBox="0 0 24 24" className="w-10 h-10 text-slate-800">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path d="M12,4 L12,20 M4,12 L20,12" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M9,9 L15,15 M9,15 L15,9" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-lg md:text-xl font-sans font-black tracking-wider text-slate-950 uppercase leading-tight">The Malawi National Examinations Board</h2>
                      <p className="text-[10px] md:text-xs font-serif italic text-slate-600 font-bold mt-0.5 border-b border-slate-900/15 pb-2.5 max-w-md mx-auto">Malawi School Certificate of Education</p>
                    </div>

                    {/* Recipient details */}
                    <div className="text-center my-6 space-y-3">
                      <p className="font-serif italic text-xs text-slate-500">This is to certify that</p>
                      
                      <div>
                        <span className="block text-2xl font-sans font-black tracking-wide text-slate-950 uppercase">
                          NANCY WONGANI CHILINDA
                        </span>
                        <div className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mt-1">
                          OF EKWENDENI GIRLS SECONDARY SCHOOL
                        </div>
                      </div>

                      <p className="font-serif italic text-xs text-slate-500 max-w-md mx-auto leading-none">
                        qualified for the award of a
                      </p>
                      
                      <p className="font-sans font-extrabold text-xs md:text-sm text-slate-950 uppercase tracking-wider bg-slate-100 px-3.5 py-1 rounded-sm border border-slate-200 inline-block select-all">
                        Malawi School Certificate of Education
                      </p>
                    </div>

                    {/* National exam results subject/grades table */}
                    <div className="my-1.5 max-w-sm mx-auto w-full border border-slate-350 rounded-lg overflow-hidden bg-white shadow-3xs">
                      <div className="grid grid-cols-2 bg-slate-900 text-white font-bold text-[9px] font-mono tracking-wider px-4 py-1.5 uppercase leading-none">
                        <span>Subject Name</span>
                        <span className="text-right">Examination Grade (1-9)</span>
                      </div>
                      <div className="divide-y divide-slate-200 text-[10px] font-mono">
                        {[
                          { subject: "Agriculture", grade: 4 },
                          { subject: "Bible Knowledge", grade: 4 },
                          { subject: "Biology", grade: 6 },
                          { subject: "Chemistry", grade: 7 },
                          { subject: "Chichewa", grade: 7 },
                          { subject: "Computer Studies", grade: 4 },
                          { subject: "English", grade: 5 },
                          { subject: "History", grade: 5 },
                          { subject: "Mathematics", grade: 6 }
                        ].map((g, gIdx) => (
                          <div key={gIdx} className="grid grid-cols-2 px-4 py-1 text-slate-700 bg-slate-50/40">
                            <span className="font-medium">{g.subject}</span>
                            <span className="text-right font-black text-slate-950">Grade {g.grade}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Info and Signatures */}
                    <div className="pt-6 border-t border-slate-200">
                      <div className="grid grid-cols-2 text-left text-[9px] text-slate-500 gap-y-4">
                        <div className="space-y-0.5 font-mono leading-none">
                          <p className="font-bold text-slate-700">CERTIFICATE NO.: <span className="text-slate-950 font-bold">M/2021/003045</span></p>
                          <p className="font-bold text-slate-700">CANDIDATE NO.: <span className="text-slate-950 font-bold">0027/0014</span></p>
                        </div>
                        <div className="text-right font-mono self-center">
                          <p className="font-bold text-slate-950 uppercase leading-none">DECEMBER 2021</p>
                        </div>

                        <div className="border-t border-slate-300 pt-2 space-y-1">
                          <div className="italic text-[10px] text-slate-400 h-5">[Signed Chairperson]</div>
                          <p className="font-mono text-[7px] uppercase tracking-wide leading-none">Chairperson of the Board</p>
                        </div>
                        <div className="border-t border-slate-300 pt-2 text-right space-y-1">
                          <div className="italic text-[10px] text-slate-400 h-5">[Signed Exec Director]</div>
                          <p className="font-mono text-[7px] uppercase tracking-wide leading-none">Executive Director of the Board</p>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

