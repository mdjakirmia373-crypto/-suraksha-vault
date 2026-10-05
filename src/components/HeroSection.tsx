import React, { useState } from 'react';
import { SurakshaLanguage, APP_SPECS } from '../types/suraksha';
import { Download, ShieldCheck, Smartphone, Sparkles, UserPlus, FolderLock, ArrowRight, Check } from 'lucide-react';
import { AuthCardView } from './AuthCardView';
import { VaultDashboardView } from './VaultDashboardView';
import { PhoneSimulator } from './PhoneSimulator';

interface HeroSectionProps {
  lang: SurakshaLanguage;
  onDownloadClick: () => void;
  onOpenGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onDownloadClick,
  onOpenGuide,
}) => {
  // Mode: 'auth' (Sign up / Login from screenshot) OR 'dashboard' (Live Dashboard from screenshot)
  const [activeView, setActiveView] = useState<'auth' | 'dashboard'>('auth');
  const [downloading, setDownloading] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleInstantDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    setCountdown(2);

    const timer1 = setTimeout(() => {
      setCountdown(1);
    }, 700);

    const timer2 = setTimeout(() => {
      setCountdown(0);
      onDownloadClick();
    }, 1400);

    const timer3 = setTimeout(() => {
      setDownloading(false);
      setCountdown(null);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  return (
    <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 overflow-hidden border-b border-slate-800/80 bg-[#060A12]">
      {/* Background glow mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#00FF87]/20 rounded-full blur-[140px]" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Top Header Mode Switcher: [সাইন আপ / লগইন] ⟷ [ভল্ট ড্যাশবোর্ড প্রিভিউ] */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#09111D] p-2 sm:p-2.5 rounded-2xl border border-slate-800 max-w-4xl mx-auto shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-white">
              {lang === 'en' ? 'Live Interactive App Experience:' : 'লাইভ অ্যাপ ইন্টারফেস মোড:'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveView('auth')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeView === 'auth'
                  ? 'bg-[#00FF87] text-black shadow-[0_0_15px_rgba(0,255,135,0.4)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>সাইন আপ ও লগইন</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('dashboard')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeView === 'dashboard'
                  ? 'bg-[#00FF87] text-black shadow-[0_0_15px_rgba(0,255,135,0.4)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <FolderLock className="w-3.5 h-3.5" />
              <span>ভল্ট ড্যাশবোর্ড</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: AUTHENTICATION (Sign Up / Login) from screenshot */}
        {activeView === 'auth' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Main Sign Up / Login Screen */}
            <div className="lg:col-span-7">
              <AuthCardView
                lang={lang}
                onSuccessAuth={() => setActiveView('dashboard')}
                onDownloadApk={onDownloadClick}
                onOpenGuide={onOpenGuide}
              />
            </div>

            {/* Right Col: Instant Download & Value Highlights */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Giant Direct Download Card */}
              <div className="rounded-3xl bg-[#09111D] border-2 border-[#00FF87]/50 p-6 shadow-[0_0_35px_rgba(0,255,135,0.15)] text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#00FF87]">
                    OFFICIAL ANDROID APK
                  </span>
                  <span className="text-[10px] font-bold text-black bg-[#00FF87] px-2 py-0.5 rounded-full">
                    v1.0.4 STABLE
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-1">
                  SurakshaVault.apk
                </h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {lang === 'en'
                    ? 'Download the full Android application directly. 100% offline, virus-free, and ads-free.'
                    : 'সরাসরি অফিসিয়াল অ্যান্ড্রয়েড অ্যাপস ডাউনলোড করুন। কোনো অ্যাড বা ট্র্যাকিং নেই, সম্পূর্ণ অফলাইন।'}
                </p>

                {/* Instant Download Action Button */}
                <a
                  href="/SurakshaVault.apk"
                  download="SurakshaVault.apk"
                  onClick={handleInstantDownload}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base text-black bg-[#00FF87] hover:bg-[#00E575] shadow-[0_0_25px_rgba(0,255,135,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer select-none mb-3"
                >
                  <Download className={`w-5 h-5 text-black ${downloading ? 'animate-bounce' : ''}`} />
                  <span>
                    {downloading
                      ? (countdown && countdown > 0 
                          ? `কয়েক সেকেন্ডের মধ্যে ডাউনলোড শুরু হচ্ছে (${countdown})...` 
                          : 'ডাউনলোড শুরু হয়েছে!')
                      : 'অ্যাপস ডাউনলোড করুন (১৮.৪ MB)'}
                  </span>
                </a>

                <p className="text-[11px] text-center text-slate-400 mb-4">
                  ⚡ ক্লিক করার সাথে সাথে মাত্র কয়েক সেকেন্ডে সরাসরি ডাউনলোড শুরু হবে
                </p>

                {/* 'অ্যাপস ইনস্টল করুন' button */}
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-[#00FF87]" />
                  <span>অ্যাপস ইনস্টল করার সহজ নিয়ম (Guide)</span>
                </button>
              </div>

              {/* Specs pill */}
              <div className="p-4 rounded-2xl bg-[#09111D] border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">অপারেটিং সিস্টেম:</span>
                  <span className="text-white font-medium">Android 8.0 - Android 15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">এনক্রিপশন স্ট্যান্ডার্ড:</span>
                  <span className="text-[#00FF87] font-mono font-medium">AES-256 Hardware Level</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">প্যাকেজ সাইজ:</span>
                  <span className="text-white font-mono">18.4 MB</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* VIEW 2: VAULT DASHBOARD from Screenshot_20261005_033619.jpg */}
        {activeView === 'dashboard' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0A1624] border border-[#00FF87]/30 p-3.5 rounded-2xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#00FF87]" />
                <span>এটি সুরক্ষ ভল্ট অ্যাপসের ভেতরের আসল ড্যাশবোর্ড। আপনি সরাসরি ফাইল বা নোট দেখতে ও যোগ করতে পারেন।</span>
              </div>
              <a
                href="/SurakshaVault.apk"
                download="SurakshaVault.apk"
                onClick={handleInstantDownload}
                className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center gap-1.5 shadow-md shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>অ্যাপস ডাউনলোড করুন</span>
              </a>
            </div>

            <VaultDashboardView
              lang={lang}
              onLock={() => setActiveView('auth')}
              onOpenAppLocker={() => alert('মোবাইল অ্যাপ লকার সেটিংস: হোয়াটসঅ্যাপ, ফেসবুক ও বিকাশ লক করা আছে।')}
            />
          </div>
        )}

      </div>
    </section>
  );
};
