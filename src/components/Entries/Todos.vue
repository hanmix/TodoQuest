<template>
  <div class="text-body1 text-weight-medium">{{ index }} {{ todo.title }}</div>
</template>

<script setup>
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
</script>
