<template>
  <div class="todo-app-header bg-primary px-4 py-1">
    <h1 class="text-white">Todo Lists</h1>
  </div>
  <div class="todo-app-body container d-flex p-4">
    <template v-for="list in todoListStore.todoLists">

      <TodoList :list="list" />
    </template>
    <div class="button-container mt-auto">
      <button class="btn btn-secondary btn-sm" @click="newList">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import TodoList, { ToDoList } from '../../components/ToDoList.vue';
import { useTodoStore } from '../../stores/todoStore';

const todoListStore = useTodoStore()

defineComponent({
  name: 'TodoLists',
});

const lists = ref<ToDoList[]>([]);

onMounted(async () => {
  todoListStore.fetchTodoLists()
})

const newList = () => {
  lists.value.push({
    title: 'New List',

  });
};

</script>

<style scoped></style>