import React, { useEffect, useState } from 'react';
import { SurakshaLanguage, APP_SPECS } from '../types/suraksha';
import { Download, CheckCircle, X, Shield, Smartphone, FileCheck, ExternalLink } from 'lucide-react';

interface DownloadModalProps {
  filename: string;
  lang: SurakshaLanguage;
  onClose: () => void;
  onOpenGuide: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  filename,
  lang,
  onClose,
  onOpenGuide,
}) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Simulate real download progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsCompleted(true);
          return 100;
        }
        return prev + 25;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const triggerDirectDownload = () => {
    const a = document.createElement('a');
    a.href = `/${filename}`;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0A0F1D] border border-slate-700/80 shadow-[0_25px_50px_rgba(0,0,0,0.9)] p-6 text-slate-200">
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#00FF87]">
            {isCompleted ? <CheckCircle className="w-5 h-5 text-[#00FF87]" /> : <Download className="w-5 h-5 animate-bounce" />}
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              {isCompleted
                ? (lang === 'en' ? 'Download Started!' : 'ডাউনলোড শুরু হয়েছে!')
                : (lang === 'en' ? 'Preparing APK Download...' : 'এপিকে প্রস্তুত হচ্ছে...')}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {filename} · {APP_SPECS.fileSize}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-5">
          <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5">
            <span>{isCompleted ? 'Ready' : 'Verifying package hash...'}</span>
            <span className="text-[#00FF87] font-semibold">{progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-[#00FF87] transition-all duration-200 shadow-[0_0_10px_#00FF87]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Installation Reminder Card */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 mb-5 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Smartphone className="w-4 h-4 text-[#00FF87]" />
            <span>{lang === 'en' ? 'Next Steps on Your Phone' : 'আপনার ফোনে যা করতে হবে'}</span>
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
            <li>
              {lang === 'en' ? 'If browser warns "File might be harmful", tap ' : 'ব্রাউজারে সতর্কতা আসলে ' }
              <strong className="text-white">Download anyway</strong>.
            </li>
            <li>
              {lang === 'en' ? 'Tap the downloaded file in notification bar.' : 'নোটিফিকেশন বারে ডাউনলোড ফাইলে ট্যাপ করুন।'}
            </li>
            <li>
              {lang === 'en' ? 'Enable "Install unknown apps" in Settings and tap Install.' : 'সেটিংসে "Install unknown apps" অনুমতি দিয়ে Install চাপুন।'}
            </li>
          </ol>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={triggerDirectDownload}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-1.5 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Click if download didn’t start' : 'ডাউনলোড না হলে এখানে চাপুন'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenGuide();
            }}
            className="py-2.5 px-4 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors text-center"
          >
            {lang === 'en' ? 'View Guide' : 'ইনস্টল গাইড'}
          </button>
        </div>

      </div>
    </div>
  );
};
