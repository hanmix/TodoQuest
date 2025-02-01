<template>
  <div class="row justify-center items-center empty-item">
    <div class="col-auto text-center">
      <div>
        <q-icon :name="iconName" size="100px" />
        <div class="text-h6 q-pt-md">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  tab: {
    type: String,
    required: true,
  },
});

const tabConfig = {
  todos: {
    icon: "fa-solid fa-box-open",
    message: "아직 만들어진 Todo가 없어요..",
  },
  archives: {
    icon: "fa-solid fa-box-archive",
    message: "Todo를 완료해보세요.",
  },
};

const iconName = computed(() => tabConfig[props.tab].icon);
const message = computed(() => tabConfig[props.tab].message);
</script>

<style scoped>
.empty-item {
  padding-top: 150px;
}
</style>
