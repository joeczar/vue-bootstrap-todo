<template>
  <div class="landing-page">
    <h1>Welcome to the Ruby-Vue Playground!</h1>
    <p>Explore the power of Ruby and Vue together.</p>
    <div v-if="!isAuthenticated()" class="buttons">
      <router-link to="/login" class="btn btn-primary">Login</router-link>
      <router-link to="/signup" class="btn btn-secondary">Sign Up</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useAuth } from '../composables/useAuth';


const {isAuthenticated} = useAuth()

defineComponent({
  name: 'Home',
});


</script>

<style scoped>
.landing-page {
  text-align: center;
  margin-top: 100px;
}

.buttons {
  margin-top: 20px;
}

.btn {
  margin-right: 10px;
}
</style>
