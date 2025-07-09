import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies : null,
        nowPlayingTrailer: null,
        popularMovies: null,
        upcomingMovies: null,
        trendingMovies: null
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingMovies: (state, action)=>{
             state.nowPlayingTrailer = action.payload;
        },
        getPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        getUpcomingMovies: (state, action) =>{
            state.upcomingMovies= action.payload;

        },
        getTrendingMovies: (state, action) =>{
            state.trendingMovies = action.payload;

        }
        


    }
})


export default moviesSlice.reducer;
export const { setNowPlayingMovies, addNowPlayingMovies, getPopularMovies, getUpcomingMovies, getTrendingMovies} = moviesSlice.actions;