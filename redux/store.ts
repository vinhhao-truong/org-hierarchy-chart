import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import appSlice from "./services/appSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      app: appSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(api.middleware);
    },
  });

export default makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
