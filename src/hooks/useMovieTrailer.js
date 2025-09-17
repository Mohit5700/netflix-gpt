import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

/**
 * Custom hook: useMovieTrailer
 *
 * Fetches the trailer video for a given movie and stores it in Redux.
 * This hook ensures the trailer is fetched only if it's not already present in the store.
 *
 * @param {string | number} movieId - The ID of the movie to fetch the trailer for
 */
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Retrieve trailer video from Redux store
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    // Fetch trailer only if it's not already in the store
    if (!trailerVideo) getMovieTrailer();
  }, []);

  /**
   * Fetches the trailer video from TMDB API
   */
  const getMovieTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await data.json();

      // Find the first video with type "Trailer"
      const trailer = json.results.find((video) => video.type === "Trailer");

      // Dispatch to Redux store
      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.error("Failed to fetch movie trailer:", err);
    }
  };
};

export default useMovieTrailer;
