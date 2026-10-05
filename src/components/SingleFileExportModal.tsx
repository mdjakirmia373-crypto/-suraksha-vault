import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { X, Copy, Check, Download, Code, FileCode } from 'lucide-react';

interface SingleFileExportModalProps {
  lang: SurakshaLanguage;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({
  lang,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  // Complete standalone single-file HTML, CSS, and JS code for Suraksha Vault
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suraksha Vault - Your Privacy. Your Vault. Your Suraksha.</title>
  <meta name="description" content="Download Suraksha Vault for Android. Dual-password protection, app locker, and encrypted photo/video vault.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #060A12;
      --bg-card: #0A0F1D;
      --bg-card-hover: #0E1528;
      --accent: #00FF87;
      --accent-hover: #00E575;
      --text-main: #F1F5F9;
      --text-muted: #94A3B8;
      --border-color: rgba(255, 255, 255, 0.08);
      --font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-family);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 1140px; margin: 0 auto; padding: 0 1.5rem; }
    
    /* Header */
    header {
      position: sticky; top: 0; z-index: 50;
      background: rgba(6, 10, 18, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      height: 64px; display: flex; align-items: center;
    }
    .nav-wrapper { display: flex; justify-content: space-between; align-items: center; width: 100%; }
    .brand { font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 8px; }
    .brand-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px var(--accent); }
    .nav-links { display: flex; gap: 1.75rem; list-style: none; font-size: 0.9rem; font-weight: 500; }
    .nav-links a:hover { color: var(--accent); }
    
