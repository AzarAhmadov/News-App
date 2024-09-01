import { configureStore } from "@reduxjs/toolkit";
import AppStore from "./features/app.slice";
import AuthStore from "./features/auth.slice";

export const store = configureStore({
  reducer: {
    AppStore,
    AuthStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
