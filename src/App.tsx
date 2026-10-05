/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SurakshaLanguage } from './types/suraksha';
import { SurakshaTopBar } from './components/SurakshaTopBar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { DownloadSection } from './components/DownloadSection';
import { InstallGuideSection } from './components/InstallGuideSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { DownloadToast } from './components/DownloadToast';
import { InstallModal } from './components/InstallModal';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { PrivacyModal } from './components/PrivacyModal';
import { SupportModal } from './components/SupportModal';
import { triggerDirectDownload } from './utils/downloader';

export default function App() {
  const [lang, setLang] = useState<SurakshaLanguage>('bn');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadToastOpen, setDownloadToastOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [downloadFilename, setDownloadFilename] = useState('SurakshaVault.apk');
  const [codeExportModalOpen, setCodeExportModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  // Instant direct download handler: Triggers browser file download immediately!
  const handleDirectDownload = (filename: string = 'SurakshaVault.apk') => {
    setDownloadFilename(filename);
    triggerDirectDownload(filename);
    setDownloadToastOpen(true);
  };

  const scrollToInstallGuide = () => {
    const el = document.getElementById('install-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setInstallModalOpen(true);
    }
  };

  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleDirectDownload('SurakshaVault.apk');
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#060A12] text-slate-100 flex flex-col font-sans selection:bg-[#00FF87] selection:text-black">
      
      {/* Top Bar with 'অ্যাপস ইনস্টল করুন' and 'Download APK' right at the top */}
      <SurakshaTopBar
        lang={lang}
        onToggleLang={toggleLang}
        onOpenDownload={() => handleDirectDownload('SurakshaVault.apk')}
        onOpenInstall={() => setInstallModalOpen(true)}
        onOpenCodeExport={() => setCodeExportModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          lang={lang}
          onDownloadClick={() => handleDirectDownload('SurakshaVault.apk')}
          onOpenGuide={() => setInstallModalOpen(true)}
        />

        {/* 2. Key Features Section */}
        <FeaturesSection lang={lang} />

        {/* 3. How It Works Section */}
        <HowItWorksSection
          lang={lang}
          onDownloadClick={() => handleDirectDownload('SurakshaVault.apk')}
        />

        {/* 4. Download Section */}
        <DownloadSection
          lang={lang}
          onTriggerDownload={(filename) => handleDirectDownload(filename)}
        />

        {/* 5. Installation Guide Section */}
        <InstallGuideSection lang={lang} />

        {/* 6. FAQ Section */}
        <FaqSection lang={lang} />
      </main>

      {/* 7. Footer */}
      <Footer
        lang={lang}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenCodeExport={() => setCodeExportModalOpen(true)}
      />

      {/* Instant Download Toast Notification */}
      {downloadToastOpen && (
        <DownloadToast
          filename={downloadFilename}
          lang={lang}
          onClose={() => setDownloadToastOpen(false)}
          onOpenGuide={() => {
            setDownloadToastOpen(false);
            setInstallModalOpen(true);
          }}
        />
      )}

      {/* Dedicated 'অ্যাপস ইনস্টল করুন' Modal */}
      {installModalOpen && (
        <InstallModal
          lang={lang}
          onClose={() => setInstallModalOpen(false)}
        />
      )}

      {/* Fallback detailed modal if requested */}
      {downloadModalOpen && (
        <DownloadModal
          filename={downloadFilename}
          lang={lang}
          onClose={() => setDownloadModalOpen(false)}
          onOpenGuide={scrollToInstallGuide}
        />
      )}

      {codeExportModalOpen && (
        <SingleFileExportModal
          lang={lang}
          onClose={() => setCodeExportModalOpen(false)}
        />
      )}

      {privacyModalOpen && (
        <PrivacyModal
          lang={lang}
          onClose={() => setPrivacyModalOpen(false)}
        />
      )}

      {supportModalOpen && (
        <SupportModal
          lang={lang}
          onClose={() => setSupportModalOpen(false)}
        />
      )}

    </div>
  );
}
