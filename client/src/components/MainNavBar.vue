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
          <li class="nav-item" v-for="link in navLinks">
            <RouterLink class="nav-link" :to="link.route">{{ link.title }}</RouterLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {  ref } from 'vue';

export interface NavLink {
  title: string;
  route: string;
}

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
