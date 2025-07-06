import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../utils/constants';
import { addNowPlayingMovies } from '../redux/moviesSlice';

const useVideoBackground = (movieId) => {

  const dispatch = useDispatch();
  const movieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_Options
    );
    const json = await data.json();

    const filterData = json.results?.filter( (video) => video.type === "Trailer" );
    const trailer = filterData[0];
    dispatch(addNowPlayingMovies(trailer));
  };

  useEffect(() => {
    movieTrailer();
  }, []);
}

export default useVideoBackground