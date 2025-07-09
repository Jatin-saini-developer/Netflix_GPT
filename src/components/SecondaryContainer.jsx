import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const moviesData = useSelector((store)=> store.movies);
  

  return (
    <div className='bg-black'>
      <div  className='-mt-49 relative z-50'>
      <MovieList title={"Now Playing"} movies={moviesData.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={moviesData.popularMovies}/>
      <MovieList title={"Trending"} movies={moviesData.trendingMovies}/>
      <MovieList title={"Upcoming"} movies={moviesData.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer