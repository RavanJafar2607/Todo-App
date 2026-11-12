import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UIState } from "../typed/uiType";
export const initialState: UIState = {
  toastMessage: null,
  toastType: null,
};
export const noficationSlice = createSlice({
  name: "nofication",
  initialState,
  reducers: {
    nofication: (state, action: PayloadAction<UIState>) => {
      state.toastMessage = action.payload.toastMessage;
      state.toastType = action.payload.toastType;
    },
    clearNotification: (state) => {
      state.toastMessage = null;
      state.toastType = null;
    },
  },
});

export const { nofication, clearNotification } = noficationSlice.actions;

export default noficationSlice.reducer;