    /* Buttons */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      padding: 0.75rem 1.5rem; font-size: 0.9rem; font-weight: 700; border-radius: 12px;
      cursor: pointer; transition: all 0.2s ease; border: none; font-family: inherit;
    }
    .btn-primary {
      background: var(--accent); color: #000;
      box-shadow: 0 0 25px rgba(0, 255, 135, 0.3);
    }
    .btn-primary:hover { background: var(--accent-hover); box-shadow: 0 0 35px rgba(0, 255, 135, 0.5); transform: translateY(-1px); }
    .btn-secondary {
      background: #0E1528; color: var(--text-main); border: 1px solid var(--border-color);
    }
    .btn-secondary:hover { border-color: rgba(255,255,255,0.2); }
    
    /* Hero */
    .hero { padding: 4rem 0 5rem; border-bottom: 1px solid var(--border-color); position: relative; overflow: hidden; }
    .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
    .kicker { font-size: 0.8rem; font-weight: 600; color: var(--accent); margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; }
    h1 { font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 1rem; letter-spacing: -0.03em; }
    h1 span { color: var(--accent); text-shadow: 0 0 20px rgba(0, 255, 135, 0.4); }
    .tagline { font-size: 1.35rem; font-weight: 600; color: #E2E8F0; margin-bottom: 1rem; }
    .hero-desc { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 2rem; max-width: 540px; }
    .hero-actions { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .hero-specs { font-size: 0.8rem; color: var(--text-muted); display: flex; gap: 1rem; align-items: center; }
    
    /* Phone Mockup */
    .phone {
      max-width: 320px; margin: 0 auto; background: var(--bg-card);
      border: 4px solid #1E293B; border-radius: 36px; padding: 1.25rem;
      box-shadow: 0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 255, 135, 0.15);
      text-align: center;
    }
    .pin-dots { display: flex; justify-content: center; gap: 12px; margin: 1.5rem 0; }
    .pin-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid #475569; }
    .pin-dot.filled { background: var(--accent); border-color: var(--accent); box-shadow: 0 0 8px var(--accent); }
    .keypad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 220px; margin: 0 auto; }
    .key-btn {
      height: 48px; border-radius: 50%; background: #1E293B; color: #FFF; font-weight: 600; font-size: 1rem;
      border: none; cursor: pointer; transition: background 0.15s;
    }
    .key-btn:hover { background: #334155; }
    
    /* Sections */
    section { padding: 5rem 0; border-bottom: 1px solid var(--border-color); }
    .section-title { text-align: center; margin-bottom: 3.5rem; }
    .section-title h2 { font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
    .section-title p { color: var(--text-muted); font-size: 1rem; }
    
    /* Grid */
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
    .card {
      background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px;
      padding: 2rem; transition: border-color 0.2s;
    }
    .card:hover { border-color: rgba(0, 255, 135, 0.4); }
    .card-num { font-size: 0.8rem; font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--accent); margin-bottom: 1rem; display: block; }
    .card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
    .card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; }
    
    /* Download */
    .download-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 800px; margin: 0 auto; }
    .dl-card {
      background: var(--bg-card); border: 2px solid rgba(0, 255, 135, 0.4); border-radius: 20px;
      padding: 2rem; text-align: center;
    }
    .dl-specs { background: #070D18; padding: 1rem; border-radius: 12px; margin: 1.5rem 0; text-align: left; font-size: 0.85rem; }
    .dl-specs div { display: flex; justify-content: space-between; margin-bottom: 6px; color: var(--text-muted); }
    .dl-specs span:last-child { color: var(--text-main); font-family: 'JetBrains Mono', monospace; }
    
    /* Footer */
    footer { padding: 3rem 0; font-size: 0.85rem; color: var(--text-muted); text-align: center; }
    
    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr; text-align: center; }
      .hero-actions { justify-content: center; flex-direction: column; }
      .nav-links { display: none; }
      .download-grid { grid-template-columns: 1fr; }
      h1 { font-size: 2.5rem; }
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <div class="container nav-wrapper">
      <div class="brand">
        <div class="brand-dot"></div>
        Suraksha Vault
      </div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#download">Download</a></li>
      </ul>
      <a href="#download" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">Download APK</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="kicker">
          <span>●</span> 100% OFFLINE VAULT · AES-256 MILITARY GRADE
        </div>
        <h1>Suraksha <span>Vault</span></h1>
        <div class="tagline">"Your Privacy. Your Vault. Your Suraksha."</div>
        <p class="hero-desc">
          The ultimate Android privacy armor. Protect your private photos, personal videos, and apps behind unbreakable dual-password authentication. No cloud leaks. No tracking.
        </p>
        <div class="hero-actions">
          <a href="#download" class="btn btn-primary">Download APK Now (18.4 MB)</a>
          <a href="#how-it-works" class="btn btn-secondary">How It Works</a>
        </div>
        <div class="hero-specs">
          <span>Version: v1.0.4 Stable</span>
          <span>·</span>
          <span>Android 8.0 - 15</span>
          <span>·</span>
          <span style="color: var(--accent);">Zero Trackers</span>
        </div>
      </div>

      <!-- Phone Keypad Simulator -->
      <div>
        <div class="phone">
          <div style="font-size: 0.8rem; color: var(--accent); font-weight: 700; margin-bottom: 0.5rem;">SURAKSHA VAULT</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #FFF;" id="vaultStatus">Enter 4-Digit Security PIN</div>
          <div class="pin-dots" id="dotsContainer">
            <div class="pin-dot"></div>
            <div class="pin-dot"></div>
            <div class="pin-dot"></div>
            <div class="pin-dot"></div>
          </div>
          <div class="keypad">
            <button class="key-btn" onclick="pressPin('1')">1</button>
            <button class="key-btn" onclick="pressPin('2')">2</button>
            <button class="key-btn" onclick="pressPin('3')">3</button>
            <button class="key-btn" onclick="pressPin('4')">4</button>
            <button class="key-btn" onclick="pressPin('5')">5</button>
            <button class="key-btn" onclick="pressPin('6')">6</button>
            <button class="key-btn" onclick="pressPin('7')">7</button>
            <button class="key-btn" onclick="pressPin('8')">8</button>
            <button class="key-btn" onclick="pressPin('9')">9</button>
            <button class="key-btn" onclick="clearPin()" style="font-size: 0.75rem;">Clear</button>
            <button class="key-btn" onclick="pressPin('0')">0</button>
            <button class="key-btn" onclick="deletePin()">⌫</button>
          </div>
          <div style="font-size: 0.75rem; color: #64748B; margin-top: 1rem;">
            Tip: Press 1 2 3 4 to simulate unlock
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features Section -->
  <section id="features">
    <div class="container">
      <div class="section-title">
        <h2>Uncompromising Vault Capabilities</h2>
        <p>Built for users who take their personal data and smartphone privacy seriously.</p>
      </div>
      <div class="features-grid">
        <div class="card">
          <span class="card-num">01. PROTECTION</span>
          <h3>Dual Password Protection</h3>
          <p>Master Account Password for authentication and emergency recovery, paired with an ultra-fast 4-digit PIN for instant daily vault access.</p>
        </div>
        <div class="card">
          <span class="card-num">02. APPS</span>
          <h3>Secure App Locker</h3>
          <p>Lock WhatsApp, Facebook, Gallery, and mobile banking with zero battery drain. Prevents snooping friends and unauthorized app uninstall.</p>
        </div>
        <div class="card">
          <span class="card-num">03. MEDIA</span>
          <h3>Photo & Video Protection</h3>
          <p>Hide memories behind AES-256 local storage encryption. Files become completely invisible to Google Photos and third-party file managers.</p>
        </div>
        <div class="card">
          <span class="card-num">04. ARCHITECTURE</span>
          <h3>Fast & Privacy-First</h3>
          <p>100% offline functionality. Your private photos and encrypted credentials never touch an external server or telemetry tracking pipeline.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section id="how-it-works">
    <div class="container">
      <div class="section-title">
        <h2>How It Works in 3 Steps</h2>
        <p>Setup your privacy fortress in under two minutes.</p>
      </div>
      <div class="features-grid">
        <div class="card">
          <span class="card-num">STEP 01</span>
          <h3>Download & Install APK</h3>
          <p>Download SurakshaVault.apk directly from this page. Allow "Install Unknown Apps" in your Android settings to complete installation.</p>
        </div>
        <div class="card">
          <span class="card-num">STEP 02</span>
          <h3>Sign Up with Master Password</h3>
          <p>Launch the app and create your master security profile with your Name, Email, and Master Password for account recovery.</p>
        </div>
        <div class="card">
          <span class="card-num">STEP 03</span>
          <h3>Set 4-Digit PIN & Protect</h3>
          <p>Pick a secret 4-digit PIN. Select the apps you want to lock and import private photos and videos into your secure encrypted vault.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Download Section -->
  <section id="download">
    <div class="container">
      <div class="section-title">
        <h2>Download Suraksha Vault APK</h2>
        <p>Choose your build package below. 100% verified, ad-free, and malware-free.</p>
      </div>
      <div class="download-grid">
        <div class="dl-card">
          <div style="font-size: 0.8rem; color: var(--accent); font-weight: 700; margin-bottom: 4px;">OFFICIAL RELEASE</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">SurakshaVault.apk</h3>
          <div class="dl-specs">
            <div><span>Version:</span> <span>v1.0.4 Stable</span></div>
            <div><span>Package Size:</span> <span>18.4 MB</span></div>
            <div><span>Min Android:</span> <span>Android 8.0+</span></div>
            <div><span>Target OS:</span> <span>Android 15 (API 35)</span></div>
          </div>
          <a href="SurakshaVault.apk" download="SurakshaVault.apk" class="btn btn-primary" style="width: 100%;">
            Download SurakshaVault.apk
          </a>
        </div>

        <div class="dl-card" style="border-color: var(--border-color);">
          <div style="font-size: 0.8rem; color: #818CF8; font-weight: 700; margin-bottom: 4px;">DEVELOPER TESTING</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">app-debug.apk</h3>
          <div class="dl-specs">
            <div><span>Build Flavor:</span> <span>Debug Build</span></div>
            <div><span>Package Size:</span> <span>~19.1 MB</span></div>
            <div><span>ADB Debugging:</span> <span>Enabled</span></div>
            <div><span>For:</span> <span>QA & Developers</span></div>
          </div>
          <a href="app-debug.apk" download="app-debug.apk" class="btn btn-secondary" style="width: 100%;">
            Download app-debug.apk
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <p style="font-weight: 600; color: #FFF; margin-bottom: 0.5rem;">
        Suraksha Vault · "Your Privacy. Your Vault. Your Suraksha."
      </p>
      <p>© 2026 Suraksha Vault. All Rights Reserved. Offline-first privacy protection.</p>
    </div>
  </footer>

  <!-- JavaScript Simulator Logic -->
  <script>
    let currentPin = '';
    const dots = document.querySelectorAll('.pin-dot');
    const statusText = document.getElementById('vaultStatus');

    function updateDots() {
      dots.forEach((dot, index) => {
        if (index < currentPin.length) {
          dot.classList.add('filled');
        } else {
          dot.classList.remove('filled');
        }
      });
    }

    function pressPin(digit) {
      if (currentPin.length < 4) {
        currentPin += digit;
        updateDots();
        if (currentPin.length === 4) {
          statusText.innerHTML = '<span style="color:#00FF87;">✓ Vault Unlocked! (AES-256)</span>';
          setTimeout(() => {
            alert('Suraksha Vault Simulation: Vault Unlocked Successfully!');
            clearPin();
          }, 200);
        }
      }
    }

    function deletePin() {
      currentPin = currentPin.slice(0, -1);
      updateDots();
      statusText.innerText = 'Enter 4-Digit Security PIN';
    }

    function clearPin() {
      currentPin = '';
      updateDots();
      statusText.innerText = 'Enter 4-Digit Security PIN';
    }
  </script>
