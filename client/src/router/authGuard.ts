/**
 * The `authRoutingGuard` function is a flexible navigation guard for Vue Router.
 * It is used to control access to routes based on the user's authentication status.
 *
 * @param {AuthGuardArgs} options - An object containing configuration for the guard.
 * @param {boolean} options.hasAuth - Indicates whether the route should be accessible
 *                                    for authenticated users (true) or unauthenticated users (false).
 * @param {string} options.redirect - The name of the route to redirect to if the
 *                                    user's authentication status does not match `hasAuth`.
 * @param {RouteLocationNormalized} to - The target Route Object being navigated to.
 * @param {RouteLocationNormalized} from - The current route being navigated away from.
 * @param {NavigationGuardNext} next - A function that must be called to resolve the hook.
 *                                      The action depends on the arguments provided to `next`:
 *                                      - `next()`: confirm navigation,
 *                                      - `next(false)`: cancel navigation,
 *                                      - `next('/path' | { name: 'route-name' })`: redirect to a different route,
 *                                      - `next(error)`: pass an Error to reject navigation and trigger the router's errorHandler.
 *
 * Usage:
 * In your Vue Router configuration, use this function in the `beforeEnter` property of a route.
 * For routes that require authentication, set `hasAuth` to true and provide a `redirect` route for unauthenticated access.
 * For routes that should be inaccessible when authenticated (like login or signup pages), set `hasAuth` to false and provide a `redirect` route for authenticated access.
 *
 * Example:
 * {
 *   path: '/dashboard',
 *   beforeEnter: (to, from, next) => authRoutingGuard({ hasAuth: true, redirect: 'login' }, to, from, next)
 * },
 * {
 *   path: '/login',
 *   beforeEnter: (to, from, next) => authRoutingGuard({ hasAuth: false, redirect: 'dashboard' }, to, from, next)
 * }
 */

import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { AuthGuardArgs } from '.';
import { useAuthStore } from '../stores/authStore';

export function authRoutingGuard(
  { hasAuth, redirect }: AuthGuardArgs,
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const { isLoggedIn } = useAuthStore();
  if (isLoggedIn && !hasAuth) {
    console.log('authRoutingGuard: next()', { to, from, isLoggedIn, hasAuth });
    next({ name: redirect }); // The user must be logged in to access this route but isn't.
  } else if (!isLoggedIn && hasAuth) {
    console.log('authRoutingGuard: next()', { to, from, isLoggedIn, hasAuth });
    next({ name: redirect }); // The route should only be accessible when the user isn't logged in, but they are.
  } else {
    console.log('authRoutingGuard: next()', { to, from, isLoggedIn, hasAuth });
    next(); // The user's state is appropriate for accessing this route.
  }
}
