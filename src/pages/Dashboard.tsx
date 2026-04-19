import { useState } from 'react';
import { motion } from 'motion/react';
import { MOCK_POSTS, MOCK_COMPANIES } from '../mockData';
import { MessageSquare, ThumbsUp, Share2, MoreHorizontal, Plus, Briefcase, MapPin, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import GeminiMatchmaker from '../components/GeminiMatchmaker';

export default function Dashboard() {
  const [isMatchmakerOpen, setIsMatchmakerOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GeminiMatchmaker isOpen={isMatchmakerOpen} onClose={() => setIsMatchmakerOpen(false)} />
      
      <div className="grid lg:grid-cols-[280px_1fr_320px] gap-8">
        
        {/* Left Sidebar - Profile Summary */}
        <aside className="hidden lg:block space-y-6">
          <div className="biz-card">
            <div className="h-20 bg-biz-dark relative">
               <div className="absolute -bottom-8 left-4 p-1 bg-white rounded-xl shadow-md border border-slate-100">
                  <img src="https://picsum.photos/seed/mycompany/100/100" alt="Logo" className="w-16 h-16 rounded-lg" referrerPolicy="no-referrer" />
               </div>
            </div>
            <div className="pt-12 p-5">
               <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="font-bold">Enterprise Hub Ltd</h3>
                  <CheckCircle2 className="w-3.5 h-3.5 text-biz-teal" />
               </div>
               <p className="text-xs text-slate-500 mb-4 font-medium">Business Consultancy • Lusaka</p>
               
               <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Profile views</span>
                    <span className="text-biz-teal font-bold">342</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">New connections</span>
                    <span className="text-biz-teal font-bold">18</span>
                  </div>
               </div>
            </div>
            <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
               <button className="text-[11px] font-bold text-biz-dark hover:text-biz-teal uppercase tracking-widest transition-colors">
                  My Business Page
               </button>
            </div>
          </div>

          <div className="biz-card p-5">
             <div className="biz-label">Trending Topics</div>
             <div className="space-y-4 mt-3">
                {['#ZambiaMining', '#EcoTechLusaka', '#AgriExpansion', '#SMEFinance'].map((tag) => (
                  <div key={tag} className="group cursor-pointer">
                     <div className="text-sm font-semibold group-hover:text-biz-teal transition-colors">{tag}</div>
                     <div className="text-[10px] text-slate-400 mt-0.5">2.4k engagements</div>
                  </div>
                ))}
             </div>
          </div>
        </aside>

        {/* Main Feed */}
        <main className="space-y-6">
          {/* Create Post */}
          <div className="biz-card p-4">
             <div className="flex gap-4">
                <img src="https://picsum.photos/seed/user/100/100" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                <button className="flex-1 bg-slate-50 text-left px-5 py-2.5 rounded-full text-slate-500 text-sm font-medium hover:bg-slate-100 transition-colors border border-slate-100">
                   Post an opportunity, event or announcement...
                </button>
             </div>
             <div className="flex gap-1 mt-4 pt-4 border-t border-slate-50">
                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                   <Briefcase className="w-4 h-4 text-orange-500" /> Opportunity
                </button>
                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                   <TrendingUp className="w-4 h-4 text-emerald-500" /> Announcement
                </button>
                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                   <Plus className="w-4 h-4 text-blue-500" /> Event
                </button>
             </div>
          </div>

          {/* AI Matchmaker Hook */}
          <div className="bg-biz-dark text-white p-6 rounded-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Sparkles className="w-32 h-32" />
             </div>
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-biz-teal/20 text-biz-teal rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
                   <Sparkles className="w-3 h-3" /> AI Matchmaker
                </div>
                <h2 className="text-xl font-bold mb-2">Find your next partner</h2>
                <p className="text-slate-400 text-sm mb-6 max-w-sm">Our AI analyzes your business goals and connects you with the right vendors or investors in Zambia.</p>
                <button 
                  onClick={() => setIsMatchmakerOpen(true)}
                  className="biz-btn-teal py-2 text-sm font-bold w-full sm:w-auto"
                >
                   Start Matchmaking
                </button>
             </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {MOCK_POSTS.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="biz-card p-5"
              >
                <div className="flex justify-between items-start mb-4">
                   <div className="flex gap-3">
                      <img src={`https://picsum.photos/seed/${post.companyId}/200/200`} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                      <div>
                         <div className="flex items-center gap-1">
                            <h4 className="font-bold text-sm leading-none">{post.companyName}</h4>
                            <CheckCircle2 className="w-3 h-3 text-biz-teal" />
                         </div>
                         <div className="text-[11px] text-slate-500 mt-1 font-medium">{post.authorName} • {post.timestamp}</div>
                      </div>
                   </div>
                   <button className="p-1 text-slate-400 hover:bg-slate-50 rounded-lg">
                      <MoreHorizontal className="w-5 h-5" />
                   </button>
                </div>
                
                <p className="text-sm leading-relaxed text-slate-700 mb-6">
                   {post.content}
                </p>

                {post.id === 'p1' && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-slate-100">
                    <img src="https://picsum.photos/seed/miningzambia/800/400" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                    <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center">
                       <div>
                          <div className="text-xs font-bold text-biz-teal uppercase tracking-widest mb-1">Partnership Opp</div>
                          <div className="text-sm font-bold text-biz-dark">Renewable Solar Grid Construction</div>
                       </div>
                       <button className="biz-btn-primary py-2 text-xs font-bold">Apply Now</button>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-slate-500">
                   <div className="flex gap-6">
                      <button className="flex items-center gap-2 text-xs font-bold hover:text-biz-teal transition-colors">
                        <ThumbsUp className="w-4 h-4" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-2 text-xs font-bold hover:text-biz-teal transition-colors">
                        <MessageSquare className="w-4 h-4" /> {post.comments}
                      </button>
                   </div>
                   <button className="flex items-center gap-2 text-xs font-bold hover:text-biz-teal transition-colors">
                      <Share2 className="w-4 h-4" /> Share
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Right Sidebar - Suggestions */}
        <aside className="hidden xl:block space-y-6">
          <div className="biz-card p-5">
             <div className="biz-label">Recommended for you</div>
             <div className="space-y-4 mt-4">
                {MOCK_COMPANIES.map((company) => (
                  <div key={company.id} className="flex gap-3">
                     <img src={company.logo} className="w-10 h-10 rounded-lg object-cover" referrerPolicy="no-referrer" />
                     <div className="flex-1">
                        <div className="text-[13px] font-bold truncate leading-none mb-1">{company.name}</div>
                        <div className="text-[11px] text-slate-400 truncate font-medium mb-2">{company.industry}</div>
                        <button className="text-[10px] font-bold text-biz-teal border border-biz-teal hover:bg-biz-teal hover:text-white px-2 py-1 rounded transition-colors w-full">
                           + Follow
                        </button>
                     </div>
                  </div>
                ))}
             </div>
             <button className="w-full text-center text-xs font-bold text-slate-400 hover:text-biz-teal mt-6 transition-colors">
                View all businesses
             </button>
          </div>

          <div className="biz-card p-5 bg-gradient-to-br from-biz-teal/5 to-white border-biz-teal/20">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-biz-gold p-1.5 rounded-lg">
                   <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="font-bold text-sm">BizLink Premium</div>
             </div>
             <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Unlock direct messaging with Enterprise accounts and detailed investor insights.
             </p>
             <button className="biz-btn-primary w-full py-2 bg-biz-gold hover:bg-biz-gold/90 text-[11px] font-bold tracking-widest uppercase">
                Upgrade to Premium
             </button>
          </div>

          <div className="px-4 text-[11px] text-slate-400 space-y-1">
             <div className="flex gap-x-3 flex-wrap">
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Accessibility</a>
                <a href="#" className="hover:underline">Help Center</a>
             </div>
             <div>BizLink Zambia &copy; 2026</div>
          </div>
        </aside>

      </div>
    </div>
  );
}
