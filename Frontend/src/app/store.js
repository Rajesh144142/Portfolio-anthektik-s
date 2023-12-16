import {configureStore} from '@reduxjs/toolkit';
import authenticationSlice from '../features/authenticationSlice';
import projectSlice from '../features/projectSlice';
export const store=configureStore({
    reducer:{
        projects:projectSlice,
        user:authenticationSlice
    }
})