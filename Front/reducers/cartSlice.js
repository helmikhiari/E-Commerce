const { createSlice } = require("@reduxjs/toolkit")


const initialState =
{
    cart: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers:
    {
        setCart: (state, action) => {
            state.cart = [...action.payload]
        },
        setPrice: (state, action) => {
            console.log("rani nekdhem");
            state.totalPrice = action.payload;
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(variant => variant._id != action.payload)
        },
        plusQuantity: (state, action) => {
            const index = state.cart.findIndex((variant) => variant.variantID == action.payload);
            if (index >= 0)
                state.cart[index].quantity++;
        },
        minusQuantity: (state, action) => {
            const index = state.cart.findIndex((variant) => variant.variantID == action.payload);
            if (index >= 0)
                state.cart[index].quantity--;
        }
    }
})

export const { setPrice, setCart, deleteFromCart, plusQuantity, minusQuantity } = cartSlice.actions;
export default cartSlice.reducer;