import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getUpcomingMovies } from '../redux/moviesSlice';
import { API_Options } from '../utils/constants';


const useUpcomingMovies = () => {
     const dispatch = useDispatch();

    const upcomingMovies = async () => { 
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_Options);
        const json = await data.json();
        dispatch(getUpcomingMovies(json.results))         
        }


        useEffect(()=>{
            upcomingMovies();
        },[]);
 
}

export default useUpcomingMovies