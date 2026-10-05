import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'সুরক্ষ ভল্ট কি ইন্টারনেট সংযোগ ছাড়া (অফলাইনে) শতভাগ কাজ করবে?',
      a: 'হ্যাঁ, শতভাগ। সুরক্ষা ভল্ট সম্পূর্ণ অফলাইন-ফার্স্ট আর্কিটেকচারে তৈরি। ইন্টারনেট বা কোনো ওয়াই-ফাই সংযোগ ছাড়াই আপনি অ্যাপ লক করতে পারবেন, ছবি-ভিডিও ও গোপন ফাইল সুরক্ষিত রাখতে পারবেন। পরবর্তীতে ইন্টারনেট পেলে ঐচ্ছিক ক্লাউড সিঙ্ক চালু থাকলে ডাটা স্বয়ংক্রিয়ভাবে ক্লাউডে ব্যাকআপ হয়ে যাবে।',
    },
    {
      q: 'আমার ফোনে কি সুরক্ষ ভল্ট চলবে? (ডিভাইস কম্প্যাটিবিলিটি)',
      a: 'সুরক্ষা ভল্ট অ্যান্ড্রয়েড ৫.০ (ললিপপ) থেকে শুরু করে সর্বশেষ অ্যান্ড্রয়েড ১৫+ পর্যন্ত সকল ফোনে চলার উপযোগী করে তৈরি। স্যামসাং, শাওমি, অপ্পো, ভিভো, রিয়েলমি, টেকনো, ইনফিনিক্স ও সিম্ফনিসহ যেকোনো অ্যান্ড্রয়েড স্মার্টফোনে এটি কোনো ল্যাগ বা সমস্যা ছাড়াই মসৃণভাবে চলবে।',
    },
    {
      q: 'প্রিমিয়াম হাই-স্পিড সিকিউর ক্লাউড ব্যাকআপের সুবিধা কী?',
      a: 'প্রিমিয়াম ক্লাউড ব্যাকআপ সুবিধার ফলে আপনার ফোন কখনো নষ্ট হয়ে গেলেও, হারিয়ে গেলে বা নতুন ফোন কিনলে আপনার কোনো ফাইল হারাতে হবে না। যেকোনো ডিভাইসে নতুন করে অ্যাপ নামিয়ে লগইন করলেই আপনার সব ছবি, ফাইল ও পাসওয়ার্ড নিমিষেই হাই-স্পিড ক্লাউড সার্ভার থেকে সুরক্ষিতভাবে রিস্টোর হয়ে যাবে। এটি ক্লাউডে আপলোডের আগেই এন্ড-টু-এন্ড এনক্রিপ্ট হয়ে যায়।',
    },
    {
      q: 'ডাউনলোডের সময় "File might be harmful" সতর্কবার্তা দেখালে কী করব?',
      a: 'এটি গুগল অ্যান্ড্রয়েডের একটি সম্পূর্ণ স্বাভাবিক ও সাধারণ নিরাপত্তামূলক সতর্কতা। গুগল প্লে স্টোরের বাইরে ব্রাউজার থেকে সরাসরি যেকোনো (.apk) ফাইল ডাউনলোড করার সময় ক্রোম বা অ্যান্ড্রয়েড এই নোটিশ দেখায়। আপনি নিশ্চিন্তে "Download anyway" চাপুন। আমাদের প্যাকেজটি ১০০% ভাইরাস, ট্র্যাকার ও ম্যালওয়্যার মুক্ত অফিসিয়াল রিলিজ।',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF87] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>সচরাচর জিজ্ঞাসা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            সাধারণ প্রশ্নোত্তর (FAQ)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            সুরক্ষা ভল্ট ব্যবহারের নিয়ম, অফলাইন সুবিধা এবং ডিভাইস কম্প্যাটিবিলিটি সম্পর্কে জেনে নিন।
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all overflow-hidden ${
                  isOpen ? 'border-[#00FF87]/50 bg-[#09111D]' : 'border-slate-800 bg-[#09111D]/60 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-[#00FF87] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#00FF87] text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
