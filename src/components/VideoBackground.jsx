import React from "react";
import { useSelector } from "react-redux";

import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  useVideoBackground(movieId);
  const trailerVideo = useSelector((state) => state.movies?.nowPlayingTrailer);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        // src={`https://www.youtube.com/embed/` + trailerVideo?.key+  "?&autoplay=1&mute=1"}
        // src={`https://www.youtube.com/embed/${trailerVideo?.key}?rel=0&modestbranding=1&showinfo=0&autoplay=1&mute=1&controls=1`}
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
