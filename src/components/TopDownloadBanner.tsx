import React, { useState } from 'react';
import { Smartphone, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface TopInstallBannerProps {
  onInstallClick: () => void;
  isInstallable: boolean;
}

export const TopDownloadBanner: React.FC<TopInstallBannerProps> = ({
  onInstallClick,
  isInstallable,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Web App Install Banner"
      className="sticky top-0 z-50 bg-[#040C16] border-b-2 border-[#00FF87] px-3 sm:px-6 py-2.5 shadow-[0_4px_25px_rgba(0,255,135,0.25)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Left: Web App Home Screen Prompt */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-xl bg-[#00FF87]/20 border border-[#00FF87] flex items-center justify-center text-[#00FF87] shrink-0 shadow-[0_0_10px_rgba(0,255,135,0.4)] hidden xs:flex">
            <Smartphone className="w-4 h-4" />
          </div>

          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
            <span className="font-extrabold text-[#00FF87]">Suraksha Vault Web App</span>
            <span className="text-slate-400 mx-1.5">|</span>
            <span>কোনো APK ফাইলের ঝামেলা নেই — সরাসরি মোবাইলের হোমস্ক্রিনে ইনস্টল করে ব্যবহার করুন!</span>
          </p>
        </div>

        {/* Right: Instant Home Screen Install Button & Close */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={onInstallClick}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-extrabold text-black bg-[#00FF87] hover:bg-[#00E575] rounded-xl shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>হোমস্ক্রিনে অ্যাপ ইনস্টল করুন</span>
          </button>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            title="ব্যানার বন্ধ করুন"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
