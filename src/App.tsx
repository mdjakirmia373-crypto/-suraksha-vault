/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SurakshaTopBar } from './components/SurakshaTopBar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProtectedCategoriesSection } from './components/ProtectedCategoriesSection';
import { CompatibilitySection } from './components/CompatibilitySection';
import { VaultDashboardView } from './components/VaultDashboardView';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { HomeScreenInstallModal } from './components/HomeScreenInstallModal';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { PrivacyModal } from './components/PrivacyModal';
import { SupportModal } from './components/SupportModal';
import { UserDashboardPage } from './components/UserDashboardPage';
import { usePWAInstall } from './hooks/usePWAInstall';
import { UserAccount, getActiveSession, clearActiveSession } from './utils/authStorage';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Session persistence: If already logged in, automatically stay on dashboard page!
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => getActiveSession());
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>(() => {
    return getActiveSession() ? 'dashboard' : 'landing';
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [homeScreenModalOpen, setHomeScreenModalOpen] = useState(false);
  const [codeExportModalOpen, setCodeExportModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const pwa = usePWAInstall();

  // Pure Home Screen installation - goes directly to mobile screen without File Manager
  const handleInstallWebApp = async () => {
    // 1. Try native browser home screen install prompt
    if (pwa.isInstallable) {
      const accepted = await pwa.install();
      if (accepted) return;
    }

    // 2. Open guidance modal showing how to add straight to mobile screen
    setHomeScreenModalOpen(true);
  };

  const handleOpenWebApp = () => {
    const el = document.getElementById('webapp-vault');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLoginModal = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const openSignUpModal = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (user: UserAccount) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    clearActiveSession();
    setCurrentUser(null);
    setCurrentView('landing');
  };

  // If user is logged in and views the Personal Vault Dashboard Page
  // This page STAYS active across refreshes and visits until the user clicks Logout
  if (currentView === 'dashboard' && currentUser) {
    return (
      <div className="min-h-screen bg-[#070B14]">
        <UserDashboardPage
          user={currentUser}
          onLogout={handleLogout}
          onGoToHome={() => setCurrentView('landing')}
          onInstallApp={handleInstallWebApp}
        />

        {/* Home Screen Web App Guidance Modal */}
        {homeScreenModalOpen && (
          <HomeScreenInstallModal
            isInstallable={pwa.isInstallable}
            onNativeInstall={pwa.install}
            onClose={() => setHomeScreenModalOpen(false)}
          />
        )}
      </div>
    );
  }

  // Default Landing Page View
  return (
    <div id="top" className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans selection:bg-[#00FF88] selection:text-black">
      
      {/* 1. Header / Navigation Bar (Clean & Professional) */}
      <SurakshaTopBar
        user={currentUser}
        onOpenLogin={openLoginModal}
        onOpenSignUp={openSignUpModal}
        onGoToDashboard={() => setCurrentView('dashboard')}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Catchy Title, Subtitle, Floating Mockup & 2 Key CTAs) */}
        <HeroSection
          onInstallWebApp={handleInstallWebApp}
          onOpenWebApp={handleOpenWebApp}
        />

        {/* 3. Promotional Feature Grid (3 Glassmorphism Cards: সামরিক-গ্রেড, ডুয়েল-পাসওয়ার্ড, হাইব্রিড ব্যাকআপ) */}
        <FeaturesSection />

        {/* 4. Clean Category Section (5 Clearly defined categories with icons) */}
        <ProtectedCategoriesSection />

        {/* 5. Android Compatibility (Tech-Spec Tablet Card) */}
        <CompatibilitySection />

        {/* 6. Live Interactive Web App Vault Showcase */}
        <section id="webapp-vault" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#090D18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-[#00FF88]/30 text-xs text-[#00FF88] font-bold mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>লাইভ অ্যাপ ড্যাশবোর্ড অভিজ্ঞতা</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                সুরক্ষা ভল্ট সরাসরি ওয়েবে অভিজ্ঞতা নিন
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
                আপনি ওয়েবসাইটে থেকেই ভল্টের আসল ফিচার, নোট ও সিক্রেট ফাইল যোগ করে দেখতে পারেন।
              </p>
            </div>

            <VaultDashboardView
              lang="bn"
              onLock={openLoginModal}
              onOpenAppLocker={() => alert('অ্যাপ লকার সেটিংস: হোয়াটসঅ্যাপ, ফেসবুক ও বিকাশ লক করা রয়েছে।')}
            />
          </div>
        </section>

        {/* 7. Simple Clean FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 8. Modern Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenCodeExport={() => setCodeExportModalOpen(true)}
      />

      {/* Interactive Auth Popup Modal (Login / Sign-Up) */}
      {authModalOpen && (
        <AuthModal
          initialMode={authMode}
          onClose={() => setAuthModalOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}

      {/* Home Screen Web App Guidance Modal */}
      {homeScreenModalOpen && (
        <HomeScreenInstallModal
          isInstallable={pwa.isInstallable}
          onNativeInstall={pwa.install}
          onClose={() => setHomeScreenModalOpen(false)}
        />
      )}

      {/* Single-file index.html Code Exporter Modal */}
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
