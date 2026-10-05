import React from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { Download, UserCheck, ShieldCheck, ArrowRight, Smartphone } from 'lucide-react';

interface HowItWorksSectionProps {
  lang: SurakshaLanguage;
  onDownloadClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ lang, onDownloadClick }) => {
  const steps = [
    {
      step: '01',
      titleEn: 'Download & Install the APK',
      titleBn: 'এপিকে ডাউনলোড ও ইনস্টল করুন',
      actionEn: 'Download SurakshaVault.apk directly from this official portal. Enable "Install Unknown Apps" in your Android settings when prompted.',
      actionBn: 'এই অফিসিয়াল পেজ থেকে সরাসরি SurakshaVault.apk ফাইলটি ডাউনলোড করুন এবং আপনার ফোনের সেটিংসে গিয়ে "Install Unknown Apps" অন করুন।',
      icon: Download,
      tipEn: 'File Size: ~18.4 MB · 100% Verified Safe',
      tipBn: 'সাইজ: ~১৮.৪ মেগাবাইট · শতভাগ নিরাপদ',
    },
    {
      step: '02',
      titleEn: 'Create Account with Master Password',
      titleBn: 'মাস্টার পাসওয়ার্ড দিয়ে অ্যাকাউন্ট খুলুন',
      actionEn: 'Open the app and set up your private identity with your Name, Email, and a resilient Master Password for emergency recovery.',
      actionBn: 'অ্যাপটি ওপেন করে আপনার নাম, ইমেইল এবং একটি শক্তিশালী মাস্টার পাসওয়ার্ড দিন, যা পরবর্তীতে রিকভারির কাজে ব্যবহৃত হবে।',
      icon: UserCheck,
      tipEn: 'Zero Cloud Sync · Stored locally on phone',
      tipBn: 'সম্পূর্ণ লোকাল ডাটা · কোনো সার্ভার সিঙ্ক নেই',
    },
    {
      step: '03',
      titleEn: 'Set 4-Digit PIN & Lock Your Vault',
      titleBn: '৪-ডিজিট পিন সেট করুন ও ভল্ট সুরক্ষিত রাখুন',
      actionEn: 'Choose your secret 4-digit quick access PIN. Select apps to lock (WhatsApp, Banking, Gallery) and import private photos/videos.',
      actionBn: 'আপনার ৪-ডিজিট সিক্রেট পিন নির্বাচন করুন। এরপর হোয়াটসঅ্যাপ, বিকাশ বা গ্যালারি লক করুন এবং পছন্দের ছবি-ভিডিও ভল্টে রাখুন।',
      icon: ShieldCheck,
      tipEn: 'Instant Lock Active · Disguise Icon Ready',
      tipBn: 'ইনস্ট্যান্ট লক চালু · স্টিলথ আইকন রেডি',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#070D18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wider text-[#00FF87] uppercase mb-2">
            {lang === 'en' ? 'Simple 3-Step Setup' : 'সহজ ৩ ধাপে সেটআপ'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {lang === 'en' ? 'Get Protected in Under Two Minutes' : 'মাত্র ২ মিনিটে শুরু করুন আপনার সুরক্ষাবলয়'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            {lang === 'en'
              ? 'No complicated configurations or technical skills required. Ready right out of the box.'
              : 'কোনো জটিল কনফিগারেশন ছাড়াই খুব সহজে নিজে নিজেই সম্পূর্ণ ভল্ট চালু করে নিন।'}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-[#0A0F1D] border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00FF87]/40 transition-all duration-200 group"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold font-mono text-[#00FF87] drop-shadow-[0_0_10px_rgba(0,255,135,0.3)]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00FF87]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#00FF87] transition-colors">
                    {lang === 'en' ? item.titleEn : item.titleBn}
                  </h3>

                  {/* Action Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {lang === 'en' ? item.actionEn : item.actionBn}
                  </p>
                </div>

                {/* Footnote Metadata - Zero-Pill text */}
                <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />
                  <span>{lang === 'en' ? item.tipEn : item.tipBn}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Download CTA: Direct Instant Download */}
        <div className="mt-12 text-center">
          <a
            href="/SurakshaVault.apk"
            download="SurakshaVault.apk"
            onClick={() => onDownloadClick()}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-black bg-[#00FF87] hover:bg-[#00E575] rounded-xl shadow-[0_0_20px_rgba(0,255,135,0.25)] transition-all"
          >
            <Download className="w-4 h-4 text-black" />
            <span>{lang === 'en' ? 'Start Step 1: Download SurakshaVault.apk' : 'প্রথম ধাপ শুরু করুন: ডাউনলোড SurakshaVault.apk'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
