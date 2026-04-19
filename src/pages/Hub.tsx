import { motion } from 'motion/react';
import { MOCK_INVESTMENTS } from '../mockData';
import { Briefcase, TrendingUp, Shield, HelpCircle, Download, ArrowUpRight } from 'lucide-react';

export default function Hub() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="bg-biz-dark text-white rounded-[2rem] p-8 md:p-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-biz-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-biz-gold/20 text-biz-gold rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
            <TrendingUp className="w-4 h-4" /> Investment Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">Empowering Zambian Ambition.</h1>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Directly connect with high-growth SMEs and established corporations seeking strategic investment and regional partnerships.
          </p>
          <div className="flex gap-4">
            <button className="biz-btn-teal px-8">Find Opportunities</button>
            <button className="bg-white/10 text-white px-8 py-2.5 rounded-lg font-medium hover:bg-white/20 transition-all">List Opportunity</button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-12">
        {/* Opportunities List */}
        <div className="space-y-8">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold">Featured Opportunities</h2>
             <div className="flex gap-2">
                <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
             </div>
          </div>

          <div className="grid gap-6">
            {MOCK_INVESTMENTS.map((inv) => (
              <motion.div
                key={inv.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="biz-card p-6 flex flex-col md:flex-row gap-6 hover:border-biz-gold/30"
              >
                <div className="w-full md:w-32 h-32 bg-slate-50 flex items-center justify-center rounded-2xl border border-slate-100 flex-shrink-0">
                   <Briefcase className="w-10 h-10 text-slate-300" />
                </div>
                <div className="flex-1">
                   <div className="flex justify-between items-start mb-2">
                     <h3 className="font-bold text-xl">{inv.title}</h3>
                     <span className="text-xs font-bold text-biz-gold bg-biz-gold/10 px-2 py-1 rounded tracking-widest uppercase">
                        {inv.sector}
                     </span>
                   </div>
                   <div className="text-sm font-bold text-biz-teal mb-4">{inv.companyName}</div>
                   <p className="text-sm text-slate-500 mb-6 leading-relaxed italic">
                      {inv.description}
                   </p>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-50">
                      <div>
                         <div className="biz-label">Funding Goal</div>
                         <div className="font-bold text-biz-dark">{inv.amountNeeded}</div>
                      </div>
                      <div>
                         <div className="biz-label">Equity Offered</div>
                         <div className="font-bold text-biz-dark">{inv.equityOffered}</div>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex items-end">
                         <button className="biz-btn-primary w-full md:w-auto py-2 px-6 flex items-center justify-center gap-2 group text-xs font-bold uppercase tracking-widest">
                            View Pitch <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </button>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info & Stats Sidebar */}
        <aside className="space-y-8">
           <div className="biz-card p-6 bg-slate-50 border-none">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-biz-teal" /> Investor Security
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 italic">
                All companies listed in the Investment Hub undergo a rigorous Level 2 Verification process, including document audit and site inspection.
              </p>
              <a href="#" className="text-xs font-bold text-biz-teal hover:underline flex items-center gap-1">
                Read about verification <HelpCircle className="w-3 h-3" />
              </a>
           </div>

           <div className="biz-card p-6">
              <div className="biz-label">Investment Trends</div>
              <div className="space-y-6 mt-6">
                 {[
                   { sector: 'Energy', growth: '+24%', color: 'bg-orange-500' },
                   { sector: 'Agri-Tech', growth: '+18%', color: 'bg-emerald-500' },
                   { sector: 'Fintech', growth: '+42%', color: 'bg-blue-500' },
                 ].map((t) => (
                   <div key={t.sector} className="flex items-center gap-4">
                      <div className={`w-1 h-8 rounded-full ${t.color}`} />
                      <div className="flex-1">
                         <div className="text-xs font-bold">{t.sector}</div>
                         <div className="text-[10px] text-slate-400">Monthly growth</div>
                      </div>
                      <div className="text-sm font-bold text-biz-dark">{t.growth}</div>
                   </div>
                 ))}
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
