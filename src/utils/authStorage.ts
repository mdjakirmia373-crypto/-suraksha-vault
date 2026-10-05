export interface UserAccount {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface UserVaultItem {
  id: string;
  title: string;
  category: 'password' | 'note' | 'doc' | 'image';
  secretData: string;
  subText: string;
  date: string;
  strength?: string;
}

const USERS_STORAGE_KEY = 'suraksha_registered_users_v2';
const ACTIVE_SESSION_KEY = 'suraksha_active_session_v2';
const VAULT_ITEMS_PREFIX = 'suraksha_vault_items_';

// Seed initial default accounts if none exist
const DEFAULT_USERS: UserAccount[] = [
  {
    id: 'user-default-1',
    name: 'জাকির আহমেদ',
    email: 'jakirmim9012@gmail.com',
    password: '123456',
    createdAt: '2026-10-01',
  },
  {
    id: 'user-default-2',
    name: 'প্রো ভল্ট মেম্বার',
    email: 'demo@suraksha.com',
    password: 'password123',
    createdAt: '2026-10-02',
  },
];

export function getRegisteredUsers(): UserAccount[] {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_USERS;
  } catch (err) {
    return DEFAULT_USERS;
  }
}

export function registerUser(name: string, email: string, password: string): { success: boolean; user?: UserAccount; error?: string } {
  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = password.trim();

  if (!cleanName) {
    return { success: false, error: 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।' };
  }
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'সঠিক জিমেইল বা ইমেইল ঠিকানা দিন।' };
  }
  if (!cleanPass || cleanPass.length < 4) {
    return { success: false, error: 'পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে।' };
  }

  const users = getRegisteredUsers();
  const exists = users.find((u) => u.email.toLowerCase() === cleanEmail);

  if (exists) {
    return { 
      success: false, 
      error: 'এই জিমেইল আইডি দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট তৈরি করা হয়েছে! অনুগ্রহ করে লগইন করুন।' 
    };
  }

  const newUser: UserAccount = {
    id: `user-${Date.now()}`,
    name: cleanName,
    email: cleanEmail,
    password: cleanPass,
    createdAt: new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'short', day: 'numeric' }),
  };

  const updated = [newUser, ...users];
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save user:', err);
  }

  // Also set as active session
  setActiveSession(newUser);

  return { success: true, user: newUser };
}

export function loginUser(email: string, password: string): { success: boolean; user?: UserAccount; error?: string } {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = password.trim();

  if (!cleanEmail) {
    return { success: false, error: 'অনুগ্রহ করে আপনার জিমেইল আইডি লিখুন।' };
  }
  if (!cleanPass) {
    return { success: false, error: 'অনুগ্রহ করে আপনার পাসওয়ার্ড লিখুন।' };
  }

  const users = getRegisteredUsers();
  const user = users.find((u) => u.email.toLowerCase() === cleanEmail);

  if (!user) {
    return { 
      success: false, 
      error: 'এই জিমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি! অনুগ্রহ করে প্রথমে "সাইন-আপ" করুন।' 
    };
  }

  if (user.password !== cleanPass) {
    return { 
      success: false, 
      error: 'ভুল পাসওয়ার্ড! অনুগ্রহ করে সঠিক পাসওয়ার্ড দিয়ে চেষ্টা করুন।' 
    };
  }

  // Matching credentials found
  setActiveSession(user);
  return { success: true, user };
}

export function getActiveSession(): UserAccount | null {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    return null;
  }
}

export function setActiveSession(user: UserAccount): void {
  try {
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(user));
  } catch (err) {
    console.error('Failed to set active session:', err);
  }
}

export function clearActiveSession(): void {
  try {
    localStorage.removeItem(ACTIVE_SESSION_KEY);
  } catch (err) {
    console.error('Failed to clear active session:', err);
  }
}

export function getUserVaultItems(userId: string): UserVaultItem[] {
  const key = `${VAULT_ITEMS_PREFIX}${userId}`;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      const defaultItems: UserVaultItem[] = [
        {
          id: 'item-1',
          title: 'বিকাশ ও নগদ সিক্রেট পিন',
          category: 'password',
          secretData: '৮৩৯১',
          subText: 'পার্সোনাল মোবাইল ব্যাংকিং পিন',
          date: 'আজ ০৪:৩০ PM',
          strength: 'মিলিটারি AES-256',
        },
        {
          id: 'item-2',
          title: 'ফেসবুক ও গুগল প্রাইমারি পাসওয়ার্ড',
          category: 'password',
          secretData: 'Suraksha#Vault2026@Sec!',
          subText: 'মাস্টার অ্যাকাউন্ট সিকিউরিটি কি',
          date: 'আজ ০২:১৫ PM',
          strength: 'আল্ট্রা স্ট্রং',
        },
        {
          id: 'item-3',
          title: 'জরুরি ব্যাংক অ্যাকাউন্ট ও সিভিসি কোড',
          category: 'doc',
          secretData: 'AC: 2050-3849-1092-4421 (IBBL) | CVC: 782',
          subText: 'ব্যাংক তথ্য ও কার্ড নম্বর',
          date: 'গতকাল',
          strength: 'এনক্রিপ্টেড',
        },
        {
          id: 'item-4',
          title: 'ব্যক্তিগত ডায়েরি নোট',
          category: 'note',
          secretData: 'পারিবারিক জমির দলিল ও পাসপোর্ট ফটোকপি ভল্টে আপলোড করে অফলাইন স্টোরেজে নিরাপদে ব্যাকআপ নেওয়া হয়েছে।',
          subText: 'ব্যক্তিগত সিক্রেট নোট',
          date: '৩ অক্টোবর',
          strength: 'লকড',
        },
      ];
      localStorage.setItem(key, JSON.stringify(defaultItems));
      return defaultItems;
    }
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

export function saveUserVaultItems(userId: string, items: UserVaultItem[]): void {
  const key = `${VAULT_ITEMS_PREFIX}${userId}`;
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to save vault items:', err);
  }
}
