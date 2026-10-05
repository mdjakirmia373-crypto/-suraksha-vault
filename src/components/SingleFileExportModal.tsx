import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
import { X, Copy, Check, Download, Code } from 'lucide-react';

interface SingleFileExportModalProps {
  lang?: SurakshaLanguage;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  // Complete standalone single-file HTML, modern CSS, and vanilla JS code
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suraksha Vault - আপনার ব্যক্তিগত জীবনের সর্বোচ্চ নিরাপত্তা</title>
  <meta name="description" content="অফলাইন সামরিক-গ্রেড এনক্রিপশন এবং ডুয়েল-পাসওয়ার্ড অ্যাপ লকার। সুরক্ষিত রাখুন আপনার ছবি, ভিডিও, ফাইল ও নোট।">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #0B0F19;
      --bg-card: rgba(14, 21, 38, 0.85);
      --bg-card-hover: rgba(18, 28, 50, 0.95);
      --accent: #00FF88;
      --accent-hover: #00E57A;
      --text-main: #F8FAFC;
      --text-muted: #94A3B8;
      --border-color: rgba(255, 255, 255, 0.08);
      --font-family: 'Hind Siliguri', 'Plus Jakarta Sans', system-ui, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-family);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 1140px; margin: 0 auto; padding: 0 1.25rem; }

    /* Header */
    header {
      position: sticky; top: 0; z-index: 50;
      background: rgba(11, 15, 25, 0.92);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-color);
      height: 68px; display: flex; align-items: center;
    }
    .nav-wrapper { display: flex; justify-content: space-between; align-items: center; width: 100%; }
    .brand { font-size: 1.3rem; font-weight: 800; display: flex; align-items: center; gap: 10px; }
    .brand-shield {
      width: 32px; height: 32px; border-radius: 50%; background: #051410;
      border: 2px solid var(--accent); display: flex; align-items: center; justify-content: center;
      box-shadow: 0 0 12px rgba(0, 255, 136, 0.4); color: var(--accent); font-size: 1rem;
    }
    .nav-links { display: none; gap: 1.75rem; list-style: none; font-size: 0.9rem; font-weight: 600; }
    @media (min-width: 860px) { .nav-links { display: flex; } }
    .nav-links a:hover { color: var(--accent); }
    .header-actions { display: flex; gap: 0.75rem; align-items: center; }

    /* Buttons */
    .btn-apk {
      background: var(--accent); color: #000; font-weight: 800; font-size: 0.85rem;
      padding: 0.55rem 1.2rem; border-radius: 12px; border: none; cursor: pointer;
      box-shadow: 0 0 18px rgba(0, 255, 136, 0.35); transition: all 0.2s ease;
      display: inline-flex; align-items: center; gap: 6px;
    }
    .btn-apk:hover { background: var(--accent-hover); transform: translateY(-1px); box-shadow: 0 0 25px rgba(0, 255, 136, 0.5); }
    .btn-login {
      background: #0E1626; color: #E2E8F0; border: 1px solid #1E293B;
      font-weight: 700; font-size: 0.85rem; padding: 0.55rem 1.1rem; border-radius: 12px; cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-login:hover { border-color: var(--accent); color: var(--accent); }

    /* Hero Section */
    .hero {
      padding: 4.5rem 0 5rem;
      background: radial-gradient(circle at 50% 15%, rgba(0, 255, 136, 0.08) 0%, transparent 60%);
      border-bottom: 1px solid var(--border-color);
    }
    .hero-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
    @media (min-width: 900px) { .hero-grid { grid-template-columns: 1.2fr 0.8fr; } }
    .kicker {
      display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; font-weight: 700;
      padding: 0.35rem 0.9rem; border-radius: 9999px; background: rgba(14, 21, 38, 0.9);
      border: 1px solid rgba(0, 255, 136, 0.3); color: #E2E8F0; margin-bottom: 1.25rem;
    }
    .kicker-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); }
    .hero-h1 { font-size: 2.5rem; font-weight: 800; line-height: 1.25; margin-bottom: 0.75rem; }
    @media (min-width: 640px) { .hero-h1 { font-size: 3.25rem; } }
    .hero-sub { font-size: 1.15rem; font-weight: 600; color: #CBD5E1; margin-bottom: 1.5rem; }
    .hero-bullets { display: grid; grid-template-columns: 1fr; gap: 0.6rem; margin-bottom: 2rem; font-size: 0.9rem; color: #CBD5E1; }
    @media (min-width: 640px) { .hero-bullets { grid-template-columns: 1fr 1fr; } }
    .hero-bullets div { display: flex; align-items: center; gap: 8px; }
    .hero-bullets span.check { color: var(--accent); font-weight: bold; }
    
    .hero-ctas { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; }
    .btn-hero-apk {
      background: var(--accent); color: #000; font-weight: 800; font-size: 1rem;
      padding: 0.9rem 1.8rem; border-radius: 16px; border: none; cursor: pointer;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.45); transition: all 0.2s ease;
      display: inline-flex; align-items: center; gap: 10px;
    }
    .btn-hero-apk:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(0, 255, 136, 0.65); background: var(--accent-hover); }
    .btn-hero-web {
      background: rgba(14, 21, 38, 0.9); color: #F8FAFC; font-weight: 700; font-size: 1rem;
      padding: 0.9rem 1.6rem; border-radius: 16px; border: 2px solid #1E293B; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;
    }
    .btn-hero-web:hover { border-color: var(--accent); }

    /* Floating Phone Mockup */
    .mockup-wrapper {
      position: relative; max-width: 330px; margin: 0 auto;
    }
    .mockup-card {
      background: rgba(11, 15, 25, 0.95); border: 3px solid #1E293B; border-radius: 38px;
      padding: 1.25rem; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9); position: relative;
    }
    .mockup-screen {
      background: #09111D; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 26px;
      padding: 1.5rem 1.25rem; text-align: center;
    }
    .mockup-badge {
      background: #061510; border: 1px solid var(--accent); padding: 0.6rem 0.8rem;
      border-radius: 14px; text-align: left; font-size: 0.8rem; margin: 0.6rem 0;
    }

    /* Section Headers */
    section { padding: 4.5rem 0; border-bottom: 1px solid var(--border-color); }
    .section-header { text-align: center; max-width: 650px; margin: 0 auto 3rem; }
    .section-header h2 { font-size: 2.2rem; font-weight: 800; margin-bottom: 0.5rem; }
    .section-header p { color: var(--text-muted); font-size: 0.95rem; }

    /* Glassmorphism Feature Grid */
    .feature-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    @media (min-width: 860px) { .feature-grid { grid-template-columns: repeat(3, 1fr); } }
    .feature-card {
      background: var(--bg-card); backdrop-filter: blur(16px);
      border: 2px solid var(--border-color); border-radius: 24px; padding: 2rem;
      transition: all 0.25s ease;
    }
    .feature-card:hover { transform: translateY(-5px); border-color: rgba(0, 255, 136, 0.5); box-shadow: 0 10px 30px rgba(0, 255, 136, 0.15); }
    .feat-icon { font-size: 2rem; margin-bottom: 1rem; }
    .feature-card h3 { font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem; color: #FFF; }
    .feature-card p.feat-sub { font-size: 0.8rem; font-family:'JetBrains Mono'; color: var(--accent); margin-bottom: 0.85rem; }
    .feature-card p.feat-desc { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.25rem; line-height: 1.6; }
    .feat-points { list-style: none; font-size: 0.85rem; color: #CBD5E1; space-y: 0.4rem; border-top: 1px solid var(--border-color); padding-top: 1rem; }
    .feat-points li { margin-bottom: 0.4rem; display: flex; align-items: center; gap: 6px; }

    /* 5 Category Grid */
    .cat-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
    @media (min-width: 600px) { .cat-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 960px) { .cat-grid { grid-template-columns: repeat(5, 1fr); } }
    .cat-box {
      background: var(--bg-card); border: 2px solid var(--border-color);
      border-radius: 18px; padding: 1.25rem; transition: transform 0.2s;
    }
    .cat-box:hover { transform: translateY(-3px); border-color: rgba(0, 255, 136, 0.4); }
    .cat-box h4 { font-size: 1.05rem; font-weight: 700; margin: 0.5rem 0 0.2rem; }
    .cat-box p { font-size: 0.8rem; color: var(--text-muted); }

    /* Tech-Spec Tablet Table */
    .spec-tablet {
      max-width: 800px; margin: 0 auto; background: var(--bg-card);
      border: 2px solid #1E293B; border-radius: 24px; padding: 2rem;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    .spec-row {
      display: flex; justify-content: space-between; padding: 0.9rem 0;
      border-bottom: 1px solid var(--border-color); font-size: 0.9rem; flex-wrap: wrap; gap: 0.5rem;
    }
    .spec-row:last-child { border-bottom: none; }
    .spec-label { color: var(--text-muted); }
    .spec-value { font-weight: 700; color: #FFF; text-align: right; }

    /* Interactive Web Vault Preview */
    .vault-box {
      background: #070D18; border: 2px solid var(--border-color); border-radius: 28px;
      padding: 1.75rem; max-width: 880px; margin: 0 auto;
    }
    .vault-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); }
    .vault-card {
      background: #0B1424; border: 1px solid #1E293B; border-radius: 16px;
      padding: 1rem; margin-bottom: 0.75rem; font-size: 0.85rem; display: flex; justify-content: space-between; align-items: center;
    }

    /* FAQ */
    .faq-list { max-width: 800px; margin: 0 auto; }
    .faq-card {
      background: var(--bg-card); border: 1px solid var(--border-color);
      border-radius: 16px; margin-bottom: 0.85rem; overflow: hidden;
    }
    .faq-title {
      padding: 1.1rem 1.25rem; font-weight: 700; cursor: pointer; display: flex; justify-content: space-between;
    }
    .faq-title:hover { color: var(--accent); }
    .faq-content { padding: 0 1.25rem 1.1rem; font-size: 0.9rem; color: var(--text-muted); display: none; }

    /* Footer */
    footer { padding: 3rem 0; font-size: 0.85rem; color: var(--text-muted); text-align: center; }

    /* Auth Modal */
    .modal-backdrop {
      position: fixed; inset: 0; z-index: 100; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);
      display: none; align-items: center; justify-content: center; padding: 1rem;
    }
    .modal-window {
      background: #0E1626; border: 2px solid var(--accent); border-radius: 24px;
      max-width: 420px; width: 100%; padding: 2rem; position: relative; color: #FFF;
    }
    .modal-close { position: absolute; top: 1rem; right: 1rem; background: #1E293B; border: none; color: #FFF; width: 32px; height: 32px; border-radius: 8px; cursor: pointer; }
    .input-field {
      width: 100%; padding: 0.75rem 1rem; background: #050B14; border: 1px solid #1E293B;
      border-radius: 12px; color: #FFF; font-size: 0.9rem; margin-bottom: 0.75rem; outline: none;
    }
    .input-field:focus { border-color: var(--accent); }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="container nav-wrapper">
      <a href="#" class="brand">
        <div class="brand-shield">🛡️</div>
        <span>Suraksha <span style="color:var(--accent);">Vault</span></span>
      </a>

      <ul class="nav-links">
        <li><a href="#features">ফিচার্স</a></li>
        <li><a href="#categories">সুরক্ষিত ফাইল</a></li>
        <li><a href="#compatibility">কম্প্যাটিবিলিটি</a></li>
        <li><a href="#webapp-vault">ওয়েব ভল্ট</a></li>
        <li><a href="#faq">প্রশ্নোত্তর</a></li>
      </ul>

      <div class="header-actions">
        <button class="btn-login" onclick="openModal('authModal')">লগইন</button>
        <button class="btn-apk" onclick="downloadApk()">⬇️ অফিসিয়াল APK</button>
      </div>
    </div>
  </header>

  <!-- 1. HERO SECTION -->
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="kicker">
          <span class="kicker-dot"></span>
          <span>মিলিটারি-গ্রেড AES-256 প্রটেকশন · অফলাইন ফার্স্ট আর্কিটেকচার</span>
        </div>

        <h1 class="hero-h1">
          আপনার ব্যক্তিগত জীবনের সর্বোচ্চ নিরাপত্তা—<span style="color:var(--accent);">Suraksha Vault</span>
        </h1>

        <p class="hero-sub">
          অফলাইন সামরিক-গ্রেড এনক্রিপশন এবং ডুয়েল-পাসওয়ার্ড অ্যাপ লকার।
        </p>

        <div class="hero-bullets">
          <div><span class="check">✓</span> গ্যালারি ও ফাইল ম্যানেজার থেকে ১০০% অদৃশ্য</div>
          <div><span class="check">✓</span> আসল ও ফেক পাসওয়ার্ড সিকিউরিটি</div>
          <div><span class="check">✓</span> ইন্টারনেট ছাড়াও শতভাগ অফলাইনে সক্রিয়</div>
          <div><span class="check">✓</span> অ্যান্ড্রয়েড ৫.০ থেকে ১৫+ যেকোনো ফোনে চলবে</div>
        </div>

        <div class="hero-ctas">
          <button class="btn-hero-apk" onclick="downloadApk()">
            ⬇️ অফিসিয়াল APK ডাউনলোড করুন
          </button>
          <a href="#webapp-vault" class="btn-hero-web">
            ✨ ওয়েব অ্যাপ ব্যবহার করুন
          </a>
        </div>

        <p style="font-size:0.8rem; color:#94A3B8; font-family:'JetBrains Mono';">
          v1.0.4 Stable · ১৮.৪ মেগাবাইট · ১০০% বিজ্ঞাপন ও ট্র্যাকার মুক্ত
        </p>
      </div>

      <!-- Floating Mobile Mockup -->
      <div class="mockup-wrapper">
        <div class="mockup-card">
          <div class="mockup-screen">
            <div style="font-size:3rem; margin-bottom:0.5rem;">🛡️</div>
            <h3 style="font-size:1.35rem; font-weight:800; color:#FFF;">Suraksha Vault</h3>
            <p style="color:var(--accent); font-family:'JetBrains Mono'; font-size:0.8rem; margin-bottom:1rem;">AES-256 Bit Encrypted</p>
            
            <div class="mockup-badge">
              <strong>🔒 ডুয়েল-পাসওয়ার্ড লকার</strong>
              <div style="font-size:0.75rem; color:#94A3B8;">আসল ও ফেক পাসওয়ার্ড সুরক্ষা</div>
            </div>

            <div class="mockup-badge">
              <strong>⚡ ১০০% অফলাইন ভল্ট</strong>
              <div style="font-size:0.75rem; color:#94A3B8;">কোনো সার্ভার বা ক্লাউড ট্র্যাকিং নেই</div>
            </div>

            <button class="btn-apk" style="width:100%; justify-content:center; margin-top:0.75rem;" onclick="downloadApk()">
              ⬇️ APK ডাউনলোড করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. PROMOTIONAL FEATURE GRID -->
  <section id="features">
    <div class="container">
      <div class="section-header">
        <span style="color:var(--accent); font-size:0.85rem; font-weight:700;">PROMOTIONAL SHOWCASE</span>
        <h2>তিন স্তরের সর্বোচ্চ নিরাপত্তা ব্যবস্থা</h2>
        <p>আপনার ফোনের প্রতিটি গোপন ফাইল ও ব্যক্তিগত অ্যাপস নিরাপদ রাখতে তৈরি।</p>
      </div>

      <div class="feature-grid">
        <!-- Card 1 -->
        <div class="feature-card">
          <div class="feat-icon">🛡️</div>
          <h3>সামরিক-গ্রেড সিকিউরিটি</h3>
          <p class="feat-sub">AES-256 BIT CIPHER</p>
          <p class="feat-desc">বিশ্বের শীর্ষ ব্যাংকিং স্ট্যান্ডার্ড AES-256 বিট এনক্রিপশন। গ্যালারি ও ফাইল ম্যানেজার থেকে ফাইল ১০০% অদৃশ্য থাকে।</p>
          <ul class="feat-points">
            <li>✓ হার্ডওয়্যার লোকাল এনক্রিপশন</li>
            <li>✓ ব্যাকডোর বা ট্র্যাকিং মুক্ত</li>
            <li>✓ সাধারণ ব্রাউজার থেকে অদৃশ্য</li>
          </ul>
        </div>

        <!-- Card 2 -->
        <div class="feature-card">
          <div class="feat-icon">🔒</div>
          <h3>ডুয়েল-পাসওয়ার্ড অ্যাপ লকার</h3>
          <p class="feat-sub">REAL & FAKE PASSWORDS</p>
          <p class="feat-desc">আসল ও ফেক পাসওয়ার্ডের মাধ্যমে হোয়াটসঅ্যাপ, ফেসবুক ও বিকাশ এক ট্যাপে লক করুন। বিকল্প পাসওয়ার্ডে ডামি ভল্ট দেখাবে।</p>
          <ul class="feat-points">
            <li>✓ ফেক পাসওয়ার্ড সিকিউরিটি</li>
            <li>✓ ০% ব্যাটারি খরচ</li>
            <li>✓ অননুমোদিত আনইনস্টল প্রতিরোধ</li>
          </ul>
        </div>

        <!-- Card 3 -->
        <div class="feature-card">
          <div class="feat-icon">💾</div>
          <h3>হাইব্রিড ব্যাকআপ</h3>
          <p class="feat-sub">OFFLINE + CLOUD AUTO-SYNC</p>
          <p class="feat-desc">ইন্টারনেট ছাড়া ১০০% অফলাইন লোকাল ব্যাকআপ তৈরি করুন অথবা ক্লাউড অটো-সিঙ্ক দিয়ে যেকোনো নতুন ফোনে ডাটা রিস্টোর করুন।</p>
          <ul class="feat-points">
            <li>✓ লোকাল .vault ব্যাকআপ ফাইল</li>
            <li>✓ ক্লাউড অটো-সিঙ্ক সাপোর্ট</li>
            <li>✓ হারিয়ে যাওয়া ফোনে ইনস্ট্যান্ট রিকভারি</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. PROTECTED CATEGORIES -->
  <section id="categories">
    <div class="container">
      <div class="section-header">
        <span style="color:var(--accent); font-size:0.85rem; font-weight:700;">PROTECTED CATEGORIES</span>
        <h2>৫টি সুরক্ষিত ক্যাটাগরি</h2>
        <p>আপনার যেকোনো প্রয়োজনীয় ডেটা আলাদা আলাদা ফোল্ডারে সম্পূর্ণ গোপন রাখুন।</p>
      </div>

      <div class="cat-grid">
        <div class="cat-box">
          <div style="font-size:2rem;">📁</div>
          <h4>১. ফাইল (Files)</h4>
          <p>যেকোনো এক্সটেনশন (.zip, .apk, .mp3) ফাইল ম্যানেজারে অদৃশ্য।</p>
        </div>
        <div class="cat-box">
          <div style="font-size:2rem;">🖼️</div>
          <h4>২. ছবি (Photos)</h4>
          <p>ব্যক্তিগত অ্যালবাম সাধারণ গ্যালারি থেকে লুকিয়ে ফেলুন।</p>
        </div>
        <div class="cat-box">
          <div style="font-size:2rem;">🎥</div>
          <h4>৩. ভিডিও (Videos)</h4>
          <p>উচ্চ রেজুলিউশনের ভিডিও ভল্টের ভেতরের প্লেয়ারে সুরক্ষিত।</p>
        </div>
        <div class="cat-box">
          <div style="font-size:2rem;">📄</div>
          <h4>৪. ডকুমেন্ট (Docs)</h4>
          <p>NID, পাসপোর্ট বা জরুরি পিডিএফ ১০০% নিরাপদ।</p>
        </div>
        <div class="cat-box">
          <div style="font-size:2rem;">📝</div>
          <h4>৫. সিক্রেট নোট</h4>
          <p>পাসওয়ার্ড, এটিএম পিন ও ব্যক্তিগত ডায়েরি এনক্রিপ্ট করুন।</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. TECH-SPEC COMPATIBILITY TABLET -->
  <section id="compatibility">
    <div class="container">
      <div class="section-header">
        <span style="color:var(--accent); font-size:0.85rem; font-weight:700;">TECHNICAL SPECS</span>
        <h2>অ্যান্ড্রয়েড কম্প্যাটিবিলিটি স্পেক্স</h2>
      </div>

      <div class="spec-tablet">
        <div class="spec-row">
          <span class="spec-label">সাপোর্টেড অপারেটিং সিস্টেম</span>
          <span class="spec-value">Android 5.0 (Lollipop) থেকে Android 15+ (Universal)</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">প্যাকেজ সাইজ</span>
          <span class="spec-value" style="color:var(--accent);">১৮.৪ মেগাবাইট (আল্ট্রা-লাইট)</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">এনক্রিপশন স্ট্যান্ডার্ড</span>
          <span class="spec-value">সামরিক-গ্রেড AES-256 Bit Cipher</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">রুট পারমিশন দরকার?</span>
          <span class="spec-value">না, রুট ছাড়া ১০০% কাজ করবে</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">সমর্থিত ব্র্যান্ড</span>
          <span class="spec-value">Samsung, Xiaomi, Vivo, Oppo, Realme, Walton সহ সকল ফোন</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">ইন্টারনেট প্রয়োজনীয়তা</span>
          <span class="spec-value">কোনো ইন্টারনেটের প্রয়োজন নেই (১০০% অফলাইন)</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. INTERACTIVE LIVE WEB APP VAULT -->
  <section id="webapp-vault">
    <div class="container">
      <div class="section-header">
        <span style="color:var(--accent); font-size:0.85rem; font-weight:700;">LIVE INTERACTIVE VAULT</span>
        <h2>সরাসরি ওয়েবে ভল্ট ব্যবহার করুন</h2>
        <p>নিচের লাইভ ভল্টে আপনার গোপন নোট ও ফাইল পরীক্ষা করে দেখতে পারেন।</p>
      </div>

      <div class="vault-box">
        <div class="vault-header">
          <div style="font-weight:800; color:var(--accent);">Suraksha Vault Dashboard</div>
          <button class="btn-apk" style="padding:0.4rem 0.8rem; font-size:0.75rem;" onclick="addSecretNote()">+ নতুন নোট</button>
        </div>

        <div id="notesContainer">
          <div class="vault-card">
            <div>
              <strong>📄 index.html</strong>
              <div style="font-size:0.75rem; color:#94A3B8;">২১.৮ KB · এনক্রিপ্টেড কোড</div>
            </div>
            <span style="color:var(--accent); font-size:0.75rem;">সুরক্ষিত</span>
          </div>

          <div class="vault-card">
            <div>
              <strong>🔑 জরুরি পাসওয়ার্ড ও গোপন কোড</strong>
              <div style="font-size:0.75rem; color:#94A3B8;">ফেসবুক আইডি, ব্যাংক অ্যাকাউন্ট পিন</div>
            </div>
            <span style="color:var(--accent); font-size:0.75rem;">সুরক্ষিত</span>
          </div>

          <div class="vault-card">
            <div>
              <strong>📝 স্বাগতম পার্সোনাল ভল্ট...</strong>
              <div style="font-size:0.75rem; color:#94A3B8;">আপনার ছবি, ভিডিও এবং নোটের নিরাপদ স্টোরেজ</div>
            </div>
            <span style="color:var(--accent); font-size:0.75rem;">সুরক্ষিত</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section id="faq">
    <div class="container">
      <div class="section-header">
        <span style="color:var(--accent); font-size:0.85rem; font-weight:700;">FAQ</span>
        <h2>সাধারণ প্রশ্নোত্তর</h2>
      </div>

      <div class="faq-list">
        <div class="faq-card">
          <div class="faq-title" onclick="toggleFaq(this)">সুরক্ষ ভল্ট কি ইন্টারনেট ছাড়া (অফলাইনে) কাজ করবে? <span>+</span></div>
          <div class="faq-content">হ্যাঁ, শতভাগ। সুরক্ষ ভল্ট সম্পূর্ণ অফলাইন-ফার্স্ট আর্কিটেকচারে তৈরি। ইন্টারনেট সংযোগ ছাড়াই সব ফাইল ও অ্যাপ লক থাকে।</div>
        </div>

        <div class="faq-card">
          <div class="faq-title" onclick="toggleFaq(this)">আসল ও ফেক পাসওয়ার্ডের সুবিধা কী? <span>+</span></div>
          <div class="faq-content">কেউ যদি আপনাকে জোর করে ভল্ট খুলতে বলে, তখন আপনি ফেক পাসওয়ার্ড দিলে একটি খালি ডামি ভল্ট দেখাবে। আপনার আসল গোপন ফাইল কখনো ফাঁস হবে না।</div>
        </div>

        <div class="faq-card">
          <div class="faq-title" onclick="toggleFaq(this)">আমার ফোনে কি সুরক্ষ ভল্ট চলবে? <span>+</span></div>
          <div class="faq-content">সুরক্ষা ভল্ট অ্যান্ড্রয়েড ৫.০ থেকে ১৫+ পর্যন্ত সকল ব্র্যান্ডের ফোনে (Samsung, Xiaomi, Vivo, Oppo, Realme ইত্যাদি) নিখুঁতভাবে চলবে।</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <p>© 2026 Suraksha Vault. সর্বস্বত্ব সংরক্ষিত।</p>
      <p style="margin-top:0.4rem; font-size:0.8rem; color:#64748B;">
        মিলিটারি-গ্রেড AES-256 বিট এনক্রিপশন · অফলাইন সিকিউরিটি আর্কিটেকচার
      </p>
    </div>
  </footer>

  <!-- AUTH POPUP MODAL -->
  <div id="authModal" class="modal-backdrop" onclick="closeOnOutside(event, 'authModal')">
    <div class="modal-window">
      <button class="modal-close" onclick="closeModal('authModal')">×</button>
      <h3 style="font-size:1.35rem; font-weight:800; margin-bottom:0.5rem; text-align:center;">সুরক্ষা ভল্টে প্রবেশ করুন</h3>
      <p style="font-size:0.8rem; color:#94A3B8; text-align:center; margin-bottom:1.25rem;">আপনার ক্রেডেনশিয়াল দিয়ে ভল্ট আনলক করুন</p>
      
      <form onsubmit="handleAuth(event)">
        <input type="email" required placeholder="জিমেইল / ই-মেইল ঠিকানা" class="input-field">
        <input type="password" required placeholder="অ্যাকাউন্ট পাসওয়ার্ড" class="input-field">
        <button type="submit" class="btn-apk" style="width:100%; justify-content:center; padding:0.8rem; margin-top:0.5rem;">
          লগইন করুন
        </button>
      </form>
    </div>
  </div>

  <script>
    function downloadApk() {
      const a = document.createElement('a');
      a.href = 'SurakshaVault.apk';
      a.download = 'SurakshaVault.apk';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    function openModal(id) {
      document.getElementById(id).style.display = 'flex';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    function closeOnOutside(e, id) {
      if (e.target.id === id) closeModal(id);
    }

    function handleAuth(e) {
      e.preventDefault();
      alert('সফলভাবে প্রবেশ করা হয়েছে! আপনার সুরক্ষা ভল্ট প্রস্তুত।');
      closeModal('authModal');
    }

    function addSecretNote() {
      const title = prompt('নোটের শিরোনাম দিন:');
      if (!title) return;
      const container = document.getElementById('notesContainer');
      const div = document.createElement('div');
      div.className = 'vault-card';
      div.innerHTML = '<div><strong>📝 ' + title + '</strong><div style="font-size:0.75rem; color:#94A3B8;">নতুন এনক্রিপ্টেড সিক্রেট নোট</div></div><span style="color:var(--accent); font-size:0.75rem;">সুরক্ষিত</span>';
      container.prepend(div);
    }

    function toggleFaq(el) {
      const content = el.nextElementSibling;
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      el.querySelector('span').innerText = isOpen ? '+' : '−';
    }
  </script>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadFile = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#0B0F19] border-2 border-[#00FF88]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#070B14]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00FF88]/15 border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                প্রিমিয়াম সিঙ্গেল ফাইল কোড (index.html)
              </h3>
              <p className="text-xs text-slate-400">
                HTML, আধুনিক CSS এবং প্রমোশনাল JavaScript একটি ফাইলে প্রস্তুত
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 p-5 overflow-y-auto bg-[#050810] font-mono text-xs text-slate-300">
          <pre className="whitespace-pre-wrap leading-relaxed select-all">
            {standaloneHtmlCode}
          </pre>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#070B14] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono">
            Clean & Minified · Zero Dependencies
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={copyToClipboard}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#00FF88]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'কোড কপি হয়েছে!' : 'কোড কপি করুন'}</span>
            </button>

            <button
              type="button"
              onClick={downloadFile}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-black bg-[#00FF88] hover:bg-[#00E57A] shadow-[0_0_20px_rgba(0,255,136,0.35)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-black" />
              <span>index.html ডাউনলোড করুন</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
