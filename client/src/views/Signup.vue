<template>
  <div class="container">
    <h1>Signup</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" required v-model="email">
        </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-control" required v-model="password">
      </div>
      <div class="mb-3">
        <label for="passwordConfirmation" class="form-label">Verify Password</label>
        <input type="password" id="passwordConfirmation" class="form-control" required v-model="passwordConfirmation">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { createUser } from '../api/registrationsService';
import { useAuthStore } from '../stores/authStore';

  const email = ref('');
  const password = ref('');
  const passwordConfirmation = ref('');

  const submitForm = async () => {
    const newUser = {
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value
    };
    
    const user = await createUser(newUser);

    useAuthStore().setUser(user);
  };

  
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
