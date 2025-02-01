<template>
  <q-page borded>
    <q-tabs
      v-model="selectedTab"
      dense
      align="justify"
      class="bg-white shadow-2"
      :breakpoint="0"
      indicator-color="primary"
    >
      <q-tab
        v-for="tab in tabs"
        :key="tab.name"
        :name="tab.name"
        :label="tab.label"
        class="text-primary"
      />
    </q-tabs>

    <q-tab-panels
      v-model="selectedTab"
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-tab-panel v-for="tab in tabs" :name="tab.name" :key="tab.name">
        <EmptyItem v-if="isEmpty(tab.name)" :tab="tab.name" />
        <TodoList v-else :tab="tab.name" />
      </q-tab-panel>
    </q-tab-panels>

    <q-footer v-if="selectedTab === 'todos'">
      <AddTodo />
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useTodosStore } from "src/stores/storeTodos";
import TodoList from "src/components/Entries/TodoList.vue";
import AddTodo from "components/Entries/AddTodo.vue";
import EmptyItem from "components/Entries/EmptyItem.vue";

const storeTodos = useTodosStore();

const tabs = ref([
  { name: "todos", label: "Todos" },
  { name: "archives", label: "Archives" },
]);

const selectedTab = ref(tabs.value[0].name);

const isEmpty = (tabName) =>
  tabName === "todos"
    ? !storeTodos.activeTodos.length
    : !storeTodos.completedTodos.length;
</script>
