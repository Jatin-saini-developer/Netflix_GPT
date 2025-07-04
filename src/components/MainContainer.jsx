import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (!movies) return ;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {title, overview, id} = mainMovie

  return (
    <div className="mt-22">
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer