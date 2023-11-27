<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">{{title}}</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" >
        <template  v-for="link in navLinks">
          <li class="nav-item" v-if="hideLink(link)">
            <RouterLink class="nav-link" :to="link.route">{{ link.title }}</RouterLink>
          </li>
        </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {  ref } from 'vue';
import { useAuth } from '../composables/useAuth';

export interface NavLink {
  title: string;
  route: string;
  hide?: 'login' | 'logout';
}

const { isAuthenticated } = useAuth()

defineProps({
  title: {
    type: String,
    required: true
  },
  navLinks: {
    type: Array as () => NavLink[],
    required: true
  }
});

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  console.log('toggleNavbar');
  isNavbarOpen.value = !isNavbarOpen.value;
};

const hideLink = (link: NavLink) => {
  if (link.hide === 'login') {
    return !isAuthenticated();
  } else if (link.hide === 'logout') {
    return isAuthenticated();
  } else {
    return false;
  }
};

// defineComponent({
//   name: 'MainNavBar',
//   setup() {
//     return {
//       isNavbarOpen,
//       toggleNavbar
//     };
//   }
// });
</script>

<style scoped>
/* Add your custom styles here */
</style>
