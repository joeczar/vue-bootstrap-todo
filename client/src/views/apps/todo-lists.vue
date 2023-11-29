<template>
  <div class="todo-app-header bg-primary px-4 py-1">
    <h1 class="text-white">Todo Lists</h1>
  </div>
  <div class="todo-app-body container d-flex p-4">
    <template v-for="list in lists">

      <TodoList :title="list.title" :list="list.id" />
    </template>
    <div class="button-container mt-auto">
      <button class="btn btn-primary btn-lg" @click="newList">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import TodoList, { ToDoList } from '../../components/ToDoList.vue';
import { getTodoLists } from '../../api/todoListsService';


defineComponent({
  name: 'TodoLists',
});

const lists = ref<ToDoList[]>([]);

onMounted(async () => {
  const response = await getTodoLists()
  if (response) {
    lists.value = response.data
  }
})

const newList = () => {
  lists.value.push({
    title: 'New List',

  });
};

</script>

<style scoped></style>