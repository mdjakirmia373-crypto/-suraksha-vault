import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  lang: SurakshaLanguage;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'Will Suraksha Vault work completely without an internet connection?',
      qBn: 'সুরক্ষ ভল্ট কি ইন্টারনেট সংযোগ ছাড়া শতভাগ কাজ করবে?',
      aEn: 'Yes, 100%. Suraksha Vault is built with a strictly offline-first architecture. It does not require mobile data or Wi-Fi to lock apps, encrypt photos, or operate your vault.',
      aBn: 'হ্যাঁ, শতভাগ। সুরক্ষ ভল্ট সম্পূর্ণ অফলাইন-ফার্স্ট আর্কিটেকচারে তৈরি। অ্যাপ লক করা, ছবি ও ভিডিও এনক্রিপ্ট রাখা কিংবা ভল্ট ব্যবহারের জন্য কোনো ইন্টারনেট বা ওয়াই-ফাই প্রয়োজন নেই।',
    },
    {
      qEn: 'Are my encrypted photos and videos ever uploaded to any cloud server?',
      qBn: 'আমার ছবি বা ভিডিও কি কোনো ক্লাউড সার্ভারে আপলোড করা হয়?',
      aEn: 'Never. Suraksha Vault does not operate external cloud storage. All encrypted media is stored locally in your phone’s internal hardware storage using AES-256 standard encryption keys generated on your device.',
      aBn: 'কখনোই না। সুরক্ষ ভল্টের কোনো ক্লাউড সার্ভার নেই। আপনার সকল ছবি ও ভিডিও আপনার নিজস্ব ফোনের মেমোরিতেই AES-256 লোকাল এনক্রিপশনে সুরক্ষিত থাকে। আপনার অনুমতি ছাড়া কেউ এটি দেখতে পারবে না।',
    },
    {
      qEn: 'What happens if I forget my 4-digit numeric PIN?',
      qBn: 'যদি আমি আমার ৪-ডিজিট পিন ভুলে যাই, তবে কী করব?',
      aEn: 'This is why Suraksha Vault features Dual Password Protection. If you forget your everyday 4-digit PIN, tap "Forgot PIN" and verify your Master Account Password to reset your PIN instantly.',
      aBn: 'এ কারণেই সুরক্ষ ভল্টে ডুয়েল পাসওয়ার্ড সুরক্ষা রাখা হয়েছে। ৪-ডিজিট পিন ভুলে গেলে "Forgot PIN" এ ট্যাপ করে অ্যাকাউন্ট তৈরির সময় দেওয়া মাস্টার পাসওয়ার্ডটি প্রবেশ করালে নতুন পিন সেট করা যাবে।',
    },
    {
      qEn: 'Can someone bypass or uninstall the app to access my hidden files?',
      qBn: 'কেউ কি অ্যাপটি আনইনস্টল করে আমার লুকানো ফাইল বের করে ফেলতে পারবে?',
      aEn: 'No. Suraksha Vault includes an Advanced Uninstall Protection mechanism. Any attempt to uninstall or clear data from system settings requires your master authentication password first.',
      aBn: 'না, সম্ভব নয়। সুরক্ষ ভল্টে অ্যাডভান্সড আনইনস্টল প্রোটেকশন রয়েছে। ফোন সেটিংস থেকে কেউ অ্যাপ আনইনস্টল করতে চাইলে আগে মাস্টার পাসওয়ার্ড দিতে হবে।',
    },
    {
      qEn: 'Does Suraksha Vault support Android 13, 14, and 15?',
      qBn: 'সুরক্ষ ভল্ট কি অ্যান্ড্রয়েড ১৩, ১৪ ও ১৫ ভার্সনে চলবে?',
      aEn: 'Yes, Suraksha Vault is compiled targeting the latest Android 15 (API 35) while maintaining backward compatibility all the way back to Android 8.0 (Oreo).',
      aBn: 'হ্যাঁ, সুরক্ষ ভল্ট সর্বশেষ অ্যান্ড্রয়েড ১৫ (এপিআই ৩৫) এর সাথে সম্পূর্ণ মানানসই এবং পুরোনো অ্যান্ড্রয়েড ৮.০ পর্যন্ত সব ফোনে নির্বিঘ্নে কাজ করে।',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#00FF87] uppercase mb-2">
            {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ প্রশ্নোত্তর'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {lang === 'en' ? 'Everything You Need to Know' : 'নিরাপত্তা ও ব্যবহার বিষয়ক প্রশ্নাবলি'}
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-[#0A0F1D] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-[#00FF87] transition-colors"
                >
                  <span>{lang === 'en' ? faq.qEn : faq.qBn}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00FF87]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/50">
                    {lang === 'en' ? faq.aEn : faq.aBn}
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
