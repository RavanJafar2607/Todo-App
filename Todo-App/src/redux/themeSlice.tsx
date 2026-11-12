import { createSlice } from "@reduxjs/toolkit";
import type { themeInitialStateType } from "../typed/themeType";
const savedTheme = localStorage.getItem("app_theme") || "light";
export const initialState: themeInitialStateType = {
  theme: savedTheme,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const nextTheme = state.theme === "light" ? "dark" : "light";
      state.theme = nextTheme;
      localStorage.setItem("app_theme", nextTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
