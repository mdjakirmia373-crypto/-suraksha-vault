import React from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { X, ShieldCheck, Lock, Check } from 'lucide-react';

interface PrivacyModalProps {
  lang: SurakshaLanguage;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ lang, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-[#0A0F1D] border border-slate-700/80 shadow-[0_25px_50px_rgba(0,0,0,0.95)] flex flex-col text-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#0A1324]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#00FF87]" />
            <h3 className="text-base font-bold text-white">
              {lang === 'en' ? 'Suraksha Vault Privacy Policy' : 'সুরক্ষ ভল্ট প্রাইভেসি পলিসি'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Policy Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div>
            <h4 className="font-bold text-white mb-1.5 text-sm">
              {lang === 'en' ? '1. Absolute Zero-Knowledge Architecture' : '১. জিরো-নলেজ ও সম্পূর্ণ লোকাল আর্কিটেকচার'}
            </h4>
            <p className="text-slate-400">
              {lang === 'en'
                ? 'Suraksha Vault does not own, run, or communicate with any cloud database or telemetry server. All encryption keys and master hashes remain in the protected internal hardware keystore of your Android device.'
                : 'সুরক্ষ ভল্ট কোনো ক্লাউড সার্ভার বা ডেটাবেজে ফাইল আপলোড করে না। আপনার সকল এনক্রিপশন কি এবং পাসওয়ার্ড হ্যাশ সম্পূর্ণ আপনার ফোনে সুরক্ষিত থাকে।'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1.5 text-sm">
              {lang === 'en' ? '2. Permissions Required & Rationale' : '২. অ্যাপে ব্যবহৃত পারমিশনসমূহ'}
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                <span><strong>Storage / MANAGE_EXTERNAL_STORAGE:</strong> Required solely to encrypt and hide selected photos, videos, and files on your phone.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                <span><strong>PACKAGE_USAGE_STATS:</strong> Required by Android to detect when a locked app (e.g. WhatsApp or Gallery) is launched, in order to display the PIN overlay.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                <span><strong>CAMERA (Optional):</strong> Required only if you enable the optional "Intruder Break-in Selfie" feature.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1.5 text-sm">
              {lang === 'en' ? '3. No Analytics or Third-Party SDKs' : '৩. কোনো থার্ড পার্টি ট্র্যাকার বা বিজ্ঞাপন নেই'}
            </h4>
            <p className="text-slate-400">
              {lang === 'en'
                ? 'Suraksha Vault contains zero commercial tracking SDKs, zero ad networks (no AdMob, no Facebook SDK), and zero behavior profiling tools.'
                : 'অ্যাপটিতে কোনো ট্র্যাকিং এসডিকে, বিজ্ঞাপন বা ব্যবহারকারীর আচরণ পর্যবেক্ষণকারী কোনো থার্ড পার্টি সফটওয়্যার নেই।'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1.5 text-sm">
              {lang === 'en' ? '4. Data Deletion' : '৪. তথ্য মুছে ফেলা'}
            </h4>
            <p className="text-slate-400">
              {lang === 'en'
                ? 'Because all data is stored strictly locally, restoring files from the vault or clearing application data permanently wipes all encrypted items from the phone.'
                : 'যেহেতু ডাটা শুধু আপনার ফোনে থাকে, তাই ভল্ট থেকে ফাইল রিস্টোর করা বা অ্যাপ ডাটা ক্লিয়ার করলে তাৎক্ষণিকভাবে এনক্রিপশন মুক্ত হয়।'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#0A1224] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[#00FF87] hover:bg-[#00E575]"
          >
            {lang === 'en' ? 'Understood' : 'বুঝেছি'}
          </button>
        </div>

      </div>
    </div>
  );
};
