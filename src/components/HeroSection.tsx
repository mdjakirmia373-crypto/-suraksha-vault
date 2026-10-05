import React from 'react';
import { Smartphone, Sparkles, ShieldCheck, WifiOff, Lock, CheckCircle2, ArrowDown, FolderLock } from 'lucide-react';

interface HeroSectionProps {
  onInstallClick: () => void;
  onOpenVault: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onInstallClick,
  onOpenVault,
}) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-slate-800/80 bg-[#060A12]">
      {/* Background glow mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#00FF87]/20 rounded-full blur-[140px]" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Direct Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Trust Kicker Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00FF87]/40 text-xs text-slate-300 mb-5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-pulse" />
              <span className="text-[#00FF87] font-bold">১০০% ওয়েব অ্যাপ (Web App)</span>
              <span className="text-slate-600">·</span>
              <span>কোনো APK ফাইলের ঝামেলা নেই</span>
            </div>

            {/* App Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 text-balance">
              Suraksha <span className="text-[#00FF87] drop-shadow-[0_0_25px_rgba(0,255,135,0.45)]">Vault</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-2xl font-semibold text-slate-200 mb-5 font-display italic">
              "Your Privacy. Your Vault. Your Suraksha."
            </p>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              আপনার ফোনে কোনো অপরিচিত এপিকে ফাইল ডাউনলোড ছাড়াই সরাসরি ব্রাউজার থেকে <strong className="text-white">১-ক্লিকে মোবাইলের হোমস্ক্রিনে ইনস্টল করে নিন</strong>। ফেসবুক, হোয়াটসঅ্যাপ ইত্যাদি অ্যাপের মতোই হোমস্ক্রিন থেকে ফুলস্ক্রিনে সম্পূর্ণ অফলাইনে ব্যবহার করুন!
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8">
              <button
                type="button"
                onClick={onInstallClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-black bg-[#00FF87] hover:bg-[#00E575] rounded-2xl shadow-[0_0_30px_rgba(0,255,135,0.4)] hover:shadow-[0_0_45px_rgba(0,255,135,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 text-black" />
                <span>মোবাইলের হোমস্ক্রিনে ইনস্টল করুন</span>
              </button>

              <button
                type="button"
                onClick={onOpenVault}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border-2 border-slate-700/80 hover:border-[#00FF87]/50 rounded-2xl transition-all shadow-md group"
              >
                <FolderLock className="w-5 h-5 text-[#00FF87] group-hover:scale-110 transition-transform" />
                <span>সরাসরি ভল্ট দেখুন</span>
              </button>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 text-left">
              <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">ইনস্টল মোড</span>
                <span className="text-xs font-bold text-white">Direct Home Screen</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">ইন্টারনেট</span>
                <span className="text-xs font-bold text-[#00FF87]">১০০% অফলাইনে চলে</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">এনক্রিপশন</span>
                <span className="text-xs font-bold text-white">AES-256 Hardware</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">ফোন স্টোরেজ</span>
                <span className="text-xs font-mono font-bold text-white">০% মেমোরি অপচয়</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Phone Showcase Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Outer Cyan / Neon Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#00FF87]/30 to-cyan-500/25 rounded-[44px] blur-xl opacity-70" />

              {/* Phone Frame */}
              <div className="relative bg-[#050812] border-[3px] border-slate-700/80 rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden p-3.5">
                
                {/* Punch hole */}
                <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-3" />

                {/* Shield Card Screen */}
                <div className="rounded-3xl bg-[#09111D] border border-slate-800 p-5 text-center space-y-4">
                  
                  {/* Glowing Shield Avatar */}
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-b from-[#00FF87] via-cyan-400 to-[#0A261D] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,255,135,0.4)]">
                    <div className="w-full h-full rounded-full bg-[#051410] border-2 border-[#00FF87] flex items-center justify-center text-[#00FF87]">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-white">Suraksha Vault</h3>
                    <p className="text-[11px] text-[#00FF87] font-mono mt-0.5">Mobile Web App</p>
                  </div>

                  {/* 4 Feature Badges inside Phone */}
                  <div className="space-y-2 text-left">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200">
                      <Sparkles className="w-4 h-4 text-[#00FF87] shrink-0" />
                      <span>১-ট্যাপে সরাসরি হোমস্ক্রিনে চলে যায়</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200">
                      <WifiOff className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>ইন্টারনেট ছাড়াও ফুলস্ক্রিনে কাজ করে</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200">
                      <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>৪-ডিজিট পিন দিয়ে প্রতিদিন আনলক</span>
                    </div>
                  </div>

                  {/* Direct Phone Install Button */}
                  <button
                    type="button"
                    onClick={onInstallClick}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,135,0.3)] transition-all"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>হোমস্ক্রিনে ইনস্টল করুন</span>
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
