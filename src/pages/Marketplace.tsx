import { motion } from 'motion/react';
import { MOCK_MARKETPLACE } from '../mockData';
import { Search, Filter, ShoppingCart, Tag, MapPin, Star } from 'lucide-react';

export default function Marketplace() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-2">Vendor Marketplace</h1>
        <p className="text-slate-500">Source verified corporate services and products directly in Zambia.</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for solar, logistics, consultancy..." 
            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-biz-teal/20 transition-all outline-none"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" /> Category
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors">
            <MapPin className="w-4 h-4" /> Location
          </button>
        </div>
      </div>

      {/* Marketplace Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_MARKETPLACE.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -5 }}
            className="biz-card group"
          >
            <div className="relative h-48 overflow-hidden">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
               <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
               </div>
            </div>
            <div className="p-5">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="font-bold text-lg group-hover:text-biz-teal transition-colors">{item.title}</h3>
                 <div className="flex items-center gap-1 text-biz-gold">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-[11px] font-bold">4.9</span>
                 </div>
               </div>
               <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-4">
                  <Tag className="w-3.5 h-3.5" /> Provided by <span className="text-biz-dark font-bold underline underline-offset-2">{item.provider}</span>
               </div>
               <p className="text-sm text-slate-600 mb-6 line-clamp-2 leading-relaxed italic">
                  "{item.description}"
               </p>
               <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div className="font-bold text-biz-dark">{item.price}</div>
                  <button className="biz-btn-teal py-2 text-xs font-bold leading-none flex items-center gap-2">
                    Request Quote
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
        
        {/* Placeholder for more */}
        <div className="biz-card border-dashed border-2 flex flex-col items-center justify-center p-12 text-slate-400 bg-slate-50/50">
           <ShoppingCart className="w-12 h-12 mb-4 opacity-20" />
           <p className="text-sm font-semibold text-center italic">Register your company to list your services in the marketplace.</p>
           <button className="mt-6 text-xs font-bold text-biz-teal underline underline-offset-4 hover:text-black">Become a Vendor</button>
        </div>
      </div>
    </div>
  );
}
