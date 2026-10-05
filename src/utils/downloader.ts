/**
 * Utility to trigger immediate native APK file download across all browsers & mobile devices
 */
export function triggerDirectDownload(filename: string = 'SurakshaVault.apk') {
  try {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    link.setAttribute('target', '_self');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    // Fallback: direct window location assignment
    window.location.href = `/${filename}`;
  }
}
