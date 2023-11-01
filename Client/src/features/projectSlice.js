import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from '../components/utils/constant'
// const projects = JSON.parse(localStorage.getItem('projects'));
const initialState = {
    projects: [],
    loading1: false,
    error1: null,
};
export const getAllProjects = createAsyncThunk("projects/getallProjects", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}pro/`);
        // localStorage.setItem('projects', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
export const insertProjects = createAsyncThunk("projects/insertProjects", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseUrl}pro/`, data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const authSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProjects.pending, (state) => {
                state.loading1 = true;

                state.error1 = null;
            })
            .addCase(getAllProjects.fulfilled, (state, action) => {
                state.loading1 = false;
                state.projects = action.payload;

            })
            .addCase(getAllProjects.rejected, (state, action) => {
                state.loading1 = false;
                state.error1 = action.payload;
            })
            .addCase(insertProjects.pending, (state) => {
                state.loading1 = true;
                state.error1 = null;
            })
            .addCase(insertProjects.fulfilled, (state, action) => {
                state.loading1 = false;
                state.projects = action.payload;
            })
            .addCase(insertProjects.rejected, (state, action) => {
                state.loading1 = false;
                state.error1 = action.payload;
            })


            // .addCase(logout.pending, (state) => {
            //     state.loading1 = true;
            //     state.error1 = null;
            // })
            // .addCase(logout.fulfilled, (state, action) => {
            //     state.loading1 = false;
            //     state.user = '',
            //         state.token = ''
            // })
            // .addCase(logout.rejected, (state, action) => {
            //     state.loading1 = false;
            //     state.error1 = action.payload;
            // })
            ;

    },


})
export default authSlice.reducer;
