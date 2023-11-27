<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAuth } from '../composables/useAuth';
import { UserLogin } from '../api/loginService';

const email = ref('');
const password = ref('');
const {login} = useAuth()

const loginUser = async () => {
  const userLogin: UserLogin = {
    email: email.value,
    password: password.value
  }

  login(userLogin)

};
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
