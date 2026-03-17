/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Globe, 
  Shield, 
  ChevronRight, 
  ArrowUpRight, 
  Menu, 
  X, 
  Activity,
  Terminal
} from 'lucide-react';
import { NAV_ITEMS, FEATURES, GPU_CARDS, STATS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">星云<span className="text-brand-600">算力</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-brand-600 transition-all active:scale-95">
            进入控制台
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="text-lg font-medium py-2 border-b border-slate-100 text-slate-800">
                  {item.label}
                </a>
              ))}
              <button className="w-full py-4 bg-brand-600 text-white font-bold rounded-xl mt-4">
                立即开始
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const fullLines = [
    "> nebula deploy --cluster h100-cn-east",
    "正在初始化 8x H100 节点...",
    "网络配置完成 [400Gbps IB]",
    "正在挂载 NVMe 存储 [3.2TB]...",
    "集群就绪: 准备接收工作负载"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullLines.length) {
        setTerminalLines(prev => [...prev, fullLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-xs font-semibold text-brand-700 mb-8 border border-brand-100">
            <Activity className="w-3.5 h-3.5" />
            新一代 AI 基础设施已上线
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-8 text-slate-900 whitespace-nowrap">
            重塑 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">算力未来</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
            即时访问 NVIDIA H100 集群。通过企业级基础设施和零延迟编排，助力您的 AI 模型快速扩展。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-brand-600 text-white font-bold rounded-full hover:shadow-[0_10px_30px_rgba(20,184,166,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2">
              开始构建 <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-slate-100 text-slate-700 font-semibold rounded-full hover:bg-slate-200 transition-all active:scale-95">
              查看技术文档
            </button>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24 relative"
        >
          <div className="bg-white rounded-[3rem] p-4 md:p-8 max-w-5xl mx-auto relative shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-slate-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent pointer-events-none rounded-[3rem]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 rounded-3xl p-8 text-left shadow-2xl min-h-[240px] flex flex-col">
                <Terminal className="text-brand-400 mb-6" />
                <div className="font-mono text-xs space-y-2">
                  {terminalLines.map((line, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={idx === 0 ? "text-brand-400/80" : "text-white/40"}
                    >
                      {line}
                    </motion.div>
                  ))}
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-brand-500 align-middle ml-1"
                  />
                </div>
                <div className="mt-auto pt-6 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: terminalLines.length === fullLines.length ? '100%' : `${(terminalLines.length / fullLines.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-brand-500" 
                  />
                </div>
              </div>
              <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 flex flex-col justify-between border border-slate-100">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">集群实时性能</h3>
                    <p className="text-sm text-slate-400">实时吞吐量监控数据</p>
                  </div>
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-5 bg-brand-500/30 rounded-full" />)}
                  </div>
                </div>
                <div className="flex items-end gap-3 h-32">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 30 }}
                      animate={{ height: [30, 80, 50, 110, 70] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-brand-100 to-brand-500 rounded-t-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-24 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-sm font-medium text-slate-400 mb-2">{stat.label}</div>
              <div className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">{stat.value}</div>
              <div className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded inline-block">{stat.trend}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="solutions" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-slate-900">为规模而生</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            我们的基础设施旨在轻松处理最苛刻的 AI 工作负载，提供极致的稳定性和性能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = { Zap, Cpu, Globe, Shield }[feature.icon] || Zap;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-brand-500/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors">
                  <Icon className="text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-40 bg-slate-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-slate-900">按需计费算力</h2>
            <p className="text-slate-500 text-lg">
              透明的价格体系，无隐藏费用。按秒计费，仅为您使用的资源付费。
            </p>
          </div>
          <div className="flex gap-3 p-1.5 bg-slate-100 rounded-full">
            <button className="px-8 py-3 bg-white shadow-sm rounded-full text-sm font-bold text-slate-900">按需</button>
            <button className="px-8 py-3 rounded-full text-sm font-bold text-slate-400 hover:text-slate-600">预留</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {GPU_CARDS.map((gpu, i) => (
            <motion.div
              key={gpu.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[3rem] bg-white border flex flex-col ${gpu.tag ? 'border-brand-500 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'}`}
            >
              {gpu.tag && (
                <div className="absolute -top-5 left-10 px-6 py-1.5 bg-brand-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                  {gpu.tag}
                </div>
              )}
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-3 text-slate-900">{gpu.name}</h3>
                <p className="text-sm font-mono text-slate-400 font-medium">{gpu.specs}</p>
              </div>
              <div className="mb-10">
                <div className="text-5xl font-black mb-2 text-slate-900">{gpu.price}</div>
                <div className="text-sm text-slate-400 font-medium">每小时 / 每节点</div>
              </div>
              <div className="space-y-5 mb-12">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-slate-400">可用状态</span>
                  <span className={gpu.availability === 'Available' ? 'text-brand-600' : 'text-amber-500'}>
                    {gpu.availability === 'Available' ? '充足' : '紧张'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-slate-400">网络带宽</span>
                  <span className="text-slate-700">400 Gbps IB</span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-slate-400">存储配置</span>
                  <span className="text-slate-700">NVMe SSD</span>
                </div>
              </div>
              <button className={`w-full py-5 rounded-[1.5rem] font-bold transition-all active:scale-95 flex items-center justify-center gap-2 text-lg ${gpu.tag ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                立即部署 <ArrowUpRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">星云<span className="text-brand-600">算力</span></span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-lg">
              通过高性能 GPU 集群和无缝云端编排，赋能下一代 AI 创新。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-slate-900">产品服务</h4>
            <ul className="space-y-5 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">GPU 集群</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">云端存储</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">高速网络</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">API 文档</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-slate-900">关于我们</h4>
            <ul className="space-y-5 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">公司简介</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">加入我们</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">技术博客</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-100 text-sm font-medium text-slate-400">
          <p>© 2026 星云算力 (Nebula Compute Inc.) 版权所有</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-slate-900 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-slate-900 transition-colors">服务条款</a>
            <a href="#" className="hover:text-slate-900 transition-colors">安全合规</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-500/20">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        
        {/* CTA Section */}
        <section className="py-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-600/20 to-transparent pointer-events-none" />
              <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tight text-white">准备好开启加速了吗？</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-xl leading-relaxed">
                加入数千名开发者和研究人员的行列，在星云算力平台上构建 AI 的未来。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 py-5 bg-brand-600 text-white font-bold rounded-full hover:shadow-[0_20px_50px_rgba(20,184,166,0.4)] transition-all active:scale-95 text-xl">
                  免费创建账户
                </button>
                <button className="w-full sm:w-auto px-12 py-5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all active:scale-95 text-xl">
                  联系销售团队
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
