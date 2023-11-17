<template>
  <div>
    <h2>{{ editing ? 'Edit Todo' : 'Add Todo' }}</h2>
    <form @submit.prevent="saveTodo">
      <label for="title">Title:</label>
      <input v-model="todo.title" type="text" id="title" required>
      <label for="content">Content:</label>
      <textarea v-model="todo.content" id="content" required></textarea>
      <label for="date">Date:</label>
      <input v-model="todo.date" type="date" id="date" required>
      <label for="done">Done:</label>
      <input v-model="todo.done" type="checkbox" id="done">
      <button type="submit">{{ editing ? 'Save' : 'Add' }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Todo {
  title: string;
  content: string;
  date: string;
  done: boolean;
}

const todo = ref<Todo>({
  title: '',
  content: '',
  date: '',
  done: false,
});

const editing = ref(false);

function saveTodo() {
  // Save or update the todo
  if (editing.value) {
    // Update existing todo

  } else {
    // Add new todo

  }
}
</script>
