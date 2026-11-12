import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface EmptyType {
  emptyMessage: string | null;
}
export const initialState: EmptyType = {
  emptyMessage: "You haven't added such a task yet",
};
export const emptySlice = createSlice({
  name: "empty",
  initialState,
  reducers: {
    emptyView: (state, action: PayloadAction<string>) => {
      state.emptyMessage = action.payload;
    },
  },
});

export const { emptyView } = emptySlice.actions;

export default emptySlice.reducer;
