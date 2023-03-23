import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoState } from "../types/types";

const initialState: ITodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getToDos: (state, action) => {
      state.todos = action.payload;
    },

    setToDos: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    editToDos: (state, action) => {
      const { id, todo } = action.payload;
      state.todos = state.todos.map((item) =>
        item.id === id ? { ...item, todo: todo } : item
      );
    },
    deleteTodo(state, action) {
      const filteredList = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = filteredList;
    },
    completedToDos: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const { setToDos, editToDos, completedToDos, deleteTodo, getToDos } =
  todoSlice.actions;

export default todoSlice.reducer;
