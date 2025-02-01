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
        <strong class="text-body">{{ todo.title }}</strong>
        <div class="text-caption">
          {{ todo.createdAt }}
        </div>

        <q-popup-edit
          @save="onTitleUpdate"
          :model-value="todo.title"
          v-slot="scope"
          :cover="true"
          anchor="top left"
          label-set="Done"
          auto-save
          buttons
        >
          <q-input
            v-model="scope.value"
            @keyup.enter="scope.set"
            input-class="text-weight-bold letter-spacing-none"
            autofocus
            dense
          />
        </q-popup-edit>
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<script setup>
import { useTodosStore } from "src/stores/storeTodos";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const storeTodos = useTodosStore();

const onTodoSlideLeft = ({ reset }) => {
  storeTodos.updateTodo(props.todo.id, { isDone: !props.todo.isDone });
  reset();
};

const onTodoSlideRight = ({ reset }) => {
  storeTodos.removeTodo(props.todo.id);
  reset();
};

const onTitleUpdate = (value) => {
  storeTodos.updateTodo(props.todo.id, { title: value });
};
</script>
