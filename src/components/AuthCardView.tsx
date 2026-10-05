import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { User, Mail, Lock, RotateCcw, Eye, EyeOff, ShieldCheck, UserPlus, LogIn, Download, Smartphone } from 'lucide-react';

interface AuthCardViewProps {
  lang: SurakshaLanguage;
  onSuccessAuth: () => void;
  onDownloadApk: () => void;
  onOpenGuide: () => void;
}

export const AuthCardView: React.FC<AuthCardViewProps> = ({
  lang,
  onSuccessAuth,
  onDownloadApk,
  onOpenGuide,
}) => {
  const [tab, setTab] = useState<'signup' | 'login'>('signup');
  const [name, setName] = useState('জাকির হোসেন');
  const [email, setEmail] = useState('mai319349@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [confirmPassword, setConfirmPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccessAuth();
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl bg-[#09111D] border-2 border-slate-800 p-5 sm:p-7 shadow-2xl relative text-left">
      
      {/* Top Emblem & Brand */}
      <div className="text-center mb-5">
        <div className="relative inline-block mb-2">
          <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-b from-[#00FF87] via-[#00DFDF] to-[#0A261D] flex items-center justify-center shadow-[0_0_25px_rgba(0,255,135,0.4)]">
            <div className="w-full h-full rounded-full bg-[#051410] border-2 border-[#00FF87]/80 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-[#00FF87]" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Suraksha Vault
        </h2>
        <p className="text-xs sm:text-sm italic text-slate-300 font-medium mt-0.5">
          "Your Privacy. Your Vault. Your Suraksha."
        </p>
      </div>

      {/* Switcher: + সাইন আপ | -> লগইন করুন matching screenshot */}
      <div className="bg-[#060B14] rounded-2xl p-1.5 flex items-center mb-5 border border-slate-800">
        <button
          type="button"
          onClick={() => setTab('signup')}
          className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            tab === 'signup'
              ? 'bg-[#0A1626] text-[#00FF87] border-b-2 border-[#00FF87] shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <UserPlus className="w-4 h-4" />
          <span>সাইন আপ</span>
        </button>

        <button
          type="button"
          onClick={() => setTab('login')}
          className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            tab === 'login'
              ? 'bg-[#0A1626] text-[#00FF87] border-b-2 border-[#00FF87] shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <LogIn className="w-4 h-4" />
          <span>লগইন করুন</span>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        
        {/* Title */}
        <div className="text-center pb-1">
          <h3 className="text-sm sm:text-base font-bold text-[#00FF87]">
            {tab === 'signup' ? 'নতুন অ্যাকাউন্ট তৈরি ও সরাসরি প্রবেশ' : 'আপনার অ্যাকাউন্টে লগইন করুন'}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {tab === 'signup' ? 'সাইন আপ করলেই আপনার ভল্ট সরাসরি ওপেন হবে' : 'আপনার ইমেইল ও পাসওয়ার্ড দিয়ে ভল্টে প্রবেশ করুন'}
          </p>
        </div>

        {/* Input 1: আপনার নাম */}
        {tab === 'signup' && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="আপনার নাম"
              className="w-full pl-10 pr-4 py-3 bg-[#050B14] border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
            />
          </div>
        )}

        {/* Input 2: জিমেইল / ই-মেইল ঠিকানা */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="জিমেইল / ই-মেইল ঠিকানা"
            className="w-full pl-10 pr-4 py-3 bg-[#050B14] border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
          />
        </div>

        {/* Input 3: অ্যাকাউন্ট পাসওয়ার্ড */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Lock className="w-4 h-4" />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="অ্যাকাউন্ট পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
            className="w-full pl-10 pr-10 py-3 bg-[#050B14] border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Input 4: পাসওয়ার্ড নিশ্চিত করুন */}
        {tab === 'signup' && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <RotateCcw className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="পাসওয়ার্ড নিশ্চিত করুন"
              className="w-full pl-10 pr-10 py-3 bg-[#050B14] border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Password Policy Box exactly matching screenshot */}
        <div className="p-3.5 rounded-2xl bg-[#061D15]/90 border border-[#00FF87]/40 leading-relaxed text-xs">
          <p className="font-bold text-[#00FF87] mb-1 flex items-center gap-1.5">
            <span>পাসওয়ার্ড নীতি (২টি আলাদা পাসওয়ার্ড)</span>
          </p>
          <p className="text-slate-300">
            ১. অ্যাকাউন্ট পাসওয়ার্ড: রেজিস্ট্রেশন ও লগইনের জন্য।
          </p>
          <p className="text-slate-300 mt-1">
            ২. ভল্ট পিন: অ্যাপে প্রবেশের পর ৪-সংখ্যার একটি পিন সেট করবেন, যা দিয়ে প্রতিদিন অ্যাপে ঢুকবেন এবং ছবি/ভিডিও সুরক্ষিত রাখবেন।
          </p>
        </div>

        {/* Action Button: সাইন আপ ও ভল্টে প্রবেশ করুন */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,255,135,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {tab === 'signup' ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
          <span>{tab === 'signup' ? 'সাইন আপ ও ভল্টে প্রবেশ করুন' : 'লগইন করে ভল্ট ওপেন করুন'}</span>
        </button>
      </form>

      {/* Direct App Download Button right on the card */}
      <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <button
          type="button"
          onClick={onDownloadApk}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
        >
          <Download className="w-4 h-4 text-[#00FF87]" />
          <span>অ্যাপস ডাউনলোড করুন (APK)</span>
        </button>

        <button
          type="button"
          onClick={onOpenGuide}
          className="text-slate-400 hover:text-[#00FF87] transition-colors flex items-center gap-1"
        >
          <Smartphone className="w-3.5 h-3.5 text-[#00FF87]" />
          <span>অ্যাপস ইনস্টল করার নিয়ম →</span>
        </button>
      </div>

    </div>
  );
};
