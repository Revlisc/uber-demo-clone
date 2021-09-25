import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import navReducer from './slices/navSlice';

export const store = configureStore({
    reucer: {
        nav: navReducer,
    }
})