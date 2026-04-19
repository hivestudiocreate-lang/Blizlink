import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Zap, Handshake, Users, TrendingUp, Store, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-biz-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-biz-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-template-columns-1fr-1fr items-center gap-12" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-biz-teal/10 text-biz-teal rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5" />
                Now Live in Zambia
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                The <span className="text-biz-teal italic">Central Hub</span> for Zambian B2B Commerce.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Connect your business with verified vendors, top-tier investors, and strategic partners in Zambia and across Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard" className="biz-btn-teal flex items-center gap-2 py-4 px-8 text-lg">
                  Explore Platform <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="biz-btn-primary bg-white text-biz-dark border border-slate-200 py-4 px-8 text-lg hover:bg-slate-50">
                  Register Business
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
                <div className="font-bold text-xs uppercase tracking-widest text-slate-400">Trusted By Early Adopters</div>
                <div className="flex items-center gap-6">
                   <span className="font-bold text-slate-800">CEC</span>
                   <span className="font-bold text-slate-800">ZANACO</span>
                   <span className="font-bold text-slate-800">SADC Hub</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative biz-card p-4 rounded-3xl shadow-2xl border-none">
                <img 
                  src="https://picsum.photos/seed/zambia/800/1000" 
                  alt="Business Growth" 
                  className="rounded-2xl w-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl w-64 border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-biz-teal/20 p-2 rounded-lg text-biz-teal">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold">Economic Activity</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-biz-teal w-3/4"></div>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-biz-teal w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl font-bold mb-4">Why BizLink Zambia?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto italic">
              "LinkedIn for African Businesses, but with real transactions."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Verified Profiles', 
                icon: ShieldCheck, 
                desc: 'Every business goes through a verification process to ensure trust in the ecosystem.' ,
                color: 'text-blue-500'
              },
              { 
                title: 'Investment Hub', 
                icon: Handshake, 
                desc: 'Bridge the gap between visionaries and funders with our dedicated investment portal.' ,
                color: 'text-amber-500'
              },
              { 
                title: 'Direct Marketplace', 
                icon: Store, 
                desc: 'Structure corporate deals and procure services directly through the platform.' ,
                color: 'text-biz-teal'
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="biz-card p-8 bg-white"
              >
                <div className={`${f.color} mb-6`}>
                  <f.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { label: 'SMEs in Zambia', value: '1M+' },
            { label: 'Target First Year', value: '500' },
            { label: 'Projected Profit Year 3', value: 'K1.35M' },
            { label: 'Zambian Digital Reach', value: '64%' }
          ].map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl font-bold mb-2 text-biz-dark">{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-biz-dark text-white rounded-[3rem] mx-4 lg:mx-8 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-biz-teal/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Digitise your Business in Zambia?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Join the centralized verified ecosystem and unlock millions in potential B2B transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="biz-btn-teal py-4 px-10 text-lg">
              Get Started Now
            </Link>
            <button className="px-10 py-4 bg-transparent border border-slate-600 rounded-lg font-medium hover:bg-white/5 transition-all text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-biz-teal" />
            <span className="font-bold text-lg tracking-tight">BizLink Zambia</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
             <a href="#" className="hover:text-biz-teal underline-offset-4 hover:underline">About</a>
             <a href="#" className="hover:text-biz-teal underline-offset-4 hover:underline">Privacy</a>
             <a href="#" className="hover:text-biz-teal underline-offset-4 hover:underline">Support</a>
             <a href="#" className="hover:text-biz-teal underline-offset-4 hover:underline">LinkedIn</a>
          </div>
          <div className="text-xs text-slate-400 capitalize">
            &copy; 2026 BizLink Zambia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
