import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  filters: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filtered: (state, action: PayloadAction<string>) => {
      state.filters = action.payload;
    },
  },
});

export const { filtered } = filterSlice.actions;

export default filterSlice.reducer;
