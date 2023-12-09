
<template>
  <div class="todo-list card mx-2">

    <div class="title-edit-container" @click="editTitle">
      <h2 v-if="!titleEditable" class="mb-4 card-title p-2">{{ title }}</h2>
      <input
             v-else
             class="mb-4 card-title p-2"
             type="text"
             v-model="title" />
    </div>

    <div v-if="list" class="card-body">
      <ul class="list-group list-group-flush">
        <li v-for="item in list.todos" :key="item.id" class="list-group-item px-0">
          <ToDoItem :todo="item" :list-id="list?.id!"
                    @saved="onSaved" @canceled="onCanceled" @removed="onRemoved" @completed="onCompleted" />

        </li>
        <button class="btn btn-outline-secondary btn-sm mr-auto ml-0" @click="newItem">Add Todo</button>
      </ul>

    </div>
    <div class="card-footer btn-group btn-group-sm">
      <button class="btn btn-outline-primary btn-sm" @click="save">Save</button>
      <button class="btn btn-outline-danger btn-sm" @click="remove">Remove</button>
    </div>
  </div>
</template>
<style scoped lang="css">
.todo-list {
  min-width: 250px;
  max-width: 400px;
  margin: 1rem;
}
</style>

<script setup lang="ts">
import { defineComponent, defineProps, ref } from 'vue';
import ToDoItem from './ToDoItem';
import { Todo } from '../types/Todo';
import { useTodoStore } from '../stores/todoStore';

const todoStore = useTodoStore();

export interface ToDoList {
  id?: number;
  title: string;
  date?: string;
  complete?: boolean;
  todos?: Todo[];
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

const title = ref(list!.title);

const titleEditable = ref(false);

const editTitle = () => {
  titleEditable.value = true;
};

const newItem = async () => {
  todoStore.addTempTodo(list!.id!);
  console.log('Adding temp item:');

};

const removeTempItem = () => {
  todoStore.removeTempTodos(list!.id!);
  console.log('Removing temp item:');
};

const onSaved = (newItem: Todo) => {
  console.log('Saving new item:', newItem);

  removeTempItem();
};

const onCanceled = () => {
  return removeTempItem();
};

const onRemoved = () => {
  console.log('Removing...');
  removeTempItem();
};


const save = () => {
  if (!list) {
    console.log('Saving new list:', title.value);
    todoStore.addTodoList(title.value);
  } else {
    console.log('Updating list:', list);
    todoStore.updateTodoList(list.id!, title.value);
  }
  titleEditable.value = false;
};

const remove = () => {
  console.log('Removing...');
  todoStore.deleteTodoList(list!.id!);
};

const onCompleted = (todo: Todo) => {
  console.log('Completed:', todo);
  if (!list?.id) {
    return;
  }
  todoStore.toggleTodo(list.id, todo.id!, todo.completed!)
};
</script>
