
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <ToDoItem :item="item" />
      </li>
      <li>+</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ToDoItem from './ToDoItem.vue';

const props = defineProps({
  items: {
    type: Array as () => Array<{ id: number; text: string }>,
    required: true,
  },
});
</script>
