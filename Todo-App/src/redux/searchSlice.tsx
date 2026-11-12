import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  searchTodo: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    saveSearch: (state, action: PayloadAction<string>) => {
      state.searchTodo = action.payload;
    },
  },
});

export const { saveSearch } = searchSlice.actions;

export default searchSlice.reducer;
