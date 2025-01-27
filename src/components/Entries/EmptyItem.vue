<template>
  <div class="row justify-center items-center empty-item">
    <div class="col-auto text-center">
      <div v-if="tab === 'todos'">
        <q-icon name="fa-solid fa-box-open" size="100px" />
        <div class="text-h6 q-pt-md">아직 만들어진 Todo가 없어요..</div>
      </div>
      <div v-else>
        <q-icon name="fa-solid fa-box-archive" size="100px" />
        <div class="text-h6 q-pt-md">Todo를 완료해보세요.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tab: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.empty-item {
  padding-top: 150px;
}
</style>
