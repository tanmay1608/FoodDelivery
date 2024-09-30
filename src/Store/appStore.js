import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/cartSlice"
//we have to add our slice into our store
const appStore=configureStore({
    reducer:{
    cart:cartReducer,
    }
});



export default appStore;