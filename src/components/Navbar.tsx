import { Link, useLocation } from 'react-router-dom';
import { Briefcase, LayoutDashboard, Store, Handshake, Users, Bell, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Directory', path: '/directory', icon: Users },
    { name: 'Marketplace', path: '/marketplace', icon: Store },
    { name: 'Investment', path: '/hub', icon: Handshake },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-biz-dark p-1.5 rounded-lg group-hover:bg-biz-teal transition-colors">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-biz-dark">BizLink<span className="text-biz-teal">Zambia</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative mr-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search businesses, vendors..." 
                className="bg-slate-100 border-none rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-biz-teal/50 w-64 md:w-80 transition-all font-medium"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors flex items-center gap-1.5 px-3 py-2 rounded-lg ${
                  isActive(link.path) 
                    ? 'text-biz-teal bg-biz-teal/5' 
                    : 'text-slate-600 hover:text-biz-teal hover:bg-slate-50'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
            <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link to="/profile" className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-transparent hover:border-biz-teal transition-all">
              <img src="https://picsum.photos/seed/user/100/100" alt="User Profile" referrerPolicy="no-referrer" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-2 text-slate-600">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'bg-biz-teal/10 text-biz-teal'
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link to="/profile" className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden" onClick={() => setIsOpen(false)}>
                  <img src="https://picsum.photos/seed/user/100/100" alt="User" referrerPolicy="no-referrer" />
                </Link>
                <div>
                  <div className="font-bold text-sm">Corporate User</div>
                  <div className="text-xs text-slate-500">View Profile</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
