<template>
  <q-page borded>
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

    <q-footer class="bg-transparent">
      <Transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <AddTodo v-if="selectedTab === 'todos'" />
      </Transition>
      <q-tabs
        v-model="selectedTab"
        dense
        align="justify"
        class="text-grey-5 bg-primary q-pa-sm"
        :class="{ 'shadow-up-2': selectedTab !== 'todos' }"
        :breakpoint="0"
        indicator-color="transparent"
        active-color="white"
      >
        <q-tab
          v-for="tab in tabs"
          :key="tab.name"
          :name="tab.name"
          :icon="tab.icon"
          :label="tab.label"
        />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script setup>
import { tabs, selectedTab } from "src/helpers/tabs";
import { useTodosStore } from "src/stores/storeTodos";
import TodoList from "src/components/Entries/TodoList.vue";
import AddTodo from "src/components/Entries/AddTodo.vue";
import EmptyItem from "components/Entries/EmptyItem.vue";

const storeTodos = useTodosStore();

const isEmpty = (tabName) =>
  tabName === "todos"
    ? !storeTodos.activeTodos.length
    : !storeTodos.completedTodos.length;
</script>
