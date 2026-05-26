/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsSection from './components/SkillsSection';
import EducationExperience from './components/EducationExperience';
import ContactForm from './components/ContactForm';
import { PROFILE } from './data';
import { Github, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-amber-100 selection:text-amber-900 scroll-smooth">
      {/* 1. Header & Hero Intro banner */}
      <Header />

      {/* 2. Interactive Skills Section with Search highlight filters */}
      <SkillsSection />

      {/* 3. Infinite Project Showcase with Simulators and drawers */}
      <ProjectShowcase />

      {/* 4. Education & Work Timelines, and Language proficiencies */}
      <EducationExperience />

      {/* 5. Validation contact form and recruiter local state inbox */}
      <ContactForm />

      {/* 6. Professional Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-950 font-sans">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
            <div>
              <span className="font-sans font-black text-white text-xl tracking-tight block">NC.</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mt-1">Nancy Chilinda Portfolio</span>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href={PROFILE.github} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
                target="_blank" 
                rel="noreferrer"
                title="GitHub Profiles"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${PROFILE.email}`} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
                title="Send direct email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${PROFILE.phone}`} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
                title="Mobile calls"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <button 
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl transition-all cursor-pointer shadow-3xs flex items-center gap-1.5 text-xs font-mono font-semibold"
            >
              <ArrowUp className="w-4 h-4" /> Top
            </button>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-500">
              &copy; {new Date().getFullYear()} Nancy Chilinda. All rights reserved.
            </span>
            <span className="text-slate-500 flex items-center gap-1.5 font-mono text-[10px]">
              Crafted in Malawi with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

