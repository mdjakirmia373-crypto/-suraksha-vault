import React from 'react';
import { ShieldCheck, Lock, HardDrive, Check, Zap, EyeOff, Layers, KeyRound } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 'feat-security',
      number: '০১',
      title: 'সামরিক-গ্রেড সিকিউরিটি',
      subtitle: 'Military-Grade AES-256 Bit Encryption',
      desc: 'বিশ্বের শীর্ষ প্রতিরক্ষা ও ব্যাংকিং স্ট্যান্ডার্ড AES-256 বিট এনক্রিপশনে আপনার প্রতিটি ফাইল সুরক্ষিত থাকে। পাসওয়ার্ড ছাড়া ডাটা ডিক্রিপ্ট করা প্রযুক্তিগতভাবে অসম্ভব।',
      icon: ShieldCheck,
      color: 'from-emerald-500/20 to-teal-500/10',
      iconColor: 'text-[#00FF88]',
      borderColor: 'border-[#00FF88]/30 hover:border-[#00FF88]/70',
      glow: 'hover:shadow-[0_0_35px_rgba(0,255,136,0.18)]',
      bullets: [
        'AES-256 বিট হার্ডওয়্যার লোকাল এনক্রিপশন',
        'গ্যালারি ও ফাইল ম্যানেজার থেকে ফাইল ১০০% অদৃশ্য',
        'ভল্টের ভেতরেই প্রাইভেট ফটো ও ভিডিও প্লেয়ার',
        'কোনো ব্যাকডোর বা ট্র্যাকিং কোড নেই'
      ],
    },
    {
      id: 'feat-locker',
      number: '০২',
      title: 'ডুয়েল-পাসওয়ার্ড অ্যাপ লকার',
      subtitle: 'Real & Fake Password App Protection',
      desc: 'হোয়াটসঅ্যাপ, ফেসবুক, বিকাশ ও গ্যালারি নিমেষেই লক করুন। কেউ জোর করে ভল্ট খুলতে চাইলে ফেক পাসওয়ার্ড দিয়ে বিকল্প খালি ভল্ট দেখানো সম্ভব!',
      icon: Lock,
      color: 'from-cyan-500/20 to-blue-500/10',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/70',
      glow: 'hover:shadow-[0_0_35px_rgba(0,223,223,0.18)]',
      bullets: [
        'আসল ও ফেক পাসওয়ার্ডের ডুয়েল প্রোটেকশন',
        '১-ট্যাপে যেকোনো নির্দিষ্ট অ্যাপ লক করার সুবিধা',
        '০% ব্যাটারি ড্রেন ও আল্ট্রা-ফাস্ট রেসপন্স',
        'অননুমোদিত অ্যাপ আনইনস্টলেশন প্রতিরোধ'
      ],
    },
    {
      id: 'feat-backup',
      number: '০৩',
      title: 'হাইব্রিড ব্যাকআপ সিস্টেম',
      subtitle: '100% Offline Local + Cloud Auto-Sync',
      desc: 'ইন্টারনেট ছাড়াই ১০০% অফলাইন লোকাল ব্যাকআপ তৈরি করুন অথবা ক্লাউড অটো-সিঙ্ক ব্যবহার করে যেকোনো নতুন ফোনে ইনস্ট্যান্ট ডাটা রিকভারি উপভোগ করুন।',
      icon: HardDrive,
      color: 'from-blue-500/20 to-indigo-500/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30 hover:border-blue-400/70',
      glow: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]',
      bullets: [
        '১০০% অফলাইন লোকাল ব্যাকআপ (.vault ফাইল)',
        'ক্লাউড অটো-সিঙ্ক সাপোর্ট (ঐচ্ছিক)',
        'ফোন হারিয়ে গেলেও ইনস্ট্যান্ট রিস্টোর',
        'আপলোডের আগেই এন্ড-টু-এন্ড এনক্রিপশন'
      ],
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0B0F19] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900/90 border border-[#00FF88]/30 text-xs text-[#00FF88] font-bold mb-3 shadow-sm backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>প্রমোশনাল ফিচার গ্রিড</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            তিন স্তরের সর্বোচ্চ নিরাপত্তা ব্যবস্থা
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            অপ্রয়োজনীয় জটিলতা বাদ দিয়ে আপনার ফোনের প্রতিটি গোপন তথ্য ও অ্যাপস নিরাপদে রাখতে তৈরি।
          </p>
        </div>

        {/* 3 Core Glassmorphism Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className={`rounded-3xl bg-[#0E1526]/80 backdrop-blur-xl border-2 ${feat.borderColor} p-6 sm:p-7 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl flex flex-col justify-between ${feat.glow} group`}
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} border border-slate-700/60 flex items-center justify-center ${feat.iconColor} shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#00FF88] transition-colors">
                      {feat.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-[#00FF88] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-3.5">
                    {feat.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {feat.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#00FF88] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
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
