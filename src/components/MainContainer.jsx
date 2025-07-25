import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (!movies) return ;

    const mainMovie = movies[0];

    const {title, overview, id} = mainMovie

  return (
    <div className="relative overflow-hidden">
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer