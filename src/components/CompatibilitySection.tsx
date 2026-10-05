import React from 'react';
import { Smartphone, WifiOff, Cloud, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';

export const CompatibilitySection: React.FC = () => {
  const brands = [
    'Samsung Galaxy', 'Xiaomi / Redmi / POCO', 'Vivo', 'Oppo',
    'Realme', 'OnePlus', 'Motorola', 'Google Pixel',
    'Infinix & Tecno', 'Symphony & Walton', 'Honor', 'Sony Xperia'
  ];

  return (
    <section id="compatibility" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF87] font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>ইউনিভার্সাল কম্প্যাটিবিলিটি ও হাইব্রিড সুবিধা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            সকল অ্যান্ড্রয়েড ডিভাইসে কাজ করে
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            অ্যান্ড্রয়েড ৫.০ থেকে শুরু করে সর্বশেষ অ্যান্ড্রয়েড ১৫+ পর্যন্ত যেকোনো ব্রান্ডের স্মার্টফোনে কোনো ল্যাগ ছাড়া মসৃণভাবে চলবে।
          </p>
        </div>

        {/* 2 Big Core Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Works on All Android Devices */}
          <div className="rounded-3xl bg-[#09111D] border-2 border-slate-800 hover:border-[#00FF87]/50 p-6 sm:p-8 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00FF87]/15 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87] mb-5 shadow-[0_0_20px_rgba(0,255,135,0.2)]">
                <Smartphone className="w-6 h-6" />
              </div>

              <div className="inline-block text-[11px] font-mono font-bold text-[#00FF87] bg-emerald-950/90 px-3 py-1 rounded-full border border-[#00FF87]/30 mb-2">
                Android 5.0 (Lollipop) to Android 15+
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                সকল স্মার্টফোন ব্র্যান্ডে ১০০% সমর্থিত
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                আপনার ফোনটি পুরাতন হোক বা ২০২৩-২০২৬ সালের লেটেস্ট ফ্ল্যাগশিপ, সুরক্ষা ভল্টের ইউনিভার্সাল এপিকে আর্কিটেকচার প্রতিটি ফোনে নিখুঁতভাবে ইন্সটল হবে। কোনো রুট পারমিশনের প্রয়োজন নেই।
              </p>

              {/* Supported brands tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-[11px] font-medium text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg"
                  >
                    ✓ {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>ন্যূনতম র‍্যাম: 1 GB</span>
              <span className="text-[#00FF87] font-semibold">জিরো ল্যাগ অপ্টিমাইজড</span>
            </div>
          </div>

          {/* Card 2: Seamless Offline & Online Use */}
          <div className="rounded-3xl bg-[#09111D] border-2 border-slate-800 hover:border-[#00FF87]/50 p-6 sm:p-8 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-5 shadow-[0_0_20px_rgba(0,223,223,0.2)]">
                <Layers className="w-6 h-6" />
              </div>

              <div className="inline-block text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/30 mb-2">
                হাইব্রিড আর্কিটেকচার (অফলাইন + অনলাইন)
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                ইন্টারনেট থাকুক বা না থাকুক—ভল্ট সবসময় প্রস্তুত
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                ইন্টারনেট সংযোগ ছাড়াই অ্যাপ লকার, ফটো ভল্ট ও নোটবুক সম্পূর্ণ লোকাল মোডে কাজ করে। যখনই ইন্টারনেট পাবেন, ব্যাকআপ স্বয়ংক্রিয়ভাবে ক্লাউড সার্ভারের সাথে সিঙ্ক হয়ে যাবে।
              </p>

              {/* Feature comparison */}
              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-950 flex items-center justify-center text-[#00FF87] shrink-0 mt-0.5">
                    <WifiOff className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">১০০% অফলাইন অপারেশন (No Internet Needed)</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      লোকাল AES-256 এনক্রিপশনের মাধ্যমে ফোনের মেমোরিতে সব ফাইল ১০০% অফলাইনে সুরক্ষিত থাকে।
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Cloud className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">স্মার্ট অনলাইন সিঙ্ক (Auto Cloud Backup)</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      ওয়াই-ফাই বা মোবাইল ডেটা পেলে মুহূর্তেই সিকিউর ক্লাউডে এনক্রিপ্ট হয়ে স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>ডাটা খরচ: শূন্য (অফলাইন মোডে)</span>
              <span className="text-cyan-400 font-semibold">নিরাপদ ও নির্ভরযোগ্য</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
