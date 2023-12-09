import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router';
import { useAuthStore } from './stores/authStore';
import { apiClient } from './api/apiClient';
// add vue router

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
const authStore = useAuthStore();

apiClient.get('/logged_in').then((response) => {
  console.log('logged_in:', response.data.logged_in);
  if (response.data.logged_in) {
    authStore.setUser({ user: response.data.user });
  } else {
    authStore.clearUser();
  }

  app.use(router);
  app.mount('#app');
});
