import {createApi,BaseQueryApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const UserAuthAPI=createApi({
    reducerPath:"UserApis",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://mock15-bhoj.onrender.com/"
    }),
    endpoints:(builder)=>({
        createSignUp:builder.mutation({
            query:(data)=>({
                url:"/user",
                body:data,
                method:"POST"
            }),
        }),
    }),

});


export default UserAuthAPI;
export const {useCreateSignUpMutation}=UserAuthAPI