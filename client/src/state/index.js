import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  bg: "",
  userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    // Added by me
    setBg: (state, action) => {
      state.bg = state.bg === "" ? "dashboard" : "";
    },
  },
});

export const { setMode, setBg } = globalSlice.actions;

export default globalSlice.reducer;
