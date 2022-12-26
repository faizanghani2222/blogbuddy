import {createSlice} from "@reduxjs/toolkit"


const slice=createSlice({
    name:"auth",
    initialState:{email:null,token:null} ,
    reducers:{
        setCredentials:(
            state,
            {payload:{email,token}}
        )=>{
            state.email=email
            state.token=token
        }
    }
})

export const {setCredentials}=slice.actions;
export default slice.reducer

export const selectCurrentuser=(state)=>state.auth.email