const { createSlice } = require("@reduxjs/toolkit")


const initialState=
{
    cart:[]
}

const cartSlice=createSlice({
    initialState,
    name:"cart",
    reducers:
    {
        setCart:(state,action)=>
        {
            state.cart=[...action.payload]
        },
        addToCart:(state,action)=>
        {
            state.cart.push({variantID:action.payload.variantID,quantity:action.payload.quantity});
        },
        deleteFromCart:(state,action)=>
        {
        state.cart=state.cart.filter(variant=>variant._id!=action.payload)
        },
        plusQuantity:(state,action)=>{
            const index=state.cart.findIndex((variant)=>variant.variantID==action.payload);
            if (index>=0)
                state.cart[index].quantity++;
        },
        minusQuantity:(state,action)=>
        {
            const index=state.cart.findIndex((variant)=>variant.variantID==action.payload);
            if (index>=0)
                state.cart[index].quantity--;
        }
    }
})

export const {addToCart,setCart,deleteFromCart,plusQuantity,minusQuantity}=cartSlice.actions;
export default cartSlice.reducer;