import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  EditTypes,
  TodoInitialState,
  TodoTypes,
} from "../typed/todosType";
const localData = localStorage.getItem("todos");
export const initialState: TodoInitialState = {
  todos: localData ? JSON.parse(localData) : [],
  editinId: null,
};
export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<TodoTypes>) => {
      state.todos.push(action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<number>) => {
      const deyer = state.todos.find((item) => item.id === action.payload);
      if (deyer) {
        deyer.completed = !deyer.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    startEdit: (state, action: PayloadAction<number>) => {
      state.editinId = action.payload;
    },
    saveEdit: (state, action: PayloadAction<EditTypes>) => {
      const selectedId = state.todos.find(
        (item) => item.id === action.payload.id,
      );
      if (selectedId) {
        selectedId.text = action.payload.text;
        selectedId.priority = action.payload.priority;
        selectedId.date = action.payload.date;
      }
      state.editinId = null;
    },
    clearAll: (state) => {
      state.todos = [];
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((item) => !item.completed);
    },
  },
});

export const {
  addTodos,
  toggleCompleted,
  deleteTodo,
  saveEdit,
  startEdit,
  clearAll,
  clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
