<script setup lang="ts">
import MainNavBar from './components/MainNavBar.vue';


</script>

<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Vue 3 + Ruby Playground</RouterLink>
  </div>
    
  </nav> -->

  <MainNavBar title="Vue 3 + Ruby Playground" />
  <RouterView />
</template>

<style scoped>

</style>
