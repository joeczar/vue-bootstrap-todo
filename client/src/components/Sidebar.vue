<template>
  <div :class="sidebarClasses">
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-h-100">
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
import { defineComponent, ref, computed } from 'vue';

defineComponent({
  name: 'Sidebar',
});

defineProps({
  title: String,
  width: {
    type: String,
    default: 'col-auto col-md-3 col-xl-2',
  },
  collapsibleBreakpoints: {
    type: Array,
    default: () => ['sm', 'md'],
  },
});

const isCollapsed = ref(false);

const sidebarClasses = computed(() => {
  const classes = ['bg-dark', 'px-sm-2', 'px-0', 'd-flex', 'flex-column', 'align-items-center', 'align-items-sm-start', 'pt-2', 'text-white', 'min-vh-100'];

  if (isCollapsed.value) {
    classes.push('collapsed');
  }

  return classes;
});
</script>

<style scoped>
.collapsed {
  width: 0;
  overflow: hidden;
}
</style>
