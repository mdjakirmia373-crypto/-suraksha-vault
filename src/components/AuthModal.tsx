import React, { useState } from 'react';
import { X, User, Mail, Lock, RotateCcw, Eye, EyeOff, Shield, UserPlus, LogIn, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onAuthSuccess?: (user: { name: string; email: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ initialMode, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    const userName = name.trim() || (email.split('@')[0] ? email.split('@')[0] : 'জাকির আহমেদ');
    const userEmail = email.trim() || 'user@suraksha.com';

    setTimeout(() => {
      if (onAuthSuccess) {
        onAuthSuccess({
          name: userName,
          email: userEmail,
        });
      }
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-md rounded-3xl bg-[#09111D] border-2 border-slate-800 p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-slate-100">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          title="বন্ধ করুন"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#00FF87]/15 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87] mx-auto mb-2 shadow-[0_0_20px_rgba(0,255,135,0.25)]">
            {mode === 'login' ? <LogIn className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
          </div>
          <h3 className="text-xl font-extrabold text-white">
            {mode === 'login' ? 'সুরক্ষা ভল্টে লগইন করুন' : 'নতুন অ্যাকাউন্ট তৈরি করুন'}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {mode === 'login'
              ? 'আপনার অ্যাকাউন্ট পাসওয়ার্ড দিয়ে নিরাপদ ভল্টে প্রবেশ করুন'
              : 'সাইন-আপ করে আজই আপনার ব্যক্তিগত ভল্ট সুরক্ষিত করুন'}
          </p>
        </div>

        {/* Toggle Bar: লগইন ⟷ সাইন-আপ */}
        <div className="bg-[#050B14] rounded-2xl p-1 flex items-center mb-5 border border-slate-800">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setIsSuccess(false);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              mode === 'login'
                ? 'bg-[#0A1828] text-[#00FF87] border-b-2 border-[#00FF87] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>লগইন</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setIsSuccess(false);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              mode === 'signup'
                ? 'bg-[#0A1828] text-[#00FF87] border-b-2 border-[#00FF87] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>সাইন-আপ</span>
          </button>
        </div>

        {/* Success Banner */}
        {isSuccess ? (
          <div className="p-4 rounded-2xl bg-emerald-950/80 border border-[#00FF87] text-center space-y-1 my-4">
            <CheckCircle2 className="w-8 h-8 text-[#00FF87] mx-auto mb-1 animate-bounce" />
            <p className="text-sm font-bold text-white">
              {mode === 'login' ? 'লগইন সফল হয়েছে!' : 'অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!'}
            </p>
            <p className="text-xs text-emerald-300">
              অ্যাপটি ফোনে ইনস্টল করে আপনি এই ক্রেডেনশিয়াল ব্যবহার করতে পারবেন।
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* Name field (for Sign-up only) */}
            {mode === 'signup' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার পূর্ণ নাম"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
                />
              </div>
            )}

            {/* Email field */}
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
                className="w-full pl-10 pr-4 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === 'signup' ? 'অ্যাকাউন্ট পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)' : 'আপনার পাসওয়ার্ড'}
                className="w-full pl-10 pr-10 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Confirm Password (for Sign-up only) */}
            {mode === 'signup' && (
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
                  className="w-full pl-10 pr-10 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
                />
              </div>
            )}

            {/* Password Policy Box */}
            <div className="p-3 rounded-xl bg-[#061D15]/80 border border-[#00FF87]/30 text-[11px] leading-relaxed">
              <p className="font-bold text-[#00FF87] mb-0.5 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>পাসওয়ার্ড নীতি (২টি আলাদা পাসওয়ার্ড)</span>
              </p>
              <p className="text-slate-300">
                ১. অ্যাকাউন্ট পাসওয়ার্ড: রেজিস্ট্রেশন ও অ্যাকাউন্ট রিকভারির জন্য।
              </p>
              <p className="text-slate-300 mt-0.5">
                ২. ভল্ট পিন: অ্যাপে প্রবেশের পর ৪-সংখ্যার সিক্রেট পিন দিয়ে দ্রুত আনলক করবেন।
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              {mode === 'login' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
              <span>{mode === 'login' ? 'লগইন করুন' : 'অ্যাকাউন্ট তৈরি করুন'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
