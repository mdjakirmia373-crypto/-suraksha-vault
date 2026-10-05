import React from 'react';
import { Smartphone, ShieldCheck, Check, Sparkles, Zap, Layers, RefreshCw } from 'lucide-react';

interface DownloadSectionProps {
  onInstallClick: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onInstallClick }) => {
  return (
    <section id="download" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00FF87]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF87] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>হোমস্ক্রিন ইনস্টলেশন সেন্টার</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            সরাসরি মোবাইলের হোমস্ক্রিনে অ্যাপস নিন
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            কোনো APK ফাইল ডাউনলোড করার ঝামেলা নেই। ১-ক্লিকে ক্রোম ব্রাউজার থেকে সরাসরি আপনার ফোনের হোমস্ক্রিনে অ্যাপ আইকন তৈরি করে নিন।
          </p>
        </div>

        {/* Official Single Web App Install Card */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-[#091522] via-[#09111D] to-[#070D18] border-2 border-[#00FF87] p-6 sm:p-9 shadow-[0_0_40px_rgba(0,255,135,0.2)] text-left relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-[#00FF87]/20 border border-[#00FF87] flex items-center justify-center text-[#00FF87] shadow-[0_0_20px_rgba(0,255,135,0.3)] shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-[#00FF87] tracking-wider uppercase block">
                  OFFICIAL PWA WEB APP
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Suraksha Vault Web App
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00FF87] text-black text-xs font-bold font-mono self-start sm:self-center">
              <Check className="w-3.5 h-3.5" />
              <span>DIRECT INSTALL</span>
            </span>
          </div>

          {/* Specs Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">অ্যাপের ধরন:</span>
              <span className="font-mono font-bold text-white">Standalone Web App (PWA)</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">স্টোরেজ দখল:</span>
              <span className="font-mono font-bold text-[#00FF87]">০ MB (Instant)</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex justify-between items-center text-xs sm:col-span-2">
              <span className="text-slate-400">ডিভাইস সাপোর্ট:</span>
              <span className="font-bold text-white">যেকোনো অ্যান্ড্রয়েড ফোন (Chrome / Browser)</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex justify-between items-center text-xs sm:col-span-2">
              <span className="text-slate-400">নিরাপত্তা ও প্রাইভেসি:</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#00FF87]" />
                <span>কোনো ক্ষতিকর সতর্কবার্তা বা কুকি জটিলতা নেই</span>
              </span>
            </div>
          </div>

          {/* Direct Home Screen Install Button */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={onInstallClick}
              className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-extrabold text-base sm:text-lg text-black bg-[#00FF87] hover:bg-[#00E575] shadow-[0_0_30px_rgba(0,255,135,0.4)] hover:shadow-[0_0_45px_rgba(0,255,135,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer select-none"
            >
              <Smartphone className="w-6 h-6 text-black" />
              <span>মোবাইলের হোমস্ক্রিনে অ্যাপ ইনস্টল করুন</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
              <span>⚡ ১-ক্লিকে হোমস্ক্রিনে যাবে</span>
              <span>·</span>
              <span>📱 ফুলস্ক্রিন অ্যাপ ইন্টারফেস</span>
              <span>·</span>
              <span>🛡️ ১০০% অফলাইনে নিরাপদ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
