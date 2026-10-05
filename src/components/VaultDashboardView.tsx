import React, { useState } from 'react';
import { 
  Cloud, 
  RefreshCw, 
  Smartphone, 
  Search, 
  Heart, 
  Plus, 
  Lock, 
  Settings, 
  History, 
  Grid, 
  List, 
  ShieldCheck, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  File, 
  FolderLock,
  X,
  Check,
  Eye,
  Trash2,
  Copy,
  Sparkles,
  KeyRound,
  ExternalLink
} from 'lucide-react';
import { SurakshaLanguage } from '../types/suraksha';

interface VaultDashboardViewProps {
  lang: SurakshaLanguage;
  onLock: () => void;
  onOpenAppLocker?: () => void;
}

interface VaultItem {
  id: string;
  title: string;
  category: 'all' | 'image' | 'video' | 'doc' | 'note';
  preview: string;
  fullContent?: string;
  tag: string;
  size: string;
  isFavorite: boolean;
  date: string;
}

export const VaultDashboardView: React.FC<VaultDashboardViewProps> = ({
  lang,
  onLock,
  onOpenAppLocker,
}) => {
  const [isVaultLocked, setIsVaultLocked] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video' | 'doc' | 'note'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<VaultItem | null>(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [addItemCategory, setAddItemCategory] = useState<'note' | 'doc' | 'image'>('note');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing'>('synced');

  // Initial items matching the user's authentic screenshots
  const [items, setItems] = useState<VaultItem[]>([
    {
      id: 'item-1',
      title: 'index.html',
      category: 'doc',
      preview: `<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <title>Suraksha Vault</title>\n</head>`,
      fullContent: `<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Suraksha Vault - Offline Backup</title>\n</head>\n<body>\n  <h1>সুরক্ষা ভল্ট এনক্রিপ্টেড কোড ব্যাকআপ</h1>\n</body>\n</html>`,
      tag: 'ডকুমেন্ট',
      size: '২১.৮ KB',
      isFavorite: false,
      date: 'আজ ০৪:৪৫ PM',
    },
    {
      id: 'item-2',
      title: 'জরুরি পাসওয়ার্ড ও গোপন কোড',
      category: 'note',
      preview: `ফেসবুক আইডি: my_personal_id\nব্যাংক অ্যাকাউন্ট: ১২৩৪-৫৬৭৮-৯০১২\nবিকাশ সিক্রেট পিন: ****`,
      fullContent: `ফেসবুক আইডি: my_personal_id\nমাস্টার পাসওয়ার্ড: SafeVault#2026!\nব্যাংক অ্যাকাউন্ট: ১২৩৪-৫৬৭৮-৯০১২\nবিকাশ সিক্রেট পিন: ৪৪৯২\nএটিএম কার্ড পিন: ৭৭১৮`,
      tag: 'পাসওয়ার্ড',
      size: '২৯৩.০ B',
      isFavorite: true,
      date: 'আজ ০৩:২০ PM',
    },
    {
      id: 'item-3',
      title: 'ব্যক্তিগত ডায়েরি ও সিক্রেট মেমো',
      category: 'note',
      preview: `এই ভল্টে ব্যক্তিগত সকল পারিবারিক ছবি, ভিডিও ক্লিপ এবং গোপন ডকুমেন্টস ১০০% নিরাপদে সংরক্ষণ করা হয়েছে...`,
      fullContent: `এই ভল্টে ব্যক্তিগত সকল পারিবারিক ছবি, ভিডিও ক্লিপ এবং গোপন ডকুমেন্টস ১০০% নিরাপদে সংরক্ষণ করা হয়েছে। এটি সম্পূর্ণ অফলাইন এবং হার্ডওয়্যার AES-256 বিট এনক্রিপশনে সুরক্ষিত। আপনার অনুমতি ছাড়া কেউ এটি দেখতে পারবে না।`,
      tag: 'নোট',
      size: '৫৮৩.০ B',
      isFavorite: false,
      date: 'গতকাল',
    },
  ]);

  const handleKeyPress = (num: string) => {
    if (enteredPin.length < 4) {
      const nextPin = enteredPin + num;
      setEnteredPin(nextPin);
      if (nextPin.length === 4) {
        setTimeout(() => {
          setIsVaultLocked(false);
          setEnteredPin('');
        }, 300);
      }
    }
  };

  const handleDeletePin = () => {
    setEnteredPin((prev) => prev.slice(0, -1));
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (selectedItem?.id === id) setSelectedItem(null);
  };

  const handleCopyContent = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newItem: VaultItem = {
      id: `item-${Date.now()}`,
      title: newTitle,
      category: addItemCategory === 'image' ? 'image' : addItemCategory === 'doc' ? 'doc' : 'note',
      preview: newContent.slice(0, 80) + '...',
      fullContent: newContent,
      tag: addItemCategory === 'image' ? 'ছবি' : addItemCategory === 'doc' ? 'ডকুমেন্ট' : 'নোট',
      size: `${newContent.length * 2} B`,
      isFavorite: false,
      date: 'এইমাত্র',
    };

    setItems([newItem, ...items]);
    setNewTitle('');
    setNewContent('');
    setIsAddingItem(false);
  };

  const triggerCloudSync = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('synced');
    }, 1500);
  };

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === 'all' ? true : item.category === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // 1. PIN Lock Screen View
  if (isVaultLocked) {
    return (
      <div className="relative w-full rounded-3xl bg-[#090E1A] border-2 border-[#00FF88] p-8 text-center text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden max-w-sm mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-[#00FF88]/20 border-2 border-[#00FF88] flex items-center justify-center text-[#00FF88] mx-auto mb-4 shadow-[0_0_25px_rgba(0,255,136,0.4)]">
          <Lock className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-extrabold text-white mb-1">সুরক্ষা ভল্ট লকড</h3>
        <p className="text-xs text-slate-400 mb-6">ভল্ট আনলক করতে ৪-সংখ্যার পিন চাপুন</p>
        
        {/* PIN Indicators */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                enteredPin.length > i
                  ? 'bg-[#00FF88] border-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.8)] scale-110'
                  : 'bg-transparent border-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Numeric Keypad */}
        <div className="grid grid-cols-3 gap-3 max-w-[240px] mx-auto mb-6">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <button
              key={digit}
              type="button"
              onClick={() => handleKeyPress(digit)}
              className="h-12 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-[#00FF88]/50 text-lg font-bold text-white transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              {digit}
            </button>
          ))}
          <div />
          <button
            type="button"
            onClick={() => handleKeyPress('0')}
            className="h-12 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-[#00FF88]/50 text-lg font-bold text-white transition-all active:scale-95 cursor-pointer shadow-sm"
          >
            0
          </button>
          <button
            type="button"
            onClick={handleDeletePin}
            className="h-12 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-sm font-semibold text-slate-400 hover:text-white transition-all active:scale-95 cursor-pointer flex items-center justify-center"
          >
            ⌫
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsVaultLocked(false);
            setEnteredPin('');
          }}
          className="text-xs text-[#00FF88] hover:underline cursor-pointer font-semibold"
        >
          সরাসরি ডেমো আনলক করুন →
        </button>
      </div>
    );
  }

  // 2. Main Unlocked Vault Dashboard View
  return (
    <div className="relative w-full rounded-3xl bg-[#090F1C] border-2 border-slate-800/90 p-4 sm:p-7 text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
      
      {/* Top App Header with Profile & Security Controls */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
        
        {/* Left: Avatar with glowing shield & verified status */}
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl p-0.5 bg-gradient-to-b from-[#00FF88] to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.35)]">
              <div className="w-full h-full rounded-[14px] bg-[#051410] border border-[#00FF88] flex items-center justify-center text-[#00FF88]">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#00FF88] border-2 border-[#090F1C]" />
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>Suraksha Vault</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-[#00FF88] border border-[#00FF88]/30">
                PRO
              </span>
            </h3>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
              <span>AES-256 বিট এনক্রিপ্টেড · অফলাইন মোড</span>
            </p>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button 
            type="button" 
            onClick={triggerCloudSync}
            title="ক্লাউড সিঙ্ক" 
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[#00FF88] hover:bg-slate-800 hover:border-[#00FF88]/40 transition-colors cursor-pointer"
          >
            <Cloud className={`w-4 h-4 ${syncStatus === 'syncing' ? 'animate-spin text-cyan-400' : ''}`} />
          </button>

          <button 
            type="button" 
            onClick={() => alert('ভল্ট সেটিংস: অটো-লক টাইম ৫ মিনিট, বায়োমেট্রিক আনলক সক্রিয়।')}
            title="ভল্ট সেটিংস" 
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Red Instant Lock Button */}
          <button
            type="button"
            onClick={() => setIsVaultLocked(true)}
            title="ভল্ট লক করুন"
            className="px-3 py-2 rounded-xl text-rose-400 hover:text-rose-300 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-800/40 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-rose-400" />
            <span>লক</span>
          </button>
        </div>
      </div>

      {/* Two Prominent Status Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        
        {/* Banner 1: Cloud Sync Status */}
        <div className="rounded-2xl bg-gradient-to-r from-[#091B1A] to-[#0A1822] border border-emerald-500/30 p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-[#00FF88] flex items-center justify-center shrink-0 shadow-sm">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                ক্লাউড আইডি: <span className="text-[#00FF88] font-mono">vault.secure.sync@suraksha.com</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {syncStatus === 'syncing' ? 'সিঙ্ক হচ্ছে...' : 'সর্বশেষ সিঙ্ক: আজ ০৪:৪৬ PM (এনক্রিপ্টেড)'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={triggerCloudSync}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#00FF88] bg-emerald-950/90 border border-[#00FF88]/40 hover:bg-emerald-900 transition-colors cursor-pointer"
          >
            {syncStatus === 'syncing' ? 'সিঙ্ক হচ্ছে...' : 'সিঙ্ক'}
          </button>
        </div>

        {/* Banner 2: App Locker Widget */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0A1A28] to-[#0C1525] border border-cyan-500/30 p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-sm">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                মোবাইল অ্যাপস লক (App Locker)
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                হোয়াটসঅ্যাপ, ফেসবুক ও বিকাশ লকড রয়েছে
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenAppLocker}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/90 border border-cyan-500/40 hover:bg-cyan-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            লক সেটিংস
          </button>
        </div>

      </div>

      {/* Metric Stats Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">মোট ফাইল</span>
          <span className="text-base font-bold text-white">{items.length}টি আইটেম</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">পাসওয়ার্ড ও নোট</span>
          <span className="text-base font-bold text-[#00FF88]">{items.filter(i => i.category === 'note').length}টি সংরক্ষিত</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">এনক্রিপশন সাইফার</span>
          <span className="text-base font-bold text-white">AES-256 বিট</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">ভল্ট স্টোরেজ</span>
          <span className="text-base font-bold text-cyan-400 font-mono">২২.৭ KB</span>
        </div>
      </div>

      {/* Search Bar & Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ভল্টে সংরক্ষিত ফাইল বা নোট খুঁজুন..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#060B14] border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] transition-colors"
          />
        </div>

        {/* Add Note / File Button */}
        <button
          type="button"
          onClick={() => setIsAddingItem(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#00FF88] hover:bg-[#00E57A] text-black text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(0,255,136,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>নতুন আইটেম যোগ করুন</span>
        </button>
      </div>

      {/* Filter Tabs matching mobile screen */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 scrollbar-none">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
              : 'bg-[#060B14] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <span>সকল ফাইল ({items.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter('note')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeFilter === 'note'
              ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
              : 'bg-[#060B14] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>নোট ও পাসওয়ার্ড ({items.filter((i) => i.category === 'note').length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter('doc')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeFilter === 'doc'
              ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
              : 'bg-[#060B14] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <File className="w-3.5 h-3.5 text-cyan-400" />
          <span>ডকুমেন্ট ({items.filter((i) => i.category === 'doc').length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter('image')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeFilter === 'image'
              ? 'bg-[#00FF88] text-black shadow-[0_0_12px_rgba(0,255,136,0.35)]'
              : 'bg-[#060B14] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span>ছবি ও ফটো ({items.filter((i) => i.category === 'image').length})</span>
        </button>
      </div>

      {/* Grid of Protected Vault Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer rounded-2xl bg-[#060B14] border border-slate-800 hover:border-[#00FF88]/50 p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.12)]"
          >
            <div>
              {/* Card top row */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-[#00FF88] bg-emerald-950/80 px-2 py-0.5 rounded-md border border-[#00FF88]/30">
                  {item.tag}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">{item.size}</span>
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(item.id, e)}
                    className="p-1 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        item.isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Code / Content preview box */}
              <div className="p-3 rounded-xl bg-[#03060C] border border-slate-800/80 font-mono text-[11px] text-slate-300 leading-relaxed max-h-24 overflow-hidden mb-3 whitespace-pre-wrap select-none group-hover:text-slate-200 transition-colors">
                {item.preview}
              </div>
            </div>

            {/* Title & Tag */}
            <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00FF88] transition-colors truncate max-w-[170px]">
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-500 font-mono">{item.date}</span>
              </div>

              <span className="text-[11px] font-bold text-[#00FF88] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>দেখুন</span>
                <span>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar: Total count */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
        <p>
          মোট সংরক্ষিত আইটেম: <strong className="text-white">{items.length}টি</strong> (AES-256 এনক্রিপ্টেড)
        </p>
        <span className="text-[11px] text-[#00FF88] font-mono">১০০% অফলাইনে সুরক্ষিত</span>
      </div>

      {/* Modal: View Full Note Content */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0E1526] border-2 border-[#00FF88]/50 shadow-2xl p-6 text-slate-200">
            
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-950 text-[#00FF88] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {selectedItem.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">{selectedItem.size} · {selectedItem.date}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Decrypted content */}
            <div className="p-4 rounded-2xl bg-[#050810] border border-slate-800 font-mono text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto mb-4 select-text">
              {selectedItem.fullContent || selectedItem.preview}
            </div>

            <div className="flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={() => handleDeleteItem(selectedItem.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-950/40 hover:bg-rose-900/40 border border-rose-800/40 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>মুছুন</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyContent(selectedItem.fullContent || selectedItem.preview, selectedItem.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {copiedId === selectedItem.id ? <Check className="w-3.5 h-3.5 text-[#00FF88]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === selectedItem.id ? 'কপি হয়েছে' : 'কন্টেন্ট কপি'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#00FF88] hover:bg-[#00E57A] cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Modal: Add New Protected Item */}
      {isAddingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0E1526] border-2 border-[#00FF88]/50 shadow-2xl p-6 text-slate-200">
            
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#00FF88]" />
                <span>নতুন এনক্রিপ্টেড আইটেম তৈরি করুন</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsAddingItem(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category selector */}
            <div className="flex gap-2 mb-4 bg-[#050810] p-1.5 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => setAddItemCategory('note')}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  addItemCategory === 'note' ? 'bg-[#00FF88] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                📝 সিক্রেট নোট
              </button>
              <button
                type="button"
                onClick={() => setAddItemCategory('doc')}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  addItemCategory === 'doc' ? 'bg-[#00FF88] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                📄 ডকুমেন্ট
              </button>
              <button
                type="button"
                onClick={() => setAddItemCategory('image')}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  addItemCategory === 'image' ? 'bg-[#00FF88] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                🖼️ ছবি মেমো
              </button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  আইটেমের শিরোনাম (Title)
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="যেমন: ব্যাংক পাসওয়ার্ড বা গোপন কোড"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050810] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00FF88]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  গোপন তথ্য / টেক্সট
                </label>
                <textarea
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="আপনার ব্যক্তিগত তথ্য এখানে লিখুন (এটি সাথে সাথে AES-256 এনক্রিপ্ট হবে)..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050810] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00FF88]"
                />
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingItem(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-black bg-[#00FF88] hover:bg-[#00E57A] shadow-[0_0_15px_rgba(0,255,136,0.35)] cursor-pointer"
                >
                  ভল্টে সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
