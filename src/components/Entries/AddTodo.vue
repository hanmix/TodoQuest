<template>
  <q-form class="row items-center q-pa-sm" @submit="addTodoFormSumit">
    <div class="col">
      <q-input
        v-model="addTodoForm.title"
        ref="inputTitle"
        outlined
        placeholder="새로운 Todo를 입력해주세요."
        bg-color="white"
        clearable
      />
    </div>

    <div class="col-auto q-pl-sm">
      <q-btn color="positive" round type="submit">
        <q-icon name="fa-solid fa-arrow-up"></q-icon>
      </q-btn>
    </div>
  </q-form>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useTodosStore } from "src/stores/storeTodos";

const inputTitle = ref(null);
const storeTodos = useTodosStore();

const addTodoFormDefault = {
  title: "",
};

const addTodoForm = reactive({
  ...addTodoFormDefault,
});

const addTodoFormReset = () => {
  Object.assign(addTodoForm, addTodoFormDefault);
  inputTitle.value.focus();
};

const addTodoFormSumit = () => {
  storeTodos.addTodo(addTodoForm);
  addTodoFormReset();
};
</script>
