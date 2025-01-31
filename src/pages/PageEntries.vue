<template>
  <q-page borded>
    <q-tabs
      v-model="tab"
      dense
      align="justify"
      class="bg-white shadow-2"
      :breakpoint="0"
      indicator-color="primary"
    >
      <q-tab class="text-primary" name="todos" label="Todos" />
      <q-tab class="text-primary" name="archives" label="Archives" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="todos">
        <EmptyItem v-if="!storeTodos.todos.length" :tab="tab" />
        <q-list v-else bordered separator>
          <q-item v-for="(todo, index) in storeTodos.todos" :key="todo.id">
            <q-item-section>
              <Todos :todo="todo" :index="index" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="archives">
        <EmptyItem v-if="!storeTodos.todos.length" :tab="tab" />
        <q-list v-else bordered separator>
          <q-item
            v-for="(archive, index) in storeTodos.todos"
            :key="archive.id"
          >
            <q-item-section>
              <Archives :archive="archive" :index="index" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>

    <q-footer v-if="tab === 'todos'">
      <AddTodo />
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useTodosStore } from "src/stores/storeTodos";
import Todos from "components/Entries/Todos.vue";
import Archives from "components/Entries/Archives.vue";
import EmptyItem from "components/Entries/EmptyItem.vue";
import AddTodo from "components/Entries/AddTodo.vue";

const tab = ref("todos");
const storeTodos = useTodosStore();
</script>
