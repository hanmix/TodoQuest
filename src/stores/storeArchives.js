import { defineStore } from "pinia";
import { reactive } from "vue";

export const useArchivesStore = defineStore("archives", () => {
  const archives = reactive([
    // {
    //   id: "id1",
    //   title: "TodoList 만들기",
    //   isDone: false,
    //   isMoveToArchives: false,
    // },
    // {
    //   id: "id2",
    //   title: "Vue3 공부하기",
    //   isDone: false,
    //   isMoveToArchives: false,
    // },
    // {
    //   id: "id3",
    //   title: "Quasar 공부하기",
    //   isDone: false,
    //   isMoveToArchives: false,
    // },
    // {
    //   id: "id4",
    //   title: "CS 공부하기",
    //   isDone: false,
    //   isMoveToArchives: false,
    // },
  ]);

  return {
    // state
    archives,
  };
});
