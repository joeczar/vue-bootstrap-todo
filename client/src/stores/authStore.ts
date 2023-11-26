import { defineStore } from 'pinia';

interface User {
  // Define the properties of the user object
  id: number;
  email: string;
  // Add more properties as needed
}

export const useAuthStore = defineStore('auth', {
  state: (): {
    user: User | null;
    isLoggedIn: boolean;
  } => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    setUser(payload: { user: User }) {
      this.user = payload.user;
      this.isLoggedIn = true;
    },
    clearUser() {
      this.user = null;
      this.isLoggedIn = false;
    },
  },
});
