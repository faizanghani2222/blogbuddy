import {createApi,BaseQueryApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const UserAuthAPI=createApi({
    reducerPath:"UserApis",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/user"
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