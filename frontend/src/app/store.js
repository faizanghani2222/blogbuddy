import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Components/AuthSlice"
import UserAuthAPI from "./CreateAuth";

const store=configureStore({
    reducer:{
        [UserAuthAPI.reducerPath]:UserAuthAPI.reducer,
        auth:authReducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(UserAuthAPI.middleware)
})

export default store