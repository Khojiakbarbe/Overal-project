import { createSlice } from "@reduxjs/toolkit"

export const appReucer = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: false,
        savat: []
    },
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        },
        loading: (state, action) => {
            state.loading = action.payload
        },
        addSavat: (state, action) => {
            state.savat.push(action.payload)
        }
    }
})

export const { addData, loading , addSavat} = appReucer.actions

export const Reducer = appReucer.reducer
