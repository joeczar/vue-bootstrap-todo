import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
// add vue router

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
