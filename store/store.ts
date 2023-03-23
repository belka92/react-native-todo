import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/todoSlice";

export const store = () => {
  return configureStore({
    reducer: todoReducer,
  });
};

export type RootState = ReturnType<typeof todoReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
