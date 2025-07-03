import { configureStore } from "@reduxjs/toolkit";

import utilsReducer from "./reducers/utilsReducer";

const appStore = configureStore({
  reducer: {
    utils: utilsReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
