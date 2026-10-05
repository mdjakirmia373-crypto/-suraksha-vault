import React, { useState } from 'react';
import { KeyRound, Lock, ShieldCheck, Check, ChevronRight, Sparkles } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      id: 'feat-1',
      index: '০১',
      title: 'ডুয়েল পাসওয়ার্ড প্রটেকশন (Dual Password)',
      subtitle: 'অ্যাকাউন্ট পাসওয়ার্ড + ৪-ডিজিটের কুইক ভল্ট পিন',
      description: 'নিরাপত্তা ও দ্রুত অ্যাক্সেসের নিখুঁত মেলবন্ধন। মূল অ্যাকাউন্ট রেজিস্ট্রেশন ও রিকভারির জন্য শক্তিশালী অ্যাকাউন্ট পাসওয়ার্ড এবং প্রতিদিন দ্রুত আনলক করার জন্য ৪-সংখ্যার সহজ ভল্ট পিন ব্যবহার করুন।',
      icon: KeyRound,
      highlights: [
        'অ্যাকাউন্ট রিকভারির জন্য নিরাপদ অ্যাকাউন্ট পাসওয়ার্ড',
        'মিলিসেকেন্ডে ভল্ট আনলকের জন্য ৪-ডিজিটের আল্ট্রা ফাস্ট পিন',
        'ফিঙ্গারপ্রিন্ট ও বায়োমেট্রিক সেন্সর সাপোর্ট',
        'ভুল পাসওয়ার্ড প্রতিরোধে অটোমেটিক সেফটি সিকিউরিটি'
      ],
      colSpan: 'lg:col-span-4',
    },
    {
      id: 'feat-2',
      index: '০২',
      title: 'অ্যাডভান্সড অ্যাপ লকার (Advanced App Locker)',
      subtitle: 'হোয়াটসঅ্যাপ, ফেসবুক, বিকাশ ও গ্যালারি মুহূর্তেই লক করুন',
      description: 'বন্ধু, সহকর্মী বা পরিবারের কারো হাতে ফোন দিলেও কোনো ভয় নেই। হোয়াটসঅ্যাপ, ফেসবুক, মেসেঞ্জার, বিকাশ ও ব্যাংক অ্যাপ এক ট্যাপেই নিরাপদ সিকিউরিটি আবরণে সুরক্ষিত করুন।',
      icon: Lock,
      highlights: [
        '০% ব্যাটারি ড্রেন ও সুপার ফাস্ট ইন্টারফেস',
        'অননুমোদিত অ্যাপ আনইনস্টল প্রতিরোধ',
        'যেকোনো নির্দিষ্ট অ্যাপ বাছাই করে লক করার ক্ষমতা',
        'স্টিলথ আনলক মোড (কেউ দেখে ফেলার ভয় নেই)'
      ],
      colSpan: 'lg:col-span-4',
    },
    {
      id: 'feat-3',
      index: '০৩',
      title: 'মিলিটারী-গ্রেড AES-256 এনক্রিপশন',
      subtitle: 'বিশ্বমানের ক্রিপ্টোগ্রাফিক সুরক্ষা আর্কিটেকচার',
      description: 'বিশ্বের শীর্ষ ব্যাংক ও প্রতিরক্ষা বাহিনী যে অ্যালগরিদম ব্যবহার করে, সেই একই AES-256 বিট লোকাল এনক্রিপশনে আপনার প্রতিটি ফাইল, ছবি ও ভিডিও সুরক্ষিত থাকে। পাসওয়ার্ড ছাড়া ডাটা ডিক্রিপ্ট করা অসম্ভব।',
      icon: ShieldCheck,
      highlights: [
        'মিলিটারী গ্রেড হার্ডওয়্যার এক্সিলারেটেড এনক্রিপশন',
        'গ্যালারি ও যেকোনো ফাইল ম্যানেজার থেকে পুরোপুরি অদৃশ্য',
        'ভল্টের ভেতরেই নিরাপদ ফটো, ভিডিও ও ডকুমেন্ট ভিউয়ার',
        'প্রয়োজনে ১-ক্লিকেই আবার গ্যালারিতে আনলক করার সুবিধা'
      ],
      colSpan: 'lg:col-span-4',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF87] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>মূল নিরাপত্তামূলক ফিচারসমূহ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            অত্যাধুনিক সুরক্ষা ও নিয়ন্ত্রণ
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            আপনার অ্যান্ড্রয়েড ফোনের গোপনীয়তা নিশ্চিত করতে প্রয়োজনীয় প্রতিটি উন্নত ফিচার একটিমাত্র অ্যাপসে সংকলিত।
          </p>
        </div>

        {/* 3 Core Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isSelected = selectedFeature === idx;
            return (
              <div
                key={feat.id}
                onClick={() => setSelectedFeature(isSelected ? null : idx)}
                className={`${feat.colSpan} rounded-3xl bg-[#09111D] border-2 border-slate-800 hover:border-[#00FF87]/50 p-6 sm:p-7 transition-all duration-200 shadow-xl flex flex-col justify-between cursor-pointer group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00FF87]/15 border border-[#00FF87]/30 flex items-center justify-center text-[#00FF87] group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,135,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#00FF87] transition-colors">
                      {feat.index}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-[#00FF87] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400/90 mb-3">
                    {feat.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="space-y-2">
                    {feat.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#00FF87] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
