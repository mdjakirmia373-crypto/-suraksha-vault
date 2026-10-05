import React from 'react';
import { Database, HardDrive, Cloud, Check, ShieldCheck, Zap, Sparkles, RefreshCw } from 'lucide-react';

export const BackupRestoreSection: React.FC = () => {
  return (
    <section id="backup" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#070C16] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF87] font-semibold mb-3">
            <Database className="w-3.5 h-3.5" />
            <span>ডাটা সুরক্ষা ও রিকভারি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            শক্তিশালী ব্যাকআপ ও রিস্টোর সিস্টেম
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            ফোন পরিবর্তন করুন বা ফোন হারিয়ে যাক—সুরক্ষা ভল্টের দ্বিমুখী ব্যাকআপ সিস্টেমে আপনার মূল্যবান ফাইল ও ছবি চিরকাল অক্ষত থাকবে।
          </p>
        </div>

        {/* 2 Tiers Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Free Tier: Local Encrypted Offline Backup */}
          <div className="rounded-3xl bg-[#0A1220] border-2 border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                  <HardDrive className="w-6 h-6 text-[#00FF87]" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-full">
                  FREE TIER
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                লোকাল এনক্রিপ্টেড ব্যাকআপ
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Local Encrypted Offline Backup
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span>সরাসরি ফোন মেমোরি বা এসডি কার্ডে সম্পূর্ণ এনক্রিপ্টেড ব্যাকআপ ফাইল তৈরি।</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span>কোনো ইন্টারনেট বা ডেটা সংযোগের প্রয়োজন নেই (১০০% অফলাইন)।</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span>সহজে এক্সপোর্ট ও ইমপোর্ট করে যেকোনো সময় ডাটা রিস্টোর করা যায়।</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span>পাসওয়ার্ড ছাড়া ব্যাকআপ ফাইলটি অন্য কেউ খুলতে পারবে না।</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center text-xs text-slate-400">
              অ্যাপের সাথে আজীবনের জন্য সম্পূর্ণ ফ্রি
            </div>
          </div>

          {/* Premium Tier: High-Speed Secure Cloud Server */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0B1E22] via-[#091522] to-[#070E1A] border-2 border-[#00FF87] p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_35px_rgba(0,255,135,0.2)] relative">
            
            {/* Top highlight badge */}
            <div className="absolute -top-3.5 right-6 bg-[#00FF87] text-black font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>HIGH SPEED CLOUD</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00FF87]/20 border border-[#00FF87] flex items-center justify-center text-[#00FF87] shadow-[0_0_15px_rgba(0,255,135,0.3)]">
                  <Cloud className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-black bg-[#00FF87] px-3 py-1 rounded-full">
                  PREMIUM TIER
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                হাই-স্পিড সিকিউর ক্লাউড সার্ভার
              </h3>
              <p className="text-xs text-[#00FF87] mb-6">
                High-Speed Secure Cloud Server
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span><strong>অটো-সিঙ্ক ব্যাকআপ:</strong> যেকোনো নতুন ছবি বা ফাইল ভল্টে রাখলেই স্বয়ংক্রিয়ভাবে ক্লাউডে ব্যাকআপ হয়ে যাবে।</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span><strong>ইনস্ট্যান্ট রিকভারি:</strong> ফোন হারিয়ে গেলেও নতুন ফোনে অ্যাপ নামিয়ে আইডি-পাসওয়ার্ড দিলে মুহূর্তেই সব ফেরত পাবেন।</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span><strong>এন্ড-টু-এন্ড এনক্রিপশন:</strong> ক্লাউডে আপলোডের আগেই ফাইল এনক্রিপ্ট হয়ে যায়, স্বয়ং সার্ভার কর্তৃপক্ষও পড়তে পারবে না।</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <span><strong>হাই-স্পিড ডাউনলোডিং:</strong> নিমিষেই বড় বড় ফাইল ও ভিডিও ডাউনলোড ও আপলোড সুবিধা।</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-950/80 border border-[#00FF87]/40 text-center text-xs font-bold text-[#00FF87]">
              সর্বোচ্চ নিরাপদ ও ঝামেলামুক্ত ব্যাকআপ অভিজ্ঞতা
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
