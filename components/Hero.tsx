import React, { useEffect, useState } from 'react';
import { ChevronRight, Play, Wifi, Lock } from 'lucide-react';
import SparkKey from './SparkKey.png';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      // Clamping scrollY for parallax calculations
      if (window.scrollY < 1200) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-40 pb-24">

      {/* Dynamic Background with Parallax */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              // Moves down slower than product to separate them
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0, 1 - scrollY / 600)
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest">System Recovery Interface</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.95] md:leading-[0.9]">
              Total Control. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600">In your pocket.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-24 max-w-2xl mx-auto leading-normal font-normal tracking-tight">
              The professional hardware tool for system analysis, force restarts, and remote terminal access.
            </p>

          </div>

          {/* Product Showcase */}
          <div
            className={`relative w-full max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
          >

            {/* Product Image Container */}
            <div
              className="relative z-10"
              style={{
                // Parallax Effect (Moves down slightly faster than text)
                transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`
              }}
            >
              <div className="animate-float relative group">
                {/* Glow Effect behind image */}
                <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform scale-75 group-hover:scale-110"></div>

                <img
                  src={SparkKey}
                  alt="SparkKey Hardware Interface"
                  className="w-auto h-[400px] md:h-[600px] mx-auto drop-shadow-2xl object-contain relative z-20 transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
                />

                {/* Feature Cards */}
                <div
                  className="absolute top-1/4 left-0 md:left-10 animate-float-deep z-30 hidden md:block"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-3 pr-5 rounded-full shadow-2xl flex items-center gap-3 hover:bg-black/80 transition-colors">
                    <div className="bg-brand-500 rounded-full p-1.5 text-white shadow-lg shadow-brand-500/30">
                      <Wifi className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">Signal</span>
                      <span className="text-sm font-semibold text-white leading-none tracking-tight">Encrypted RF</span>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-1/4 right-0 md:right-10 animate-float-deep z-30 hidden md:block"
                  style={{ animationDelay: '2.5s' }}
                >
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-3 pr-5 rounded-full shadow-2xl flex items-center gap-3 hover:bg-black/80 transition-colors">
                    <div className="bg-green-500 rounded-full p-1.5 text-white shadow-lg shadow-green-500/30">
                      <Lock className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">Status</span>
                      <span className="text-sm font-semibold text-white leading-none tracking-tight">Root Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;