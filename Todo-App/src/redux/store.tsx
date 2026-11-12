import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import todosReducer from "./todosSlice";
import searchReducer from "./searchSlice";
import filterReducer from "./filterSlice";
import noficationReducer from "./uiSlice";
import emptyReducer from "./emptySlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todosReducer,
    search: searchReducer,
    filter: filterReducer,
    nofication: noficationReducer,
    empty: emptyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
