import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { 
  Shield, 
  Lock, 
  Unlock, 
  Image, 
  Video, 
  ShieldCheck, 
  Camera, 
  ChevronRight,
  ArrowLeft,
  Settings,
  Fingerprint,
  Calculator,
  User,
  Mail,
  KeyRound,
  RotateCcw,
  Eye,
  EyeOff,
  UserPlus,
  LogIn,
  CheckCircle2,
  Cloud,
  Grid,
  History as HistoryIcon,
  Smartphone,
  Search,
  Heart
} from 'lucide-react';

interface PhoneSimulatorProps {
  lang: SurakshaLanguage;
}

export const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({ lang }) => {
  // Simulator navigation: 'signup' (matching user's screenshot exactly!) | 'pin' | 'main' | 'applocker' | 'photovault' | 'settings'
  const [screen, setScreen] = useState<'signup' | 'pin' | 'main' | 'applocker' | 'photovault' | 'settings'>('signup');
  const [authTab, setAuthTab] = useState<'signup' | 'login'>('signup');

  // Form states matching screenshot
  const [userName, setUserName] = useState('জাকির হোসেন');
  const [userEmail, setUserEmail] = useState('jakir@gmail.com');
  const [userPass, setUserPass] = useState('••••••••');
  const [userPassConfirm, setUserPassConfirm] = useState('••••••••');
  const [showPass, setShowPass] = useState(false);

  // PIN states
  const [pin, setPin] = useState<string>('');

  // App locks
  const [appLocks, setAppLocks] = useState<Record<string, boolean>>({
    whatsapp: true,
    bkash: true,
    gallery: true,
    messenger: true,
  });

  // Settings
  const [settingsState, setSettingsState] = useState({
    fingerprint: true,
    calculatorDisguise: false,
    intruderSelfie: true,
    lockSystemSettings: true,
  });

  const handleKeyPress = (num: string) => {
    if (pin.length < 4) {
      const nextPin = pin + num;
      setPin(nextPin);

      if (nextPin.length === 4) {
        setTimeout(() => {
          setScreen('main');
        }, 150);
      }
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const toggleApp = (key: string) => {
    setAppLocks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleSetting = (key: keyof typeof settingsState) => {
    setSettingsState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const lockedCount = Object.values(appLocks).filter(Boolean).length;

  const essentialApps = [
    { key: 'whatsapp', name: 'WhatsApp', labelBn: 'হোয়াটসঅ্যাপ', desc: 'Chats & Calls', color: 'bg-[#25D366]' },
    { key: 'bkash', name: 'bKash / Banking', labelBn: 'বিকাশ / ফাইন্যান্স', desc: 'Financial Balance', color: 'bg-[#E2136E]' },
    { key: 'gallery', name: 'Photo Gallery', labelBn: 'ফোন গ্যালারি', desc: 'Personal Camera Roll', color: 'bg-[#3B82F6]' },
    { key: 'messenger', name: 'Facebook & Messenger', labelBn: 'মেসেঞ্জার', desc: 'Direct Messages', color: 'bg-[#0084FF]' },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] select-none">
      {/* Outer Cyan / Neon Glow Halo matching user screenshot's emblem */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00FF87]/30 via-cyan-500/20 to-[#00FF87]/25 rounded-[44px] blur-xl opacity-75" />

      {/* Phone Frame */}
      <div className="relative bg-[#060912] border-[3px] border-slate-700/80 rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Android Punch Hole & Status Header exactly like screenshot (12:17 ⏰ 🔕) */}
        <div className="bg-[#04070F] pt-2.5 pb-1.5 px-5 flex items-center justify-between border-b border-slate-800/50">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
            <span>12:17</span>
            <span className="text-[10px]">⏰</span>
            <span className="text-[10px]">🔕</span>
          </div>
          {/* Selfie camera punch-hole */}
          <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700 mx-auto" />
          <div className="flex items-center gap-1 text-[10px] text-slate-300 font-mono">
            <span>LTE</span>
            <span className="text-[#00FF87]">98%</span>
          </div>
        </div>

        {/* Screen Display */}
        <div className="bg-[#050811] min-h-[520px] p-3.5 text-slate-100 flex flex-col justify-between overflow-y-auto">
          
          {/* =======================================================
             SCREEN 1: EXACT SCREENSHOT DESIGN REPLICATION
             ======================================================= */}
          {screen === 'signup' && (
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                
                {/* 1. Circular Glowing Shield Avatar from screenshot */}
                <div className="text-center mt-1 mb-2">
                  <div className="relative inline-block">
                    {/* Double glowing ring */}
                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-b from-[#00FF87] via-[#00DFDF] to-[#0B251B] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,135,0.4)]">
                      <div className="w-full h-full rounded-full bg-[#051410] border-2 border-[#00FF87]/60 flex items-center justify-center overflow-hidden">
                        <div className="w-11 h-11 rounded-full bg-[#0A261D] flex items-center justify-center text-[#00FF87]">
                          <ShieldCheck className="w-7 h-7 text-[#00FF87]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Title: Suraksha Vault */}
                  <h3 className="text-lg font-bold text-white tracking-wide mt-1.5">
                    Suraksha Vault
                  </h3>

                  {/* Tagline exactly as screenshot: "Your Privacy. Your Vault. Your Suraksha." */}
                  <p className="text-[11px] italic text-slate-300 font-medium">
                    "Your Privacy. Your Vault. Your Suraksha."
                  </p>
                </div>

                {/* 2. Switcher: + সাইন আপ | -> লগইন করুন */}
                <div className="bg-[#0A111E] rounded-xl p-1 flex items-center mb-3 border border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setAuthTab('signup')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      authTab === 'signup'
                        ? 'bg-slate-900 text-[#00FF87] border-b-2 border-[#00FF87] shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>সাইন আপ</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthTab('login')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      authTab === 'login'
                        ? 'bg-slate-900 text-[#00FF87] border-b-2 border-[#00FF87] shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>লগইন করুন</span>
                  </button>
                </div>

                {/* 3. Main Form Container Card */}
                <div className="rounded-2xl bg-[#09111D] border border-slate-800/90 p-3 space-y-2.5 shadow-lg">
                  
                  {/* Card Title & Subtitle */}
                  <div className="text-center pt-0.5 pb-1">
                    <h4 className="text-xs font-bold text-[#00FF87]">
                      {authTab === 'signup' ? 'নতুন অ্যাকাউন্ট তৈরি ও সরাসরি প্রবেশ' : 'অ্যাকাউন্টে লগইন করুন'}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {authTab === 'signup' ? 'সাইন আপ করলেই আপনার ভল্ট সরাসরি ওপেন হবে' : 'আপনার ইমেইল ও মাস্টার পাসওয়ার্ড দিন'}
                    </p>
                  </div>

                  {/* Input 1: আপনার নাম */}
                  {authTab === 'signup' && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="আপনার নাম"
                        className="w-full pl-9 pr-3 py-2 bg-[#050B14] border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
                      />
                    </div>
                  )}

                  {/* Input 2: জিমেইল / ই-মেইল ঠিকানা */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="জিমেইল / ই-মেইল ঠিকানা"
                      className="w-full pl-9 pr-3 py-2 bg-[#050B14] border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
                    />
                  </div>

                  {/* Input 3: অ্যাকাউন্ট পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর) */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={userPass}
                      onChange={(e) => setUserPass(e.target.value)}
                      placeholder="অ্যাকাউন্ট পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
                      className="w-full pl-9 pr-8 py-2 bg-[#050B14] border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                    >
                      {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Input 4: পাসওয়ার্ড নিশ্চিত করুন */}
                  {authTab === 'signup' && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <RotateCcw className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type={showPass ? 'text' : 'password'}
                        value={userPassConfirm}
                        onChange={(e) => setUserPassConfirm(e.target.value)}
                        placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                        className="w-full pl-9 pr-8 py-2 bg-[#050B14] border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                      >
                        {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}

                  {/* Policy Callout Box exactly as in screenshot */}
                  <div className="p-2.5 rounded-xl bg-[#061D15]/80 border border-[#00FF87]/30 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                    <div className="text-[10px] leading-snug">
                      <p className="font-bold text-[#00FF87] mb-0.5">
                        পাসওয়ার্ড নীতি (২টি আলাদা পাসওয়ার্ড)
                      </p>
                      <p className="text-slate-300">
                        ১. অ্যাকাউন্ট পাসওয়ার্ড: রেজিস্ট্রেশন ও লগইনের জন্য।
                      </p>
                      <p className="text-slate-300 mt-0.5">
                        ২. ভল্ট পিন: অ্যাপে প্রবেশের পর ৪-সংখ্যার একটি পিন সেট করবেন, যা দিয়ে প্রতিদিন অ্যাপে ঢুকবেন এবং ছবি/ভিডিও সুরক্ষিত রাখবেন।
                      </p>
                    </div>
                  </div>

                </div>

                {/* Primary Action Button: সাইন আপ ও ভল্টে প্রবেশ করুন */}
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setScreen('pin')}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-black bg-[#00FF87] hover:bg-[#00E575] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>সাইন আপ ও ভল্টে প্রবেশ করুন</span>
                  </button>
                </div>

              </div>

              {/* Bottom Quick Switch */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setScreen('pin')}
                  className="text-[10px] text-slate-400 hover:text-[#00FF87] underline"
                >
                  অথবা ৪-ডিজিট পিন দিয়ে সরাসরি আনলক করুন →
                </button>
              </div>
            </div>
          )}

          {/* =======================================================
             SCREEN 2: 4-DIGIT PIN QUICK UNLOCK
             ======================================================= */}
          {screen === 'pin' && (
            <div className="flex flex-col items-center justify-between flex-1 py-1">
              <div className="w-full flex justify-start">
                <button
                  type="button"
                  onClick={() => setScreen('signup')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3 text-[#00FF87]" />
                  <span>সাইন আপ পেজ</span>
                </button>
              </div>

              <div className="text-center my-1">
                <div className="w-11 h-11 rounded-2xl bg-[#091D15] border border-[#00FF87]/40 flex items-center justify-center mx-auto mb-1.5 shadow-[0_0_15px_rgba(0,255,135,0.2)]">
                  <ShieldCheck className="w-5 h-5 text-[#00FF87]" />
                </div>
                <h4 className="text-sm font-bold text-white">ভল্ট আনলক পিন</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">আপনার ৪-সংখ্যার সিকিউরিটি পিন দিন</p>
              </div>

              {/* PIN Indicator Dots */}
              <div className="flex items-center gap-3 my-2">
                {[0, 1, 2, 3].map((index) => {
                  const isFilled = pin.length > index;
                  return (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-150 ${
                        isFilled
                          ? 'bg-[#00FF87] shadow-[0_0_10px_#00FF87] scale-125'
                          : 'border-2 border-slate-600 bg-slate-800/80'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Minimal Clean Keypad */}
              <div className="w-full max-w-[210px] grid grid-cols-3 gap-2 my-1">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
                  <button
                    key={digit}
                    type="button"
                    onClick={() => handleKeyPress(digit)}
                    className="h-10 rounded-full bg-slate-800/80 hover:bg-slate-700/80 active:bg-[#00FF87]/20 border border-slate-700/70 text-sm font-semibold text-white transition-all flex items-center justify-center shadow-sm"
                  >
                    {digit}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setPin('')}
                  className="h-10 rounded-full text-[10px] font-medium text-slate-400 hover:text-white flex items-center justify-center"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => handleKeyPress('0')}
                  className="h-10 rounded-full bg-slate-800/80 hover:bg-slate-700/80 active:bg-[#00FF87]/20 border border-slate-700/70 text-sm font-semibold text-white transition-all flex items-center justify-center shadow-sm"
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={handleBackspace}
                  className="h-10 rounded-full text-xs font-medium text-slate-400 hover:text-white flex items-center justify-center"
                >
                  ⌫
                </button>
              </div>

              <div className="text-[10px] text-slate-400">
                <span className="text-[#00FF87]">টিপস:</span> যেকোনো ৪টি ডিজিট (যেমন ১ ২ ৩ ৪) চাপুন
              </div>
            </div>
          )}

          {/* =======================================================
             SCREEN 3: UNLOCKED DASHBOARD (EXACT SCREENSHOT_20261005_033619.JPG)
             ======================================================= */}
          {screen === 'main' && (
            <div className="flex flex-col h-full justify-between relative">
              <div className="space-y-2.5">
                
                {/* 1. Header with Avatar + Suraksha Vault + ☁️ ⊞ ⚙️ 🕒 🔒 */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-b from-[#00FF87] to-cyan-500 flex items-center justify-center shrink-0">
                      <div className="w-full h-full rounded-full bg-[#051410] border border-[#00FF87] flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-[#00FF87]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#00FF87] leading-tight tracking-tight">
                        Suraksha<br />Vault
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Cloud className="w-3.5 h-3.5 text-[#00FF87]" />
                    <Grid className="w-3.5 h-3.5" />
                    <button type="button" onClick={() => setScreen('settings')}>
                      <Settings className="w-3.5 h-3.5 text-[#00FF87]" />
                    </button>
                    <HistoryIcon className="w-3.5 h-3.5" />
                    <button
                      type="button"
                      onClick={() => setScreen('signup')}
                      className="p-1 rounded text-rose-500 hover:bg-rose-500/20"
                      title="Lock Vault"
                    >
                      <Lock className="w-3.5 h-3.5 text-rose-500" />
                    </button>
                  </div>
                </div>

                {/* 2. Cloud Sync Banner: mai319349@gmail.com */}
                <div className="rounded-xl bg-[#09181A] border border-emerald-500/30 p-2 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-3.5 h-3.5 text-[#00FF87] shrink-0" />
                    <div className="leading-tight">
                      <span className="font-bold text-white block">ক্লাউড সিঙ্ক: mai319349@gmail.com</span>
                      <span className="text-[9px] text-slate-400">সর্বশেষ সিঙ্ক: 03 Oct, 04:46 PM</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-[#00FF87] bg-emerald-950 px-2 py-0.5 rounded border border-[#00FF87]/30">
                    সিঙ্ক
                  </span>
                </div>

                {/* 3. Mobile App Locker Banner */}
                <div className="rounded-xl bg-[#0A1A28] border border-cyan-500/30 p-2 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <div className="leading-tight">
                      <span className="font-bold text-white block">📱 মোবাইল অ্যাপস লক</span>
                      <span className="text-[8px] text-slate-400">ভল্ট পিন দিয়ে ফেসবুক, হোয়াটসঅ্যাপ লক</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setScreen('applocker')}
                    className="text-[9px] font-bold text-cyan-400 hover:underline shrink-0"
                  >
                    লক সেটিংস
                  </button>
                </div>

                {/* 4. Search bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ভল্টে খুঁজুন (নাম বা নোট)..."
                    className="w-full pl-7 pr-3 py-1.5 bg-[#09111D] border border-slate-800 rounded-xl text-[10px] text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
                  />
                  <Search className="w-3 h-3 text-slate-400 absolute left-2 top-2" />
                </div>

                {/* 5. Category pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[9px] scrollbar-none">
                  <span className="px-2 py-1 rounded-lg bg-[#00FF87] text-black font-bold shrink-0">
                    সকল ফাইল (3)
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-[#09111D] text-slate-300 border border-slate-800 shrink-0">
                    ছবি / ইমেজ (0)
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-[#09111D] text-slate-300 border border-slate-800 shrink-0">
                    ভিডিও (0)
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-[#09111D] text-slate-300 border border-slate-800 shrink-0">
                    ডকুমেন্ট (0)
                  </span>
                </div>

                {/* 6. 3 Note cards from screenshot */}
                <div className="grid grid-cols-2 gap-2 max-h-[175px] overflow-y-auto pr-0.5">
                  
                  {/* Card 1: index.html */}
                  <div className="p-2 rounded-xl bg-[#091321] border border-slate-800 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] font-mono text-slate-400">21.8 KB</span>
                        <Heart className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="bg-[#050810] p-1 rounded font-mono text-[8px] text-slate-300 mb-1 leading-tight line-clamp-3">
                        &lt;!DOCTYPE html&gt;&lt;html lang="bn"&gt;&lt;head&gt;...
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white truncate">index.html</p>
                      <span className="text-[8px] text-[#00FF87]">নোট</span>
                    </div>
                  </div>

                  {/* Card 2: জরুরি পাসওয়ার্ড */}
                  <div className="p-2 rounded-xl bg-[#091321] border border-slate-800 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] font-mono text-slate-400">293.0 B</span>
                        <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                      </div>
                      <div className="bg-[#050810] p-1 rounded font-mono text-[8px] text-slate-300 mb-1 leading-tight line-clamp-3">
                        ফেসবুক আইডি: my_acc... ব্যাংক: 1234-5678...
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white truncate">জরুরি পাসওয়ার্ড</p>
                      <span className="text-[8px] text-[#00FF87]">নোট</span>
                    </div>
                  </div>

                  {/* Card 3: স্বাগতম পার্সোনাল ভল্ট */}
                  <div className="col-span-2 p-2 rounded-xl bg-[#091321] border border-slate-800 flex flex-col justify-between text-left">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[8px] font-mono text-slate-400">583.0 B</span>
                      <Heart className="w-3 h-3 text-slate-400" />
                    </div>
                    <p className="text-[9px] text-slate-300 line-clamp-2 leading-tight mb-1">
                      এই অ্যাপে আপনার সকল ছবি, ভিডিও, ডকুমেন্ট এবং জরুরি পাসওয়ার্ড নিরাপদে সংরক্ষণ করুন...
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-white">স্বাগতম পার্সোনাল ভল্ট...</span>
                      <span className="text-[8px] text-[#00FF87]">নোট</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Action Button (+) bottom right */}
              <div className="pt-2 flex justify-between items-center border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setScreen('signup')}
                  className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <Lock className="w-3 h-3" />
                  <span>লক করুন</span>
                </button>

                <div className="w-8 h-8 rounded-full bg-[#00FF87] flex items-center justify-center text-black font-extrabold text-sm shadow-[0_0_10px_#00FF87]">
                  +
                </div>
              </div>

            </div>
          )}

          {/* =======================================================
             SCREEN 4: APP LOCKER DETAIL
             ======================================================= */}
          {screen === 'applocker' && (
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <button
                    type="button"
                    onClick={() => setScreen('main')}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3 text-[#00FF87]" />
                    <span>ড্যাশবোর্ড</span>
                  </button>
                  <span className="text-xs font-bold text-white">অ্যাপ লকার</span>
                </div>

                <div className="space-y-1.5">
                  {essentialApps.map((app) => (
                    <div
                      key={app.key}
                      onClick={() => toggleApp(app.key)}
                      className="cursor-pointer flex items-center justify-between p-2 rounded-xl bg-slate-900/90 border border-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-lg ${app.color} flex items-center justify-center text-white text-xs font-bold`}>
                          {app.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">{app.labelBn}</p>
                          <p className="text-[9px] text-slate-400">{app.desc}</p>
                        </div>
                      </div>
                      <div className={`w-8 h-4 rounded-full p-0.5 flex items-center ${
                        appLocks[app.key] ? 'bg-[#00FF87] justify-end' : 'bg-slate-800 justify-start'
                      }`}>
                        <div className="w-3 h-3 rounded-full bg-black shadow-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setScreen('main')}
                className="w-full py-2 rounded-lg text-xs font-bold bg-[#00FF87] text-black"
              >
                সংরক্ষণ করুন
              </button>
            </div>
          )}

          {/* =======================================================
             SCREEN 5: PHOTO VAULT PREVIEW
             ======================================================= */}
          {screen === 'photovault' && (
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <button
                    type="button"
                    onClick={() => setScreen('main')}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3 text-[#00FF87]" />
                    <span>ড্যাশবোর্ড</span>
                  </button>
                  <span className="text-xs font-bold text-white">লুকানো ছবি</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 mb-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-slate-800/80 border border-slate-700/60 flex flex-col items-center justify-center p-1 text-slate-400"
                    >
                      <Image className="w-4 h-4 text-slate-400 mb-0.5" />
                      <span className="text-[8px] font-mono text-slate-400">IMG_0{i}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 text-center">AES-256 এনক্রিপ্ট হয়ে সুরক্ষিত আছে।</p>
              </div>

              <button
                type="button"
                onClick={() => setScreen('main')}
                className="w-full py-2 rounded-lg text-xs font-bold bg-slate-800 text-white"
              >
                ড্যাশবোর্ডে ফিরুন
              </button>
            </div>
          )}

          {/* =======================================================
             SCREEN 6: SETTINGS
             ======================================================= */}
          {screen === 'settings' && (
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <button
                    type="button"
                    onClick={() => setScreen('main')}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3 text-[#00FF87]" />
                    <span>ড্যাশবোর্ড</span>
                  </button>
                  <span className="text-xs font-bold text-white">ভল্ট সেটিংস</span>
                </div>

                <div className="space-y-1.5">
                  <div 
                    onClick={() => toggleSetting('fingerprint')}
                    className="cursor-pointer flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Fingerprint className="w-3.5 h-3.5 text-[#00FF87]" />
                      <span>ফিঙ্গারপ্রিন্ট আনলক</span>
                    </div>
                    <div className={`w-8 h-4 rounded-full p-0.5 flex items-center ${
                      settingsState.fingerprint ? 'bg-[#00FF87] justify-end' : 'bg-slate-800 justify-start'
                    }`}>
                      <div className="w-3 h-3 rounded-full bg-black shadow-sm" />
                    </div>
                  </div>

                  <div 
                    onClick={() => toggleSetting('calculatorDisguise')}
                    className="cursor-pointer flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Calculator className="w-3.5 h-3.5 text-amber-400" />
                      <span>ক্যালকুলেটর ছদ্মবেশ</span>
                    </div>
                    <div className={`w-8 h-4 rounded-full p-0.5 flex items-center ${
                      settingsState.calculatorDisguise ? 'bg-[#00FF87] justify-end' : 'bg-slate-800 justify-start'
                    }`}>
                      <div className="w-3 h-3 rounded-full bg-black shadow-sm" />
                    </div>
                  </div>

                  <div 
                    onClick={() => toggleSetting('intruderSelfie')}
                    className="cursor-pointer flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Camera className="w-3.5 h-3.5 text-rose-400" />
                      <span>অনুপ্রবেশকারী সেলফি</span>
                    </div>
                    <div className={`w-8 h-4 rounded-full p-0.5 flex items-center ${
                      settingsState.intruderSelfie ? 'bg-[#00FF87] justify-end' : 'bg-slate-800 justify-start'
                    }`}>
                      <div className="w-3 h-3 rounded-full bg-black shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setScreen('main')}
                className="w-full py-2 rounded-lg text-xs font-bold bg-[#00FF87] text-black"
              >
                সম্পন্ন
              </button>
            </div>
          )}

        </div>

        {/* Bottom Android Gesture Bar */}
        <div className="bg-[#04070F] py-1.5 flex justify-center">
          <div className="w-24 h-1 rounded-full bg-slate-700" />
        </div>

      </div>
    </div>
  );
};
