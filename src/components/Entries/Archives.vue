<template>
  <div class="text-h6">{{ index }} {{ archive.title }}</div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</template>

<script setup>
const props = defineProps({
  archive: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
