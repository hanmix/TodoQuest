<template>
  <q-layout view="lHh Lpr lFf" class="rounded-borders">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="home" aria-label="home" to="/" />
        <q-toolbar-title class="absolute-center">
          <q-icon class="fa-solid fa-square-check" size="25px"></q-icon>
          <span class="text-weight-bolder"> TodoQuest</span>
        </q-toolbar-title>
        <q-space />
        <q-btn
          flat
          dense
          round
          icon="fa-solid fa-gear"
          aria-label="fa-solid fa-gear"
          to="/settings"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
