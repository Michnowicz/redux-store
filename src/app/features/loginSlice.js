import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        connection: {
            mail:"",
            password:"",
            user: ["dummy","test"],
            connected:false
        },
        cart: {
            
        }
    },
    reducers: {
        increment: (state) => {
        state.value += 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment } = loginSlice.actions

export default loginSlice.reducer