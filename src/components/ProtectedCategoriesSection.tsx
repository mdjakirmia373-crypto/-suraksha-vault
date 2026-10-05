import React from 'react';
import { Files, Image, Video, FileText, StickyNote, ShieldCheck, Lock } from 'lucide-react';

export const ProtectedCategoriesSection: React.FC = () => {
  const categories = [
    {
      id: 'all-files',
      number: '০১',
      titleEn: 'All Types of Files',
      titleBn: 'সকল ফাইল',
      subtitle: 'Any Extension & Format',
      desc: 'যেকোনো এক্সটেনশনের ফাইল (.zip, .apk, .mp3, .bin, ইত্যাদি) সম্পূর্ণ এনক্রিপ্ট করে ফোনের স্বাভাবিক ফাইল ম্যানেজার থেকে লুকিয়ে রাখুন।',
      icon: Files,
      color: 'from-emerald-500/20 to-teal-500/10',
      iconColor: 'text-[#00FF87]',
      borderColor: 'border-[#00FF87]/30 hover:border-[#00FF87]/70',
      badge: 'ইউনিভার্সাল ফরম্যাট',
    },
    {
      id: 'photos',
      number: '০২',
      titleEn: 'Images & Photos',
      titleBn: 'ইমেজ ও ফটো',
      subtitle: 'Camera Roll & Screenshots',
      desc: 'ব্যক্তিগত ছবি, পারিবারিক অ্যালবাম এবং গোপনীয় স্ক্রিনশট গ্যালারি থেকে অদৃশ্য করে ফেলুন। ভল্ট ছাড়া কোথাও দেখা যাবে না।',
      icon: Image,
      color: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30 hover:border-blue-400/70',
      badge: 'গ্যালারি হাইডার',
    },
    {
      id: 'videos',
      number: '০৩',
      titleEn: 'Videos & Recordings',
      titleBn: 'ভিডিও ও রেকর্ডিং',
      subtitle: 'Personal & Confidential Clips',
      desc: 'উচ্চ রেজুলিউশনের ব্যক্তিগত ভিডিও ক্লিপ ও অডিও রেকর্ডিং দ্রুত এনক্রিপ্ট করে রাখুন। কোনো থার্ড পার্টি অ্যাপ অ্যাক্সেস করতে পারবে না।',
      icon: Video,
      color: 'from-purple-500/20 to-pink-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/30 hover:border-purple-400/70',
      badge: 'ভিডিও এনক্রিপশন',
    },
    {
      id: 'documents',
      number: '০৪',
      titleEn: 'Confidential Documents',
      titleBn: 'ডকুমেন্ট',
      subtitle: 'PDF, Word, Excel, ID Cards',
      desc: 'জাতীয় পরিচয়পত্র (NID), পাসপোর্ট কপি, ব্যাংকের স্টেটমেন্ট, চুক্তিপত্র বা পিডিএফ ফাইল সুরক্ষিত ভল্টে ১০০% নিরাপদে রাখুন।',
      icon: FileText,
      color: 'from-amber-500/20 to-orange-500/10',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/30 hover:border-amber-400/70',
      badge: 'NID ও পাসপোর্ট',
    },
    {
      id: 'notes',
      number: '০৫',
      titleEn: 'Personal Notes & Passwords',
      titleBn: 'পার্সোনাল নোট',
      subtitle: 'Secret Credentials & Diary',
      desc: 'জরুরি পাসওয়ার্ড, ব্যাংক অ্যাকাউন্ট নম্বর, বিকাশ ও এটিএম পিন এবং ব্যক্তিগত ডায়েরির গোপন তথ্য আলাদা আলাদা ক্যাটাগরিতে রাখুন।',
      icon: StickyNote,
      color: 'from-emerald-500/20 to-cyan-500/10',
      iconColor: 'text-[#00FF87]',
      borderColor: 'border-[#00FF87]/30 hover:border-[#00FF87]/70',
      badge: 'পাসওয়ার্ড ভল্ট',
    },
  ];

  return (
    <section id="categories" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#070C16] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF87] font-semibold mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>সুরক্ষিত ক্যাটাগরি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            আপনি যা কিছু লক ও সুরক্ষিত করতে পারবেন
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            সুরক্ষা ভল্টে আপনার যেকোনো স্পর্শকাতর ফাইল এবং ব্যক্তিগত তথ্য আলাদা আলাদা ডেডিকেটেড ক্যাটাগরিতে ১০০% গোপন রাখা যায়।
          </p>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`rounded-3xl bg-[#0A1220] border-2 ${cat.borderColor} p-6 transition-all duration-200 transform hover:-translate-y-1 shadow-lg flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} border border-slate-700/60 flex items-center justify-center ${cat.iconColor} shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                      {cat.number}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#00FF87] tracking-wider block">
                      {cat.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                      {cat.titleBn}
                    </h3>
                    <span className="text-xs text-slate-400 block font-medium">
                      {cat.titleEn}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00FF87]" />
                    <span>AES-256 এনক্রিপ্টেড</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">১০০% গোপনীয়</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
