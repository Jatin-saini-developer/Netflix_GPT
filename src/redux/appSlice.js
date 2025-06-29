import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name : 'app',
    initialState: null,

    reducers:{
        addUser : (state, action )=>{
            return action.payload;
        },

        removeUser : (state, action)=>{
            return  null;
        }

    }
 })


 export const {addUser, removeUser } = appSlice.actions

 export default appSlice.reducer

