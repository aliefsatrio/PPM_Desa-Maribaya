import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/common';

type LoginPayload = {
  email: string;
  password: string;
};

type AuthState = {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
};

const mockUser: User = {
  id: 'admin-001',
  name: 'Admin Desa',
  email: 'admin@desa.id',
  role: 'Administrator',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80'
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      login: async ({ email, password }) => {
        await new Promise((resolve) => window.setTimeout(resolve, 500));

        if (!email || !password) {
          throw new Error('Email dan password wajib diisi.');
        }

        set({
          token: 'mock-admin-token-web-profile-desa',
          user: { ...mockUser, email },
          isAuthenticated: true
        });
      },
      logout: () => set({ token: null, user: null, isAuthenticated: false })
    }),
    {
      name: 'auth-storage'
    }
  )
);