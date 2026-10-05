import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { X, Mail, Send, CheckCircle, Smartphone } from 'lucide-react';

interface SupportModalProps {
  lang: SurakshaLanguage;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ lang, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0A0F1D] border border-slate-700/80 shadow-[0_25px_50px_rgba(0,0,0,0.95)] p-6 text-slate-200">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#00FF87]">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              {lang === 'en' ? 'Suraksha Vault Support & Assistance' : 'সুরক্ষ ভল্ট হেল্প ও কন্টাক্ট সাপোর্ট'}
            </h3>
            <p className="text-xs text-slate-400">
              support@surakshavault.com
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-3 bg-slate-900/60 rounded-xl border border-emerald-500/30">
            <CheckCircle className="w-10 h-10 text-[#00FF87] mx-auto" />
            <h4 className="text-base font-bold text-white">
              {lang === 'en' ? 'Message Sent Successfully!' : 'বার্তা সফলভাবে পাঠানো হয়েছে!'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'en'
                ? 'Our technical support team typically responds within 12 hours. Thank you for using Suraksha Vault!'
                : 'আমাদের টেকনিক্যাল সাপোর্ট টিম সাধারণত ১২ ঘণ্টার মধ্যে উত্তর দিয়ে থাকে। সাথে থাকার জন্য ধন্যবাদ!'}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-xl text-xs font-semibold text-black bg-[#00FF87]"
            >
              {lang === 'en' ? 'Close Window' : 'উইন্ডো বন্ধ করুন'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {lang === 'en' ? 'Your Name' : 'আপনার নাম'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'en' ? 'e.g. Jakir Hossain' : 'যেমন: জাকির হোসেন'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#00FF87] focus:outline-none text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {lang === 'en' ? 'Email Address' : 'ইমেইল অ্যাড্রেস'}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#00FF87] focus:outline-none text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {lang === 'en' ? 'Inquiry or Issue Description' : 'সমস্যা বা প্রশ্ন'}
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'en' ? 'Describe your question or feedback...' : 'আপনার প্রশ্ন বা প্রতিক্রিয়া লিখুন...'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#00FF87] focus:outline-none text-white text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Send Message to Support' : 'সাপোর্ট টিমে মেসেজ পাঠান'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
