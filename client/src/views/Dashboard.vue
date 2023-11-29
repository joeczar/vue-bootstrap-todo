<template>
  <div class="dashboard container-fluid h-100">
    <div class="col flex-nowrap">


      <div class="content">
        <h1>Dashboard</h1>
        <!-- Main content goes here -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '../components/Sidebar.vue';

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
