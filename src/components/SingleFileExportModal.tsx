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

  // Complete standalone single-file HTML, CSS, and JS code for Suraksha Vault
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suraksha Vault - Your Privacy. Your Vault. Your Suraksha.</title>
  <meta name="description" content="অফিসিয়াল অ্যান্ড্রয়েড অ্যাপস ও প্রাইভেসি ভল্ট। ডুয়েল পাসওয়ার্ড ও AES-256 এনক্রিপশনের মাধ্যমে ফাইল, ছবি ও অ্যাপস লক করুন।">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;600;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #060A12;
      --bg-card: #09111D;
      --bg-card-hover: #0C1728;
      --accent: #00FF87;
      --accent-hover: #00E575;
      --text-main: #F1F5F9;
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

    /* 1. TOP STICKY INSTALL BANNER */
    .top-banner {
      position: sticky; top: 0; z-index: 60;
      background: #040C16;
      border-bottom: 2px solid var(--accent);
      padding: 0.65rem 1rem;
      box-shadow: 0 4px 25px rgba(0, 255, 135, 0.25);
    }
    .top-banner-inner {
      display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 0.5rem;
    }
    @media (min-width: 640px) {
      .top-banner-inner { flex-direction: row; }
    }
    .top-banner-text { font-size: 0.85rem; color: #E2E8F0; text-align: center; }
    .top-banner-text strong { color: var(--accent); }
    .btn-banner {
      background: var(--accent); color: #000; font-weight: 800; font-size: 0.8rem;
      padding: 0.45rem 1rem; border-radius: 10px; border: none; cursor: pointer;
      box-shadow: 0 0 15px rgba(0,255,135,0.4); transition: transform 0.15s;
    }
    .btn-banner:hover { transform: scale(1.03); background: var(--accent-hover); }

    /* 2. HEADER */
    header {
      position: sticky; top: 48px; z-index: 50;
      background: rgba(6, 10, 18, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      height: 64px; display: flex; align-items: center;
    }
    .nav-wrapper { display: flex; justify-content: space-between; align-items: center; width: 100%; }
    .brand { font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 8px; }
    .brand-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px var(--accent); }
    .nav-links { display: none; gap: 1.5rem; list-style: none; font-size: 0.9rem; font-weight: 600; }
    @media (min-width: 900px) { .nav-links { display: flex; } }
    .nav-links a:hover { color: var(--accent); }
    .header-actions { display: flex; gap: 0.6rem; align-items: center; }
    .btn-login {
      background: #0A1424; color: #E2E8F0; border: 1px solid #1E293B;
      font-weight: 700; font-size: 0.8rem; padding: 0.45rem 1rem; border-radius: 10px; cursor: pointer;
    }
    .btn-login:hover { border-color: var(--accent); color: var(--accent); }
    .btn-signup {
      background: var(--accent); color: #000; font-weight: 800; font-size: 0.8rem;
      padding: 0.45rem 1rem; border-radius: 10px; border: none; cursor: pointer;
      box-shadow: 0 0 15px rgba(0,255,135,0.3);
    }
    .btn-signup:hover { background: var(--accent-hover); }

    /* Buttons */
    .btn-primary {
      background: var(--accent); color: #000; font-weight: 800; padding: 0.9rem 1.8rem;
      border-radius: 14px; font-size: 1rem; border: none; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 0 30px rgba(0,255,135,0.35);
      transition: all 0.2s ease;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(0,255,135,0.5); }
    .btn-secondary {
      background: #0A1424; color: #F1F5F9; font-weight: 700; padding: 0.9rem 1.6rem;
      border-radius: 14px; font-size: 1rem; border: 2px solid #1E293B; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;
    }
    .btn-secondary:hover { border-color: var(--accent); }

    /* Sections */
    section { padding: 4.5rem 0; border-bottom: 1px solid var(--border-color); }
    .section-title { text-align: center; max-width: 650px; margin: 0 auto 3rem; }
    .section-title h2 { font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; }
    .section-title p { color: var(--text-muted); font-size: 0.95rem; }
    .badge {
      display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      padding: 0.25rem 0.75rem; border-radius: 9999px; background: rgba(0,255,135,0.1);
      color: var(--accent); border: 1px solid rgba(0,255,135,0.3); margin-bottom: 0.75rem;
    }

    /* Hero */
    .hero-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center; }
    @media (min-width: 900px) { .hero-grid { grid-template-columns: 1.2fr 0.8fr; } }
    .hero-h1 { font-size: 2.75rem; font-weight: 800; line-height: 1.15; margin-bottom: 0.75rem; }
    .hero-tagline { font-size: 1.3rem; font-weight: 600; color: #CBD5E1; font-style: italic; margin-bottom: 1.25rem; }
    .hero-desc { color: var(--text-muted); font-size: 1rem; line-height: 1.6; margin-bottom: 2rem; }
    .hero-btns { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }

    /* Categories Grid */
    .grid-5 { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
    @media (min-width: 640px) { .grid-5 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .grid-5 { grid-template-columns: repeat(3, 1fr); } }
    .cat-card {
      background: var(--bg-card); border: 2px solid var(--border-color); border-radius: 20px;
      padding: 1.5rem; transition: transform 0.2s, border-color 0.2s;
    }
    .cat-card:hover { transform: translateY(-4px); border-color: rgba(0,255,135,0.5); }
    .cat-card h3 { font-size: 1.2rem; font-weight: 700; margin: 0.5rem 0 0.25rem; }
    .cat-card p { font-size: 0.85rem; color: var(--text-muted); }

    /* 2-Col Grid */
    .grid-2 { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    @media (min-width: 768px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
    .box-card {
      background: var(--bg-card); border: 2px solid var(--border-color); border-radius: 24px;
      padding: 2rem;
    }

    /* FAQ */
    .faq-item {
      background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px;
      margin-bottom: 0.75rem; overflow: hidden;
    }
    .faq-q {
      padding: 1.1rem 1.25rem; font-weight: 700; cursor: pointer; display: flex; justify-content: space-between;
      user-select: none;
    }
    .faq-q:hover { color: var(--accent); }
    .faq-a { padding: 0 1.25rem 1.1rem; font-size: 0.875rem; color: var(--text-muted); display: none; }

    /* Footer */
    footer { padding: 3rem 0; font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border-color); }
    
    /* Modals */
    .modal-overlay {
      position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
      display: none; align-items: center; justify-content: center; padding: 1rem;
    }
    .modal-box {
      background: #09111D; border: 2px solid var(--accent); border-radius: 24px;
      max-width: 440px; width: 100%; padding: 2rem; position: relative; color: #FFF;
    }
    .modal-close {
      position: absolute; top: 1rem; right: 1rem; background: #1E293B; border: none;
      color: #FFF; font-size: 1.25rem; width: 32px; height: 32px; border-radius: 8px; cursor: pointer;
    }
    .form-input {
      width: 100%; padding: 0.75rem 1rem; background: #050B14; border: 1px solid #1E293B;
      border-radius: 12px; color: #FFF; font-size: 0.9rem; margin-bottom: 0.75rem; outline: none;
    }
    .form-input:focus { border-color: var(--accent); }
  </style>
</head>
<body>

  <!-- 1. TOP STICKY INSTALL BANNER -->
  <aside class="top-banner">
    <div class="container top-banner-inner">
      <div class="top-banner-text">
        <strong>Suraksha Vault</strong> | অফিসিয়াল অ্যান্ড্রয়েড অ্যাপস উপলব্ধ (১৮.৪ মেগাবাইট) - আপনার ফোনে অ্যাপটি ইনস্টল করতে চান?
      </div>
      <button class="btn-banner" onclick="handleInstallBanner()">এই ওয়েবসাইটের অ্যাপস ইনস্টল করুন</button>
    </div>
  </aside>

  <!-- 2. HEADER -->
  <header>
    <div class="container nav-wrapper">
      <a href="#" class="brand">
        <span class="brand-dot"></span>
        <span>Suraksha <span style="color:var(--accent);">Vault</span></span>
      </a>

      <ul class="nav-links">
        <li><a href="#features">ফিচার্স</a></li>
        <li><a href="#categories">সুরক্ষিত ক্যাটাগরি</a></li>
        <li><a href="#compatibility">কম্প্যাটিবিলিটি</a></li>
        <li><a href="#backup">ব্যাকআপ</a></li>
        <li><a href="#download">ডাউনলোড</a></li>
        <li><a href="#faq">প্রশ্নোত্তর</a></li>
      </ul>

      <div class="header-actions">
        <button class="btn-login" onclick="openAuthModal('login')">লগইন</button>
        <button class="btn-signup" onclick="openAuthModal('signup')">সাইন-আপ</button>
      </div>
    </div>
  </header>

  <!-- 3. HERO SECTION -->
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <span class="badge">Android 5.0 - 15+ ইউনিভার্সাল বিল্ড</span>
        <h1 class="hero-h1">Suraksha <span style="color:var(--accent);">Vault</span></h1>
        <p class="hero-tagline">"Your Privacy. Your Vault. Your Suraksha."</p>
        <p class="hero-desc">
          আপনার অ্যান্ড্রয়েড ডিভাইসের জন্য চূড়ান্ত ব্যক্তিগত নিরাপত্তা বর্ম। স্যামসাং, শাওমি, অপ্পো, ভিভোসহ যেকোনো ফোনে সম্পূর্ণ অফলাইনে বা অনলাইনে ফাইল, ছবি, ভিডিও ও অ্যাপস লক করুন মিলিটারী গ্রেড AES-256 এনক্রিপশনের মাধ্যমে।
        </p>
        <div class="hero-btns">
          <button class="btn-primary" onclick="triggerDownload()">⬇️ Download APK (১৮.৪ MB)</button>
          <button class="btn-secondary" onclick="openInstallModal()">📱 ইনস্টল করার নিয়ম</button>
        </div>
      </div>
      <div style="text-align: center;">
        <div style="background:#09111D; border:2px solid #1E293B; border-radius:32px; padding:2rem; box-shadow:0 0 40px rgba(0,255,135,0.15);">
          <div style="font-size:3.5rem; margin-bottom:0.5rem;">🛡️</div>
          <h3 style="font-size:1.5rem; font-weight:800; color:#FFF;">Suraksha Vault</h3>
          <p style="color:var(--accent); font-family:'JetBrains Mono'; font-size:0.85rem; margin-bottom:1.5rem;">AES-256 Hardware Encrypted</p>
          <div style="background:#050B14; padding:1rem; border-radius:16px; font-size:0.85rem; color:#CBD5E1; text-align:left; line-height:1.8;">
            ✓ ডুয়েল পাসওয়ার্ড সিকিউরিটি (Auth + PIN)<br>
            ✓ অ্যান্ড্রয়েড অ্যাপ লকার (WhatsApp, bKash)<br>
            ✓ ১০০% অফলাইনে ফুল ভল্ট ফাংশনালিটি<br>
            ✓ হাই-স্পিড ক্লাউড ব্যাকআপ ও রিকভারি
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. PROTECTED CATEGORIES SECTION -->
  <section id="categories">
    <div class="container">
      <div class="section-title">
        <span class="badge">সুরক্ষিত ক্যাটাগরি</span>
        <h2>আপনি যা কিছু লক ও সুরক্ষিত করতে পারবেন</h2>
        <p>সুরক্ষা ভল্টে আপনার যেকোনো স্পর্শকাতর ফাইল এবং ব্যক্তিগত তথ্য আলাদা আলাদা ক্যাটাগরিতে গোপন রাখা যায়।</p>
      </div>

      <div class="grid-5">
        <div class="cat-card">
          <div style="font-size:2rem;">📁</div>
          <h3>১. সকল ফাইল</h3>
          <p>যেকোনো এক্সটেনশনের ফাইল (.zip, .apk, .mp3 ইত্যাদি) স্বাভাবিক ফাইল ম্যানেজার থেকে সম্পূর্ণ লুকিয়ে রাখুন।</p>
        </div>
        <div class="cat-card">
          <div style="font-size:2rem;">🖼️</div>
          <h3>২. ইমেজ / ফটো</h3>
          <p>ব্যক্তিগত ছবি ও পারিবারিক অ্যালবাম গ্যালারি থেকে অদৃশ্য করে ফেলুন। ভল্ট ছাড়া কোথাও দেখা যাবে না।</p>
        </div>
        <div class="cat-card">
          <div style="font-size:2rem;">🎥</div>
          <h3>৩. ভিডিও</h3>
          <p>উচ্চ রেজুলিউশনের ব্যক্তিগত ভিডিও ক্লিপ দ্রুত এনক্রিপ্ট করে সুরক্ষিত রাখুন।</p>
        </div>
        <div class="cat-card">
          <div style="font-size:2rem;">📄</div>
          <h3>৪. ডকুমেন্ট</h3>
          <p>জাতীয় পরিচয়পত্র (NID), পাসপোর্ট কপি বা জরুরি পিডিএফ ফাইল সুরক্ষিত ভল্টে নিরাপদে রাখুন।</p>
        </div>
        <div class="cat-card">
          <div style="font-size:2rem;">📝</div>
          <h3>৫. পার্সোনাল নোট</h3>
          <p>জরুরি পাসওয়ার্ড, ব্যাংক তথ্য, এটিএম পিন এবং ব্যক্তিগত ডায়রির গোপন তথ্য আলাদা আলাদা নোটে রাখুন।</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. UNIVERSAL COMPATIBILITY & HYBRID USAGE -->
  <section id="compatibility">
    <div class="container">
      <div class="section-title">
        <span class="badge">কম্প্যাটিবিলিটি</span>
        <h2>সকল অ্যান্ড্রয়েড ডিভাইসে কাজ করে</h2>
        <p>অ্যান্ড্রয়েড ৫.০ থেকে ১৫+ যেকোনো ব্র্যান্ডের স্মার্টফোনে কোনো ল্যাগ ছাড়া মসৃণভাবে চলবে।</p>
      </div>

      <div class="grid-2">
        <div class="box-card">
          <span style="color:var(--accent); font-weight:700; font-size:0.85rem;">UNIVERSAL SUPPORT</span>
          <h3 style="font-size:1.4rem; font-weight:800; margin:0.5rem 0 1rem;">সকল স্মার্টফোন ব্র্যান্ডে ১০০% সমর্থিত</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.7;">
            Samsung, Xiaomi, Vivo, Oppo, Realme, OnePlus, Infinix, Tecno, Symphony, Walton সহ যেকোনো ফোনে কোনো রুট পারমিশন ছাড়াই ইনস্টল হবে।
          </p>
        </div>

        <div class="box-card">
          <span style="color:#38BDF8; font-weight:700; font-size:0.85rem;">HYBRID ARCHITECTURE</span>
          <h3 style="font-size:1.4rem; font-weight:800; margin:0.5rem 0 1rem;">ইন্টারনেট থাকুক বা না থাকুক—ভল্ট সবসময় প্রস্তুত</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.7;">
            ইন্টারনেট সংযোগ ছাড়াই অ্যাপ লকার ও ফটো ভল্ট লোকাল মোডে কাজ করে। ইন্টারনেট পেলে ঐচ্ছিক ক্লাউড সার্ভারের সাথে ডাটা স্বয়ংক্রিয়ভাবে সিঙ্ক হয়।
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. KEY FEATURES -->
  <section id="features">
    <div class="container">
      <div class="section-title">
        <span class="badge">ফিচারসমূহ</span>
        <h2>উন্নত প্রাইভেসি ও সিকিউরিটি ফিচার</h2>
      </div>

      <div class="grid-5" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <div class="cat-card">
          <div style="font-size:2rem;">🔑</div>
          <h3>ডুয়েল পাসওয়ার্ড প্রটেকশন</h3>
          <p>অ্যাকাউন্ট রিকভারির জন্য মাস্টার পাসওয়ার্ড এবং প্রতিদিন দ্রুত ভল্ট খোলার জন্য ৪-সংখ্যার সহজ ভল্ট পিন।</p>
        </div>
        <div class="cat-card">
          <div style="font-size:2rem;">🔒</div>
          <h3>অ্যাডভান্সড অ্যাপ লকার</h3>
          <p>হোয়াটসঅ্যাপ, ফেসবুক, মেসেঞ্জার, বিকাশ ও ব্যাংক অ্যাপ এক ট্যাপেই নিরাপদ সিকিউরিটি আবরণে লক করুন।</p>
        </div>
        <div class="cat-card">
          <div style="font-size:2rem;">🛡️</div>
          <h3>মিলিটারী-গ্রেড AES-256</h3>
          <p>বিশ্বমানের হার্ডওয়্যার এনক্রিপশনে ফাইল সুরক্ষিত থাকে। পাসওয়ার্ড ছাড়া ডাটা ডিক্রিপ্ট করা অসম্ভব।</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. BACKUP & RESTORE SYSTEM -->
  <section id="backup">
    <div class="container">
      <div class="section-title">
        <span class="badge">ব্যাকআপ সিস্টেম</span>
        <h2>শক্তিশালী ব্যাকআপ ও রিস্টোর সিস্টেম</h2>
      </div>

      <div class="grid-2">
        <div class="box-card">
          <span style="color:#94A3B8; font-weight:700;">FREE TIER</span>
          <h3 style="font-size:1.3rem; font-weight:800; margin:0.5rem 0 1rem;">লোকাল এনক্রিপ্টেড ব্যাকআপ</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.7;">
            সরাসরি ফোনের মেমোরিতে পাসওয়ার্ড প্রটেক্টেড ব্যাকআপ ফাইল তৈরি করুন। সম্পূর্ণ অফলাইন এবং আজীবনের জন্য ফ্রি।
          </p>
        </div>

        <div class="box-card" style="border-color:var(--accent);">
          <span style="color:var(--accent); font-weight:800;">PREMIUM TIER</span>
          <h3 style="font-size:1.3rem; font-weight:800; margin:0.5rem 0 1rem;">হাই-স্পিড সিকিউর ক্লাউড সার্ভার</h3>
          <p style="color:#CBD5E1; font-size:0.9rem; line-height:1.7;">
            ফোন হারিয়ে গেলেও নতুন ফোনে লগইন করলেই নিমিষেই ক্লাউড থেকে সব ফাইল ও ছবি রিস্টোর হয়ে যাবে।
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. DOWNLOAD CARD -->
  <section id="download">
    <div class="container" style="text-align: center;">
      <div class="section-title">
        <span class="badge">অফিসিয়াল এপিকে</span>
        <h2>Suraksha Vault ডাউনলোড করুন</h2>
      </div>

      <div style="max-w:600px; margin:0 auto; background:#09111D; border:2px solid var(--accent); border-radius:28px; padding:2.5rem; box-shadow:0 0 35px rgba(0,255,135,0.2);">
        <h3 style="font-size:1.8rem; font-weight:800; margin-bottom:0.25rem;">SurakshaVault.apk</h3>
        <p style="color:var(--accent); font-family:'JetBrains Mono'; margin-bottom:1.5rem;">Version v1.0.4 (Stable) · 18.4 MB</p>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">
          অ্যান্ড্রয়েড ৫.০ থেকে ১৫+ ইউনিভার্সাল বিল্ড · ১০০% ভাইরাস ও ট্র্যাকার মুক্ত
        </p>
        <button class="btn-primary" style="width:100%; font-size:1.1rem; justify-content:center;" onclick="triggerDownload()">
          ⬇️ ডাউনলোড SurakshaVault.apk
        </button>
      </div>
    </div>
  </section>

  <!-- 9. FAQ -->
  <section id="faq">
    <div class="container" style="max-width: 800px;">
      <div class="section-title">
        <span class="badge">FAQ</span>
        <h2>সাধারণ প্রশ্নোত্তর</h2>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">সুরক্ষ ভল্ট কি ইন্টারনেট ছাড়া (অফলাইনে) কাজ করবে? <span>+</span></div>
        <div class="faq-a">হ্যাঁ, শতভাগ। সুরক্ষা ভল্ট সম্পূর্ণ অফলাইন-ফার্স্ট আর্কিটেকচারে তৈরি। ইন্টারনেট সংযোগ ছাড়াই সব ফাইল ও অ্যাপ লক থাকে।</div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">আমার ফোনে কি সুরক্ষ ভল্ট চলবে? (ডিভাইস কম্প্যাটিবিলিটি) <span>+</span></div>
        <div class="faq-a">সুরক্ষা ভল্ট অ্যান্ড্রয়েড ৫.০ থেকে ১৫+ পর্যন্ত সকল ফোনে চলবে (Samsung, Xiaomi, Vivo, Oppo, Realme, Walton ইত্যাদি)।</div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">প্রিমিয়াম ক্লাউড ব্যাকআপের সুবিধা কী? <span>+</span></div>
        <div class="faq-a">ফোন হারিয়ে গেলে বা পরিবর্তন করলে নতুন ফোনে লগইন করলেই নিমেষে সব ফাইল ও ছবি ক্লাউড সার্ভার থেকে রিস্টোর হয়ে যাবে।</div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">"File might be harmful" সতর্কবার্তা দেখালে কী করব? <span>+</span></div>
        <div class="faq-a">এটি অ্যান্ড্রয়েডের স্বাভাবিক সতর্কতা। প্লে স্টোরের বাইরে যেকোনো ফাইল ডাউনলোডের সময় এটি আসে। নিশ্চিন্তে "Download anyway" চাপুন।</div>
      </div>
    </div>
  </section>

  <!-- 10. FOOTER -->
  <footer>
    <div class="container" style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
      <p>© 2026 Suraksha Vault. সর্বস্বত্ব সংরক্ষিত।</p>
      <div>
        <a href="#" onclick="alert('প্রাইভেসি পলিসি: সুরক্ষা ভল্ট আপনার কোনো ডাটা ট্র্যাকিং করে না।'); return false;">প্রাইভেসি পলিসি</a> ·
        <a href="#" onclick="alert('সাপোর্ট ইমেইল: support@surakshavault.app'); return false;">সাপোর্ট</a>
      </div>
    </div>
  </footer>

  <!-- AUTH POPUP MODAL -->
  <div id="authModal" class="modal-overlay" onclick="closeOnOutside(event, 'authModal')">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal('authModal')">×</button>
      <h3 id="authTitle" style="font-size:1.4rem; font-weight:800; margin-bottom:0.5rem; text-align:center;">লগইন করুন</h3>
      <p style="font-size:0.8rem; color:#94A3B8; text-align:center; margin-bottom:1.5rem;">আপনার ক্রেডেনশিয়াল দিয়ে ভল্টে প্রবেশ করুন</p>
      
      <form onsubmit="handleAuthSubmit(event)">
        <div id="signupNameField" style="display:none;">
          <input type="text" placeholder="আপনার পূর্ণ নাম" class="form-input">
        </div>
        <input type="email" required placeholder="জিমেইল / ই-মেইল ঠিকানা" class="form-input">
        <input type="password" required placeholder="অ্যাকাউন্ট পাসওয়ার্ড" class="form-input">
        <div id="signupConfirmField" style="display:none;">
          <input type="password" placeholder="পাসওয়ার্ড নিশ্চিত করুন" class="form-input">
        </div>

        <button type="submit" class="btn-primary" style="width:100%; justify-content:center; margin-top:0.5rem;" id="authSubmitBtn">
          লগইন করুন
        </button>
      </form>
    </div>
  </div>

  <!-- INSTALL 3-STEP MODAL -->
  <div id="installModal" class="modal-overlay" onclick="closeOnOutside(event, 'installModal')">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal('installModal')">×</button>
      <h3 style="font-size:1.3rem; font-weight:800; margin-bottom:1rem; color:var(--accent);">অ্যাপস ইনস্টল করার সহজ নিয়ম</h3>
      
      <div style="font-size:0.85rem; line-height:1.8; color:#E2E8F0; space-y:1rem;">
        <p><strong>১. ডাউনলোড করুন:</strong> "Download APK" বাটনে ট্যাপ করে ফাইলটি নামিয়ে নিন।</p>
        <p><strong>২. অনুমতি দিন:</strong> ফাইলে ট্যাপ করে Settings থেকে "Allow from this source" অন করুন।</p>
        <p><strong>৩. ইনস্টল করুন:</strong> এবার স্ক্রিনে আসা "Install" বাটনে চাপ দিলেই অ্যাপটি চালু হয়ে যাবে।</p>
      </div>

      <button class="btn-primary" style="width:100%; justify-content:center; margin-top:1.5rem;" onclick="triggerDownload()">
        ⬇️ এখনই APK ডাউনলোড করুন
      </button>
    </div>
  </div>

  <script>
    function triggerDownload() {
      const a = document.createElement('a');
      a.href = 'SurakshaVault.apk';
      a.download = 'SurakshaVault.apk';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    function handleInstallBanner() {
      triggerDownload();
      openInstallModal();
    }

    function openAuthModal(mode) {
      document.getElementById('authModal').style.display = 'flex';
      const isSignup = mode === 'signup';
      document.getElementById('authTitle').innerText = isSignup ? 'নতুন অ্যাকাউন্ট তৈরি করুন' : 'লগইন করুন';
      document.getElementById('authSubmitBtn').innerText = isSignup ? 'সাইন-আপ সম্পন্ন করুন' : 'লগইন করুন';
      document.getElementById('signupNameField').style.display = isSignup ? 'block' : 'none';
      document.getElementById('signupConfirmField').style.display = isSignup ? 'block' : 'none';
    }

    function openInstallModal() {
      document.getElementById('installModal').style.display = 'flex';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    function closeOnOutside(e, id) {
      if (e.target.id === id) closeModal(id);
    }

    function handleAuthSubmit(e) {
      e.preventDefault();
      alert('সফলভাবে সম্পন্ন হয়েছে! আপনার ফোনে SurakshaVault.apk ইনস্টল করে প্রবেশ করুন।');
      closeModal('authModal');
    }

    function toggleFaq(el) {
      const answer = el.nextElementSibling;
      const isOpen = answer.style.display === 'block';
      answer.style.display = isOpen ? 'none' : 'block';
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
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#09111D] border-2 border-[#00FF87]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#060A14]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00FF87]/15 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                সিঙ্গেল ফাইল কোড এক্সপোর্ট (Single index.html)
              </h3>
              <p className="text-xs text-slate-400">
                HTML, CSS এবং JS সম্পূর্ণ একটি ফাইলে অন্তর্ভুক্ত · গিটহাব পেজেস বা হোস্টিংয়ে সরাসরি ব্যবহারযোগ্য
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
        <div className="flex-1 p-5 overflow-y-auto bg-[#04070F] font-mono text-xs text-slate-300">
          <pre className="whitespace-pre-wrap leading-relaxed select-all">
            {standaloneHtmlCode}
          </pre>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#060A14] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            সাইজ: ~১৮ KB · কোনো বহিরাগত ফ্রেমওয়ার্ক ডিপেনডেন্সি ছাড়া
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={copyToClipboard}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#00FF87]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'কোড কপি হয়েছে!' : 'কোড কপি করুন'}</span>
            </button>

            <button
              type="button"
              onClick={downloadFile}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-black bg-[#00FF87] hover:bg-[#00E575] shadow-[0_0_20px_rgba(0,255,135,0.35)] transition-all"
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
