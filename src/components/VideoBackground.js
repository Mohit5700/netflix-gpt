import React from "react";
import { useSelector } from "react-redux";

// Custom hook import
import useMovieTrailer from "../hooks/useMovieTrailer";

/**
 * VideoBackground Component - Displays movie trailer as a full-screen background
 * 
 * This component renders a YouTube iframe that automatically plays a movie trailer
 * in a loop with muted audio. It's designed to serve as a background video element
 * behind the main content.
 * 
 * Features:
 * - Automatically fetches and plays movie trailer
 * - Muted, looping playback with autoplay
 * - YouTube player customization (no controls, no branding)
 * - Gradient overlay for better text readability
 * - Responsive aspect ratio maintenance
 * 
 * @param {Object} props - Component props
 * @param {string} props.movieId - TMDB movie ID used to fetch the trailer
 * @returns {JSX.Element} YouTube iframe with trailer or null if no trailer available
 */
const VideoBackground = ({ movieId }) => {
  /**
   * Retrieve trailer video data from Redux store
   * Contains trailer key and metadata for YouTube embedding
   */
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  /**
   * Custom hook that fetches movie trailer based on movieId
   * Handles API call and stores result in Redux store
   */
  useMovieTrailer(movieId);
  
  // Return null if no trailer is available to prevent rendering empty iframe
  if (!trailerVideo) return null;
  
  return (
    <div className="w-screen aspect-video pointer-events-none">
      {/* 
        YouTube iframe with customized player parameters:
        - autoplay: Automatically starts playback
        - mute: Audio is muted
        - loop: Video loops continuously
        - controls=0: Hides player controls
        - modestbranding=1: Reduces YouTube branding
        - showinfo=0: Hides video information
        - rel=0: Disables related videos at end
      */}
      <iframe
        className="w-full h-full object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key +
          "&controls=0&modestbranding=1&showinfo=0&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="eager"
      ></iframe>
      
      {/* 
        Gradient overlay applied on top of the video
        - Creates better contrast for overlaid text content
        - Darkens top and bottom edges for improved readability
        - Maintains video visibility in the center
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
    </div>
  );
};

export default VideoBackground;