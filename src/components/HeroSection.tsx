import React, { useState } from 'react';
import { Smartphone, ShieldCheck, CheckCircle2, Lock, WifiOff, Cloud, FolderLock, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onInstallWebApp: () => void;
  onOpenWebApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onInstallWebApp,
  onOpenWebApp,
}) => {
  const [installing, setInstalling] = useState(false);

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    setInstalling(true);
    onInstallWebApp();

    setTimeout(() => {
      setInstalling(false);
    }, 2000);
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-[#0B0F19] border-b border-slate-800/80">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-[#00FF88]/15 rounded-full blur-[150px]" />
        <div className="absolute top-32 right-1/4 w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & THE ONLY "অ্যাপস ইনস্টল করুন" BUTTON */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Trust Editorial Kicker */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#00FF88]/30 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88] animate-pulse" />
              <span className="text-[#00FF88] font-bold tracking-wide">১০০% ডিরেক্ট ওয়েব অ্যাপ</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">সরাসরি মোবাইলের স্ক্রিনে যুক্ত হয়</span>
            </div>

            {/* Catchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white mb-4 leading-[1.2] text-balance">
              আপনার ব্যক্তিগত জীবনের সর্বোচ্চ নিরাপত্তা—<span className="text-[#00FF88] drop-shadow-[0_0_30px_rgba(0,255,136,0.45)]">Suraksha Vault</span>
            </h1>

            {/* Sub-title */}
            <p className="text-lg sm:text-xl font-semibold text-slate-300 mb-5 leading-relaxed font-sans">
              অফলাইন সামরিক-গ্রেড এনক্রিপশন এবং ডুয়েল-পাসওয়ার্ড অ্যাপ লকার।
            </p>

            {/* Concise Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 max-w-xl mx-auto lg:mx-0 text-left text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" />
                <span>সরাসরি মোবাইলের হোমস্ক্রিনে অ্যাপ আইকন</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" />
                <span>ফাইল ম্যানেজার বা ফোল্ডারে কোনো ফাইল যাবে না</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" />
                <span>আসল ও ফেক পাসওয়ার্ড সুরক্ষা</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" />
                <span>ইন্টারনেট ছাড়াও ১০০% অফলাইনে কাজ করবে</span>
              </div>
            </div>

            {/* THE ONLY "অ্যাপস ইনস্টল করুন" CTA Button on the whole site */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              
              <button
                type="button"
                onClick={handleAction}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-base sm:text-lg font-extrabold text-black bg-[#00FF88] hover:bg-[#00E57A] rounded-2xl shadow-[0_0_35px_rgba(0,255,136,0.5)] hover:shadow-[0_0_50px_rgba(0,255,136,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-black" />
                <span>
                  {installing ? 'স্ক্রিনে যোগ হচ্ছে...' : 'অ্যাপস ইনস্টল করুন'}
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenWebApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border-2 border-slate-700/80 hover:border-[#00FF88]/60 rounded-2xl transition-all shadow-md group cursor-pointer"
              >
                <FolderLock className="w-5 h-5 text-[#00FF88] group-hover:scale-110 transition-transform" />
                <span>সরাসরি ভল্ট ব্যবহার করুন</span>
              </button>

            </div>

            {/* Tech Badges Row */}
            <div className="flex items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                ১-ক্লিকে হোমস্ক্রিনে চালু
              </span>
              <span>·</span>
              <span>কোনো ফাইল ডাউনলোড নেই</span>
              <span>·</span>
              <span>১০০% মেমোরি-ফ্রি</span>
            </div>

          </div>

          {/* Right Column: Floating Glassmorphism Mobile Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
              
              {/* Outer Cyan / Neon Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#00FF88]/25 via-emerald-500/15 to-cyan-500/20 rounded-[48px] blur-2xl opacity-75 animate-pulse" />

              {/* Floating Phone Frame */}
              <div className="relative bg-[#070B14]/90 backdrop-blur-xl border-[3px] border-slate-700/80 rounded-[42px] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden p-3.5 transition-transform hover:scale-[1.02] duration-300">
                
                {/* Punch hole camera */}
                <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-3" />

                {/* Inner Glass Card Screen */}
                <div className="rounded-3xl bg-[#09111D]/95 border border-slate-800/80 p-5 text-center space-y-4">
                  
                  {/* Glowing Animated Shield Avatar */}
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-b from-[#00FF88] via-emerald-400 to-[#0A261D] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,255,136,0.4)]">
                    <div className="w-full h-full rounded-full bg-[#051410] border-2 border-[#00FF88] flex items-center justify-center text-[#00FF88]">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">Suraksha Vault</h3>
                    <p className="text-[11px] text-[#00FF88] font-mono mt-0.5">Mobile Home Screen App</p>
                  </div>

                  {/* 3 Showcase Badges inside Mockup */}
                  <div className="space-y-2.5 text-left">
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 text-xs text-slate-200">
                      <div className="w-7 h-7 rounded-xl bg-emerald-950 flex items-center justify-center text-[#00FF88] shrink-0">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs">ডুয়েল-পাসওয়ার্ড লকার</p>
                        <p className="text-[10px] text-slate-400">আসল ও ফেক পাসওয়ার্ড সুবিধা</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 text-xs text-slate-200">
                      <div className="w-7 h-7 rounded-xl bg-blue-950 flex items-center justify-center text-blue-400 shrink-0">
                        <WifiOff className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs">১০০% অফলাইন ভল্ট</p>
                        <p className="text-[10px] text-slate-400">কোনো ক্লাউড বা সার্ভার লিক নেই</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 text-xs text-slate-200">
                      <div className="w-7 h-7 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 shrink-0">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs">সরাসরি স্ক্রিনে চলে যায়</p>
                        <p className="text-[10px] text-slate-400">ফাইল ম্যানেজারে যেতে হবে না</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Status Indicator in phone screen */}
                  <div className="p-2.5 rounded-xl bg-[#04121B] border border-[#00FF88]/40 flex items-center justify-center gap-2 text-xs font-bold text-[#00FF88]">
                    <Sparkles className="w-4 h-4 text-[#00FF88]" />
                    <span>সামরিক-গ্রেড এনক্রিপশন সক্রিয়</span>
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
