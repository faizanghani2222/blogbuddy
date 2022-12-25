import {createSlice} from "@reduxjs/toolkit"


const slice=createSlice({
    name:"auth",
    initialState:{username:null,token:null} ,
    reducers:{
        setCredentials:(
            state,
            {payload:{username,token}}
        )=>{
            state.username=username
            state.token=token
        }
    }
})

export const {setCredentials}=slice.actions;
export default slice.reducer

export const selectCurrentuser=(state)=>state.auth.username