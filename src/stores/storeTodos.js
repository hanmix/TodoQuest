import { defineStore } from "pinia";
import { reactive } from "vue";
import { uid } from "quasar";

export const useTodosStore = defineStore("todos", () => {
  // state
  const todos = reactive([
    {
      id: "id1",
      title: "TodoList 만들기",
      isDone: false,
      isMoveToArchives: false,
    },
    {
      id: "id2",
      title: "Vue3 공부하기",
      isDone: false,
      isMoveToArchives: false,
    },
    {
      id: "id3",
      title: "Quasar 공부하기",
      isDone: false,
      isMoveToArchives: false,
    },
    {
      id: "id4",
      title: "CS 공부하기",
      isDone: false,
      isMoveToArchives: false,
    },
  ]);

  // actions
  const addTodo = (addTodoForm) => {
    const newTodo = Object.assign({}, addTodoForm, { id: uid() });
    todos.unshift(newTodo);
  };

  return {
    // state
    todos,
    // actions
    addTodo,
  };
});
