import React from "react";
import { useSelector } from "react-redux";

import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  useVideoBackground(movieId);
  const trailerVideo = useSelector((state) => state.movies?.nowPlayingTrailer);

  return (
    <div >
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/` + trailerVideo?.key+  "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
