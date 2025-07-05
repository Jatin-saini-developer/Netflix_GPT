import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { setNowPlayingMovies } from "../redux/moviesSlice";


const useNowPlayingMovies = ()=>{
     const dispatch = useDispatch();

  const getNowPlayingMovie = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Options)
    const res = await data.json();
    dispatch(setNowPlayingMovies(res.results));
    console.log(res.results);

 
  }

      useEffect(() => {
      getNowPlayingMovie()
    }, [])

};


export default useNowPlayingMovies;