import { useAuthStore } from '../stores/authStore';

export function useAuth() {
  const authStore = useAuthStore();

  const login = authStore.login;
  const logout = authStore.logout;

  // Note: isAuthenticated can be a getter in the store
  const isAuthenticated = () => {
    return authStore.isLoggedIn;
  };

  return { login, logout, isAuthenticated };
}
