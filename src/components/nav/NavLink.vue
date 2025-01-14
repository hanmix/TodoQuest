<template>
  <q-item clickable :to="props.link">
    <q-item-section v-if="props.icon" avatar>
      <q-icon class="text-white" :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-white text-subtitle1">{{
        props.title
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>
