<template>
  <div class="dashboard">
    <div class="sidebar">
    <h1>You're Apps</h1>
      <!-- Sidebar content goes here -->
    </div>
    <div class="content">
    <h1>Dashboard</h1>
      <!-- Main content goes here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'Dashboard',
});
</script>

<style scoped>
.dashboard {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  /* Add your sidebar styles here */
}

.content {
  flex: 1;
  /* Add your main content styles here */
}
</style>
