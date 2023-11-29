
<template>
  <div class="card mx-2">
    {{ list }}
    <div class="title-edit-container" @click="editTitle">
      <h2 v-if="!titleEditable" class="mb-4 card-title p-2">{{ title }}</h2>
      <input
             v-else
             class="mb-4 card-title p-2"
             type="text"
             v-model="title" />
    </div>

    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li v-for="item in items" :key="item.id" class="list-group-item">
          <ToDoItem :todo="item" />
        </li>
        <button class="btn btn-secondary btn-sm mr-auto ml-0" @click="newItem">Add Todo</button>
      </ul>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary btn-sm mx-2" @click="save">Save</button>
      <button class="btn btn-danger btn-sm" @click="remove">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, onMounted, ref } from 'vue';
import ToDoItem, { ToDo } from './ToDoItem.vue';
import { addTodoList, editTodoListTitle } from '../api/todoListsService';


export interface ToDoList {
  id?: number;
  title: string;
  date?: string;
  complete?: boolean;
  todos?: ToDo[];
}

defineComponent({
  name: 'ToDoList',
  components: {
    ToDoItem,
  },
});


const { list } = defineProps({
  list: {
    type: Object as () => ToDoList,
    required: false,
  },

});

onMounted(async () => {

});

const title = ref(list!.title);

const items = ref<ToDo[]>(list!.todos!);

const titleEditable = ref(false);

const editTitle = () => {
  titleEditable.value = true;
};

const newItem = async () => {
  const item: ToDo = {
    title: '',
    complete: false,
    todo_list_id: list!.id!,
  };
  list!.todos!.push(item);
  console.log('Adding new item:', item);
  // if (!list) {
  //   console.log('No list id');
  //   return;
  // }

  // const response = await addTodo(item);
  // console.log
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
