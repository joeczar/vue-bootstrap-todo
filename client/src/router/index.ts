import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import { Home } from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue'),
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('../views/ToDos.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
