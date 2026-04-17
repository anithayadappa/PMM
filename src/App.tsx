/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, Moon, Menu, X, Rocket, Shield, Target, Zap, 
  ArrowRight, Layers, Sparkles, Layout, BarChart3, 
  Github, Twitter, Mail 
} from 'lucide-react';

// --- Components ---

const Navbar = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: (val: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white transition-colors">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6">
        <div className="flex items-center gap-4 group">
          <div className="font-display font-black text-xl tracking-tighter bg-pastel-yellow brutal-border px-4 py-1 brutal-shadow-hover group-hover:bg-pastel-blue transition-colors">
            THE HIDDEN LAYER
          </div>
        </div>

        <div className="hidden md:flex gap-4 font-black uppercase text-sm">
          <a href="#solutions" className="px-4 py-2 hover:bg-pastel-green hover:border-black hover:border-2 transition-all">Solutions</a>
          <a href="#methodology" className="px-4 py-2 hover:bg-pastel-red hover:border-black hover:border-2 transition-all">Methodology</a>
          <a href="#playbooks" className="px-4 py-2 hover:bg-pastel-blue hover:border-black hover:border-2 transition-all">Playbooks</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white hover:bg-pastel-yellow transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button className="hidden md:block bg-black text-white dark:bg-white dark:text-black font-black uppercase text-xs px-6 py-3 border-2 border-black transition-all hover:bg-pastel-blue">
            LOG IN
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-zinc-900 border-b-4 border-black p-8 shadow-2xl flex flex-col gap-6 font-black uppercase"
          >
            <a href="#solutions" onClick={() => setIsOpen(false)}>Solutions</a>
            <a href="#methodology" onClick={() => setIsOpen(false)}>Methodology</a>
            <a href="#playbooks" onClick={() => setIsOpen(false)}>Playbooks</a>
            <button className="bg-black text-white dark:bg-white dark:text-black py-4">LOG IN</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-[1.2fr_0.8fr] border-b-4 border-black dark:border-white pt-20">
      {/* Left Pane - Hero Content */}
      <div className="bg-white dark:bg-zinc-900 p-8 lg:p-20 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black transition-colors">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-black text-7xl md:text-9xl leading-[0.9] mb-12 dark:text-white uppercase">
            THE <span className="text-pastel-blue">HIDDEN</span> <br /> LAYER.
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-xl opacity-80 dark:text-zinc-300 leading-relaxed">
            The PMM intelligence engine that converts complex product architectures into market-ready narratives with surgical precision.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="brutal-btn bg-pastel-dark-blue text-white group">
              CONNECT WITH US <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Pane - Feature Grid (Vertical) */}
      <div className="grid grid-rows-3 bg-zinc-100 dark:bg-zinc-950">
        {[
          { tag: "01 Intelligence", title: "COMPETITIVE FORGE", desc: "Automated battlecards that refresh in real-time based on live product updates.", color: "bg-pastel-red" },
          { tag: "02 Narrative", title: "THE COGNITIVE HUB", desc: "Our LLM-native engine maps technical features to emotional benefits for Tier 1 launches.", color: "bg-pastel-yellow" },
          { tag: "03 Alignment", title: "SALES SYNC V3", desc: "Instant content distribution to field teams with built-in feedback loops.", color: "bg-pastel-green" }
        ].map((item, i) => (
          <div key={i} className={`${item.color} p-10 border-b-4 last:border-b-0 border-black dark:border-white flex flex-col justify-center transition-colors group cursor-default hover:brightness-105`}>
            <span className="font-display text-xs uppercase mb-2 tracking-widest">{item.tag}</span>
            <h3 className="font-display text-3xl font-black mb-4">{item.title}</h3>
            <p className="font-medium text-sm leading-tight opacity-90">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="bg-black text-white py-6 overflow-hidden select-none border-b-4 border-white dark:border-black">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-12 mx-12">
            <span className="font-display font-black text-2xl uppercase">BUILD FASTER</span>
            <span className="text-pastel-yellow">●</span>
            <span className="font-display font-black text-2xl uppercase">LAUNCH LOUDER</span>
            <span className="text-pastel-yellow">●</span>
            <span className="font-display font-black text-2xl uppercase">SCALE DEEPER</span>
            <span className="text-pastel-yellow">●</span>
            <span className="font-display font-black text-2xl uppercase">THE HIDDEN LAYER IS YOUR EDGE</span>
            <span className="text-pastel-yellow">●</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="py-12 px-4 bg-black text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Layers className="text-pastel-blue" />
          <span className="font-display font-black text-2xl">THE HIDDEN LAYER</span>
        </div>
        <p className="opacity-60 text-sm max-w-xs">Built for the next generation of product marketing outliers.</p>
      </div>

      <div className="flex gap-4">
        <a href="#" className="w-12 h-12 brutal-border border-white flex items-center justify-center hover:bg-pastel-dark-blue transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#" className="w-12 h-12 brutal-border border-white flex items-center justify-center hover:bg-pastel-red transition-colors">
          <Github size={20} />
        </a>
        <a href="#" className="w-12 h-12 brutal-border border-white flex items-center justify-center hover:bg-pastel-dark-green transition-colors">
          <Mail size={20} />
        </a>
      </div>

      <div className="text-sm opacity-60">
        © 2026 THE HIDDEN LAYER. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#F0F0F0] dark:bg-black font-sans selection:bg-pastel-red selection:text-white scroll-smooth transition-colors">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main className="transition-colors">
        <Hero />
        <Marquee />
        
        <section id="methodology" className="py-24 px-4 bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-black text-5xl md:text-7xl mb-16 text-center dark:text-white uppercase leading-tight">
              HOW WE <span className="text-pastel-red">STRIP</span> IT BACK.
            </h2>

            <div className="space-y-12">
              {[
                { step: "01", title: "THE AUDIT", desc: "We ingest your current strategy and highlight the fluff.", color: "bg-pastel-blue" },
                { step: "02", title: "THE LAYER", desc: "Identify the hidden value proposition that resonates.", color: "bg-pastel-yellow" },
                { step: "03", title: "THE SCALE", desc: "Automate your execution layers to hit your targets.", color: "bg-pastel-green" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className={`w-32 h-32 flex-shrink-0 brutal-border ${item.color} flex items-center justify-center font-display font-black text-5xl text-white`}>
                    {item.step}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-display font-black text-3xl mb-2 dark:text-white uppercase">{item.title}</h3>
                    <p className="text-lg opacity-80 dark:text-zinc-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 px-4 bg-pastel-blue/10 dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase dark:text-white">NO NONSENSE PRICING</h2>
              <p className="font-bold opacity-60 uppercase tracking-widest mt-2">Scale as you grow.</p>
            </div>

            <div className="flex justify-center">
              <div className="brutal-card bg-white dark:bg-zinc-800 p-8 max-w-sm w-full -rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-pastel-red text-white dark:text-black font-black py-2 mb-6 uppercase tracking-widest">MOST POPULAR</div>
                <div className="font-display font-black text-6xl mb-2 dark:text-white">$499<span className="text-xl">/mo</span></div>
                <p className="font-bold mb-8 dark:text-zinc-400">UNLIMITED STRATEGY AUDITS</p>
                <ul className="text-left space-y-4 mb-8 font-medium dark:text-zinc-300">
                  <li className="flex gap-2">✓ ALL LAYER ACCESS</li>
                  <li className="flex gap-2">✓ GTM AUTOMATION</li>
                  <li className="flex gap-2">✓ PRIORITY DEPLOYMENT</li>
                </ul>
                <button className="brutal-btn bg-pastel-dark-green text-white w-full">SCALE WITH STRATEGYX</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Styles for Infinite Scroll */}
      <style>{`
        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: 200%;
          animation: infiniteScroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
