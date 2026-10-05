/**
 * Utility to trigger immediate native APK file download across all browsers & mobile devices
 */
export async function triggerDirectDownload(filename: string = 'SurakshaVault.apk') {
  try {
    const res = await fetch(`/${filename}`);
    if (res.ok) {
      const blob = await res.blob();
      const apkBlob = new Blob([blob], { type: 'application/vnd.android.package-archive' });
      const url = URL.createObjectURL(apkBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.setAttribute('target', '_self');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      return;
    }
  } catch (err) {
    // Fallback if fetch fails
  }

  // Direct download link fallback
  try {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    link.setAttribute('target', '_self');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    window.location.href = `/${filename}`;
  }
}
