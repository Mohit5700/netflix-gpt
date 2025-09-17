import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

/**
 * Custom hook: useUpcomingMovies
 *
 * Fetches the list of upcoming movies from TMDB API and stores it in Redux.
 * Ensures the data is fetched only if it is not already present in the store.
 */
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  // Retrieve upcoming movies from Redux store
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  // Fetch movies if not already present
  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);

  /**
   * Fetch upcoming movies from TMDB API
   */
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      // Store results in Redux
      dispatch(addUpcomingMovies(json.results));
    } catch (err) {
      console.error("Failed to fetch upcoming movies:", err);
    }
  };
};

export default useUpcomingMovies;
