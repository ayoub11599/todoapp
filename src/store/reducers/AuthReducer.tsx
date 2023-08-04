import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Auth from "../../Services/Auth";
import IRegisterRequest from "../../Interfaces/IRegisterRequest";
import ILoginRequest from "../../Interfaces/ILoginRequest";
import IUser from "../../Interfaces/IUser";

interface IAuth {
    user: IUser | null,
    registered: boolean,
    message: string,
}

export const registerAttemps = createAsyncThunk('auth/register', async (req: IRegisterRequest) => {
    const data = await Auth.register(req);
    return data;
});

export const loginAttemps = createAsyncThunk('auth/login', async (req: ILoginRequest) => {
    const data = await Auth.login(req);
    return data;
});

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        registered: false,
        message: ""
    } as IAuth,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAttemps.pending, (state, action) => {
            state.user = null;
        });
        builder.addCase(loginAttemps.fulfilled, (state, action) => {
            const length = action.payload.length;
            if(length === 0) {
                state.user = null;
                state.message = "Le compte n'existe pas.";
            } else if(length == 1){
                state.user = action.payload[0];
                state.message = "";
            } else {
                state.user = null;
                state.message = "Le compte existe dèjà.";
            }
        });
        builder.addCase(registerAttemps.pending, (state, action) => {
            state.user = null;
            state.registered = false;
        });
        builder.addCase(registerAttemps.fulfilled, (state, action) => {
            state.registered = action.payload ? true : false;
        });
    }
});

export const getUser = (state:any) => state.authentication.user;
export const getMessage = (state:any) => state.authentication.message;
export const getRegistered = (state:any) => state.authentication.registered;

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;