import { createSlice } from "@reduxjs/toolkit"

export const appReucer = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { addData } = appReucer.actions

export const Reducer = appReucer.reducer
