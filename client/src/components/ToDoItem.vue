<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ todo.title }}</h5>
      <p class="card-text">{{ todo.content }}</p>
      <p class="card-text">{{ todo.date }}</p>
      <button class="btn btn-primary" @click="toggleDone">
        {{ todo.done ? 'Undone' : 'Done' }}
      </button>
      <button class="btn btn-danger" @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Todo {
  title: string;
  content: string;
  date: string;
  done: boolean;
}

const props = defineProps({
  todo: {
    type: Object as () => Todo,
    required: true,
  },
});

const toggleDone = () => {
  props.todo.done = !props.todo.done;
};

const deleteTodo = () => {
  // Emit an event to notify the parent component to delete this todo
  console.log('Deleting todo:', props.todo);
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
