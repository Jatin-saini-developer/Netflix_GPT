import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="bg-black text-white pt-6">

      <h1 className="font-bold  text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll "  style={{ scrollbarWidth: 'none' }}>
        
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
