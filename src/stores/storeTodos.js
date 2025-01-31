import { defineStore } from "pinia";
import { reactive } from "vue";
import { uid, Notify } from "quasar";
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
  const addTodo = (addTodoForm) => {
    todos.unshift(initialTodo(addTodoForm.title));
  };

  const removeTodo = (todoId) => {
    const index = getTodoIndexById(todoId);
    todos.splice(index, 1);

    Notify.create({
      message: "Todo removed",
      position: "bottom",
    });
  };

  const updateTodo = (todoId, updates) => {
    const index = getTodoIndexById(todoId);
    Object.assign(todos[index], updates);
  };

  const pinTodo = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.isPinned = !todo.isPinned;
      sortTodosByPin();
    }
  };

  // hepler functions
  const initialTodo = (title) => ({
    id: uid(),
    title,
    isDone: false,
    isPinned: false,
    createdAt: getFormattedDate(),
  });

  const getTodoIndexById = (todoId) => {
    return todos.findIndex((todo) => todo.id === todoId);
  };

  const sortTodosByPin = () => {
    todos.sort((a, b) => {
      if (a.isPinned !== b.isPinned) {
        return b.isPinned ? 1 : -1;
      }
      return a.createdAt - b.createdAt;
    });
  };

  return {
    // state
    todos,
    // actions
    addTodo,
    removeTodo,
    updateTodo,
    pinTodo,
  };
});
