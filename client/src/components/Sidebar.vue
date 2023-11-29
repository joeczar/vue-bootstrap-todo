<template>
  <div class="col-auto  bg-dark">
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white h-100">
      <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-5 d-none d-sm-inline">{{ title }}</span>
      </a>
      <hr class="border border-white border-1 w-100" />

      <div class="sidebar-slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'Sidebar',
});

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.collapsed {
  width: 0;
  overflow: hidden;
}
</style>
