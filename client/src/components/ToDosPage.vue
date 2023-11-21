
<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">ToDos</h1>

    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            v-model="newTodo"
            type="text"
            class="form-control"
            placeholder="Add a new todo"
            aria-label="Add a new todo"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            @click="store.addTodo(newTodo)"
          >
            Add
          </button>
        </div>

        <ul class="list-group">
          <li v-for="todo in store.todos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" :checked="todo.completed" @click="store.toggleTodoStatus(todo.id, todo.completed)" />
              <label class="form-check-label ms-2">
                {{ todo.title }}
              </label>
            </div>
            <button @click="handleDeleteTodoById(todo.id)" class="btn btn-danger btn-sm">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
// import { Todo } from '../types/Todo';
import {useTodoStore} from '../store/todoStore';

const todos = useTodoStore().todos;

const store = useTodoStore();
const newTodo = ref('');

onMounted(()=>
{
  store.fetchTodos();
});

watch(() => todos, (newVal) => {
  console.log('Todos changed:', newVal);
}, { deep: true });

const handleDeleteTodoById = (id: number) => {
  store.deleteTodoById(id);
};

</script>

<style scoped>
/* Your style code here */
.todo-clickable {
  cursor: pointer;
  margin-inline: 1rem;
}
</style>
