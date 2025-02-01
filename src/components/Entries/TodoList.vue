<template>
  <q-list bordered separator class="rounded-borders">
    <q-item v-for="todo in todos" :key="todo.id">
      <q-item-section>
        <Todo :todo="todo" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { useTodosStore } from "src/stores/storeTodos";
import Todo from "src/components/Entries/Todo.vue";
import { computed } from "vue";

const props = defineProps({
  tab: {
    type: String,
    required: true,
  },
});

const storeTodos = useTodosStore();

const todos = computed(() =>
  props.tab === "todos" ? storeTodos.activeTodos : storeTodos.completedTodos
);
</script>
