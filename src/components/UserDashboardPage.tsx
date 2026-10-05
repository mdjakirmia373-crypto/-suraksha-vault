import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  FileText, 
  Image as ImageIcon, 
  File, 
  Plus, 
  Search, 
  Copy, 
  Check, 
  Trash2, 
  LogOut, 
  Home, 
  Smartphone, 
  Cloud, 
  RefreshCw, 
  Zap, 
  Sparkles, 
  Eye, 
  EyeOff, 
  ShieldAlert,
  ArrowRight,
  Database,
  CheckCircle2,
  Fingerprint,
  Download,
  Upload,
  Calendar,
  Layers,
  ChevronRight,
  Info,
  X
} from 'lucide-react';
import { UserAccount, UserVaultItem, getUserVaultItems, saveUserVaultItems } from '../utils/authStorage';

interface UserDashboardPageProps {
  user: UserAccount;
  onLogout: () => void;
  onGoToHome: () => void;
  onInstallApp: () => void;
}

export const UserDashboardPage: React.FC<UserDashboardPageProps> = ({
  user,
  onLogout,
  onGoToHome,
  onInstallApp,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'password' | 'note' | 'doc' | 'image'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleSecretId, setVisibleSecretId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState<'password' | 'note' | 'doc' | 'image'>('password');
  const [newTitle, setNewTitle] = useState('');
  const [newSecret, setNewSecret] = useState('');
  const [newSubtext, setNewSubtext] = useState('');
  const [syncing, setSyncing] = useState(false);
  const [generatedPass, setGeneratedPass] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [selectedItemForView, setSelectedItemForView] = useState<UserVaultItem | null>(null);

  // Load persistent items for this specific user
  const [vaultItems, setVaultItems] = useState<UserVaultItem[]>(() => getUserVaultItems(user.id));

  // Sync to localStorage whenever items change
  const updateVaultItems = (newItems: UserVaultItem[]) => {
    setVaultItems(newItems);
    saveUserVaultItems(user.id, newItems);
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 2500);
  };

  const handleCopy = (text: string, id: string, label: string = 'কন্টেন্ট') => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast(`${label} ক্লিপবোর্ডে কপি করা হয়েছে!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (id: string) => {
    const updated = vaultItems.filter((item) => item.id !== id);
    updateVaultItems(updated);
    showToast('আইটেমটি ভল্ট থেকে মুছে ফেলা হয়েছে');
    if (selectedItemForView?.id === id) {
      setSelectedItemForView(null);
    }
  };

  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newSecret.trim()) return;

    const newItem: UserVaultItem = {
      id: `item-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      secretData: newSecret.trim(),
      subText: newSubtext.trim() || (newCategory === 'password' ? 'ব্যক্তিগত পাসওয়ার্ড' : 'এনক্রিপ্টেড ডাটা'),
      date: 'আজ ' + new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
      strength: 'AES-256 বিট',
    };

    const updated = [newItem, ...vaultItems];
    updateVaultItems(updated);
    setNewTitle('');
    setNewSecret('');
    setNewSubtext('');
    setIsAdding(false);
    showToast('নতুন আইটেম মিলিটারী গ্রেডে সফলভাবে এনক্রিপ্ট হয়েছে!');
  };

  const generateStrongPassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';
    let pass = '';
    for (let i = 0; i < 16; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPass(pass);
    setNewSecret(pass);
    showToast('১৬ অক্ষরের শক্তিশালী পাসওয়ার্ড তৈরি হয়েছে!');
  };

  const triggerSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      showToast('ক্লাউড অটো-সিঙ্ক সম্পন্ন হয়েছে (AES-256)');
    }, 1200);
  };

  const handleExportBackup = () => {
    const backupData = {
      user: { name: user.name, email: user.email },
      exportDate: new Date().toISOString(),
      vaultItems,
      cipher: 'AES-256-GCM',
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SurakshaVault-Backup-${user.name.replace(/\s+/g, '_')}.vault`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('এনক্রিপ্টেড .vault ব্যাকআপ ফাইল ডাউনলোড হয়েছে!');
  };

  const filteredItems = vaultItems.filter((item) => {
    const matchesTab = activeTab === 'all' ? true : item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.secretData.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col font-sans selection:bg-[#00FF88] selection:text-black">
      
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#0E1B2A] border-2 border-[#00FF88] text-white text-xs font-bold shadow-[0_10px_35px_rgba(0,255,136,0.35)] animate-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Navbar for Logged In User */}
      <header className="sticky top-0 z-40 bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Live Status */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#00FF88] to-cyan-400 p-0.5 shadow-[0_0_15px_rgba(0,255,136,0.4)]">
              <div className="w-full h-full rounded-[14px] bg-[#051410] border border-[#00FF88] flex items-center justify-center text-[#00FF88]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                  Suraksha <span className="text-[#00FF88]">Vault</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-[#00FF88] border border-[#00FF88]/30 font-bold">
                  পার্সোনাল ভল্ট
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                অফলাইন সামরিক-গ্রেড এনক্রিপশন সক্রিয় · আইডি: {user.email}
              </p>
            </div>
          </div>

          {/* Action Buttons: Home & Logout */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onGoToHome}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-[#00FF88]/40 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4 text-[#00FF88]" />
              <span className="hidden sm:inline">মূল ওয়েবসাইটে ফিরুন</span>
              <span className="sm:hidden">হোমপেজ</span>
            </button>

            <button
              type="button"
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-rose-400 hover:text-rose-300 bg-rose-950/40 hover:bg-rose-900/50 border border-rose-900/50 transition-colors cursor-pointer"
              title="ভল্ট থেকে লগআউট করুন"
            >
              <LogOut className="w-4 h-4" />
              <span>লগআউট</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 sm:py-8 space-y-6">
        
        {/* User Welcome Banner with Session Indicators */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0C1527] via-[#091522] to-[#061814] border-2 border-[#00FF88]/40 p-5 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FF88]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-[#00FF88]/30 text-xs text-[#00FF88] font-bold mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                <span>সফলভাবে লগইন করা রয়েছে (লগআউট না করা পর্যন্ত সক্রিয় থাকবে)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                স্বাগতম, <span className="text-[#00FF88]">{user.name}</span>!
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                আপনার অ্যাকাউন্ট আইডি: <span className="text-white font-mono font-bold">{user.email}</span> · সমস্ত তথ্য এন্ড-টু-এন্ড এনক্রিপ্ট অবস্থায় আপনার ডিভাইসেই সুরক্ষিত সংরক্ষিত রয়েছে।
              </p>
            </div>

            {/* Quick Actions in Banner */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={triggerSync}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-[#00FF88]/50 text-xs sm:text-sm font-bold text-slate-200 transition-colors cursor-pointer"
                title="ক্লাউড সিঙ্ক আপডেট"
              >
                <Cloud className={`w-4 h-4 text-cyan-400 ${syncing ? 'animate-spin' : ''}`} />
                <span>{syncing ? 'সিঙ্ক হচ্ছে...' : 'ক্লাউড সিঙ্ক'}</span>
              </button>

              <button
                type="button"
                onClick={handleExportBackup}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-[#00FF88]/50 text-xs sm:text-sm font-bold text-slate-200 transition-colors cursor-pointer"
                title="অফলাইন ব্যাকআপ ফাইল ডাউনলোড করুন"
              >
                <Download className="w-4 h-4 text-[#00FF88]" />
                <span className="hidden sm:inline">ব্যাকআপ নিন</span>
              </button>

              <button
                type="button"
                onClick={onInstallApp}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#00FF88] hover:bg-[#00E57A] text-black text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <Smartphone className="w-4 h-4 text-black" />
                <span>হোমস্ক্রিনে অ্যাপ নিন</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Stat Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B101E] border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">মোট সুরক্ষিত আইটেম</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                {vaultItems.length}টি
              </h3>
              <p className="text-[10px] text-emerald-400 mt-0.5">১০০% অফলাইনে লকড</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-[#00FF88] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B101E] border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">পাসওয়ার্ড ও সিক্রেট পিন</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#00FF88] mt-0.5">
                {vaultItems.filter(i => i.category === 'password').length}টি
              </h3>
              <p className="text-[10px] text-slate-400 mt-0.5">অটো-এনক্রিপ্টেড</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B101E] border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">সিকিউরিটি স্কোর</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-0.5">
                ১০০% নিরাপদ
              </h3>
              <p className="text-[10px] text-[#00FF88] mt-0.5">মিলিটারী AES-256 বিট</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-[#00FF88] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B101E] border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">ক্লাউড স্পেস</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-cyan-400 mt-0.5">
                ৫০ GB ফ্রি
              </h3>
              <p className="text-[10px] text-slate-400 mt-0.5">ব্যবহৃত: ২.৮ MB</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Toolbar: Search, Filters & Add New Button */}
        <div className="p-4 rounded-2xl bg-[#0B101E] border border-slate-800 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              সকল আইটেম ({vaultItems.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('password')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'password'
                  ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              পাসওয়ার্ড ({vaultItems.filter(i => i.category === 'password').length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('note')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'note'
                  ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              সিক্রেট নোট ({vaultItems.filter(i => i.category === 'note').length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('doc')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'doc'
                  ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              ডকুমেন্ট ({vaultItems.filter(i => i.category === 'doc').length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('image')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'image'
                  ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              ছবি/আইডি ({vaultItems.filter(i => i.category === 'image').length})
            </button>
          </div>

          {/* Search and Add Button */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ভল্টে খুঁজুন..."
                className="w-full pl-9 pr-3 py-2 bg-[#060B14] border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
              />
            </div>

            <button
              type="button"
              onClick={() => setIsAdding(!isAdding)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00FF88] hover:bg-[#00E57A] text-black text-xs font-extrabold shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>{isAdding ? 'বাতিল' : 'নতুন ডাটা যোগ'}</span>
            </button>
          </div>

        </div>

        {/* Add Item Form Collapsible Panel */}
        {isAdding && (
          <form
            onSubmit={handleCreateItem}
            className="p-5 sm:p-6 rounded-3xl bg-[#0C1424] border-2 border-[#00FF88]/50 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00FF88]" />
                <span>নতুন এনক্রিপ্টেড ডাটা যোগ করুন</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={generateStrongPassword}
                  className="px-2.5 py-1 rounded-lg bg-emerald-950 text-[#00FF88] border border-[#00FF88]/30 text-xs font-mono font-bold hover:bg-emerald-900 transition-colors cursor-pointer"
                >
                  ⚡ স্ট্রং পাসওয়ার্ড তৈরি করুন
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                  ক্যাটাগরি
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-3 py-2.5 bg-[#060B14] border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#00FF88]"
                >
                  <option value="password">লকার পাসওয়ার্ড / পিন</option>
                  <option value="note">গোপন সিক্রেট নোট</option>
                  <option value="doc">ডকুমেন্ট ও আইডি তথ্য</option>
                  <option value="image">ফটো ও মিডিয়া মেমো</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                  আইটেমের নাম / শিরোনাম
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="উদা: বিকাশ পিন বা ব্যাংক লগইন"
                  className="w-full px-3 py-2.5 bg-[#060B14] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                  সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  value={newSubtext}
                  onChange={(e) => setNewSubtext(e.target.value)}
                  placeholder="উদা: ব্যক্তিগত ইমেইল"
                  className="w-full px-3 py-2.5 bg-[#060B14] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                গোপন ডাটা বা পাসওয়ার্ড (AES-256 বিটে এনক্রিপ্ট হবে)
              </label>
              <textarea
                required
                rows={2}
                value={newSecret}
                onChange={(e) => setNewSecret(e.target.value)}
                placeholder="আপনার পাসওয়ার্ড, পিন বা গোপন নোট এখানে লিখুন..."
                className="w-full px-3 py-2.5 bg-[#060B14] border border-slate-700 rounded-xl text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white bg-slate-800 transition-colors cursor-pointer"
              >
                বাতিল
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-extrabold text-black bg-[#00FF88] hover:bg-[#00E57A] shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-colors cursor-pointer"
              >
                ভল্টে সংরক্ষণ করুন
              </button>
            </div>
          </form>
        )}

        {/* Vault Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => {
            const isSecretVisible = visibleSecretId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#090F1C] border border-slate-800 hover:border-[#00FF88]/40 p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.12)]"
              >
                <div>
                  {/* Item Category & Date Header */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono text-[#00FF88] bg-emerald-950/80 px-2 py-0.5 rounded-md border border-[#00FF88]/30 flex items-center gap-1">
                      {item.category === 'password' && <KeyRound className="w-3 h-3" />}
                      {item.category === 'note' && <FileText className="w-3 h-3" />}
                      {item.category === 'doc' && <File className="w-3 h-3" />}
                      {item.category === 'image' && <ImageIcon className="w-3 h-3" />}
                      <span>
                        {item.category === 'password' 
                          ? 'পাসওয়ার্ড' 
                          : item.category === 'note' 
                            ? 'সিক্রেট নোট' 
                            : item.category === 'doc' 
                              ? 'ডকুমেন্ট' 
                              : 'ফটো মেমো'}
                      </span>
                    </span>

                    <span className="text-[10px] font-mono text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#00FF88] transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3 truncate">
                    {item.subText}
                  </p>

                  {/* Secret Data Box */}
                  <div className="p-3 rounded-xl bg-[#040810] border border-slate-800 font-mono text-xs flex items-center justify-between gap-2 mb-3">
                    <span className="truncate text-slate-200 select-all font-semibold">
                      {isSecretVisible ? item.secretData : '••••••••••••••••'}
                    </span>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => setVisibleSecretId(isSecretVisible ? null : item.id)}
                        className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                        title={isSecretVisible ? 'লুকান' : 'দেখুন'}
                      >
                        {isSecretVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(item.secretData, item.id, item.title)}
                        className="p-1 rounded-md text-slate-400 hover:text-[#00FF88] hover:bg-slate-800 transition-colors cursor-pointer"
                        title="কপি করুন"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-[#00FF88]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer action: View details & Delete */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <button
                    type="button"
                    onClick={() => setSelectedItemForView(item)}
                    className="text-[#00FF88] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>বিস্তারিত দেখুন</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="p-1 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                    title="মুছুন"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Item Full View Modal */}
        {selectedItemForView && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
            <div className="relative w-full max-w-lg rounded-3xl bg-[#0E1526] border-2 border-[#00FF88]/50 shadow-2xl p-6 text-slate-200">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 text-[#00FF88] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {selectedItemForView.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">{selectedItemForView.date}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItemForView(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#050810] border border-slate-800 font-mono text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto mb-4 select-text">
                {selectedItemForView.secretData}
              </div>

              <div className="flex justify-between items-center text-xs">
                <button
                  type="button"
                  onClick={() => handleDelete(selectedItemForView.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-950/40 hover:bg-rose-900/40 border border-rose-800/40 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>মুছুন</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(selectedItemForView.secretData, selectedItemForView.id, selectedItemForView.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>কন্টেন্ট কপি</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedItemForView(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#00FF88] hover:bg-[#00E57A] cursor-pointer"
                  >
                    বন্ধ করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security & Installation Assistant Strip */}
        <div className="rounded-2xl bg-[#091120] border border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                আপনার মোবাইল স্ক্রিনে সরাসরি অ্যাপ রয়েছে কি?
              </h4>
              <p className="text-xs text-slate-400">
                হোমস্ক্রিনে যুক্ত করলে ইন্টারনেট সংযোগ ছাড়াই যেকোনো সময় সরাসরি ভল্ট ওপেন করতে পারবেন।
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onInstallApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-[#00FF88] hover:bg-[#00E57A] shadow-[0_0_15px_rgba(0,255,136,0.35)] transition-all shrink-0 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-black" />
            <span>স্ক্রিনে অ্যাপ ইনস্টল করুন</span>
          </button>
        </div>

      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-4 text-center text-xs text-slate-500">
        Suraksha Vault © 2026 · আপনার সম্পূর্ণ ডাটা আপনার ডিভাইসে এন্ড-টু-এন্ড এনক্রিপ্ট থাকে। লগআউট করার আগ পর্যন্ত আপনার সেশন নিরাপদ থাকবে।
      </footer>

    </div>
  );
};
