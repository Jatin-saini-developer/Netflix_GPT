import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getTrendingMovies } from '../redux/moviesSlice';
import { API_Options } from '../utils/constants';

const useTrendingMovies = () => {
    
    const dispatch = useDispatch();

    const trendingMovies = async () => { 
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_Options);
        const json = await data.json();
        console.log(json.results)
        dispatch(getTrendingMovies(json.results))         
        }


        useEffect(()=>{
            trendingMovies()
        },[]);

 
}

export default useTrendingMovies