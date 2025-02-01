import { defineStore } from "pinia";
import { reactive, computed, watch } from "vue";
import { uid, Notify } from "quasar";
import { getFormattedDate } from "../helpers/timeStampHelper";

export const useTodosStore = defineStore("todos", () => {
  // state
  const todos = reactive([]);

  watch(todos, () => {
    sortTodosByDate();
  });

  // getters
  const activeTodos = computed(() => {
    return todos.filter((todo) => !todo.isDone);
  });

  const completedTodos = computed(() => {
    return todos.filter((todo) => todo.isDone);
  });

  // actions
  const addTodo = (addTodoForm) => {
    const newTodo = initialTodo(addTodoForm.title);
    todos.unshift(newTodo);
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
  // helper functions
  const initialTodo = (title) => ({
    id: uid(),
    title,
    isDone: false,
    createdAt: getFormattedDate(),
  });

  const getTodoIndexById = (todoId) => {
    return todos.findIndex((todo) => todo.id === todoId);
  };

  const sortTodosByDate = () => {
    todos.sort((a, b) => b.createdAt - a.createdAt);
  };

  return {
    // state
    todos,
    // getters
    activeTodos,
    completedTodos,
    // actions
    addTodo,
    removeTodo,
    updateTodo,
  };
});
