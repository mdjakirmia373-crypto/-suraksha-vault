import React, { useState } from 'react';
import { 
  X, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  MoreVertical, 
  ArrowUpRight, 
  Share2, 
  HardDriveDownload, 
  Zap, 
  HelpCircle,
  RefreshCw
} from 'lucide-react';

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
  const [installing, setInstalling] = useState(false);
  const isIOS = typeof navigator !== 'undefined' && /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());

  const handleInstantInstall = async () => {
    setInstalling(true);
    const ok = await onNativeInstall();
    setInstalling(false);
    if (ok) {
      setInstallSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B1120] border-2 border-[#00FF88] shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-5 sm:p-7 text-slate-100 my-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
          title="বন্ধ করুন"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00FF88]/20 border-2 border-[#00FF88] flex items-center justify-center text-[#00FF88] mx-auto mb-3 shadow-[0_0_25px_rgba(0,255,136,0.4)]">
            <Smartphone className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            সরাসরি মোবাইলের স্ক্রিনে ইনস্টল করুন
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm mx-auto">
            ফাইল ম্যানেজার বা ফোল্ডারে কোনো ফাইল যাবে না — সরাসরি আপনার ফোনের হোমস্ক্রিনে অ্যাপ তৈরি হবে!
          </p>
        </div>

        {/* Success Alert */}
        {installSuccess ? (
          <div className="p-5 rounded-2xl bg-emerald-950/90 border border-[#00FF88] text-center space-y-2.5 my-4 animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-12 h-12 text-[#00FF88] mx-auto animate-bounce" />
            <h4 className="text-lg font-extrabold text-white">
              অভিনন্দন! অ্যাপটি আপনার মোবাইলের স্ক্রিনে চলে গেছে!
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200">
              আপনার ফোনের মূল হোমস্ক্রিনে "Suraksha" আইকনে ট্যাপ করলেই ফুলস্ক্রিনে অ্যাপটি চালু হবে।
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            
            {/* Visual Phone Mock Preview Card */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#070B14] border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#051410] border-2 border-[#00FF88] p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.3)] shrink-0">
                  <ShieldCheck className="w-7 h-7 text-[#00FF88]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Suraksha Vault</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-[#00FF88] border border-[#00FF88]/40">
                      অফিসিয়াল
                    </span>
                  </h4>
                  <p className="text-[11px] text-[#00FF88] font-mono mt-0.5">হোমস্ক্রিন ইনস্টলেশন</p>
                  <p className="text-[10px] text-slate-400">০ মেগাবাইট মেমোরি খরচ · নো ফাইল ডাউনলোড</p>
                </div>
              </div>

              <span className="text-[10px] sm:text-xs font-extrabold text-black bg-[#00FF88] px-3 py-1.5 rounded-full shrink-0 shadow-sm">
                স্ক্রিনে যাবে
              </span>
            </div>

            {/* Direct Native Install Button (when supported/prompt ready) */}
            {isInstallable && (
              <button
                type="button"
                onClick={handleInstantInstall}
                disabled={installing}
                className="w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm sm:text-base text-black bg-[#00FF88] hover:bg-[#00E57A] flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,255,136,0.45)] hover:shadow-[0_0_35px_rgba(0,255,136,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70"
              >
                <Sparkles className="w-5 h-5 text-black" />
                <span>
                  {installing ? 'স্ক্রিনে যুক্ত হচ্ছে...' : '১-ক্লিকে সরাসরি হোমস্ক্রিনে নিন'}
                </span>
              </button>
            )}

            {/* Platform-Specific Step-by-Step Guide */}
            {isIOS ? (
              /* iPhone Safari Guide */
              <div className="p-4 rounded-2xl bg-[#070E1A] border border-cyan-500/40 text-xs text-slate-200 space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Share2 className="w-4 h-4 text-cyan-400" />
                  <span>আইফোনে (Safari) স্ক্রিনে যুক্ত করার নিয়ম:</span>
                </div>
                <div className="space-y-1.5 text-slate-300 pl-1 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/50 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">১</span>
                    <span>সাফারি ব্রাউজারের নিচে <strong>শেয়ার (Share <Share2 className="w-3 h-3 inline text-cyan-400" />)</strong> বাটনে চাপ দিন।</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/50 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">২</span>
                    <span>মেনু একটু নিচে স্ক্রোল করে <strong className="text-white bg-slate-800 px-1.5 py-0.5 rounded">"Add to Home Screen"</strong> এ ট্যাপ করুন।</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/50 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">৩</span>
                    <span>উপরে ডানপাশে <strong>"Add"</strong> চাপলেই হোমস্ক্রিনে অ্যাপ আইকন চলে যাবে!</span>
                  </p>
                </div>
              </div>
            ) : (
              /* Android Chrome Guide */
              <div className="p-4 rounded-2xl bg-[#070E1A] border border-[#00FF88]/40 text-xs text-slate-200 space-y-2.5">
                <div className="flex items-center justify-between font-bold text-white text-sm">
                  <div className="flex items-center gap-2">
                    <MoreVertical className="w-4 h-4 text-[#00FF88]" />
                    <span>অ্যান্ড্রয়েড ক্রোম ব্রাউজার থেকে স্ক্রিনে নেওয়ার নিয়ম:</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00FF88] bg-emerald-950 px-2 py-0.5 rounded border border-[#00FF88]/30">
                    সহজ ৩ ধাপ
                  </span>
                </div>
                
                <div className="space-y-2 text-slate-300 pl-1 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-950 text-[#00FF88] border border-[#00FF88]/50 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">১</span>
                    <span>আপনার ক্রোম ব্রাউজারের উপরে ডানপাশে <strong className="text-[#00FF88]">৩টি ডটে (⋮)</strong> ট্যাপ করুন।</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-950 text-[#00FF88] border border-[#00FF88]/50 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">২</span>
                    <span>মেনু থেকে <strong className="text-white bg-slate-800 px-1.5 py-0.5 rounded">"Add to Home screen"</strong> অথবা <strong className="text-white bg-slate-800 px-1.5 py-0.5 rounded">"Install app"</strong> এ চাপ দিন।</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-950 text-[#00FF88] border border-[#00FF88]/50 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">৩</span>
                    <span><strong>"Install"</strong> বাটনে ক্লিক করলেই সরাসরি মোবাইলের হোমস্ক্রিনে অ্যাপ আইকন তৈরি হয়ে যাবে!</span>
                  </div>
                </div>
              </div>
            )}

            {/* Why No APK Download / Memory Explanation */}
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-300">
                <Zap className="w-3.5 h-3.5 text-[#00FF88]" />
                <span>কেন ফাইল ম্যানেজারে কোনো APK ফাইল যাবে না?</span>
              </div>
              <p className="leading-relaxed">
                এটি আধুনিক ওয়েব অ্যাপ (PWA) প্রযুক্তি। সাধারণ APK ফাইলের মতো ফোনে ফাইল ডাউনলোড করে ম্যানুয়ালি ইন্সটল করার ঝামেলা ও পার্সিং এরর নেই। এটি সরাসরি সিস্টেম অ্যাপের মতো স্ক্রিন থেকে কাজ করে এবং ১০০% অফলাইনে সুরক্ষিত থাকে।
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer text-center"
            >
              বুঝেছি, বন্ধ করুন
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
