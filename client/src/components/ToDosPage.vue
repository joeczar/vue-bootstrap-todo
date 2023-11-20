
<template>
    <h1>ToDos</h1>

        <div class="container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
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
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click="store.addTodo(newTodo)"
        >
          Add
        </button>
      </div>
    TodoList
      <!-- Todo list will go here -->
      <ol>
        <li v-for="todo in store.todos" :key="todo.id">
        <span class="todo-wrapper d-flex">
          <span class="todo-completed todo-clickable" @click="store.toggleTodoStatus(todo.id)">
            {{ todo.completed ? '✅' : '🆇' }}
          </span>
          <span class="title d-inline-flex flex-grow-1">{{ todo.title }}</span>
          <span @click="handleDeleteTodoById(todo.id)" class="todo-delete todo-clickable d-inline-flex">
          ❌
          </span>
        </span>
        
        </li>
      </ol>
      
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
