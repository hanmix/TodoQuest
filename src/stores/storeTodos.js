import { defineStore } from "pinia";
import { reactive } from "vue";
import { uid } from "quasar";
import { getFormattedDate } from "../helpers/timeStampHelper";

export const useTodosStore = defineStore("todos", () => {
  // state
  const todos = reactive([
    // {
    //   id: "id1",
    //   title: "Go to shop",
    //   isDone: false,
    //   isMoveToArchives: false,
    //   isPinned: false,
    //   createdAt: getFormattedDate(),
    // },
    // {
    //   id: "id2",
    //   title: "Vue3 공부하기",
    //   isDone: false,
    //   isMoveToArchives: false,
    //   isPinned: false,
    //   createdAt: getFormattedDate(),
    // },
    // {
    //   id: "id3",
    //   title: "Quasar 공부하기",
    //   isDone: false,
    //   isMoveToArchives: false,
    //   isPinned: false,
    //   createdAt: getFormattedDate(),
    // },
    // {
    //   id: "id4",
    //   title: "CS 공부하기",
    //   isDone: false,
    //   isMoveToArchives: false,
    //   isPinned: false,
    //   createdAt: getFormattedDate(),
    // },
  ]);

  // actions
  const createTodo = (title) => ({
    id: uid(),
    title,
    isDone: false,
    isMoveToArchives: false,
    isPinned: false,
    createdAt: getFormattedDate(),
  });

  const addTodo = (addTodoForm) => {
    todos.unshift(createTodo(addTodoForm.title));
  };

  const sortTodosByPin = () => {
    todos.sort((a, b) => {
      if (a.isPinned !== b.isPinned) {
        return b.isPinned ? 1 : -1;
      }
      return a.createdAt - b.createdAt;
    });
  };

  const pinTodo = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.isPinned = !todo.isPinned;
      sortTodosByPin();
    }
  };

  return {
    // state
    todos,
    // actions
    addTodo,
    pinTodo,
  };
});
