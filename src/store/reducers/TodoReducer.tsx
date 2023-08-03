import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Todo from "../../services/Todo";
import ITodo from "../../interfaces/ITodo";

interface IState {
    todos: ITodo[]
}


export const getTodosList = createAsyncThunk('todos/list', async (num: number) => {
    const data = await Todo.list(num);
    return data;
});

export const storeTodo = createAsyncThunk('todos/store', async (num: number, req: any) => {
    const data = await Todo.store(num, req);
    return data;
});

const TodoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    } as IState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodosList.pending, (state, action) => {
            state.todos = [];
        });
        builder.addCase(getTodosList.fulfilled, (state, action) => {
            state.todos = action.payload;
        });
    }
});

export const getTodos = (state:any) => state.todos.todos;

export default TodoSlice.reducer;