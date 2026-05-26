import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Please provide your name";
    if (!email.trim()) {
      tempErrors.email = "Please supply an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email schema";
    }
    if (!subject.trim()) tempErrors.subject = "Subject is required";
    if (!message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // POST directly to FormSubmit's AJAX endpoint targeting your verified email
      const response = await fetch("https://formsubmit.co/ajax/nancychilinda11@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `Nancy Portfolio Enquiry: ${subject}`,
          message: message
        })
      });

      if (response.ok) {
        setSuccess(true);
        
        // Clear fields on success
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

        // Auto-revert success screen after 6 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 6000);
      } else {
        alert("Could not complete delivery. Please email direct to nancychilinda11@gmail.com");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network exception occurred. Please email direct to nancychilinda11@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Column 1: Contact context details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-amber-600 font-mono font-medium tracking-wider uppercase text-xs mb-2">Connect</div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">Let's Build Systems Together</h2>
              <p className="mt-4 text-slate-600 text-xs leading-relaxed max-w-sm">
                I am actively seeking junior positions or full-stack software consulting slots. Reach out if you value clean codebases, database integrity, and modern frontend solutions.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-amber-600 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Direct Email</h4>
                    <a href="mailto:nancychilinda11@gmail.com" className="text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors">
                      nancychilinda11@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-amber-600 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Mobile Line</h4>
                    <a href="tel:+265882001951" className="text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors">
                      (+265) 882001951
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-amber-600 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Primary Location</h4>
                    <p className="text-sm font-semibold text-slate-800">
                      Mzuzu, Malawi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              {success && (
                <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-2xs flex flex-col items-center justify-center p-8 text-center transition-all animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4 border border-emerald-100 shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mt-2 leading-relaxed">
                    Thank you! Your inquiry was sent directly to my inbox. I will review and follow up with you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-5 text-xs text-amber-600 hover:text-amber-700 font-bold border border-slate-200 rounded-lg px-4 py-2 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      id="contact-name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if(errors.name) setErrors(prev => { delete prev.name; return {...prev}; });
                      }}
                      placeholder="e.g. Chisomo Phiri"
                      className={`w-full text-xs rounded-xl border px-4 py-3 text-slate-800 bg-slate-50 border-slate-200 focus:outline-none focus:border-amber-600 focus:bg-white transition-all ${
                        errors.name ? 'border-red-500 ring-1 ring-red-100' : ''
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2" htmlFor="contact-email">
                      Your Email
                    </label>
                    <input 
                      type="email"
                      id="contact-email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if(errors.email) setErrors(prev => { delete prev.email; return {...prev}; });
                      }}
                      placeholder="e.g. chisomo@company.mw"
                      className={`w-full text-xs rounded-xl border px-4 py-3 text-slate-800 bg-slate-50 border-slate-200 focus:outline-none focus:border-amber-600 focus:bg-white transition-all ${
                        errors.email ? 'border-red-500 ring-1 ring-red-100' : ''
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2" htmlFor="contact-subject">
                    Subject Matter
                  </label>
                  <input 
                    type="text"
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if(errors.subject) setErrors(prev => { delete prev.subject; return {...prev}; });
                    }}
                    placeholder="e.g. Database Design/Technical Opportunities"
                    className={`w-full text-xs rounded-xl border px-4 py-3 text-slate-800 bg-slate-50 border-slate-200 focus:outline-none focus:border-amber-600 focus:bg-white transition-all ${
                      errors.subject ? 'border-red-500 ring-1 ring-red-100' : ''
                    }`}
                  />
                  {errors.subject && <span className="text-[10px] text-red-500 mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2" htmlFor="contact-message">
                    Details / Project Summary
                  </label>
                  <textarea 
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if(errors.message) setErrors(prev => { delete prev.message; return {...prev}; });
                    }}
                    placeholder="How can Nancy assist your technical team or enterprise infrastructure?"
                    className={`w-full text-xs rounded-xl border px-4 py-3 text-slate-800 bg-slate-50 border-slate-200 focus:outline-none focus:border-amber-600 focus:bg-white transition-all ${
                      errors.message ? 'border-red-500 ring-1 ring-red-100' : ''
                    }`}
                  />
                  {errors.message && <span className="text-[10px] text-red-500 mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  id="btn-contact-submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 hover:shadow-xs text-white text-xs font-bold font-mono tracking-wider transition-all disabled:opacity-50 cursor-pointer pointer-events-auto flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="border-2 border-white border-t-transparent w-4 h-4 rounded-full animate-spin" />
                      Dispatching in motion...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      SUBMIT INQUIRY
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
