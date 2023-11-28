import { defineStore } from 'pinia';
import {
  UserLogin,
  checkLoggedIn,
  loginUser,
  logout,
} from '../api/loginService';
import router from '../router';

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
    async login(userLogin: UserLogin) {
      try {
        const response = await loginUser(userLogin);
        this.setUser({ user: response.user });
        if (this.isLoggedIn) {
          router.push({ name: 'Dashboard' });
        }
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    async logout() {
      try {
        // Handle the actual logout logic here
        // e.g., API call to end the session if necessary

        this.clearUser();
        await logout();
        router.push({ name: 'Login' });
      } catch (error) {
        console.error('Logout failed:', error);
        throw error;
      }
    },
    async updateUser() {
      const userState = await checkLoggedIn();
      if (userState.logged_in) {
        this.setUser({ user: userState.user });
      } else {
        this.clearUser();
        // Here you could also redirect the user to a login page
      }
    },
  },
});
