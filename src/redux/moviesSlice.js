import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies : null,
        nowPlayingTrailer: null
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingMovies: (state, action)=>{
             state.nowPlayingTrailer = action.payload;

        } 

    }
})


export default moviesSlice.reducer;
export const { setNowPlayingMovies, addNowPlayingMovies } = moviesSlice.actions;