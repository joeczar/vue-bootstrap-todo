<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Vue 3 + Ruby Playground</RouterLink>
  </div>
    
  </nav> -->

  <MainNavBar title="Vue 3 + Ruby Playground" :navLinks="navLinks" />
  <RouterView />
</template>
<script setup lang="ts">
import MainNavBar, { NavLink } from './components/MainNavBar.vue';


const navLinks: NavLink[] = [
  { title: 'Home', route: '/' },
  { title: 'Dashboard', route: '/dashboard', hide: 'logout' },
  { title: 'Login', route: '/login', hide: 'login' },
  { title: 'Signup', route: '/signup', hide: 'login' },
  { title: 'Logout', route: '/logout', hide: 'logout' },
];



</script>

<style scoped></style>
