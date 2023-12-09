<template>
  <div class="dashboard">
    <div class="col flex-nowrap">
      <header class="d-flex justify-content-between align-items-center bg-primary px-4">
        <h1>Dashboard</h1>
      </header>

      <div class="content container-fluid d-flex h-100">
        <template v-for="app in apps">
          <router-link :to="app.url" class="btn btn-primary m-2">
            <i :class="app.icon"></i>
            {{ app.name }}
          </router-link>
        </template>
        <!-- Main content goes here -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'Dashboard',
});
const apps = [
  {
    name: 'Todo Lists',
    icon: 'fa fa-check-square-o',
    url: '/apps/todo-lists',
  },

];
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
