import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Todo from "../../services/Todo";
import ITodo from "../../interfaces/ITodo";
import ITodoRequest from "../../interfaces/ITodoRequest";

interface IState {
    todos: ITodo[],
    todo: ITodo | null
}

interface IReq {
    userId: number,
    id: string,
}

export const getTodosList = createAsyncThunk('todos/list', async (num: number) => {
    const data = await Todo.list(num);
    return data;
});

export const getTodo = createAsyncThunk('todos/show', async (req:IReq) => {
    const data = await Todo.show(req.userId, req.id);
    return data;
});

export const storeTodo = createAsyncThunk('todos/store', async (r:any) => {
    const data = await Todo.store(r.id, r.data);
    return data;
});

export const deleteTodo = createAsyncThunk('todos/delete', async (r:number) => {
    await Todo.destroy(r);
    return r;
});

const TodoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        todo: null
    } as IState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodosList.pending, (state, action) => {
            state.todos = [];
        });
        builder.addCase(getTodosList.fulfilled, (state, action) => {
            state.todos = action.payload;
        });
        builder.addCase(getTodo.fulfilled, (state, action) => {
            state.todo = action.payload;
        });
        builder.addCase(storeTodo.fulfilled, (state, action) => {
            state.todos = [action.payload, ...state.todos];
        });
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.todos = [...state.todos.filter(t => t.id != action.payload)];
        });
    }
});

export const getTodos = (state:any) => state.todos.todos;
export const getCurrentTodo = (state:any) => state.todos.todo;

export default TodoSlice.reducer;