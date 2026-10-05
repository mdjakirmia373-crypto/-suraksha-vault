import React, { useState } from 'react';
import { X, Smartphone, Download, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MoreVertical } from 'lucide-react';
import { triggerDirectDownload } from '../utils/downloader';

interface HomeScreenInstallModalProps {
  isInstallable: boolean;
  onNativeInstall: () => Promise<boolean>;
  onClose: () => void;
}

export const HomeScreenInstallModal: React.FC<HomeScreenInstallModalProps> = ({
  isInstallable,
  onNativeInstall,
  onClose,
}) => {
  const [installSuccess, setInstallSuccess] = useState(false);
  const [downloadingApk, setDownloadingApk] = useState(false);

  const handleInstantInstall = async () => {
    if (isInstallable) {
      const ok = await onNativeInstall();
      if (ok) {
        setInstallSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2500);
        return;
      }
    }

    // Also trigger APK download as backup
    triggerDirectDownload('SurakshaVault.apk');
    setDownloadingApk(true);
    setTimeout(() => {
      setDownloadingApk(false);
    }, 3500);
  };

  const handleApkDownload = () => {
    triggerDirectDownload('SurakshaVault.apk');
    setDownloadingApk(true);
    setTimeout(() => {
      setDownloadingApk(false);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#09111D] border-2 border-[#00FF87] shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-7 text-slate-100">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          title="বন্ধ করুন"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#00FF87]/20 to-cyan-500/20 border-2 border-[#00FF87] flex items-center justify-center text-[#00FF87] mx-auto mb-3 shadow-[0_0_25px_rgba(0,255,135,0.4)]">
            <Smartphone className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            হোমস্ক্রিনে অ্যাপস ইনস্টল করুন
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            ক্লিক করলেই সরাসরি আপনার মোবাইলের হোমস্ক্রিনে অ্যাপ আইকন চলে যাবে!
          </p>
        </div>

        {/* Success Alert */}
        {installSuccess ? (
          <div className="p-4 rounded-2xl bg-emerald-950 border border-[#00FF87] text-center space-y-2 my-4 animate-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-[#00FF87] mx-auto animate-bounce" />
            <p className="text-base font-bold text-white">
              অভিনন্দন! অ্যাপটি হোমস্ক্রিনে যুক্ত হয়েছে!
            </p>
            <p className="text-xs text-emerald-300">
              এখন আপনার ফোনের হোমস্ক্রিনে গিয়ে সুরক্ষ ভল্ট আইকনে ট্যাপ করলেই ফুলস্ক্রিনে অ্যাপ হিসেবে ওপেন হবে।
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            
            {/* Visual Phone Mock Preview of Home Screen Icon */}
            <div className="p-4 rounded-2xl bg-[#050B14] border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#04121B] border-2 border-[#00FF87] p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,135,0.3)] shrink-0">
                  <ShieldCheck className="w-7 h-7 text-[#00FF87]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Suraksha Vault</h4>
                  <p className="text-[11px] text-[#00FF87] font-mono mt-0.5">Mobile App Icon</p>
                  <p className="text-[10px] text-slate-400">ফুলস্ক্রিন স্ট্যান্ডঅ্যালন অ্যাপ হিসেবে চলবে</p>
                </div>
              </div>

              <span className="text-[10px] font-bold text-black bg-[#00FF87] px-2.5 py-1 rounded-full shrink-0">
                HOMESCREEN READY
              </span>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={handleInstantInstall}
              className="w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm sm:text-base text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:shadow-[0_0_35px_rgba(0,255,135,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-5 h-5 text-black" />
              <span>মোবাইলের হোমস্ক্রিনে ইনস্টল করুন</span>
            </button>

            {/* Browser 1-Tap Guide */}
            <div className="p-3.5 rounded-2xl bg-[#091522] border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-white">
                <MoreVertical className="w-4 h-4 text-[#00FF87]" />
                <span>ব্রাউজার থেকে সরাসরি হোমস্ক্রিনে নেওয়ার নিয়ম:</span>
              </div>
              <p className="text-slate-400 pl-6 leading-relaxed">
                ১. Chrome ব্রাউজারের উপরে ডানপাশে <strong className="text-white">তিনটি ডটে (⋮)</strong> চাপ দিন।<br />
                ২. মেনু থেকে <strong className="text-[#00FF87]">"Add to Home screen"</strong> অথবা <strong className="text-[#00FF87]">"Install app"</strong> এ ট্যাপ করুন।<br />
                ৩. ব্যস! মুহূর্তেই আপনার মোবাইলের হোমস্ক্রিনে অ্যাপ আইকন চলে যাবে।
              </p>
            </div>

            {/* Backup APK Download */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleApkDownload}
                className="text-xs text-slate-400 hover:text-[#00FF87] inline-flex items-center gap-1.5 transition-colors underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingApk ? 'ডাউনলোড হচ্ছে...' : 'অথবা SurakshaVault.apk ফাইল ডাউনলোড করতে চান? এখানে চাপুন →'}</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
