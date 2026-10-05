import React from 'react';
import { APP_SPECS } from '../types/suraksha';
import { Shield, Mail, Lock, Code } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenSupport: () => void;
  onOpenCodeExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
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
              অ্যান্ড্রয়েড ব্যবহারকারীদের জন্য নির্ভরযোগ্য অফলাইন ও ক্লাউড হাইব্রিড প্রাইভেসি ভল্ট এবং ডুয়েল-পাসওয়ার্ড অ্যাপ লকার সলিউশন।
            </p>
            <div className="pt-1 flex items-center gap-3 text-[11px] text-slate-400 flex-wrap">
              <span>প্যাকেজ: {APP_SPECS.packageName}</span>
              <span>·</span>
              <span>ভার্সন: {APP_SPECS.version}</span>
              <span>·</span>
              <span>Android 5.0 - 15+</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <p className="font-semibold text-white tracking-wider uppercase text-[11px]">
              ন্যাভিগেশন
            </p>
            <ul className="space-y-1.5">
              <li>
                <a href="#features" className="hover:text-[#00FF87] transition-colors">
                  ফিচারসমূহ
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#00FF87] transition-colors">
                  সুরক্ষিত ক্যাটাগরি
                </a>
              </li>
              <li>
                <a href="#compatibility" className="hover:text-[#00FF87] transition-colors">
                  কম্প্যাটিবিলিটি
                </a>
              </li>
              <li>
                <a href="#backup" className="hover:text-[#00FF87] transition-colors">
                  ব্যাকআপ ও রিস্টোর
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#00FF87] transition-colors">
                  ডাউনলোড এপিকে
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00FF87] transition-colors">
                  সাধারণ প্রশ্নোত্তর
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div className="space-y-2.5">
            <p className="font-semibold text-white tracking-wider uppercase text-[11px]">
              লিগ্যাল ও সাপোর্ট
            </p>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#00FF87] transition-colors text-left"
                >
                  প্রাইভেসি পলিসি (Privacy Policy)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSupport}
                  className="hover:text-[#00FF87] transition-colors text-left"
                >
                  যোগাযোগ ও সাপোর্ট (Support)
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenCodeExport}
                  className="inline-flex items-center gap-1.5 text-xs text-[#00FF87] hover:underline"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>সিঙ্গেল ফাইল কোড এক্সপোর্ট (index.html)</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 Suraksha Vault. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-4">
            <span>নিরাপদ ও বিজ্ঞাপন-মুক্ত অ্যাপ্লিকেশন</span>
            <span>·</span>
            <span>AES-256 বিট মিলিটারী গ্রেড এনক্রিপশন</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
