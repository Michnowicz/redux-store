import { createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import Data from "../../json/products.json"

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
        carousel:[],
        carID:0,
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
        },
        addCarousel: (state) => {
            const randList = []    

            while (state.carousel.length < 5) {
                let random = Math.floor(Math.random()*Data.length)
                let different = true
                if (state.carousel.length==0) {
                    randList.push(random)
                    state.carousel.push(Data[random])
                } 
                else {
                    randList.forEach(r =>{
                        if (r == random) {
                            different = false
                        }
                    })
                    if (different == true) {
                        randList.push(random)
                        state.carousel.push(Data[random])
                    }
                }
            }
        },
        changeCarID: (state, action) => {
            if (action.payload == "prev") {
                if (state.carID > 0) {
                    state.carID -= 1
                } else {
                    state.carID = 4
                }
                
            }
            if (action.payload == "next") {
                if (state.carID < 4) {
                    state.carID += 1
                } else {
                    state.carID = 0
                }
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { addMail, addPassword, handleConnection, handleLocation, handleDisconnect, handleAddtoCart, plusOne, minusOne, removeFromCart, getTotal, addCarousel, changeCarID } = loginSlice.actions

export default loginSlice.reducer