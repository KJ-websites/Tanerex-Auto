import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[80px] items-center">
          {/* Logo area */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 bg-[#DC2626] rounded"></div>
            <span className="font-[900] text-2xl tracking-tighter text-white">
              TANERX <span className="text-[#DC2626]">AUTO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-[14px] font-[700] uppercase tracking-[1px] transition-colors ${isActive('/') ? 'text-[#DC2626]' : 'text-white/70 hover:text-[#DC2626]'}`}>
              AVALEHT
            </Link>
            <Link to="/teenused" className={`text-[14px] font-[700] uppercase tracking-[1px] transition-colors ${isActive('/teenused') ? 'text-[#DC2626]' : 'text-white/70 hover:text-[#DC2626]'}`}>
              TEENUSED
            </Link>
            <Link to="/kontakt" className="px-[32px] py-[16px] bg-[#DC2626] hover:bg-[#b01e1e] text-white text-[14px] font-[900] uppercase tracking-[1px] transition-all duration-300 ml-4">
              VÕTA ÜHENDUST
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 hover:text-[#DC2626] focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col items-center space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`w-full py-3 text-center text-[14px] font-[700] uppercase tracking-[1px] ${isActive('/') ? 'text-[#DC2626]' : 'text-white/70 hover:text-[#DC2626]'}`}
              >
                AVALEHT
              </Link>
              <Link
                to="/teenused"
                onClick={closeMenu}
                className={`w-full py-3 text-center text-[14px] font-[700] uppercase tracking-[1px] ${isActive('/teenused') ? 'text-[#DC2626]' : 'text-white/70 hover:text-[#DC2626]'}`}
              >
                TEENUSED
              </Link>
              <Link
                to="/kontakt"
                onClick={closeMenu}
                className="w-full py-4 text-center text-[14px] font-[900] uppercase tracking-[1px] text-white bg-[#DC2626] hover:bg-[#b01e1e]"
              >
                KONTAKT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
