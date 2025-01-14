<template>
  <div class="text-h6">Todos</div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
