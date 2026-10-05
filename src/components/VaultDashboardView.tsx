import React, { useState } from 'react';
import { SurakshaLanguage } from '../types/suraksha';
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
  ShieldCheck, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  File, 
  FolderLock,
  X,
  Check,
  Download
} from 'lucide-react';
import { triggerDirectDownload } from '../utils/downloader';

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
}

export const VaultDashboardView: React.FC<VaultDashboardViewProps> = ({
  lang,
  onLock,
  onOpenAppLocker,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video' | 'doc' | 'note'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<VaultItem | null>(null);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  // Initial items exactly as seen in Screenshot_20261005_033619.jpg
  const [items, setItems] = useState<VaultItem[]>([
    {
      id: 'item-1',
      title: 'index.html',
      category: 'note',
      preview: `<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width...">`,
      fullContent: `<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Suraksha Vault</title>\n</head>\n<body>\n  <h1>সুরক্ষা ভল্ট এনক্রিপ্টেড ব্যাকআপ</h1>\n</body>\n</html>`,
      tag: 'নোট',
      size: '21.8 KB',
      isFavorite: false,
    },
    {
      id: 'item-2',
      title: 'জরুরি পাসওয়ার্ড ও গোপন কোড',
      category: 'note',
      preview: `ফেসবুক আইডি: my_personal_account\nব্যাংক অ্যাকাউন্ট: 1234-5678-9012\nগোপন কোড: Vault#9921...`,
      fullContent: `ফেসবুক আইডি: my_personal_account\nপাসওয়ার্ড: SafeP@ssw0rd!2026\nব্যাংক অ্যাকাউন্ট: 1234-5678-9012\nবিকাশ পিন: 4492\nগোপন কোড: Vault#9921-X99`,
      tag: 'নোট',
      size: '293.0 B',
      isFavorite: true,
    },
    {
      id: 'item-3',
      title: 'স্বাগতম পার্সোনাল ভল্ট...',
      category: 'note',
      preview: `এই অ্যাপে আপনার সকল ছবি, ভিডিও, ডকুমেন্ট এবং জরুরি পাসওয়ার্ড বা ব্যক্তিগত নোট আলাদা আলাদা ক্যাটাগরিতে ১০০% নিরাপদে সংরক্ষণ কর...`,
      fullContent: `এই অ্যাপে আপনার সকল ছবি, ভিডিও, ডকুমেন্ট এবং জরুরি পাসওয়ার্ড বা ব্যক্তিগত নোট আলাদা আলাদা ক্যাটাগরিতে ১০০% নিরাপদে সংরক্ষণ করা যাবে। এটি সম্পূর্ণ অফলাইন এবং হার্ডওয়্যার এনক্রিপশনে সুরক্ষিত।`,
      tag: 'নোট',
      size: '583.0 B',
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newItem: VaultItem = {
      id: `item-${Date.now()}`,
      title: newTitle,
      category: 'note',
      preview: newContent.slice(0, 80) + '...',
      fullContent: newContent,
      tag: 'নোট',
      size: `${newContent.length * 2} B`,
      isFavorite: false,
    };

    setItems([newItem, ...items]);
    setNewTitle('');
    setNewContent('');
    setIsAddingNote(false);
  };

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === 'all' ? true : item.category === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative w-full rounded-3xl bg-[#060A13] border-2 border-slate-800 p-4 sm:p-6 text-slate-100 shadow-2xl overflow-hidden">
      
      {/* Top App Header matching screenshot: Avatar + Suraksha Vault + Cloud, Grid, Settings, History, Lock */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          {/* Avatar with double glowing ring */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-b from-[#00FF87] to-cyan-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,255,135,0.35)]">
            <div className="w-full h-full rounded-full bg-[#051410] border border-[#00FF87] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF87]" />
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#00FF87] tracking-tight leading-tight flex items-center gap-1.5">
              <span>Suraksha Vault</span>
            </h3>
            <p className="text-[11px] text-slate-400 font-mono">
              Offline Protected · AES-256
            </p>
          </div>
        </div>

        {/* Action icons row matching screenshot: ☁️ ⊞ ⚙️ 🕒 🔒 */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            type="button" 
            title="Cloud Sync" 
            className="p-1.5 rounded-lg text-[#00FF87] hover:bg-slate-800/80"
          >
            <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button 
            type="button" 
            title="Grid Mode" 
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80"
          >
            <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button 
            type="button" 
            title="Settings" 
            className="p-1.5 rounded-lg text-[#00FF87] hover:bg-slate-800/80"
          >
            <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button 
            type="button" 
            title="Sync History" 
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80"
          >
            <History className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Red Lock Icon */}
          <button
            type="button"
            onClick={onLock}
            title="Lock Vault"
            className="p-1.5 rounded-lg text-rose-500 hover:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition-all flex items-center gap-1 text-xs font-bold"
          >
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">লক</span>
          </button>
        </div>
      </div>

      {/* Banner 1: ক্লাউড সিঙ্ক: mai319349@gmail.com */}
      <div className="rounded-2xl bg-[#09181A] border border-emerald-500/30 p-3 sm:p-3.5 mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-[#00FF87] flex items-center justify-center shrink-0">
            <Cloud className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-white leading-tight">
              ক্লাউড সিঙ্ক: <span className="text-[#00FF87] font-mono">mai319349@gmail.com</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5">
              সর্বশেষ সিঙ্ক: আজ ০৪:৪৬ PM (এনক্রিপ্টেড)
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => alert('সিঙ্ক সফলভাবে সম্পন্ন হয়েছে!')}
          className="px-3 py-1 rounded-lg text-xs font-bold text-[#00FF87] bg-emerald-950/80 border border-[#00FF87]/40 hover:bg-emerald-900 transition-colors"
        >
          সিঙ্ক
        </button>
      </div>

      {/* Banner 2: 📱 মোবাইল অ্যাপস লক (App Locker) */}
      <div className="rounded-2xl bg-[#0A1A28] border border-cyan-500/30 p-3 sm:p-3.5 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-white leading-tight flex items-center gap-1.5">
              <span>📱 মোবাইল অ্যাপস লক (App Locker)</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5">
              ভল্ট পিন দিয়ে মোবাইলের ফেসবুক, হোয়াটসঅ্যাপ ইত্যাদি লক করুন
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenAppLocker}
          className="px-3 py-1 rounded-lg text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 hover:bg-cyan-900 transition-colors whitespace-nowrap"
        >
          লক সেটিংস
        </button>
      </div>

      {/* Search Input: ভল্টে খুঁজুন (নাম বা নোট)... */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ভল্টে খুঁজুন (নাম বা নোট)..."
          className="w-full pl-10 pr-4 py-2.5 bg-[#09111D] border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF87]"
        />
      </div>

      {/* Horizontal Category Filters matching screenshot */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
        
        {/* সকল ফাইল (3) */}
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
            activeFilter === 'all'
              ? 'bg-[#00FF87] text-black shadow-[0_0_12px_rgba(0,255,135,0.4)]'
              : 'bg-[#09111D] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <span>সকল ফাইল ({items.length})</span>
        </button>

        {/* ছবি / ইমেজ (0) */}
        <button
          type="button"
          onClick={() => setActiveFilter('image')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
            activeFilter === 'image'
              ? 'bg-[#00FF87] text-black'
              : 'bg-[#09111D] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span>ছবি / ইমেজ (0)</span>
        </button>

        {/* ভিডিও (0) */}
        <button
          type="button"
          onClick={() => setActiveFilter('video')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
            activeFilter === 'video'
              ? 'bg-[#00FF87] text-black'
              : 'bg-[#09111D] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <Video className="w-3.5 h-3.5 text-blue-400" />
          <span>ভিডিও (0)</span>
        </button>

        {/* ডকুমেন্ট (0) */}
        <button
          type="button"
          onClick={() => setActiveFilter('doc')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
            activeFilter === 'doc'
              ? 'bg-[#00FF87] text-black'
              : 'bg-[#09111D] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <File className="w-3.5 h-3.5 text-indigo-400" />
          <span>ডকুমেন্ট (0)</span>
        </button>

        {/* পার্সোনাল নোট (3) */}
        <button
          type="button"
          onClick={() => setActiveFilter('note')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
            activeFilter === 'note'
              ? 'bg-[#00FF87] text-black'
              : 'bg-[#09111D] text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-[#00FF87]" />
          <span>পার্সোনাল নোট ({items.filter((i) => i.category === 'note').length})</span>
        </button>
      </div>

      {/* Grid of Protected Cards (Matching screenshot exactly) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer rounded-2xl bg-[#091321] border border-slate-800 hover:border-[#00FF87]/50 p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(0,255,135,0.1)]"
          >
            <div>
              {/* Card top row: Heart favorite button */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400">{item.size}</span>
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className="p-1 text-slate-400 hover:text-rose-400"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      item.isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* Code / Content preview box */}
              <div className="p-2.5 rounded-xl bg-[#040810] border border-slate-800 font-mono text-[11px] text-slate-300 leading-relaxed max-h-24 overflow-hidden mb-3 whitespace-pre-wrap select-none opacity-90 group-hover:opacity-100">
                {item.preview}
              </div>
            </div>

            {/* Title & Tag */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00FF87] transition-colors truncate max-w-[170px]">
                  {item.title}
                </h4>
                <span className="text-[10px] text-[#00FF87] font-semibold">{item.tag}</span>
              </div>

              <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200">
                ক্লিক করে দেখুন →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button (FAB) at bottom-right matching screenshot */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800">
        <p className="text-xs text-slate-400">
          মোট সংরক্ষিত আইটেম: <strong className="text-white">{items.length}টি</strong> (AES-256 এনক্রিপ্টেড)
        </p>

        <button
          type="button"
          onClick={() => setIsAddingNote(true)}
          className="w-12 h-12 rounded-2xl bg-[#00FF87] hover:bg-[#00E575] text-black font-bold flex items-center justify-center shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-transform hover:scale-105"
          title="নতুন সুরক্ষিত নোট যুক্ত করুন"
        >
          <Plus className="w-6 h-6 stroke-[3]" />
        </button>
      </div>

      {/* Modal: View Full Note Content */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0A1224] border border-[#00FF87]/40 shadow-2xl p-5 text-slate-200">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#00FF87]" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-[#050810] border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto mb-4">
              {selectedItem.fullContent || selectedItem.preview}
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>সাইজ: {selectedItem.size}</span>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#00FF87]"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Add New Protected Note */}
      {isAddingNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0A1224] border border-[#00FF87]/40 shadow-2xl p-5 text-slate-200">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#00FF87]" />
                <span>নতুন এনক্রিপ্টেড নোট তৈরি করুন</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsAddingNote(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddNote} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  নোটের শিরোনাম (Title)
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="যেমন: ব্যাংক পাসওয়ার্ড বা গোপন কোড"
                  className="w-full px-3 py-2 rounded-xl bg-[#050810] border border-slate-800 text-xs text-white focus:outline-none focus:border-[#00FF87]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  গোপন তথ্য / বিষয়বস্তু
                </label>
                <textarea
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="আপনার ব্যক্তিগত তথ্য এখানে লিখুন..."
                  className="w-full px-3 py-2 rounded-xl bg-[#050810] border border-slate-800 text-xs text-white focus:outline-none focus:border-[#00FF87]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingNote(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#00FF87] hover:bg-[#00E575]"
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
