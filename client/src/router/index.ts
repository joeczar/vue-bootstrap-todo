import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authRoutingGuard } from './authGuard';

export interface AuthGuardArgs {
  hasAuth: boolean;
  redirect: string;
}
// const { isLoggedIn } = useAuthStore();

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
    beforeEnter: (to, from, next) =>
      authRoutingGuard(
        { hasAuth: false, redirect: 'dashboard' },
        to,
        from,
        next
      ),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) =>
      authRoutingGuard(
        { hasAuth: false, redirect: 'dashboard' },
        to,
        from,
        next
      ),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue'),
    beforeEnter: (to, from, next) =>
      authRoutingGuard({ hasAuth: true, redirect: 'login' }, to, from, next),
  },

  {
    path: '/todos',
    name: 'Todos',
    component: () => import('../views/ToDos.vue'),
    beforeEnter: (to, from, next) =>
      authRoutingGuard({ hasAuth: true, redirect: 'login' }, to, from, next),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next) =>
      authRoutingGuard({ hasAuth: true, redirect: 'login' }, to, from, next),
  },
  {
    path: '/apps/todo-lists',
    name: 'apps/todo-lists',
    component: () => import('../views/apps/todo-lists.vue'),
    beforeEnter: (to, from, next) =>
      authRoutingGuard({ hasAuth: true, redirect: 'login' }, to, from, next),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
