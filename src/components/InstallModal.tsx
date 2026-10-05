import React from 'react';
import { SurakshaLanguage, APP_SPECS } from '../types/suraksha';
import { X, Smartphone, ShieldCheck, Download, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { triggerDirectDownload } from '../utils/downloader';

interface InstallModalProps {
  lang: SurakshaLanguage;
  onClose: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({ lang, onClose }) => {
  const handleDownloadNow = () => {
    triggerDirectDownload('SurakshaVault.apk');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#090F1C] border border-[#00FF87]/40 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-7 text-slate-200">
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-[#00FF87]/15 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87] shrink-0 shadow-[0_0_20px_rgba(0,255,135,0.2)]">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {lang === 'en' ? 'Install Suraksha Vault App' : 'অ্যাপস ইনস্টল করার সহজ নিয়ম'}
            </h3>
            <p className="text-xs text-slate-400">
              {lang === 'en' ? '3 Simple steps for Android devices' : 'আপনার অ্যান্ড্রয়েড ফোনে সহজে ইনস্টল করুন'}
            </p>
          </div>
        </div>

        {/* 3 Step Visual Guide */}
        <div className="space-y-3.5 mb-6">
          
          {/* Step 1 */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-xl bg-[#00FF87] text-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
              ১
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {lang === 'en' ? 'Step 1: Download & Open the APK' : '১. এপিকে ফাইল ডাউনলোড করে ওপেন করুন'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'en'
                  ? 'Tap "Download APK". If browser shows "File might be harmful", select "Download anyway", then tap the file from your notifications.'
                  : 'নিচের "Download APK" বাটনে ট্যাপ করুন। ব্রাউজারে সতর্কবার্তা দেখালে "Download anyway" চাপুন এবং নোটিফিকেশন থেকে ফাইলটি ওপেন করুন।'}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-xl bg-[#00FF87] text-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
              ২
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {lang === 'en' ? 'Step 2: Allow Unknown Apps in Settings' : '২. সেটিংসে "Install Unknown Apps" অন করুন'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'en'
                  ? 'If prompted "Your phone is not allowed to install unknown apps", tap Settings and switch ON "Allow from this source".'
                  : 'যদি কোনো পারমিশন চায়, তবে Settings-এ চাপ দিয়ে "Allow from this source" অপশনটি চালু (ON) করে দিন।'}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-xl bg-[#00FF87] text-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
              ৩
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {lang === 'en' ? 'Step 3: Tap Install & Enjoy' : '৩. "Install" বাটনে চাপ দিন'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'en'
                  ? 'Press "Install" to finish setup. Suraksha Vault is now active on your Android phone!'
                  : 'ব্যস! এরপর স্ক্রিনে আসা "Install" বাটনে চাপ দিলেই অ্যাপটি আপনার ফোনে ইনস্টল হয়ে যাবে এবং ব্যবহারের জন্য প্রস্তুত হবে।'}
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleDownloadNow}
            className="flex-1 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all"
          >
            <Download className="w-4 h-4 text-black" />
            <span>{lang === 'en' ? 'Download SurakshaVault.apk Now' : 'এখনই APK ডাউনলোড করুন'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="py-3 px-5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors text-center"
          >
            {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>

      </div>
    </div>
  );
};
