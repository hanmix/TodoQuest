<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="absolute-center">
          <q-icon class="fa-solid fa-square-check" size="25px"></q-icon>
          <span class="text-weight-bolder"> TodoQuest</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-primary"
      :width="200"
      :breakpoint="767"
      v-model="leftDrawerOpen"
      show-if-above
      elevated
    >
      <q-list>
        <q-item-label class="text-white" header> TodoQuest </q-item-label>

        <NavLink v-for="link in NavLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer borded>
      <q-form class="row items-center q-pa-sm" @submit="addTodoFormSumit">
        <div class="col">
          <q-input
            v-model="addTodoForm.title"
            ref="inputTitle"
            outlined
            placeholder="todo 입력"
            bg-color="white"
          />
        </div>

        <div class="col-auto q-pl-sm">
          <q-btn color="positive" round type="submit">
            <q-icon name="fa-solid fa-arrow-up"></q-icon>
          </q-btn>
        </div>
      </q-form>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, reactive } from "vue";
import NavLink from "components/Nav/NavLink.vue";
import { useTodosStore } from "src/stores/storeTodos";

const NavLinks = [
  {
    title: "Todos",
    icon: "fa-solid fa-square-check",
    link: "/",
  },
  {
    title: "Settings",
    icon: "fa-solid fa-gear",
    link: "/settings",
  },
];

const leftDrawerOpen = ref(false);
const inputTitle = ref(null);
const storeTodos = useTodosStore();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const addTodoFormDefault = {
  title: "",
  isDone: false,
  isMoveToArchives: false,
};

const addTodoForm = reactive({
  ...addTodoFormDefault,
});

const addTodoFormReset = () => {
  Object.assign(addTodoForm, addTodoFormDefault);
};

const addTodoFormSumit = () => {
  storeTodos.addTodo(addTodoForm);
  addTodoFormReset();
};
</script>
