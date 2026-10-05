import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { Shield, Download, Globe, Menu, X, Smartphone, Code } from 'lucide-react';

interface SurakshaTopBarProps {
  lang: SurakshaLanguage;
  onToggleLang: () => void;
  onOpenDownload: () => void;
  onOpenInstall: () => void;
  onOpenCodeExport: () => void;
}

export const SurakshaTopBar: React.FC<SurakshaTopBarProps> = ({
  lang,
  onToggleLang,
  onOpenDownload,
  onOpenInstall,
  onOpenCodeExport,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', labelEn: 'Features', labelBn: 'ফিচার্স' },
    { href: '#how-it-works', labelEn: 'How It Works', labelBn: 'ব্যবহার পদ্ধতি' },
    { href: '#simulator', labelEn: 'Interactive Demo', labelBn: 'লাইভ ডেমো' },
    { href: '#specs', labelEn: 'Security Specs', labelBn: 'স্পেসিফিকেশন' },
    { href: '#install-guide', labelEn: 'Install App Guide', labelBn: 'অ্যাপস ইনস্টল গাইড' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#060A12]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] inline-block shadow-[0_0_10px_#00FF87]" />
          Suraksha Vault
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00FF87] transition-colors whitespace-nowrap py-1 relative group"
            >
              {lang === 'en' ? link.labelEn : link.labelBn}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF87] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Language Switcher */}
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-[#00FF87]/50 hover:text-[#00FF87] transition-colors"
            title="Toggle Language / ভাষা পরিবর্তন"
          >
            <Globe className="w-3.5 h-3.5 text-[#00FF87]" />
            <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>

          {/* Option: অ্যাপস ইনস্টল করুন (Prominent top button) */}
          <button
            type="button"
            onClick={onOpenInstall}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#00FF87]/70 rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            <Smartphone className="w-3.5 h-3.5 text-[#00FF87]" />
            <span>{lang === 'en' ? 'Install App' : 'অ্যাপস ইনস্টল করুন'}</span>
          </button>

          {/* Primary CTA: Download APK (Direct Instant Download) */}
          <a
            href="/SurakshaVault.apk"
            download="SurakshaVault.apk"
            onClick={() => onOpenDownload()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-black bg-[#00FF87] hover:bg-[#00E575] rounded-lg shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#00FF87] focus:ring-offset-2 focus:ring-offset-[#060A12]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Download APK' : 'এপিকে ডাউনলোড'}</span>
          </a>

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
                {lang === 'en' ? link.labelEn : link.labelBn}
              </a>
            ))}
            
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInstall();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-slate-800 border border-[#00FF87]/50 rounded-lg shadow-sm"
              >
                <Smartphone className="w-4 h-4 text-[#00FF87]" />
                <span>{lang === 'en' ? 'Install App (Guide)' : 'অ্যাপস ইনস্টল করুন'}</span>
              </button>

              <a
                href="/SurakshaVault.apk"
                download="SurakshaVault.apk"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-black bg-[#00FF87] rounded-lg shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'en' ? 'Download SurakshaVault.apk (18.4 MB)' : 'ডাউনলোড SurakshaVault.apk (১৮.৪ মেগাবাইট)'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
