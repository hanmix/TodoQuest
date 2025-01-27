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
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import NavLink from "components/Nav/NavLink.vue";

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

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
