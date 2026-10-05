import React, { useEffect } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { CheckCircle2, Download, X, Smartphone, ArrowDown } from 'lucide-react';

interface DownloadToastProps {
  filename: string;
  lang: SurakshaLanguage;
  onClose: () => void;
  onOpenGuide: () => void;
}

export const DownloadToast: React.FC<DownloadToastProps> = ({
  filename,
  lang,
  onClose,
  onOpenGuide,
}) => {
  useEffect(() => {
    // Automatically close after 7 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 7000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full mx-4 sm:mx-0 animate-in slide-in-from-bottom-5 duration-200">
      <div className="rounded-2xl bg-[#0A1224] border-2 border-[#00FF87] p-4 shadow-[0_10px_35px_rgba(0,255,135,0.25)] text-slate-200">
        <div className="flex items-start justify-between gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#00FF87]/20 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87] shrink-0 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>{lang === 'en' ? 'Download Started Instantly!' : 'সরাসরি ডাউনলোড শুরু হয়েছে!'}</span>
            </h4>
            <p className="text-[11px] text-slate-300 font-mono mt-0.5">
              {filename} (18.4 MB)
            </p>
            <p className="text-[10px] text-slate-400 mt-1 leading-snug">
              {lang === 'en'
                ? 'Check your phone’s notification bar or browser downloads.'
                : 'আপনার ফোনের নোটিফিকেশন বার অথবা ক্রোম ডাউনলোডস চেক করুন।'}
            </p>

            <div className="mt-2.5 flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenGuide}
                className="text-[10px] font-bold text-black bg-[#00FF87] hover:bg-[#00E575] px-2.5 py-1 rounded-md transition-colors flex items-center gap-1"
              >
                <Smartphone className="w-3 h-3" />
                <span>{lang === 'en' ? 'How to install' : 'ইনস্টল করার নিয়ম'}</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
