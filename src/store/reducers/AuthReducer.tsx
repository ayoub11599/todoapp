import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Auth from "../../services/Auth";
import IRegisterRequest from "../../interfaces/IRegisterRequest";
import ILoginRequest from "../../interfaces/ILoginRequest";
import IUser from "../../interfaces/IUser";

interface IAuth {
    user: IUser | null
}

export const registerAttemps = createAsyncThunk('auth/register', async (req: IRegisterRequest) => {
    const data = await Auth.register(req);
    return data;
});

export const loginAttemps = createAsyncThunk('auth/login', async (req: ILoginRequest) => {
    const data = await Auth.login(req);
    return data.length > 0 ? data[0] : null;
});

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null
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
            state.user = action.payload;
        });
    }
});

export const getUser = (state:any) => state.authentication.user;

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;