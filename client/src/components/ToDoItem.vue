<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ todo.title }}</h5>
      <!-- <p class="card-text">{{ todo.content }}</p> -->
      <p class="card-text">{{ todo.date }}</p>
      <button class="btn btn-primary" @click="toggleDone">
        {{ todo.complete ? 'Undone' : 'Done' }}
      </button>
      <button class="btn btn-danger" @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

export interface ToDo {
  id?: number;
  title: string;

  complete: boolean;
  todo_list_id?: number;
}

const props = defineProps({
  todo: {
    type: Object as () => ToDo,
    required: true,
  },
});

const toggleDone = () => {
  props.todo.complete = !props.todo.complete;
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
