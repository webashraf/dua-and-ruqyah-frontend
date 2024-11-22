import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import duahReducer from "./feature/duah.slice";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
    duahId: duahReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
