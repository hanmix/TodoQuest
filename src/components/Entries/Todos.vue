<template>
  <q-slide-item
    @left="onTodoSlideLeft"
    @right="onTodoSlideRight"
    left-color="positive"
    right-color="negative"
    :class="{ 'bg-grey-2': todo.isDone }"
  >
    <template v-slot:left>
      <q-icon name="done" />
    </template>
    <template v-slot:right>
      <q-icon name="delete" />
    </template>

    <q-item>
      <q-btn
        round
        flat
        :icon="todo.isPinned ? 'star' : 'star_border'"
        size="12px"
        :ripple="false"
        :color="todo.isPinned ? 'primary' : 'grey-5'"
        @click="storeTodos.pinTodo(todo.id)"
      />
      <q-item-section>
        <strong class="text-h6">{{ todo.title }}</strong>
        <div class="text-caption">
          {{ todo.createdAt }}
        </div>

        <q-popup-edit
          @save="onNameUpdate"
          :model-value="todo.title"
          v-slot="scope"
          :cover="true"
          :offset="[16, 12]"
          anchor="top left"
          label-set="Ok"
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
  index: {
    type: Number,
    required: true,
  },
});

const storeTodos = useTodosStore();

const onTodoSlideLeft = ({ reset }) => {
  // storeTodos.updateTodo(props.todo.id, { isDone: !props.todo.isDone });
  // reset();
  console.log("onTodoSlideLeft");
};

const onTodoSlideRight = ({ reset }) => {
  storeTodos.removeTodo(props.todo.id);
  reset();
};

const onNameUpdate = (value) => {
  storeTodos.updateTodo(props.todo.id, { title: value });
};
</script>
