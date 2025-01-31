<template>
  <q-slide-item
    @left="onTodoSlideLeft"
    @right="onTodoSlideRight"
    left-color="positive"
    right-color="negative"
  >
    <template v-slot:left>
      <q-icon name="done" />
    </template>
    <template v-slot:right>
      <q-icon name="delete" />
    </template>

    <q-item>
      <q-item-section>
        <strong class="text-body">{{ archive.title }}</strong>
        <div class="text-caption">
          {{ archive.createdAt }}
        </div>
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<script setup>
import { useTodosStore } from "src/stores/storeTodos";

const props = defineProps({
  archive: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const storeTodos = useTodosStore();

const onTodoSlideLeft = ({ reset }) => {
  storeTodos.updateTodo(props.archive.id, { isDone: !props.archive.isDone });
  reset();
};

const onTodoSlideRight = ({ reset }) => {
  storeTodos.removeTodo(props.archive.id);
  reset();
};
</script>
