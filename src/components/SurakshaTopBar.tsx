import React, { useState } from 'react';
import { ShieldCheck, LogIn, UserPlus, Menu, X, Sparkles, Smartphone } from 'lucide-react';

interface SurakshaTopBarProps {
  onOpenLogin: () => void;
  onOpenSignUp: () => void;
  onInstallClick: () => void;
}

export const SurakshaTopBar: React.FC<SurakshaTopBarProps> = ({
  onOpenLogin,
  onOpenSignUp,
  onInstallClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#app-vault', label: 'ভল্ট ড্যাশবোর্ড' },
    { href: '#features', label: 'ফিচার্স' },
    { href: '#categories', label: 'সুরক্ষিত ফাইল' },
    { href: '#compatibility', label: 'ডিভাইস সাপোর্ট' },
    { href: '#install-guide', label: 'হোমস্ক্রিনে নেওয়ার নিয়ম' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#060A12]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* App Title & Brand Emblem */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-b from-[#00FF87] to-cyan-500 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,135,0.4)]">
            <div className="w-full h-full rounded-full bg-[#051410] border border-[#00FF87] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#00FF87]" />
            </div>
          </div>
          <span className="font-extrabold tracking-wide">
            Suraksha <span className="text-[#00FF87]">Vault</span>
            <span className="text-[10px] ml-1.5 font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-[#00FF87] border border-[#00FF87]/30">
              Web App
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00FF87] transition-colors whitespace-nowrap py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF87] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right-aligned Buttons: ইনস্টল করুন, লগইন & সাইন-আপ */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Quick Home Screen Install Button */}
          <button
            type="button"
            onClick={onInstallClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-extrabold text-black bg-[#00FF87] hover:bg-[#00E575] rounded-xl shadow-[0_0_15px_rgba(0,255,135,0.35)] transition-all whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">হোমস্ক্রিনে</span>
            <span>ইনস্টল</span>
          </button>

          {/* লগইন (Login) Button */}
          <button
            type="button"
            onClick={onOpenLogin}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#00FF87]/50 rounded-xl transition-all whitespace-nowrap"
          >
            <LogIn className="w-3.5 h-3.5 text-[#00FF87]" />
            <span>লগইন</span>
          </button>

          {/* সাইন-আপ (Sign Up) Button */}
          <button
            type="button"
            onClick={onOpenSignUp}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all whitespace-nowrap"
          >
            <UserPlus className="w-3.5 h-3.5 text-slate-300" />
            <span>সাইন-আপ</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090F1C] px-4 py-4 shadow-xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-[#00FF87] py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onInstallClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-extrabold text-black bg-[#00FF87] rounded-xl shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>হোমস্ক্রিনে অ্যাপ ইনস্টল করুন</span>
              </button>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 rounded-xl"
                >
                  <LogIn className="w-4 h-4 text-[#00FF87]" />
                  <span>লগইন</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignUp();
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 rounded-xl"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>সাইন-আপ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
