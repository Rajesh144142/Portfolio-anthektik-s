import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Get user from Local Storage
import { baseUrl } from '../components/utils/constant'
const user = JSON.parse(localStorage.getItem('user'));


const initialState = {
    user: user ? user : null,
    token: "",
    loading: false,
    error: null,
};
export const login = createAsyncThunk("user/login", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`/auth/signin`, data);
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.data.token))
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const signUp = createAsyncThunk("user/signUp", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`/auth/signup`, data);
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.data.token))
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// export const getUser = createAsyncThunk("user/get", async (email, { rejectWithValue }) => {
//     try {


//         // Send a GET request using Axios
//         const response = await axios.get('http://localhost:5000/api/user/getUser', email);
//         if (response.data) localStorage.setItem('user', JSON.stringify(response.data))

//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.message);
//     }
// });
export const logout = createAsyncThunk("/user/logout", async (email, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${baseUrl}auth/logout`, { data: { email } });
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.user = false
            state.loading = false
            state.error = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;

            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            ;

    },


})
export default authSlice.reducer;
export const { reset } = authSlice.actions
