import { motion } from 'motion/react';
import { MOCK_COMPANIES } from '../mockData';
import { Search, MapPin, Globe, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Directory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="flex-1">
           <div className="biz-label">The Verified Network</div>
           <h1 className="text-4xl font-bold italic">Corporate Directory.</h1>
           <p className="text-slate-500 mt-2">Connecting 500+ verified businesses in the SADC region.</p>
        </div>
        <div className="w-full md:w-auto flex gap-4">
           <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Find a company..." 
                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-biz-teal/10"
              />
           </div>
           <button className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COMPANIES.map((company) => (
          <motion.div
            key={company.id}
            whileHover={{ y: -5 }}
            className="biz-card group"
          >
            <div className="p-6">
               <div className="flex gap-4 mb-6">
                 <img src={company.logo} className="w-16 h-16 rounded-xl object-cover border border-slate-100 shadow-sm" referrerPolicy="no-referrer" />
                 <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-1">
                       <h3 className="font-bold truncate group-hover:text-biz-teal transition-colors tracking-tight text-lg">{company.name}</h3>
                       {company.isVerified && <CheckCircle2 className="w-4 h-4 text-biz-teal flex-shrink-0" />}
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{company.industry}</div>
                 </div>
               </div>
               
               <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed h-10">
                  {company.description}
               </p>

               <div className="space-y-2 mb-8 border-t border-slate-50 pt-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                     <MapPin className="w-3.5 h-3.5" /> {company.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                     <Globe className="w-3.5 h-3.5" /> {company.website.replace('https://', '')}
                  </div>
               </div>

               <div className="flex gap-3">
                  <button className="biz-btn-teal flex-1 py-2 text-[11px] font-bold uppercase tracking-widest">
                    Message
                  </button>
                  <button className="flex-1 bg-white border border-slate-200 text-biz-dark hover:bg-slate-50 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                    Profile <ChevronRight className="w-3 h-3" />
                  </button>
               </div>
            </div>
            
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
               <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                 company.tier === 'Enterprise' ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-600'
               }`}>
                 {company.tier} Member
               </span>
               <div className="text-[10px] text-slate-400 font-bold">Member since 2024</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
