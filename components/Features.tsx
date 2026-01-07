import React, { useRef, useEffect, useState } from 'react';
import { Terminal, RefreshCw, ShieldAlert, Wifi } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Deep Analysis",
    description: "Bypass OS restrictions to scan for rootkits, malware, and integrity violations at the kernel level.",
    icon: <ShieldAlert className="h-6 w-6 text-brand-500" />,
  },
  {
    title: "Force Restart",
    description: "Send a low-level interrupt signal to force a reboot even when the operating system is completely frozen.",
    icon: <RefreshCw className="h-6 w-6 text-brand-500" />,
  },
  {
    title: "Remote Terminal",
    description: "Gain full shell access via the SparkKey app. Execute commands, manage files, and kill processes remotely.",
    icon: <Terminal className="h-6 w-6 text-brand-500" />,
  },
];

// Helper component for Scroll Reveal Animation
const RevealSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <>
      {/* How it Works Section */}
      <section id="how-it-works" className="py-32 bg-dark-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <RevealSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Regain control in seconds.</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto tracking-tight font-normal">
                No keyboard? No screen? No problem. SparkKey bridges your compromised machine to your secure mobile device.
              </p>
            </div>
          </RevealSection>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <RevealSection delay={100}>
                <div className="bg-dark-800/50 p-8 rounded-3xl flex flex-col items-start h-full backdrop-blur-md">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Step 01</span>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tighter">Plug & Initiate</h3>
                  <p className="text-gray-400 leading-relaxed text-[15px] tracking-tight">
                    Insert SparkKey into any USB port. The device automatically mounts a secure, read-only partition.
                  </p>
                </div>
              </RevealSection>

              {/* Step 2 */}
              <RevealSection delay={200}>
                <div className="bg-dark-800/50 p-8 rounded-3xl flex flex-col items-start h-full backdrop-blur-md">
                   <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Step 02</span>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tighter">Visual Handshake</h3>
                  <p className="text-gray-400 leading-relaxed text-[15px] tracking-tight">
                    A unique, rotating dynamic code appears on your monitor. Scan it to authenticate locally.
                  </p>
                </div>
              </RevealSection>

              {/* Step 3 */}
              <RevealSection delay={300}>
                <div className="bg-dark-800/50 p-8 rounded-3xl flex flex-col items-start h-full backdrop-blur-md">
                   <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Step 03</span>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tighter">Full Remote Control</h3>
                  <p className="text-gray-400 leading-relaxed text-[15px] tracking-tight">
                    Your phone is now the terminal. Execute scripts and force restarts from the palm of your hand.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features" className="py-32 bg-black relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <RevealSection>
            <div className="mb-20 max-w-3xl">
              <h2 className="text-xs font-bold text-brand-500 tracking-widest uppercase mb-4">Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">Professional Grade Diagnostics.</h3>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <RevealSection key={index} delay={index * 100}>
                <div className="group p-8 rounded-3xl bg-dark-900 border border-white/5 hover:bg-dark-800 transition-all duration-300 h-full">
                  <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 tracking-tighter">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed tracking-tight">
                    {feature.description}
                  </p>
                </div>
              </RevealSection>
            ))}
             
             {/* Large Feature Card - Bento Style */}
             <div className="lg:col-span-3 mt-6">
               <RevealSection delay={300}>
                 <div className="p-10 md:p-14 rounded-3xl bg-dark-900 border border-white/5 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-3 text-brand-500 mb-2">
                            <Wifi className="h-5 w-5" />
                            <span className="font-semibold text-xs uppercase tracking-widest">Secure Bridge</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter">Air-Gapped Safety.</h3>
                        <p className="text-gray-400 text-base leading-relaxed max-w-lg tracking-tight">
                            SparkKey creates a proprietary local wireless loop between the USB hardware and your mobile device. It does not rely on the host computer's compromised network stack.
                        </p>
                    </div>
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="relative w-60 h-[450px] bg-black rounded-[2.5rem] border-[6px] border-dark-800 shadow-2xl flex flex-col overflow-hidden">
                            {/* Mobile UI */}
                             <div className="bg-brand-600 h-20 p-5 flex flex-col justify-end">
                                 <h4 className="text-white font-semibold text-sm tracking-tight">SparkKey Terminal</h4>
                                 <span className="text-brand-100 text-[10px] tracking-wide opacity-80">CONNECTED: LOCAL_HOST</span>
                             </div>
                             <div className="p-4 space-y-2 font-mono text-[10px] leading-tight">
                                 <div className="text-green-500">$ scanning root_dir...</div>
                                 <div className="text-gray-500">found 2432 files</div>
                                 <div className="text-red-500 font-bold">WARNING: threat in /sys32</div>
                                 <div className="text-white">Isolating... [100%]</div>
                                 <div className="mt-8 p-3 rounded bg-white/5 border border-white/10 text-center">
                                     <span className="text-red-500 font-bold uppercase tracking-wider">Force Restart</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                 </div>
               </RevealSection>
             </div>
          </div>
        </div>
      </section>
      
      {/* Specs Section - Minimalist List */}
      <section id="specs" className="py-24 bg-black border-t border-white/5 relative z-20">
         <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <RevealSection>
              <h2 className="text-3xl font-semibold text-white mb-16 tracking-tighter">Technical Specifications</h2>
            </RevealSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                <RevealSection delay={0}>
                  <div>
                      <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">Processor</h4>
                      <p className="text-white text-lg font-medium tracking-tighter">Raspberry Pi Silicon</p>
                      <p className="text-gray-500 text-sm mt-1 tracking-tight">Dedicated Security Chip</p>
                  </div>
                </RevealSection>
                <RevealSection delay={100}>
                  <div>
                      <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">Connectivity</h4>
                      <p className="text-white text-lg font-medium tracking-tighter">RF / Bluetooth LE</p>
                      <p className="text-gray-500 text-sm mt-1 tracking-tight">Encrypted Mesh</p>
                  </div>
                </RevealSection>
                <RevealSection delay={200}>
                  <div>
                      <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">Compatibility</h4>
                      <p className="text-white text-lg font-medium tracking-tighter">Universal</p>
                      <p className="text-gray-500 text-sm mt-1 tracking-tight">macOS, Windows, Linux</p>
                  </div>
                </RevealSection>
                <RevealSection delay={300}>
                  <div>
                      <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">Material</h4>
                      <p className="text-white text-lg font-medium tracking-tighter">Aluminum</p>
                      <p className="text-gray-500 text-sm mt-1 tracking-tight">Space Grey / Silver</p>
                  </div>
                </RevealSection>
            </div>
         </div>
      </section>
    </>
  );
};

export default Features;