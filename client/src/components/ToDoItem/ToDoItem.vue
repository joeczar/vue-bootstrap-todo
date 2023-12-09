<template>
  <div>
    <ToDoItemEdit v-if="editing" :todo="todo" :list-id="listId" @saved="saved" @canceled="canceled" @removed="removed" />
    <div v-else class="d-flex w-100">
      <input type="checkbox" class="form-check-input me-2" :checked="todo.completed" @change="toggleDone" />
      <h6 class="me-auto">{{ todo.title }}</h6>
      <i class="edit bi bi-pencil-square me-0 ml-auto" @click="editing = true"></i>
      <!-- <p class="card-text">{{ todo.content }}</p> -->
      <!-- <p class="card-text">{{ todo.date }}</p> -->

    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import ToDoItemEdit from './ToDoItemEdit.vue';
import { Todo } from '../../types/Todo';

onMounted(async () => {
  if (todo.title === '') {
    editing.value = true;
  }
});

const { todo, listId } = defineProps({
  todo: {
    type: Object as () => Todo,
    required: true,
  },
  listId: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['saved', 'canceled', 'removed', 'completed']);

const editing = ref(false);

const toggleDone = () => {
  todo.completed = !todo.completed;
  emit('completed', todo);
};

const saved = (newTodo: Todo) => {

  editing.value = false;
  emit('saved', newTodo);
};

const canceled = () => {
  editing.value = false;
  emit('canceled');
};

const removed = () => {
  editing.value = false;
  emit('removed');
};


</script>

<style scoped>
.edit {
  cursor: pointer;
}
</style>
