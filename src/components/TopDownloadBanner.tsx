import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { Download, Smartphone, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { triggerDirectDownload } from '../utils/downloader';

interface TopDownloadBannerProps {
  lang: SurakshaLanguage;
  onDownloadClick: () => void;
  onOpenGuide: () => void;
}

export const TopDownloadBanner: React.FC<TopDownloadBannerProps> = ({
  lang,
  onDownloadClick,
  onOpenGuide,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isVisible) return null;

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    triggerDirectDownload('SurakshaVault.apk');
    onDownloadClick();

    setTimeout(() => {
      setIsDownloading(false);
    }, 4000);
  };

  return (
    <aside aria-label="App Download Banner" className="relative z-50 bg-gradient-to-r from-[#03150E] via-[#082218] to-[#051722] border-b-2 border-[#00FF87] px-3 sm:px-6 py-2.5 shadow-[0_4px_25px_rgba(0,255,135,0.25)] animate-in slide-in-from-top duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Left: App Identity & Prompt Message */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="relative shrink-0 hidden xs:flex">
            <div className="w-8 h-8 rounded-xl bg-[#00FF87]/20 border border-[#00FF87] flex items-center justify-center text-[#00FF87] shadow-[0_0_10px_rgba(0,255,135,0.4)]">
              <Smartphone className="w-4 h-4" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-ping" />
          </div>

          <div className="text-xs sm:text-sm">
            <span className="font-extrabold text-white flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
              <span className="text-[#00FF87]">Suraksha Vault</span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="text-slate-200">
                {lang === 'en'
                  ? 'Official Android App Available (18.4 MB)'
                  : 'অফিশিয়াল অ্যান্ড্রয়েড অ্যাপস উপলব্ধ (১৮.৪ মেগাবাইট)'}
              </span>
            </span>
            <p className="text-[11px] text-emerald-300 font-medium mt-0.5">
              {lang === 'en'
                ? 'Want to install the app on your phone? Tap download below to start instantly.'
                : 'আপনার ফোনে অ্যাপটি ইনস্টল করতে চান? নিচের লিংকে চাপ দিলেই সাথে সাথে ডাউনলোড হয়ে যাবে।'}
            </p>
          </div>
        </div>

        {/* Right: Direct Download Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center">
          {/* Main Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-1.5 sm:py-2 text-xs font-extrabold text-black bg-[#00FF87] hover:bg-[#00E575] rounded-xl shadow-[0_0_15px_rgba(0,255,135,0.4)] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <Download className={`w-3.5 h-3.5 text-black ${isDownloading ? 'animate-bounce' : ''}`} />
            <span>
              {isDownloading
                ? (lang === 'en' ? 'Downloading...' : 'ডাউনলোড হচ্ছে...')
                : (lang === 'en' ? 'Download App (APK)' : 'অ্যাপস ডাউনলোড করুন')}
            </span>
          </button>

          {/* How to install */}
          <button
            type="button"
            onClick={onOpenGuide}
            className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 sm:py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
          >
            <span>{lang === 'en' ? 'Install Guide' : 'ইনস্টল নিয়ম'}</span>
          </button>

          {/* Dismiss button */}
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            title="Close banner / ব্যানার বন্ধ করুন"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
