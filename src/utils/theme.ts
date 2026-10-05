import { ThemePalette } from '../types';

export interface ThemeColors {
  primaryBg: string;
  primaryHoverBg: string;
  primaryText: string;
  primaryBorder: string;
  subtleBg: string;
  badgeBg: string;
  accentText: string;
  focusRing: string;
  hex: string;
  nameBn: string;
  nameEn: string;
}

export const THEMES: Record<ThemePalette, ThemeColors> = {
  emerald: {
    primaryBg: 'bg-emerald-600',
    primaryHoverBg: 'hover:bg-emerald-700',
    primaryText: 'text-white',
    primaryBorder: 'border-emerald-600',
    subtleBg: 'bg-emerald-50/60',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    accentText: 'text-emerald-700',
    focusRing: 'focus:ring-emerald-500',
    hex: '#059669',
    nameBn: 'এমেরাল্ড গ্রিন',
    nameEn: 'Emerald Green',
  },
  navy: {
    primaryBg: 'bg-blue-600',
    primaryHoverBg: 'hover:bg-blue-700',
    primaryText: 'text-white',
    primaryBorder: 'border-blue-600',
    subtleBg: 'bg-blue-50/60',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
    accentText: 'text-blue-700',
    focusRing: 'focus:ring-blue-500',
    hex: '#2563eb',
    nameBn: 'রয়্যাল নেভি',
    nameEn: 'Royal Navy',
  },
  slate: {
    primaryBg: 'bg-neutral-900',
    primaryHoverBg: 'hover:bg-black',
    primaryText: 'text-white',
    primaryBorder: 'border-neutral-900',
    subtleBg: 'bg-neutral-100',
    badgeBg: 'bg-neutral-100 text-neutral-900 border-neutral-300',
    accentText: 'text-neutral-900',
    focusRing: 'focus:ring-neutral-700',
    hex: '#171717',
    nameBn: 'মডার্ন স্লেট',
    nameEn: 'Modern Slate',
  },
  crimson: {
    primaryBg: 'bg-rose-600',
    primaryHoverBg: 'hover:bg-rose-700',
    primaryText: 'text-white',
    primaryBorder: 'border-rose-600',
    subtleBg: 'bg-rose-50/60',
    badgeBg: 'bg-rose-50 text-rose-800 border-rose-200',
    accentText: 'text-rose-700',
    focusRing: 'focus:ring-rose-500',
    hex: '#e11d48',
    nameBn: 'ক্রিমসন রুবি',
    nameEn: 'Crimson Ruby',
  },
  amber: {
    primaryBg: 'bg-amber-600',
    primaryHoverBg: 'hover:bg-amber-700',
    primaryText: 'text-white',
    primaryBorder: 'border-amber-600',
    subtleBg: 'bg-amber-50/60',
    badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
    accentText: 'text-amber-800',
    focusRing: 'focus:ring-amber-500',
    hex: '#d97706',
    nameBn: 'ওয়ার্ম অ্যাম্বার',
    nameEn: 'Warm Amber',
  },
};
