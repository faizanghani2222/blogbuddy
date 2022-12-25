import {
  createApi,
  BaseQueryApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const UserAuthAPI = createApi({
  reducerPath: "UserApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    createSignUp: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        body: data,
        method: "POST",
      }),
    }),
    createSignIn: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export default UserAuthAPI;
export const { useCreateSignUpMutation, useCreateSignInMutation } = UserAuthAPI;
