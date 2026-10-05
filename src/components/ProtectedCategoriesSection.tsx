import React from 'react';
import { Files, Image, Video, FileText, Lock, ShieldCheck, KeyRound } from 'lucide-react';

export const ProtectedCategoriesSection: React.FC = () => {
  const categories = [
    {
      id: 'files',
      title: '১. ফাইল (Files)',
      sub: 'যেকোনো এক্সটেনশন (.zip, .apk, .mp3)',
      desc: 'ফোনের ফাইল ম্যানেজার ও স্টোরেজ ব্রাউজার থেকে সম্পূর্ণ অদৃশ্য ও গোপন।',
      icon: Files,
      color: 'text-[#00FF88]',
      bg: 'from-emerald-500/15 to-transparent',
      border: 'border-[#00FF88]/30 hover:border-[#00FF88]/70',
    },
    {
      id: 'photos',
      title: '২. ছবি (Photos)',
      sub: 'ব্যক্তিগত ও পারিবারিক অ্যালবাম',
      desc: 'গুগল ফটোস বা সাধারণ গ্যালারি থেকে নিখোঁজ হয়ে নিরাপদ ভল্টে আবদ্ধ।',
      icon: Image,
      color: 'text-cyan-400',
      bg: 'from-cyan-500/15 to-transparent',
      border: 'border-cyan-500/30 hover:border-cyan-400/70',
    },
    {
      id: 'videos',
      title: '৩. ভিডিও (Videos)',
      sub: 'গোপনীয় ভিডিও ক্লিপ ও রেকর্ডিং',
      desc: 'উচ্চ রেজুলিউশনের ভিডিও ক্লিপ ভল্টের ভেতরেই প্রাইভেট প্লেয়ারে প্লে হয়।',
      icon: Video,
      color: 'text-purple-400',
      bg: 'from-purple-500/15 to-transparent',
      border: 'border-purple-500/30 hover:border-purple-400/70',
    },
    {
      id: 'documents',
      title: '৪. ডকুমেন্ট (Documents)',
      sub: 'NID, পাসপোর্ট, ব্যাংক স্টেটমেন্ট',
      desc: 'জরুরি পিডিএফ ও অফিসিয়াল ডকুমেন্টস পাসওয়ার্ড ছাড়া কেউ খুলতে পারবে না।',
      icon: FileText,
      color: 'text-amber-400',
      bg: 'from-amber-500/15 to-transparent',
      border: 'border-amber-500/30 hover:border-amber-400/70',
    },
    {
      id: 'notes',
      title: '৫. সিক্রেট নোট (Secret Notes)',
      sub: 'পাসওয়ার্ড, এটিএম পিন ও ডায়রি',
      desc: 'গোপন অ্যাকাউন্ট নম্বর ও ব্যক্তিগত ডায়েরির তথ্য এনক্রিপ্ট করে সংরক্ষণ।',
      icon: KeyRound,
      color: 'text-[#00FF88]',
      bg: 'from-emerald-500/15 to-transparent',
      border: 'border-[#00FF88]/30 hover:border-[#00FF88]/70',
    },
  ];

  return (
    <section id="categories" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#090D18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF88] font-bold mb-3 shadow-sm">
            <Lock className="w-3.5 h-3.5" />
            <span>সুরক্ষিত ক্যাটাগরি সমূহ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            আপনি যা কিছু লক ও সুরক্ষিত রাখতে পারবেন
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            প্রতিটি ক্যাটাগরি আলাদা আলাদা ডেডিকেটেড ফোল্ডারে ১০০% মিলিটারী গ্রেড এনক্রিপশনে সাজানো।
          </p>
        </div>

        {/* 5 Clean Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`rounded-2xl bg-[#0D1424]/90 backdrop-blur-md border-2 ${cat.border} p-5 transition-all duration-200 transform hover:-translate-y-1 shadow-lg flex flex-col justify-between ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.bg} border border-slate-700/50 flex items-center justify-center ${cat.color} mb-3.5 shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#00FF88] mb-2">
                    {cat.sub}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>AES-256</span>
                  <span className="text-[#00FF88]">১০০% গোপনীয়</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
