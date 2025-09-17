import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMoves } from "../utils/moviesSlice";

/**
 * Custom hook: useNowPlayingMovies
 *
 * Fetches the list of currently playing movies from TMDB API and stores it in Redux.
 * Ensures the data is fetched only if it is not already present in the store.
 */
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // Retrieve now playing movies from Redux store
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  /**
   * Fetch now playing movies from TMDB API
   */
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();

      // Store the results in Redux
      dispatch(addNowPlayingMoves(json.results));
    } catch (err) {
      console.error("Failed to fetch now playing movies:", err);
    }
  };

  // Fetch movies if not already present
  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
