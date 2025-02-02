import { ref } from "vue";

export const tabs = ref([
  { name: "todos", icon: "fa-solid fa-box-open", label: "Todos" },
  { name: "archives", icon: "fa-solid fa-box-archive", label: "Archives" },
]);

export const selectedTab = ref(tabs.value[0].name);
