import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Shield, 
  UserPlus, 
  LogIn, 
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { loginUser, registerUser, UserAccount } from '../utils/authStorage';

interface AuthModalProps {
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onAuthSuccess?: (user: UserAccount) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ initialMode, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successUser, setSuccessUser] = useState<UserAccount | null>(null);

  const handleModeSwitch = (newMode: 'login' | 'signup') => {
    setMode(newMode);
    setErrorMsg(null);
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (mode === 'signup') {
      // 1. Validate matching passwords
      if (password !== confirmPassword) {
        setErrorMsg('পাসওয়ার্ড ও নিশ্চিতকরণ পাসওয়ার্ড হুবহু এক হতে হবে!');
        return;
      }

      // 2. Perform Registration
      const result = registerUser(name, email, password);
      if (!result.success || !result.user) {
        setErrorMsg(result.error || 'অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে।');
        return;
      }

      // Successful Registration
      setIsSuccess(true);
      setSuccessUser(result.user);
      setTimeout(() => {
        if (onAuthSuccess) {
          onAuthSuccess(result.user!);
        }
        onClose();
      }, 900);
    } else {
      // Login mode - Validate exact credentials
      const result = loginUser(email, password);
      if (!result.success || !result.user) {
        setErrorMsg(result.error || 'লগইন ব্যর্থ হয়েছে।');
        return;
      }

      // Successful Login
      setIsSuccess(true);
      setSuccessUser(result.user);
      setTimeout(() => {
        if (onAuthSuccess) {
          onAuthSuccess(result.user!);
        }
        onClose();
      }, 900);
    }
  };

  const handleFillDemo = () => {
    setEmail('jakirmim9012@gmail.com');
    setPassword('123456');
    setErrorMsg(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 overflow-y-auto">
      <div className="relative w-full max-w-md rounded-3xl bg-[#09111D] border-2 border-slate-800 p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-slate-100 my-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
          title="বন্ধ করুন"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#00FF88]/15 border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88] mx-auto mb-2 shadow-[0_0_20px_rgba(0,255,136,0.25)]">
            {mode === 'login' ? <LogIn className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
          </div>
          <h3 className="text-xl font-extrabold text-white">
            {mode === 'login' ? 'সুরক্ষা ভল্টে লগইন করুন' : 'নতুন অ্যাকাউন্ট তৈরি করুন'}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {mode === 'login'
              ? 'আপনার সাইন-আপ করা সঠিক জিমেইল ও পাসওয়ার্ড দিয়ে প্রবেশ করুন'
              : 'নাম, জিমেইল ও পাসওয়ার্ড দিয়ে সাইন-আপ করুন'}
          </p>
        </div>

        {/* Toggle Bar: লগইন ⟷ সাইন-আপ */}
        <div className="bg-[#050B14] rounded-2xl p-1 flex items-center mb-4 border border-slate-800">
          <button
            type="button"
            onClick={() => handleModeSwitch('login')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'login'
                ? 'bg-[#0A1828] text-[#00FF88] border-b-2 border-[#00FF88] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>লগইন</span>
          </button>

          <button
            type="button"
            onClick={() => handleModeSwitch('signup')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'signup'
                ? 'bg-[#0A1828] text-[#00FF88] border-b-2 border-[#00FF88] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>সাইন-আপ</span>
          </button>
        </div>

        {/* Error Alert Message */}
        {errorMsg && (
          <div className="p-3.5 rounded-2xl bg-rose-950/70 border border-rose-500/50 text-rose-200 text-xs flex items-start gap-2.5 mb-4 animate-in shake duration-150">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">{errorMsg}</div>
          </div>
        )}

        {/* Success Banner */}
        {isSuccess ? (
          <div className="p-5 rounded-2xl bg-emerald-950/90 border border-[#00FF88] text-center space-y-2 my-4 animate-in zoom-in-95 duration-150">
            <CheckCircle2 className="w-10 h-10 text-[#00FF88] mx-auto animate-bounce" />
            <p className="text-base font-extrabold text-white">
              {mode === 'login' ? 'লগইন সফল হয়েছে!' : 'অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!'}
            </p>
            <p className="text-xs text-emerald-300">
              স্বাগতম, {successUser?.name}! আপনার সুরক্ষিত ড্যাশবোর্ডে প্রবেশ করানো হচ্ছে...
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* Name field (for Sign-up only) */}
            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 block">পূর্ণ নাম</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="উদা: জাকির আহমেদ"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
                  />
                </div>
              </div>
            )}

            {/* Email / Gmail field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">জিমেইল / ইমেইল আইডি</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="উদা: jakirmim9012@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">পাসওয়ার্ড</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'signup' ? 'কমপক্ষে ৪ অক্ষরের পাসওয়ার্ড' : 'আপনার অ্যাকাউন্ট পাসওয়ার্ড'}
                  className="w-full pl-10 pr-10 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password (for Sign-up only) */}
            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 block">পাসওয়ার্ড নিশ্চিত করুন</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="একই পাসওয়ার্ড পুনরায় লিখুন"
                    className="w-full pl-10 pr-10 py-2.5 bg-[#050B14] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
                  />
                </div>
              </div>
            )}

            {/* Notice regarding exact matching */}
            <div className="p-3 rounded-xl bg-[#061D15]/80 border border-[#00FF88]/30 text-[11px] leading-relaxed">
              <p className="font-bold text-[#00FF88] mb-0.5 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>নিরাপত্তা নিয়মাবলী</span>
              </p>
              <p className="text-slate-300">
                {mode === 'signup' 
                  ? 'সাইন-আপ করার পর লগইন করার সময় এই একই জিমেইল ও পাসওয়ার্ড লাগবে।'
                  : 'অন্য কোনো জিমেইল বা ভুল পাসওয়ার্ড দিলে লগইন হবে না।'}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl font-extrabold text-xs sm:text-sm text-black bg-[#00FF88] hover:bg-[#00E57A] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {mode === 'login' ? <LogIn className="w-4 h-4 text-black" /> : <UserPlus className="w-4 h-4 text-black" />}
              <span>{mode === 'login' ? 'লগইন করুন' : 'সাইন-আপ সম্পন্ন করুন'}</span>
            </button>

            {/* Helper link or Test fill */}
            <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              {mode === 'login' ? (
                <>
                  <span>অ্যাকাউন্ট নেই?</span>
                  <button
                    type="button"
                    onClick={() => handleModeSwitch('signup')}
                    className="text-[#00FF88] font-bold hover:underline cursor-pointer"
                  >
                    সাইন-আপ করুন
                  </button>
                  <span className="text-slate-600">·</span>
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="text-slate-400 hover:text-white underline text-[11px] cursor-pointer"
                    title="সেভ করা ইউজার তথ্য বসান"
                  >
                    ডেমো বসান
                  </button>
                </>
              ) : (
                <>
                  <span>ইতিমধ্যে অ্যাকাউন্ট আছে?</span>
                  <button
                    type="button"
                    onClick={() => handleModeSwitch('login')}
                    className="text-[#00FF88] font-bold hover:underline cursor-pointer"
                  >
                    লগইন করুন
                  </button>
                </>
              )}
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
