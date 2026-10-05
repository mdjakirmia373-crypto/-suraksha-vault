import React from 'react';
import { SurakshaLanguage, APP_SPECS } from '../types/suraksha';
import { Shield, Mail, Heart, Lock, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: SurakshaLanguage;
  onOpenPrivacy: () => void;
  onOpenSupport: () => void;
  onOpenCodeExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenPrivacy,
  onOpenSupport,
  onOpenCodeExport,
}) => {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-8 border-b border-slate-800/60">
          
          {/* Col 1: Wordmark & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] shadow-[0_0_8px_#00FF87]" />
              Suraksha Vault
            </div>
            <p className="text-slate-300 font-medium">
              "Your Privacy. Your Vault. Your Suraksha."
            </p>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              {lang === 'en'
                ? 'Offline-first Android privacy vault and app locker with dual-password encryption architecture.'
                : 'অ্যান্ড্রয়েড ব্যবহারকারীদের জন্য নির্ভরযোগ্য অফলাইন প্রাইভেসি ভল্ট ও অ্যাপ লকার সলিউশন।'}
            </p>
            <div className="pt-1 flex items-center gap-4 text-[11px] text-slate-400">
              <span>Package: {APP_SPECS.packageName}</span>
              <span>·</span>
              <span>Version: {APP_SPECS.version}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <p className="font-semibold text-white tracking-wider uppercase text-[11px]">
              {lang === 'en' ? 'Navigation' : 'ন্যাভিগেশন'}
            </p>
            <ul className="space-y-1.5">
              <li>
                <a href="#features" className="hover:text-[#00FF87] transition-colors">
                  {lang === 'en' ? 'Key Features' : 'ফিচারসমূহ'}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#00FF87] transition-colors">
                  {lang === 'en' ? 'How It Works' : 'ব্যবহার পদ্ধতি'}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#00FF87] transition-colors">
                  {lang === 'en' ? 'Download APK' : 'ডাউনলোড এপিকে'}
                </a>
              </li>
              <li>
                <a href="#install-guide" className="hover:text-[#00FF87] transition-colors">
                  {lang === 'en' ? 'Installation Guide' : 'ইনস্টলেশন গাইড'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00FF87] transition-colors">
                  {lang === 'en' ? 'Security FAQ' : 'প্রশ্নোত্তর'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div className="space-y-2.5">
            <p className="font-semibold text-white tracking-wider uppercase text-[11px]">
              {lang === 'en' ? 'Legal & Support' : 'লিগ্যাল ও সাপোর্ট'}
            </p>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#00FF87] transition-colors text-left"
                >
                  {lang === 'en' ? 'Privacy Policy' : 'প্রাইভেসি পলিসি'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSupport}
                  className="hover:text-[#00FF87] transition-colors text-left"
                >
                  {lang === 'en' ? 'Contact & Support' : 'যোগাযোগ ও সাপোর্ট'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCodeExport}
                  className="hover:text-[#00FF87] transition-colors text-left flex items-center gap-1"
                >
                  <span>{lang === 'en' ? 'Export Single-File HTML' : 'সিঙ্গেল-ফাইল কোড এক্সপোর্ট'}</span>
                  <ExternalLink className="w-3 h-3 text-[#00FF87]" />
                </button>
              </li>
              <li className="text-[11px] text-slate-400 pt-1">
                support@surakshavault.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Suraksha Vault. All Rights Reserved. Built for uncompromising user privacy.
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-[#00FF87]" />
            <span>Encrypted with AES-256</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
