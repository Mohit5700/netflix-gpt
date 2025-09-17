import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

/**
 * Custom hook: usePopularMovies
 *
 * Fetches the list of popular movies from TMDB API and stores it in Redux.
 * Ensures the data is fetched only if it is not already present in the store.
 */
const usePopularMovies = () => {
  const dispatch = useDispatch();

  // Retrieve popular movies from Redux store
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  // Fetch movies if not already present
  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);

  /**
   * Fetch popular movies from TMDB API
   */
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=2",
        API_OPTIONS
      );

      const json = await data.json();

      // Store results in Redux
      dispatch(addPopularMovies(json.results));
    } catch (err) {
      console.error("Failed to fetch popular movies:", err);
    }
  };
};

export default usePopularMovies;
