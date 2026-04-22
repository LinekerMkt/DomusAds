/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';

const Logo = () => (
  <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
    <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg">D</div>
    <span>DOMUS</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-8 border border-gray-200 rounded-2xl hover:border-black transition-colors group bg-white shadow-sm hover:shadow-xl"
  >
    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="font-semibold text-xl mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#services" className="hover:text-gray-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-500 transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
            <a 
              href="https://wa.me/message/LX5U4LIJ445UK1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 text-2xl font-bold tracking-tight">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="bg-black text-white py-4 rounded-2xl w-full">Start Your Growth</button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Strategic Growth Partner
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
              MASTERING THE ART OF <span className="text-gray-400">INFLUENCE.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              We translate brand vision into market authority. Specialized in digital propaganda, strategic positioning, and aggressive growth models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/message/LX5U4LIJ445UK1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
              >
                Scale Your Business <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors">
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[2/3] max-w-md mx-auto relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
              <img 
                src="https://i.imgur.com/wcCdnZI.jpeg"
                alt="Advertising Service Specialist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Lead Strategist</p>
                  <p className="text-2xl font-bold">Expert Marketing Authority</p>
                </div>
              </div>
            </div>
            
            {/* Abstract Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full -z-10 blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gray-200 rounded-full -z-10 blur-3xl opacity-40" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Core Competencies</h2>
            <p className="text-gray-500 max-w-lg">Engineered solutions for brands that demand nothing less than complete market dominance.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Target}
              title="Strategic Propaganda"
              description="Crafting narratives that reshape perception and drive decisive consumer action through psychological framing."
              index={0}
            />
            <FeatureCard 
              icon={BarChart3}
              title="Identity Mastery"
              description="Designing visual and verbal systems that project absolute authority and premium craftsmanship."
              index={1}
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Conversion Logic"
              description="Data-driven funnels designed to turn attention into revenue with uncompromising efficiency."
              index={2}
            />
            <FeatureCard 
              icon={Users}
              title="Performance Ads"
              description="High-velocity lead generation campaigns that dominate social feeds and industry conversations."
              index={3}
            />
            <FeatureCard 
              icon={CheckCircle2}
              title="Brand Protection"
              description="Reputation management and proactive narrative control for high-profile institutions."
              index={4}
            />
            <FeatureCard 
              icon={Target}
              title="Market Intelligence"
              description="In-depth analysis of adversary positioning to find and exploit undefended market whitespace."
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Footer / contact */}
      <footer id="contact" className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-8">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg">D</div>
                <span>DOMUS</span>
              </div>
              <p className="text-gray-400 text-xl max-w-md leading-relaxed mb-10">
                The world doesn't buy what you do, they buy why you do it and how you project it. Let's make it undeniable.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-10 rounded-[2.5rem]">
              <h3 className="text-3xl font-bold mb-8">Let's discuss authority.</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+55 47 9 9714-4452</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>consult@domusads.com</span>
                </div>
                <a 
                  href="https://wa.me/message/LX5U4LIJ445UK1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black py-4 rounded-2xl font-bold mt-10 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Submit Interest
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p>© 2026 Domus Advertising & Propaganda. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/message/LX5U4LIJ445UK1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}
