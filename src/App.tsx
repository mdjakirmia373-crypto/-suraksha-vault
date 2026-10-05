/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopDownloadBanner } from './components/TopDownloadBanner';
import { SurakshaTopBar } from './components/SurakshaTopBar';
import { HeroSection } from './components/HeroSection';
import { VaultDashboardView } from './components/VaultDashboardView';
import { ProtectedCategoriesSection } from './components/ProtectedCategoriesSection';
import { CompatibilitySection } from './components/CompatibilitySection';
import { FeaturesSection } from './components/FeaturesSection';
import { BackupRestoreSection } from './components/BackupRestoreSection';
import { InstallGuideSection } from './components/InstallGuideSection';
import { DownloadSection } from './components/DownloadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { InstallModal } from './components/InstallModal';
import { DownloadToast } from './components/DownloadToast';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { PrivacyModal } from './components/PrivacyModal';
import { SupportModal } from './components/SupportModal';
import { HomeScreenInstallModal } from './components/HomeScreenInstallModal';
import { usePWAInstall } from './hooks/usePWAInstall';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [homeScreenModalOpen, setHomeScreenModalOpen] = useState(false);
  const [codeExportModalOpen, setCodeExportModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const pwa = usePWAInstall();

  // Instant 1-click Home Screen install handler
  const handleInstallFlow = async () => {
    // 1. Try native PWA prompt if browser is ready
    if (pwa.isInstallable) {
      const accepted = await pwa.install();
      if (accepted) {
        return;
      }
    }

    // 2. Open dedicated Home Screen installation modal & guide
    setHomeScreenModalOpen(true);
  };

  const openLoginModal = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const openSignUpModal = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const scrollToVault = () => {
    const el = document.getElementById('app-vault');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#060A12] text-slate-100 flex flex-col font-sans selection:bg-[#00FF87] selection:text-black">
      
      {/* 1. TOP STICKY INSTALL BANNER (Web App) */}
      <TopDownloadBanner
        isInstallable={pwa.isInstallable}
        onInstallClick={handleInstallFlow}
      />

      {/* 2. HEADER / NAVIGATION BAR */}
      <SurakshaTopBar
        onOpenLogin={openLoginModal}
        onOpenSignUp={openSignUpModal}
        onInstallClick={handleInstallFlow}
      />

      <main className="flex-1">
        {/* 3.1 Hero Section (Web App Home Screen Focused) */}
        <HeroSection
          onInstallClick={handleInstallFlow}
          onOpenVault={scrollToVault}
        />

        {/* 3.2 LIVE WEB APP VAULT DASHBOARD */}
        <section id="app-vault" className="py-12 sm:py-16 border-b border-slate-800/80 bg-[#070C16]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-[#00FF87]/30 text-xs text-[#00FF87] font-semibold mb-2 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>লাইভ ওয়েব অ্যাপ ইন্টারফেস</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                সুরক্ষা ভল্ট সরাসরি ব্যবহার করুন
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                হোমস্ক্রিনে ইনস্টল করার পর এই অ্যাপটি কোনো ব্রাউজার বার ছাড়াই ফুলস্ক্রিনে চলবে।
              </p>
            </div>

            <VaultDashboardView
              lang="bn"
              onLock={() => openLoginModal()}
              onOpenAppLocker={() => alert('মোবাইল অ্যাপস লকার সেটিংস: হোয়াটসঅ্যাপ ও বিকাশ লক করা রয়েছে।')}
            />
          </div>
        </section>

        {/* 3.3 Protected Categories Section (All Files, Images, Videos, Documents, Notes) */}
        <ProtectedCategoriesSection />

        {/* 3.4 Universal Compatibility & Hybrid Usage */}
        <CompatibilitySection />

        {/* 3.5 Key Features (Dual Password, Advanced App Locker, Military AES-256) */}
        <FeaturesSection />

        {/* 3.6 Powerful Backup & Restore System */}
        <BackupRestoreSection />

        {/* 3.7 How to Add to Home Screen (3 Simple Steps) */}
        <InstallGuideSection />

        {/* 3.8 Web App Home Screen Install Center */}
        <DownloadSection
          onInstallClick={handleInstallFlow}
        />

        {/* 3.9 Simple FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 3.10 Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenCodeExport={() => setCodeExportModalOpen(true)}
      />

      {/* POPUP MODAL: Interactive Login & Sign Up */}
      {authModalOpen && (
        <AuthModal
          initialMode={authMode}
          onClose={() => setAuthModalOpen(false)}
        />
      )}

      {/* POPUP MODAL: Home Screen Instant App Installation */}
      {homeScreenModalOpen && (
        <HomeScreenInstallModal
          isInstallable={pwa.isInstallable}
          onNativeInstall={pwa.install}
          onClose={() => setHomeScreenModalOpen(false)}
        />
      )}

      {/* Single-file HTML code exporter modal */}
      {codeExportModalOpen && (
        <SingleFileExportModal
          lang="bn"
          onClose={() => setCodeExportModalOpen(false)}
        />
      )}

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <PrivacyModal
          lang="bn"
          onClose={() => setPrivacyModalOpen(false)}
        />
      )}

      {/* Support Modal */}
      {supportModalOpen && (
        <SupportModal
          lang="bn"
          onClose={() => setSupportModalOpen(false)}
        />
      )}

    </div>
  );
}
