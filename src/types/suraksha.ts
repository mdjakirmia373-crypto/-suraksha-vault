export type SurakshaLanguage = 'en' | 'bn';

export interface AppSpecs {
  version: string;
  fileSize: string;
  minAndroid: string;
  targetAndroid: string;
  packageName: string;
  sha256: string;
  updatedDate: string;
}

export const APP_SPECS: AppSpecs = {
  version: 'v1.0.4 (Stable)',
  fileSize: '18.4 MB',
  minAndroid: 'Android 8.0 (Oreo) or later',
  targetAndroid: 'Android 15 (API 35)',
  packageName: 'com.suraksha.vault',
  sha256: 'a9f24b81c20e588d3e9c7f1a3048996e4927ae41e4649b934ca495991b7852b8',
  updatedDate: 'October 2026',
};
