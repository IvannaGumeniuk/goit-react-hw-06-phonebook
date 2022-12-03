import { createSlice } from "@reduxjs/toolkit";

export const contactFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filter(_, action) {
            return action.payload.toLowerCase();
        },
    },
});

export const { filter } = contactFilter.actions;