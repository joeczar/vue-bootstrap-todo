import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { UserLogin, loginUser } from '../api/loginService';

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();

  const login = async (userLogin: UserLogin) => {
    try {
      const response = await loginUser(userLogin);
      authStore.setUser({ user: response.user });
      if (authStore.isLoggedIn) {
        router.push({ name: 'Dashboard' });
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authStore.clearUser();
      router.push({ name: 'Login' });
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const isAuthenticated = () => {
    return authStore.isLoggedIn;
  };

  return { login, logout, isAuthenticated };
}
