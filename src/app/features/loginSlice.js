import { createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        connection: {
            mail:"",
            password:"",
            user: ["dummy","test"],  /* user mail and password */
            flag: false,
        },
        cart: {

        },
        location: '',
    },
    reducers: {
        addMail: (state, action) => {
            state.connection.mail = action.payload
        },
        addPassword: (state, action) => {
            state.connection.password = action.payload
        },
        handleConnection: (state) => {
            if (state.connection.mail == state.connection.user[0] && state.connection.password == state.connection.user[1]) {
                state.connection.flag = true
            }
        },
        handleLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { addMail, addPassword, handleConnection, handleLocation, } = loginSlice.actions

export default loginSlice.reducer