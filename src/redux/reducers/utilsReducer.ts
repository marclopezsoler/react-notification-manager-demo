import { createSlice } from "@reduxjs/toolkit";

import {
  initialUtilsState,
  setThemeAction,
  setVersionAction,
} from "../actions/utilsActions";

const utilsReducer = createSlice({
  name: "utils",
  initialState: initialUtilsState,
  reducers: {
    setVersion: setVersionAction,
    setTheme: setThemeAction,
  },
});

export const { setVersion, setTheme } = utilsReducer.actions;

export default utilsReducer.reducer;
