<template>
  <div class="todo-app-header bg-primary px-4 py-1">
    <h1 class="text-white">Todo Lists</h1>
  </div>
  <div class="todo-app-body container d-flex p-4 flex-wrap">
    <template v-for="list in todoListStore.todoLists">

      <TodoList :list="list" />
    </template>
    <div class="button-container mt-auto">
      <button class="btn btn-secondary btn-sm" @click="newList">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from 'vue';
import TodoList from '../../components/ToDoList.vue';
import { useTodoStore } from '../../stores/todoStore';

const todoListStore = useTodoStore()

defineComponent({
  name: 'TodoLists',
});



onMounted(async () => {
  todoListStore.fetchTodoLists()
})

const newList = () => {
  console.log('New list');
  todoListStore.addTodoList('New list')

};

</script>

<style scoped></style>