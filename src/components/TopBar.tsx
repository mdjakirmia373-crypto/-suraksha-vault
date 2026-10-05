import React, { useState } from 'react';
import { WebsiteConfig, Language, ThemePalette } from '../types';
import { THEMES } from '../utils/theme';
import { Menu, X } from 'lucide-react';

interface TopBarProps {
  config: WebsiteConfig;
  lang: Language;
  theme: ThemePalette;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  config,
  lang,
  theme,
  onOpenConsultation,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeColors = THEMES[theme];

  const brandName = lang === 'bn' ? config.brandName : config.brandNameEn;

  const navLinks = [
    { href: '#services', label: lang === 'bn' ? 'সার্ভিসসমূহ' : 'Services' },
    { href: '#portfolio', label: lang === 'bn' ? 'প্রজেক্ট ও ফলাফল' : 'Case Studies' },
    { href: '#calculator', label: lang === 'bn' ? 'খরচ হিসাব' : 'Cost Calculator' },
    { href: '#faq', label: lang === 'bn' ? 'প্রশ্নোত্তর' : 'FAQ' },
    { href: '#contact', label: lang === 'bn' ? 'যোগাযোগ' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 hover:opacity-85 transition-opacity truncate max-w-[200px] sm:max-w-none"
        >
          {brandName}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-900 transition-colors whitespace-nowrap py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCalculator}
            className="hidden sm:inline-flex items-center text-xs font-semibold px-3 py-2 rounded-lg text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            {lang === 'bn' ? 'খরচ হিসাব' : 'Estimate Cost'}
          </button>

          <button
            type="button"
            onClick={onOpenConsultation}
            className={`px-4 py-2 text-xs font-medium ${themeColors.primaryText} ${themeColors.primaryBg} ${themeColors.primaryHoverBg} rounded-lg shadow-sm transition-all whitespace-nowrap focus:outline-none focus:ring-2 ${themeColors.focusRing} focus:ring-offset-1`}
          >
            {lang === 'bn' ? 'শুরু করুন' : 'Get Started'}
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-5 shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-700 hover:text-neutral-950 py-1.5 border-b border-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full py-2.5 text-center text-sm font-medium text-neutral-700 bg-neutral-100 rounded-lg"
              >
                {lang === 'bn' ? 'ওয়েবসাইটের খরচ হিসাব করুন' : 'Calculate Website Cost'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className={`w-full py-2.5 text-center text-sm font-medium ${themeColors.primaryText} ${themeColors.primaryBg} rounded-lg shadow-sm`}
              >
                {lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
