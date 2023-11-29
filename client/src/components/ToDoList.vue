
<template>
  <div class="card mx-2">
    <div class="title-edit-container" @click="editTitle">
      <h2 v-if="!titleEditable" class="mb-4 card-title p-2">{{ newTitle }}</h2>
      <input
             v-else
             class="mb-4 card-title p-2"
             type="text"
             v-model="newTitle" />
    </div>

    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li v-for="item in items" :key="item.id" class="list-group-item">
          <ToDoItem :todo="item" />
        </li>
        <li class="list-group-item">+</li>
      </ul>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary btn-lg mx-2" @click="save">Save</button>
      <button class="btn btn-danger btn-lg" @click="remove">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, ref } from 'vue';
import ToDoItem, { ToDo } from './ToDoItem.vue';
import { addTodoList, editTodoListTitle } from '../api/todoListsService';

export interface ToDoList {
  id?: number;
  title: string;
  date?: string;
  complete?: boolean;
}

defineComponent({
  name: 'ToDoList',
  components: {
    ToDoItem,
  },
});


const { list, title } = defineProps({
  list: {
    type: Number as () => number | undefined,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
});

const newTitle = ref(title);

const items = ref<ToDo[]>([]);

const titleEditable = ref(false);

const editTitle = () => {
  titleEditable.value = true;
};

const save = () => {
  if (!list) {
    console.log('Saving new list:', newTitle.value);
    addTodoList(newTitle.value);
  } else {
    console.log('Updating list:', list);
    editTodoListTitle(list, newTitle.value)
  }
  titleEditable.value = false;
};

const remove = () => {
  console.log('Removing...');
};
</script>
