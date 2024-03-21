import { createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        connection: {
            mail:"",
            password:"",
            user: ["dummy","test"],  /* user mail and password */
            flag: true,
        },
        cart: [

        ],
        total: 0,
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
        handleDisconnect: (state) => {
            state.connection.flag = false
        },
        handleLocation: (state, action) => {
            state.location = action.payload
        },

        handleAddtoCart: (state, action) => {
            let inList = false
            if (state.cart.length == 0) {
                state.cart.push(action.payload)
            } else {
                state.cart.forEach(c => {
                    if (c.name == action.payload.name) {
                        c.quantity += 1
                        inList = true
                    } 
                });
                if (inList == false) {
                    state.cart.push(action.payload)
                }
            }
        },
        plusOne: (state, action) => {
            state.cart[action.payload].quantity += 1
        },
        minusOne: (state, action) => {
            if (state.cart[action.payload].quantity > 1) {
                state.cart[action.payload].quantity -= 1
            } else { 
                state.cart.splice(action.payload, 1)
            }
            
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload, 1)
        },
        getTotal: (state) => {
            state.total = 0
            state.cart.forEach(c => {
                state.total += c.quantity * c.price
            });
        }
    }
})

// Action creators are generated for each case reducer function
export const { addMail, addPassword, handleConnection, handleLocation, handleDisconnect, handleAddtoCart, plusOne, minusOne, removeFromCart, getTotal } = loginSlice.actions

export default loginSlice.reducer