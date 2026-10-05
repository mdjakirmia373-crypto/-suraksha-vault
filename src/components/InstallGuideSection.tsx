import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Settings, CheckCircle2, MoreVertical, Sparkles } from 'lucide-react';

export const InstallGuideSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const guideSteps = [
    {
      num: 1,
      title: '১. "হোমস্ক্রিনে ইনস্টল করুন" বাটনে চাপ দিন',
      icon: Sparkles,
      desc: 'ওয়েবসাইটের যেকোনো "হোমস্ক্রিনে ইনস্টল করুন" বাটনে ট্যাপ করুন। গুগল ক্রোম ব্রাউজারে স্বয়ংক্রিয়ভাবে "Add to Home screen" বা "Install" পপআপ ভেসে উঠবে।',
      tip: 'কোনো ফাইল ডাউনলোড হওয়ার অপেক্ষা করতে হবে না।',
    },
    {
      num: 2,
      title: '২. "Install" চাপুন (অথবা ৩টি ডটে ট্যাপ করুন)',
      icon: MoreVertical,
      desc: 'স্ক্রিনে আসা "Install" বাটনে ট্যাপ করুন। যদি পপআপ না আসে, তবে ক্রোম ব্রাউজারের উপরে ডানপাশে তিনটি ডটে (⋮) চাপ দিয়ে "Add to Home screen" বা "Install app"-এ চাপ দিন।',
      tip: '১ সেকেন্ডের মধ্যে ফোনের হোমস্ক্রিনে অ্যাপ তৈরি হবে।',
    },
    {
      num: 3,
      title: '৩. হোমস্ক্রিনের আইকন থেকে সরাসরি ব্যবহার করুন',
      icon: CheckCircle2,
      desc: 'এখন আপনার মোবাইলের হোমস্ক্রিনে যান। সেখানে আসল মোবাইল অ্যাপসের মতোই Suraksha Vault আইকন দেখতে পাবেন। ট্যাপ করলেই ফুলস্ক্রিনে আসল অ্যাপের মতো ওপেন হবে!',
      tip: 'ইন্টারনেট ছাড়াই সম্পূর্ণ অফলাইনে কাজ করবে।',
    },
  ];

  return (
    <section id="install-guide" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#060A12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00FF87] font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>সহজ ৩-ধাপের গাইড</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            কীভাবে মোবাইলের হোমস্ক্রিনে অ্যাপস নেবেন?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            কোনো জটিল APK ফাইল ছাড়াই সরাসরি ব্রাউজার থেকে আপনার ফোনের হোমস্ক্রিনে অ্যাপটি নেওয়ার সহজ নিয়ম।
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guideSteps.map((step) => {
            const Icon = step.icon;
            const isCurrent = activeStep === step.num;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-200 border-2 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#09111D] border-[#00FF87] shadow-[0_0_25px_rgba(0,255,135,0.2)]'
                    : 'bg-[#09111D]/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base ${
                      isCurrent
                        ? 'bg-[#00FF87] text-black shadow-[0_0_15px_rgba(0,255,135,0.4)]'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {step.num}
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300">
                      <Icon className="w-5 h-5 text-[#00FF87]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-800/80 text-[11px] font-mono text-[#00FF87] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />
                  <span>{step.tip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Note banner */}
        <div className="max-w-3xl mx-auto mt-10 rounded-2xl bg-[#08151D] border border-cyan-500/30 p-4 sm:p-5 flex items-start gap-3.5 text-xs text-slate-300 shadow-md">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white block mb-0.5">১০০% ভাইরাস ও ক্ষতিকর সতর্কবার্তা মুক্ত:</strong>
            ওয়েব অ্যাপ প্রযুক্তিতে কোনো ফাইল ডাউনলোড করার প্রয়োজন হয় না, তাই ফোনে "File might be harmful" বা প্যাকেজ ইনস্টলেশন এররের কোনো সুযোগ নেই।
          </p>
        </div>

      </div>
    </section>
  );
};
