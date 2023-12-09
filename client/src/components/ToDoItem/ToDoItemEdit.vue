<template>
  <div>
    <input class="form-control mb-2" type="text" v-model="editedText" placeholder="Edit your todo item">
    <div class="btn-group btn-group-sm w-100" role="group" aria-label="Basic outlined">
      <button class="btn btn-outline-primary" @click="save">Save</button>
      <button class="btn btn-outline-secondary" @click="cancel">Cancel</button>
      <button class="btn btn-outline-danger" @click="remove">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo } from '../../types/Todo';
import { useTodoStore } from '../../stores/todoStore';

const todoStore = useTodoStore()

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
const emit = defineEmits(['saved', 'canceled', 'removed']);


const editedText = ref(todo.title);

const save = async () => {
  const response = await todoStore.addNewTodo(listId, editedText.value);
  console.log('Saved todo:', response);
  emit('saved', response);
};

const cancel = () => {
  console.log('Canceled todo:', todo);

  emit('canceled');
};

const remove = () => {
  const response = todoStore.deleteTodo(listId, todo.id!);
  console.log('Removed todo:', response);

  emit('removed');
};
</script>

<style scoped></style>



