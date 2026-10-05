import React, { useState } from 'react';
import { ShieldCheck, LogIn, UserPlus, Menu, X, LayoutDashboard, LogOut } from 'lucide-react';

interface SurakshaTopBarProps {
  user?: { name: string; email: string } | null;
  onOpenLogin: () => void;
  onOpenSignUp: () => void;
  onGoToDashboard?: () => void;
  onLogout?: () => void;
}

export const SurakshaTopBar: React.FC<SurakshaTopBarProps> = ({
  user,
  onOpenLogin,
  onOpenSignUp,
  onGoToDashboard,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'ফিচার্স' },
    { href: '#categories', label: 'সুরক্ষিত ফাইল' },
    { href: '#compatibility', label: 'কম্প্যাটিবিলিটি' },
    { href: '#webapp-vault', label: 'ওয়েব ভল্ট' },
    { href: '#faq', label: 'প্রশ্নোত্তর' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* App Title & Brand Emblem */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-b from-[#00FF88] to-cyan-500 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,136,0.4)]">
            <div className="w-full h-full rounded-full bg-[#051410] border border-[#00FF88] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#00FF88]" />
            </div>
          </div>
          <span className="font-extrabold tracking-wide">
            Suraksha <span className="text-[#00FF88]">Vault</span>
            <span className="text-[10px] ml-1.5 font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-[#00FF88] border border-[#00FF88]/30">
              Web App
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00FF88] transition-colors whitespace-nowrap py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF88] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right-aligned Buttons: Logged In vs Logged Out */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {user ? (
            <>
              {/* Dashboard Button */}
              <button
                type="button"
                onClick={onGoToDashboard}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold text-black bg-[#00FF88] hover:bg-[#00E57A] rounded-xl shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all cursor-pointer"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-black" />
                <span>আমার ড্যাশবোর্ড</span>
              </button>

              {/* Logout Button */}
              <button
                type="button"
                onClick={onLogout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-400 hover:text-rose-400 bg-slate-900 border border-slate-800 rounded-xl transition-colors cursor-pointer"
                title="লগআউট"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>লগআউট</span>
              </button>
            </>
          ) : (
            <>
              {/* লগইন (Login) Button */}
              <button
                type="button"
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#00FF88]/50 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-[#00FF88]" />
                <span>লগইন</span>
              </button>

              {/* সাইন-আপ (Sign Up) Button */}
              <button
                type="button"
                onClick={onOpenSignUp}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5 text-slate-300" />
                <span>সাইন-আপ</span>
              </button>
            </>
          )}

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#090F1C] px-4 py-4 shadow-xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-[#00FF88] py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-2 flex flex-col gap-2">
              {user ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onGoToDashboard?.();
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-extrabold text-black bg-[#00FF88] rounded-xl"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>আমার ড্যাশবোর্ড ({user.name})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onLogout?.();
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-rose-400 bg-rose-950/40 border border-rose-900/50 rounded-xl"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>লগআউট</span>
                  </button>
                </>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLogin();
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 rounded-xl"
                  >
                    <LogIn className="w-4 h-4 text-[#00FF88]" />
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
                    <UserPlus className="w-4 h-4 text-slate-300" />
                    <span>সাইন-আপ</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
