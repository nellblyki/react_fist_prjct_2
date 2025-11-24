import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const productIndex = state.findIndex(item => item.id === product.id)
            if (productIndex === -1) {
                state.push({ ...product, quantity: 1 })
            } else {
                state[productIndex].quantity++
            }
        },
        deleteFromCart: (state, action) => {
            const product = action.payload
            const productIndex = state.findIndex(item => item.id === product.id)
            state.splice(productIndex, 1)
        },
    }
})
const SliceTwo = createSlice({
    name: 'Theme',
    initialState: 'light',
    reducers: {
        changeTheme: (state, action) =>{
            const initial = action.payload
            if(initial === 'dark'){
                
            }
        }
    }
})
export const { addToCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer