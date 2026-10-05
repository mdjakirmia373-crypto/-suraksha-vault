import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { Smartphone, ShieldAlert, CheckCircle, ChevronDown, ChevronUp, AlertCircle, FileCheck } from 'lucide-react';

interface InstallGuideSectionProps {
  lang: SurakshaLanguage;
}

export const InstallGuideSection: React.FC<InstallGuideSectionProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const guideSteps = [
    {
      num: 1,
      titleEn: 'Download the APK Package',
      titleBn: 'এপিকে প্যাকেজ ডাউনলোড করুন',
      descEn: 'Tap the "Download APK Now" button. If Google Chrome or your browser shows "File might be harmful", tap "Download anyway". This is a standard Android security prompt for all direct APK downloads.',
      descBn: '"Download APK" বাটনে ট্যাপ করুন। ব্রাউজারে যদি "File might be harmful" বার্তা আসে, তবে "Download anyway" চাপুন। গুগল প্লে স্টোরের বাইরে যেকোনো এপিকে ডাউনলোডের সময় অ্যান্ড্রয়েড এই সতর্কতা দেখায়।',
      badgeEn: 'Chrome / Browser',
      badgeBn: 'ক্রোম বা ব্রাউজার',
    },
    {
      num: 2,
      titleEn: 'Enable "Install Unknown Apps"',
      titleBn: '"Install Unknown Apps" অপশন অন করুন',
      descEn: 'Once downloaded, tap on the file notification or open Files > Downloads. When prompted with "For your security, your phone is not allowed to install unknown apps from this source", tap Settings.',
      descBn: 'ডাউনলোড শেষ হলে নোটিফিকেশনে ট্যাপ করুন অথবা ফাইল ম্যানেজারে যান। "Install unknown apps" সংক্রান্ত পপআপ আসলে "Settings" এ ট্যাপ করুন।',
      badgeEn: 'Android Settings',
      badgeBn: 'ফোন সেটিংস',
    },
    {
      num: 3,
      titleEn: 'Toggle Permission & Complete Install',
      titleBn: 'অনুমতি অন করে ইনস্টল সম্পন্ন করুন',
      descEn: 'Turn ON the toggle next to "Allow from this source" (e.g., Chrome or Files). Press the back arrow, then tap "Install". Suraksha Vault is now installed and ready!',
      descBn: '"Allow from this source" অপশনটি চালু (ON) করে দিন। এরপর ব্যাক বাটনে প্রেস করে "Install" এ চাপুন। ব্যস, সুরক্ষ ভল্ট সফলভাবে ইনস্টল হয়ে যাবে!',
      badgeEn: 'Installation Complete',
      badgeBn: 'ইনস্টল সম্পন্ন',
    },
  ];

  return (
    <section id="install-guide" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#070D18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wider text-[#00FF87] uppercase mb-2">
            {lang === 'en' ? 'Step-by-Step Guide' : 'সহজ ইনস্টলেশন গাইড'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {lang === 'en' ? 'How to Install APK on Android' : 'কীভাবে অ্যান্ড্রয়েড ফোনে এপিকে ইনস্টল করবেন?'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            {lang === 'en'
              ? 'Follow these 3 quick steps to install Suraksha Vault on any modern Android device.'
              : 'যেকোনো অ্যান্ড্রয়েড ফোনে খুব সহজে সুরক্ষ ভল্ট ইনস্টল করতে নিচের ৩টি সহজ ধাপ অনুসরণ করুন।'}
          </p>
        </div>

        {/* 3 Interactive Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guideSteps.map((step) => {
            const isCurrent = activeStep === step.num;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border ${
                  isCurrent
                    ? 'bg-[#0A1422] border-[#00FF87] shadow-[0_0_25px_rgba(0,255,135,0.15)]'
                    : 'bg-[#0A0F1D] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                    isCurrent ? 'bg-[#00FF87] text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {lang === 'en' ? step.badgeEn : step.badgeBn}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {lang === 'en' ? step.titleEn : step.titleBn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {lang === 'en' ? step.descEn : step.descBn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Safety Note banner */}
        <div className="max-w-3xl mx-auto mt-10 rounded-xl bg-slate-900/60 border border-slate-800 p-4 sm:p-5 flex items-start gap-3.5 text-xs text-slate-300">
          <ShieldAlert className="w-5 h-5 text-[#00FF87] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block mb-0.5">
              {lang === 'en' ? 'Why does Android show "File might be harmful"?' : 'অ্যান্ড্রয়েড কেন "File might be harmful" দেখায়?'}
            </span>
            <p className="text-slate-400 leading-relaxed">
              {lang === 'en'
                ? 'Android warns about all files downloaded outside the Google Play Store as a universal precaution. Suraksha Vault is 100% verified, contains zero adware or trackers, and runs completely offline.'
                : 'গুগল প্লে স্টোরের বাইরে সরাসরি কোনো এপিকে ডাউনলোড করলে অ্যান্ড্রয়েড অপারেটিং সিস্টেম নিয়মানুযায়ী এই সাধারণ সতর্কবার্তাটি প্রদর্শন করে। সুরক্ষ ভল্ট শতভাগ নিরাপদ, কোনো ট্র্যাকার বা ভাইরাস নেই।'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
