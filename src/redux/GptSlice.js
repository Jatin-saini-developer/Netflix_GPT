import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false
    },
    reducers:{
        toogleGpt : (state)=>{
            state.showGptSearch = !state.showGptSearch;

        }
    }
});

export  const {toogleGpt} = gptSlice.actions;
export default gptSlice.reducer;