import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

/**
 * Custom hook: useTopRatedMovies
 *
 * Fetches the list of top-rated movies from TMDB API and stores it in Redux.
 * Ensures the data is fetched only if it is not already present in the store.
 */
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // Retrieve top-rated movies from Redux store
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  // Fetch movies if not already present
  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies();
  }, []);

  /**
   * Fetch top-rated movies from TMDB API
   */
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      // Store results in Redux
      dispatch(addTopRatedMovies(json.results));
    } catch (err) {
      console.error("Failed to fetch top-rated movies:", err);
    }
  };
};

export default useTopRatedMovies;
