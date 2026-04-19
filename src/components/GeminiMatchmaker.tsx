import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BrainCircuit, X, ChevronRight, Loader2, Lightbulb } from 'lucide-react';
import { getBusinessMatches, MatchResult } from '../services/gemini';

export default function GeminiMatchmaker({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);

  const handleMatch = async () => {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const data = await getBusinessMatches(description);
      setResult(data);
    } catch (error) {
      console.error('Matchmaking failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-biz-dark/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-biz-dark p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-biz-teal/20 p-2 rounded-xl text-biz-teal">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">AI Business Matchmaker</h2>
                  <p className="text-xs text-slate-400">Powered by Gemini AI</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto">
              {!result ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-biz-teal/5 rounded-2xl border border-biz-teal/10">
                     <Lightbulb className="w-6 h-6 text-biz-teal flex-shrink-0" />
                     <p className="text-sm text-slate-600 leading-relaxed italic">
                        Describe your business and what you are looking for (e.g., "We are a mining logistics firm looking for solar energy providers and freight insurance").
                     </p>
                  </div>
                  
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your business goals..."
                    className="w-full h-40 bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-biz-teal/20 transition-all outline-none text-sm font-medium"
                  />

                  <button
                    onClick={handleMatch}
                    disabled={loading || !description.trim()}
                    className="biz-btn-teal w-full py-4 flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analyzing Ecosystem...
                      </>
                    ) : (
                      <>
                        Find Strategic Matches
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="biz-label">AI Reasoning</div>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      "{result.reasoning}"
                    </p>
                  </div>

                  <div>
                     <div className="biz-label text-biz-teal">Suggested Industries</div>
                     <div className="flex flex-wrap gap-2 mt-2">
                        {result.suggestedIndustries.map((industry, i) => (
                          <span key={i} className="px-3 py-1 bg-biz-teal/10 text-biz-teal rounded-full text-xs font-bold border border-biz-teal/10">
                            {industry}
                          </span>
                        ))}
                     </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="biz-label text-biz-dark">Connection Strategy</div>
                     <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        {result.connectionStrategy}
                     </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                     <button 
                       onClick={() => setResult(null)} 
                       className="flex-1 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
                     >
                       Research Again
                     </button>
                     <button 
                       onClick={onClose}
                       className="flex-1 biz-btn-primary py-3 text-sm font-bold"
                     >
                       View Directory
                     </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
