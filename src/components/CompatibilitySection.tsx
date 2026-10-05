import React from 'react';
import { Smartphone, Check, ShieldCheck, Cpu, HardDrive, Zap, Layers } from 'lucide-react';

export const CompatibilitySection: React.FC = () => {
  const specs = [
    { label: 'সাপোর্টেড অপারেটিং সিস্টেম', val: 'Android 5.0 (Lollipop) থেকে Android 15+ (Universal)' },
    { label: 'প্যাকেজ সাইজ ও ওজন', val: '১৮.৪ মেগাবাইট (আল্ট্রা-লাইটওয়েট)' },
    { label: 'হার্ডওয়্যার এনক্রিপশন', val: 'মিলিটারি-গ্রেড AES-256 Bit Cipher' },
    { label: 'প্রসেসর আর্কিটেকচার', val: 'ARM64, ARMv7, x86_64 (সকল চিপসেটে অপ্টিমাইজড)' },
    { label: 'রুট পারমিশন প্রয়োজন?', val: 'না, কোনো রুটের প্রয়োজন নেই (১০০% নিরাপদ)' },
    { label: 'সমর্থিত ব্র্যান্ডসমূহ', val: 'Samsung, Xiaomi, Vivo, Oppo, Realme, OnePlus, Infinix, Walton, Symphony সহ সকল অ্যান্ড্রয়েড ফোন' },
    { label: 'ইন্টারনেট বাধ্যবাধকতা', val: 'কোনো ইন্টারনেট দরকার নেই (১০০% অফলাইনে চলে)' },
  ];

  return (
    <section id="compatibility" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0B0F19] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF88] font-bold mb-3 shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>সিস্টেম স্পেসিফিকেশন</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            টেকনিক্যাল কম্প্যাটিবিলিটি স্পেক্স
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            আপনার ফোনটি পুরাতন হোক বা নতুন ফ্ল্যাগশিপ, সুরক্ষা ভল্ট প্রতিটি ফোনে নিখুঁতভাবে চলবে।
          </p>
        </div>

        {/* Tech-Spec Tablet Card */}
        <div className="rounded-3xl bg-[#0E1526]/80 backdrop-blur-xl border-2 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 sm:p-8">
          
          <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00FF88]/15 border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88]">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">Suraksha Vault Android Build</h3>
                <p className="text-xs text-slate-400 font-mono">v1.0.4 Universal Stable Release</p>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-[#00FF88] text-xs font-mono font-bold border border-[#00FF88]/30">
              <Check className="w-3.5 h-3.5" />
              VERIFIED
            </span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-800/70">
            {specs.map((row, idx) => (
              <div key={idx} className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 text-xs sm:text-sm">
                <span className="text-slate-400 font-medium sm:w-2/5">
                  {row.label}
                </span>
                <span className="font-semibold text-white sm:w-3/5 sm:text-right">
                  {row.val}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
