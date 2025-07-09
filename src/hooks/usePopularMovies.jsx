import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../redux/moviesSlice';
import { API_Options } from '../utils/constants';

const usePopularMovies = () => {

    //  FETCHING TOP RATED HERE

    const dispatch = useDispatch();

    const popularMovies = async () => { 
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_Options);
        const json = await data.json();
        dispatch(getPopularMovies(json.results))         
        }


        useEffect(()=>{
            popularMovies()
        },[]);


}

export default usePopularMovies