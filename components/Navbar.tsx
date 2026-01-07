import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Zap } from 'lucide-react';
import logo from './logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-black/70 backdrop-blur-xl border-white/10'
        : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-3 group">
              {/* Temporary Logo Placeholder - Replace with: <img src="/logo.png" className="w-8 h-8" /> */}
              <img src={logo} className="w-8 h-8 object-contain rounded-lg" alt="SparkKey Logo" />
              <span className="text-white font-semibold text-lg tracking-tighter">SparkKey</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#overview" className="text-gray-300 hover:text-white text-[13px] font-medium transition-colors duration-300 tracking-wide">Overview</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white text-[13px] font-medium transition-colors duration-300 tracking-wide">How It Works</a>
              <a href="#features" className="text-gray-300 hover:text-white text-[13px] font-medium transition-colors duration-300 tracking-wide">Capabilities</a>
              <a href="#specs" className="text-gray-300 hover:text-white text-[13px] font-medium transition-colors duration-300 tracking-wide">Tech Specs</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute w-full h-screen">
          <div className="px-6 pt-8 pb-8 space-y-4">
            <a href="#overview" className="text-gray-200 hover:text-white block text-2xl font-semibold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>Overview</a>
            <a href="#how-it-works" className="text-gray-200 hover:text-white block text-2xl font-semibold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#features" className="text-gray-200 hover:text-white block text-2xl font-semibold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
            <a href="#specs" className="text-gray-200 hover:text-white block text-2xl font-semibold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>Tech Specs</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;