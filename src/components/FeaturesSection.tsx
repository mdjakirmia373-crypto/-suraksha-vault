import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { KeyRound, ShieldAlert, Image, Cpu, Check, ChevronRight, Lock, EyeOff } from 'lucide-react';

interface FeaturesSectionProps {
  lang: SurakshaLanguage;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      id: 'feat-1',
      index: '01',
      titleEn: 'Dual Password Protection',
      titleBn: 'ডুয়েল পাসওয়ার্ড সিকিউরিটি সিস্টেম',
      subtitleEn: 'Master Account Password + 4-Digit Quick PIN',
      subtitleBn: 'মাস্টার অ্যাকাউন্ট পাসওয়ার্ড + ৪-ডিজিট কুইক পিন',
      descriptionEn: 'Enjoy the perfect balance of security and speed. Use your robust Master Password for account identity, and a fast 4-digit numeric PIN for lightning-quick everyday vault access.',
      descriptionBn: 'নিরাপত্তা ও গতির নিখুঁত সমন্বয়। মূল অ্যাকাউন্ট ভেরিফিকেশনের জন্য শক্তিশালী মাস্টার পাসওয়ার্ড এবং প্রতিদিনের দ্রুত অ্যাক্সেসের জন্য ৪-ডিজিটের সহজ পিন ব্যবহার করুন।',
      icon: KeyRound,
      highlightsEn: [
        'Master Password for full recovery & critical settings',
        '4-Digit PIN for instant millisecond vault unlocking',
        'Biometric fingerprint sensor integration support',
        'Anti-brute force delay on repeated wrong attempts'
      ],
      highlightsBn: [
        'অ্যাকাউন্ট রিকভারির জন্য মাস্টার পাসওয়ার্ড',
        'দ্রুত ভল্ট খোলার জন্য ৪-ডিজিট পিন',
        'ফিঙ্গারপ্রিন্ট সেন্সর দ্রুত আনলক সাপোর্ট',
        'ভুল পিন দিলে স্বয়ংক্রিয় সেফটি লকআউট'
      ],
      colSpan: 'lg:col-span-6',
    },
    {
      id: 'feat-2',
      index: '02',
      titleEn: 'Secure App Locker Functionality',
      titleBn: 'অ্যাডভান্সড অ্যাপ লকার সুবিধা',
      subtitleEn: 'Lock Social, Banking & System Apps with Zero Lag',
      subtitleBn: 'সোশ্যাল মিডিয়া, বিকাশ ও সিস্টেম অ্যাপ সম্পূর্ণ সুরক্ষিত রাখুন',
      descriptionEn: 'Prevent nosy friends or strangers from peeking into WhatsApp, Facebook, mobile banking, or Gallery. Suraksha Vault locks any app with instant security overlay.',
      descriptionBn: 'বন্ধু বা অপরিচিতদের হাত থেকে আপনার হোয়াটসঅ্যাপ, ফেসবুক, বিকাশ ও গ্যালারি নিরাপদ রাখুন। নিমেষেই যেকোনো অ্যাপে সিকিউরিটি প্যাটার্ন বা পিন লক সেট করুন।',
      icon: Lock,
      highlightsEn: [
        'Instant lock overlay with 0% battery drain',
        'Prevents unauthorized app uninstallation',
        'Per-app customized locking rules',
        'Stealth unlock without showing PIN digits'
      ],
      highlightsBn: [
        'জিরো ব্যাটারি ড্রেন ও সুপার ফাস্ট ইন্টারফেস',
        'অননুমোদিত অ্যাপ আনইনস্টল প্রতিরোধ',
        'যেকোনো নির্দিষ্ট অ্যাপ লক করার সুবিধা',
        'গোপন পিন প্রবেশ করার স্টিলথ ডিসপ্লে'
      ],
      colSpan: 'lg:col-span-6',
    },
    {
      id: 'feat-3',
      index: '03',
      titleEn: 'Photo & Video Protection',
      titleBn: 'ফটো ও ভিডিও এনক্রিপশন শিল্ড',
      subtitleEn: 'Keep Precious Personal Memories 100% Invisible',
      subtitleBn: 'ব্যক্তিগত ছবি ও ভিডিও গ্যালারি থেকে অদৃশ্য ও সুরক্ষিত রাখুন',
      descriptionEn: 'Hide personal photos, family videos, and private documents. Once moved into Suraksha Vault, files vanish from the Android gallery and are scrambled with hardware AES-256 encryption.',
      descriptionBn: 'পারিবারিক ছবি, ব্যক্তিগত ভিডিও এবং জরুরি ডকুমেন্ট ভল্টে লুকান। একবার ভল্টে নিলে সেগুলো সাধারণ গ্যালারিতে আর দেখা যাবে না এবং সর্বোচ্চ এনক্রিপশনে সুরক্ষিত থাকবে।',
      icon: Image,
      highlightsEn: [
        'Military grade AES-256 local storage encryption',
        'Hidden from Google Photos and third-party file managers',
        'Built-in secure media viewer with zero cache leaks',
        'Instant 1-tap restore back to phone gallery'
      ],
      highlightsBn: [
        'মিলিটারি গ্রেড AES-256 লোকাল এনক্রিপশন',
        'গুগল ফটোস বা ফাইল ম্যানেজার থেকে পুরোপুরি অদৃশ্য',
        'ভল্টের ভেতরেই সেফ ফটো ও ভিডিও প্লেয়ার',
        'প্রয়োজনে এক ক্লিকেই আবার গ্যালারিতে ফেরত নেওয়া'
      ],
      colSpan: 'lg:col-span-6',
    },
    {
      id: 'feat-4',
      index: '04',
      titleEn: 'Fast & Privacy-First Architecture',
      titleBn: 'সুপার ফাস্ট ও প্রাইভেসি-ফার্স্ট আর্কিটেকচার',
      subtitleEn: '100% Offline · Zero Telemetry · Zero Cloud Surveillance',
      subtitleBn: '১০০% অফলাইন · কোনো সার্ভার ট্র্যাকিং বা ক্লাউড লিক নেই',
      descriptionEn: 'Your private data belongs exclusively to you. Suraksha Vault operates entirely on your physical device. No remote servers, no behavioral tracking, and no external data sync.',
      descriptionBn: 'আপনার ব্যক্তিগত তথ্য শুধুই আপনার। সুরক্ষ ভল্ট সম্পূর্ণ আপনার ফোনে অফলাইনে কাজ করে। কোনো রিমোট সার্ভার নেই, কোনো ট্র্যাকার নেই, আপনার ডাটা ফোন ছাড়িয়ে কোথাও যায় না।',
      icon: Cpu,
      highlightsEn: [
        'Complete offline functionality without internet required',
        'Zero tracking SDKs and zero analytics telemetry',
        'Minimal battery and RAM footprint (~18MB package)',
        'Pure Android native speed and responsiveness'
      ],
      highlightsBn: [
        'ইন্টারনেট সংযোগ ছাড়াই শতভাগ কাজ করে',
        'কোনো ট্র্যাকিং এসডিকে বা ডেটা মনিটরিং নেই',
        'অত্যন্ত হালকা ও ব্যাটারি সাশ্রয়ী (~১৮ মেগাবাইট)',
        'অ্যান্ড্রয়েড নেটিভ হাই-স্পিড পারফরম্যান্স'
      ],
      colSpan: 'lg:col-span-6',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wider text-[#00FF87] uppercase mb-2">
            {lang === 'en' ? 'Core Capabilities' : 'মূল নিরাপত্তা ফিচারসমূহ'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {lang === 'en' ? 'Engineered for Uncompromising Privacy' : 'সর্বোচ্চ নিরাপত্তার জন্য বিশেষভাবে নির্মিত'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {lang === 'en'
              ? 'Every feature in Suraksha Vault is built with one mission: safeguarding your digital footprint without compromising on convenience.'
              : 'সুরক্ষা ভল্টের প্রতিটি ফিচার তৈরি হয়েছে একটি লক্ষ্য নিয়ে: আপনার ফোনের সকল ব্যক্তিগত তথ্যের সম্পূর্ণ নিরাপত্তা প্রদান করা।'}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isExpanded = selectedFeature === idx;

            return (
              <div
                key={feat.id}
                className={`${feat.colSpan} relative rounded-2xl bg-[#0A0F1D] border border-slate-800/90 hover:border-[#00FF87]/40 p-6 sm:p-8 transition-all duration-200 group flex flex-col justify-between`}
              >
                {/* Header Zone: Editorial numbering & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#00FF87] tracking-wider">
                      {feat.index}. {lang === 'en' ? 'SECURITY PILLAR' : 'নিরাপত্তা স্তম্ভ'}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00FF87] group-hover:scale-110 group-hover:border-[#00FF87]/40 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#00FF87] transition-colors">
                    {lang === 'en' ? feat.titleEn : feat.titleBn}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {lang === 'en' ? feat.subtitleEn : feat.subtitleBn}
                  </p>

                  {/* Body description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {lang === 'en' ? feat.descriptionEn : feat.descriptionBn}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-800/70 space-y-2.5">
                  {(lang === 'en' ? feat.highlightsEn : feat.highlightsBn).map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-[#00FF87]/15 text-[#00FF87] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