</body>
</html>`;

  const copyCode = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'suraksha-vault-landing.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#080E1B] border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#0A1224]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[#00FF87]">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                {lang === 'en' ? 'Complete Single-File Code (HTML/CSS/JS)' : 'সম্পূর্ণ সিঙ্গেল-ফাইল কোড (HTML/CSS/JS)'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {lang === 'en'
                  ? 'All responsive HTML, modern CSS, and vanilla JS in one standalone file'
                  : 'সব রেসপন্সিভ স্টাইল ও জাভাস্ক্রিপ্টসহ একটি ফাইল'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-[#00FF87] hover:bg-[#00E575] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'en' ? 'Copied!' : 'কপি হয়েছে!') : (lang === 'en' ? 'Copy Code' : 'কোড কপি করুন')}</span>
            </button>

            <button
              type="button"
              onClick={downloadFile}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Code Preview Viewport */}
        <div className="flex-1 overflow-auto p-4 bg-[#050912] font-mono text-xs text-slate-300 leading-relaxed select-all">
          <pre className="whitespace-pre">
            <code>{standaloneHtmlCode}</code>
          </pre>
        </div>

        {/* Footer tip */}
        <div className="p-3 border-t border-slate-800/80 bg-[#090F1E] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span>
            {lang === 'en'
              ? '💡 Save this file as index.html to deploy on GitHub Pages, Netlify, or any web host with zero dependencies.'
              : '💡 এই কোডটি index.html নামে সেভ করে যেকোনো হোস্টিং, গিটহাব পেজেস বা নেটলিফাই-এ সরাসরি লাইভ করতে পারেন।'}
          </span>
          <button
            type="button"
            onClick={downloadFile}
            className="text-[#00FF87] hover:underline font-semibold"
          >
            Download index.html file directly →
          </button>
        </div>

      </div>
    </div>
  );
};
