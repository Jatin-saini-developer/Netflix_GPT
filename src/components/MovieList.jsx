import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="bg- text-white pt-6">
      <h1 className="px-3 py-3 font-bold  text-3xl">{title}</h1>
      <div
        className="flex overflow-x-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          {Array.isArray(movies) ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="px-3">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
