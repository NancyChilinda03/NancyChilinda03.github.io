import { useState } from 'react';
import { SKILLS_CATEGORIES } from '../data';
import { Search, Code, Layers, Cpu, Database, GitBranch, Sparkles, AlertCircle } from 'lucide-react';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  // Helper to map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'code': return <Code className="w-4 h-4" />;
      case 'layers': return <Layers className="w-4 h-4" />;
      case 'cpu': return <Cpu className="w-4 h-4" />;
      case 'database': return <Database className="w-4 h-4" />;
      case 'git-branch': return <GitBranch className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const matchesSearch = (skillName: string) => {
    if (!searchQuery) return false;
    return skillName.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-amber-600 font-mono font-medium tracking-wider uppercase text-xs mb-2">Qualifications</div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">Technical Stack</h2>
            <p className="mt-2 text-slate-600 max-w-lg leading-relaxed">
              An index of software languages and engineering patterns I work with. Use the dynamic filter on the right to search candidate compatibility.
            </p>
          </div>

          <div className="mt-6 md:mt-0 w-full md:w-80 relative flex items-center">
            <Search className="w-4 h-4 absolute left-3.5 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter e.g. React, Flutter, SQL..."
              id="input-skill-filter"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-600 focus:ring-1 focus:ring-amber-100 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-[11px] font-mono text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => {
            // Count matching skills
            const matchingCount = cat.skills.filter(s => matchesSearch(s)).length;
            const hasMatchesInCat = searchQuery && matchingCount > 0;

            return (
              <div 
                key={idx}
                id={`skill-cat-card-${idx}`}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  hasMatchesInCat 
                    ? 'border-amber-500 bg-amber-50/20 shadow-xs' 
                    : searchQuery 
                      ? 'border-slate-100 opacity-55 hover:opacity-100' 
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-xs bg-slate-50/40'
                }`}
              >
                <div>
                  <div className={`p-2 w-max rounded-lg mb-4 text-xs ${hasMatchesInCat ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-100'}`}>
                    {getIcon(cat.icon)}
                  </div>
                  
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-4 h-8 flex items-center">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => {
                      const isMatched = matchesSearch(skill);
                      return (
                        <span 
                          key={sIdx}
                          id={`skill-badge-${skill.replace(/\s+/g, '-').toLowerCase()}`}
                          className={`px-2 py-1 text-[10px] font-mono rounded transition-all duration-200 ${
                            isMatched 
                              ? 'bg-amber-600 text-white font-bold scale-102 shadow-xs' 
                              : 'bg-white text-slate-600 border border-slate-200'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {hasMatchesInCat && (
                  <div className="mt-4 pt-3 border-t border-amber-100 flex items-center gap-1 text-[9px] text-amber-700 font-bold font-mono">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{matchingCount} match{matchingCount > 1 ? 'es' : ''} inside</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {searchQuery && !SKILLS_CATEGORIES.some(cat => cat.skills.some(s => matchesSearch(s))) && (
          <div className="mt-12 p-6 rounded-xl border border-dashed border-slate-200 text-center text-slate-500 max-w-sm mx-auto">
            <AlertCircle className="w-6 h-6 text-slate-400 mx-auto mb-2" />
            <h4 className="text-xs font-bold text-slate-800 mb-1">No Explicit Compatibility Matches</h4>
            <p className="text-[11px] text-slate-500">
              I learn rapidly. Feel free to contact me directly about custom framework placements or specific API standards!
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
