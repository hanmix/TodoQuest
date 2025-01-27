<template>
  <div class="row items-center justify-evenly">
    <div class="col-auto">
      <q-btn
        round
        flat
        :icon="todo.isPinned ? 'star' : 'star_border'"
        size="12px"
        :ripple="false"
        :color="todo.isPinned ? 'primary' : 'grey-5'"
        @click="storeTodos.pinTodo(todo.id)"
      />
    </div>
    <div class="col">
      {{ todo.title }}
      <div class="text-caption">
        {{ todo.createdAt }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodosStore } from "src/stores/storeTodos";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const storeTodos = useTodosStore();
</script>
