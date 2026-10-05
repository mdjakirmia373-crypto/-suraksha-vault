import React, { useState } from 'react';
import { SurakshaLanguage, APP_SPECS } from '../types/suraksha';
import { Download, Check, Copy, QrCode, Smartphone, HardDrive, ShieldCheck, Terminal, AlertCircle } from 'lucide-react';

interface DownloadSectionProps {
  lang: SurakshaLanguage;
  onTriggerDownload: (filename: string) => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ lang, onTriggerDownload }) => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const copyChecksum = () => {
    navigator.clipboard.writeText(APP_SPECS.sha256);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  return (
    <section id="download" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12] relative">
      {/* Background glow accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF87]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wider text-[#00FF87] uppercase mb-2">
            {lang === 'en' ? 'Direct APK Package' : 'সরাসরি এপিকে প্যাকেজ'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {lang === 'en' ? 'Download Suraksha Vault for Android' : 'অ্যান্ড্রয়েডের জন্য সুরক্ষ ভল্ট ডাউনলোড করুন'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            {lang === 'en'
              ? 'Select your build below. Compatible with Android 8.0 Oreo through Android 15.'
              : 'নিচের প্যাকেজ থেকে আপনার প্রয়োজনীয় ভার্সন নির্বাচন করুন। অ্যান্ড্রয়েড ৮.০ থেকে অ্যান্ড্রয়েড ১৫ পর্যন্ত সম্পূর্ণ উপযোগী।'}
          </p>
        </div>

        {/* 2 Download Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          
          {/* Card 1: Official Release Build (Primary) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0A161F] to-[#0A0F1D] border-2 border-[#00FF87]/60 p-6 sm:p-8 shadow-[0_0_35px_rgba(0,255,135,0.15)] flex flex-col justify-between">
            <div className="absolute top-4 right-4">
              <span className="text-[11px] font-mono font-bold text-black bg-[#00FF87] px-2.5 py-0.5 rounded-full">
                RECOMMENDED
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#00FF87]" />
                <h3 className="text-xl font-bold text-white">
                  SurakshaVault.apk
                </h3>
              </div>
              
              <p className="text-xs text-slate-300 mb-4">
                {lang === 'en' ? 'Official Production Release Build' : 'অফিসিয়াল প্রোডাকশন রিলিজ ভার্সন'}
              </p>

              {/* Specs metadata - zero pill */}
              <div className="space-y-2 text-xs text-slate-400 mb-6 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'Version' : 'ভার্সন'}:</span>
                  <span className="text-slate-200 font-mono font-medium">{APP_SPECS.version}</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'File Size' : 'ফাইল সাইজ'}:</span>
                  <span className="text-slate-200 font-mono font-medium">{APP_SPECS.fileSize}</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'Target OS' : 'টার্গেট ওএস'}:</span>
                  <span className="text-slate-200 font-mono font-medium">Android 8.0 - 15</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'Signature' : 'সিগনেচার'}:</span>
                  <span className="text-[#00FF87] font-mono text-[11px]">Verified APK Key</span>
                </div>
              </div>
            </div>

            {/* Direct Download Button */}
            <div className="space-y-2">
              <a
                href="/SurakshaVault.apk"
                download="SurakshaVault.apk"
                onClick={() => onTriggerDownload('SurakshaVault.apk')}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-[#00FF87] hover:bg-[#00E575] shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all"
              >
                <Download className="w-4 h-4 text-black" />
                <span>{lang === 'en' ? 'Download SurakshaVault.apk' : 'ডাউনলোড SurakshaVault.apk'}</span>
              </a>
              <p className="text-[11px] text-center text-slate-400">
                {lang === 'en' ? 'Direct high-speed download · No registration required' : 'সরাসরি হাই-স্পিড ডাউনলোড · কোনো রেজিস্ট্রেশন ছাড়াই'}
              </p>
            </div>
          </div>

          {/* Card 2: Developer Debug Build */}
          <div className="relative rounded-2xl bg-[#0A0F1D] border border-slate-800 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-white">
                  app-debug.apk
                </h3>
              </div>
              
              <p className="text-xs text-slate-400 mb-4">
                {lang === 'en' ? 'Developer & Testing APK Build' : 'ডেভেলপার ও টেস্টিং এপিকে বিল্ড'}
              </p>

              {/* Specs metadata */}
              <div className="space-y-2 text-xs text-slate-400 mb-6 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'Build Flavor' : 'বিল্ড টাইপ'}:</span>
                  <span className="text-slate-200 font-mono font-medium">Debug / Verbose Logs</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'File Size' : 'ফাইল সাইজ'}:</span>
                  <span className="text-slate-200 font-mono font-medium">~19.1 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'ADB Debuggable' : 'ডিবাগিং'}:</span>
                  <span className="text-indigo-400 font-mono font-medium">Enabled (android:debuggable)</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'Audience' : 'ব্যবহারকারী'}:</span>
                  <span className="text-slate-200">QA & Developers</span>
                </div>
              </div>
            </div>

            {/* Debug Download Button */}
            <div className="space-y-2">
              <a
                href="/app-debug.apk"
                download="app-debug.apk"
                onClick={() => onTriggerDownload('app-debug.apk')}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>{lang === 'en' ? 'Download app-debug.apk' : 'ডাউনলোড app-debug.apk'}</span>
              </a>
              <p className="text-[11px] text-center text-slate-400">
                {lang === 'en' ? 'For testing on emulators and test devices' : 'ইমুলেটর এবং টেস্ট ডিভাইসে পরীক্ষার জন্য'}
              </p>
            </div>
          </div>

        </div>

        {/* QR Code & Mobile Scan Drawer / Block */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 p-2">
              {/* Clean SVG QR Code Representation */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#00FF87]" fill="currentColor">
                <path d="M10 10h30v30h-30z M15 15v20h20v-20h-20z M20 20h10v10h-10z" />
                <path d="M60 10h30v30h-30z M65 15v20h20v-20h-20z M70 20h10v10h-10z" />
                <path d="M10 60h30v30h-30z M15 65v20h20v-20h-20z M20 70h10v10h-10z" />
                <path d="M60 60h10v10h-10z M75 60h15v10h-15z M60 75h10v15h-10z M75 75h15v15h-15z M45 20h10v10h-10z M20 45h10v10h-10z M45 45h10v10h-10z M70 45h10v10h-10z M45 70h10v10h-10z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <QrCode className="w-4 h-4 text-[#00FF87]" />
                {lang === 'en' ? 'Scan to Download on Phone' : 'মোবাইলে স্ক্যান করে সরাসরি ডাউনলোড করুন'}
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                {lang === 'en'
                  ? 'Open your Android camera or QR scanner to download SurakshaVault.apk straight to your phone storage.'
                  : 'আপনার অ্যান্ড্রয়েড ক্যামেরা বা কিউআর স্ক্যানার দিয়ে স্ক্যান করলে সরাসরি ফোনে এপিকে ফাইল ডাউনলোড হবে।'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-[#00FF87] bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
              apk.surakshavault.com
            </span>
          </div>
        </div>

        {/* SHA-256 Checksum Card */}
        <div id="specs" className="max-w-4xl mx-auto mt-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="overflow-hidden">
              <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">
                SHA-256 CHECKSUM VERIFICATION:
              </span>
              <p className="text-[11px] font-mono text-slate-300 break-all select-all">
                {APP_SPECS.sha256}
              </p>
            </div>
            <button
              type="button"
              onClick={copyChecksum}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors shrink-0"
            >
              {copiedSha ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00FF87]" />
                  <span className="text-[#00FF87]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Checksum</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
