<template>
  <div class="container">
    <h1>Logout Page</h1>
    <button @click="logout" class="btn btn-primary">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth';

const { logout } = useAuth();
</script>

<style scoped>
/* Add your custom styles here */
</style>
