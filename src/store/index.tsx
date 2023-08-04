import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthReducer";
import TodoReducer from "./Reducers/TodoReducer";

const store = configureStore({
    reducer: {
        authentication: AuthReducer,
        todos: TodoReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;