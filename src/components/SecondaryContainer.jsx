import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const moviesData = useSelector((store)=> store.movies);
  console.log(moviesData.nowPlayingMovies);
  

  return (
    <div>
      <MovieList title={"Now Playing"} movies={moviesData.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={moviesData.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={moviesData.nowPlayingMovies}/>
      <MovieList title={"Recommended"} movies={moviesData.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer