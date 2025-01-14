<template>
  <q-page borded>
    <q-tabs
      v-model="tab"
      dense
      align="justify"
      class="bg-primary bg-white shadow-2"
      :breakpoint="0"
      indicator-color="primary"
    >
      <q-tab class="text-primary" name="list" label="Todos" />
      <q-tab class="text-primary" name="archive" label="Archives" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="list"><Todos /></q-tab-panel>
      <q-tab-panel name="archive"><Archives /></q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import Todos from "components/Entries/Todos.vue";
import Archives from "components/Entries/Archives.vue";

const tab = ref("list");
</script>
