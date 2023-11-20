import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(createPinia());
app.mount('#app');
