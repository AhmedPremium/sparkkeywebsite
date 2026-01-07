import React from 'react';
import { Zap, Twitter, Facebook, Linkedin } from 'lucide-react';
import logo from './logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Temporary Logo Placeholder */}
              <img src={logo} className="w-8 h-8 object-contain rounded-lg" alt="SparkKey Logo" />
              <span className="text-white font-bold text-xl tracking-tight">SparkKey</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-8 leading-relaxed">
              Professional system recovery hardware for IT administrators and security specialists.
              Regain control of compromising situations with hardware-level intervention.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Hardware</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Tech Specs</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Enterprise Orders</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Find a Reseller</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Driver Downloads</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Engineering</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 SparkKey Security Systems. Designed in Qatar.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;