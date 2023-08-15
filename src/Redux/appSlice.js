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
            const check = state.savat.find(p => p.color == action.payload.color && p.title == action.payload.color)
            if(check){
                check.count = action.payload.count
            }else{
                state.savat.push(action.payload)
            }
        },
        incProduct: (state, action) => {
            state.savat = state.savat.filter(p => {
                if (p.title == action.payload) {
                    return p.count = p.count - 1
                } else {
                    return p
                }
            })
        },
        decProduct: (state, action) => {
            state.savat = state.savat.filter(p => {
                if (p.title == action.payload) {
                    return p.count++
                } else {
                    return p
                }
            })
        },
        removeProduct:(state,action) => {
            state.savat = state.savat.filter(p => p.title != action.payload)
        }
    }
})

export const { addData, loading, addSavat, incProduct,decProduct,removeProduct } = appReucer.actions

export const Reducer = appReucer.reducer
