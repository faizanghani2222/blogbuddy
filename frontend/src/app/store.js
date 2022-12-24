import { configureStore } from "@reduxjs/toolkit";

import UserAuthAPI from "./CreateAuth";

const store=configureStore({
    reducer:{
        [UserAuthAPI.reducerPath]:UserAuthAPI.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(UserAuthAPI.middleware)
})

export default store