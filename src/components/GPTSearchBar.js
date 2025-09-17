import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Utility imports
import lang from "../utils/languageConstants";
import ai from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";

// Redux actions
import { addGPTMovieResult, hideGPTInfo } from "../utils/gptSlice";

/**
 * GPTSearchBar Component
 *
 * Provides an AI-powered movie search bar:
 * - Accepts a user query and sends it to the Gemini AI model.
 * - AI responds with a list of 10 recommended movie titles.
 * - Each title is then searched in the TMDB API to fetch movie details.
 * - Final results are dispatched to Redux for display.
 *
 * Features:
 * - Uses a language-specific placeholder and button label (multi-language support).
 * - Handles errors gracefully, logging them and skipping failed requests.
 * - Prevents form submission page reload.
 *
 * @returns {JSX.Element} A centered search form with input and submit button.
 */
const GPTSearchBar = () => {
  /** Selected language code from global config (for placeholder & button text) */
  const userSelectedLangauge = useSelector((store) => store.config.lang);

  /** Ref to read the current input value without re-rendering */
  const searchText = useRef(null);

  /** Redux dispatch for triggering store updates */
  const dispatch = useDispatch();

  /**
   * Calls Gemini AI to get a comma-separated list of movie recommendations.
   * @param {string} query - User search input
   * @returns {Promise<object|null>} AI model response or null on error
   */
  const getAIMovieSuggestions = async (query) => {
    try {
      const prompt =
        "Act as a Movie Recommendation system and suggest some movies for the query " +
        query +
        ". Only give me names of 10 movies, comma separated like the example result given ahead. Example Result: War, Gadar, Sholay, Don, Jurassic World";

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      return response;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  /**
   * Fetches movie details from TMDB for a given movie title.
   * Attempts to find an exact match; falls back to the top result.
   * @param {string} movie - Movie title from AI
   * @returns {Promise<Array>} Array with a single best-match movie object
   */
  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          encodeURIComponent(movie.trim()) +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();

      // Attempt an exact match (case-insensitive)
      const exactMatch = json.results.find(
        (m) => m.title === movie.trim().toLowerCase()
      );

      return exactMatch ? [exactMatch] : json.results.slice(0, 1);
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  /**
   * Handles the AI search process:
   * 1. Gets AI recommendations.
   * 2. Searches each recommendation in TMDB.
   * 3. Dispatches the aggregated results to Redux.
   */
  const handleGPTSearchClick = async () => {
    if (searchText.current.value === "") return;

    const response = await getAIMovieSuggestions(searchText.current.value);
    if (!response) return;

    const movies = response.text.split(",");
    const data = await Promise.all(
      movies.map((movie) => searchMovieTMDB(movie))
    );

    dispatch(addGPTMovieResult(data));
    dispatch(hideGPTInfo());
  };

  return (
    <div className="mt-40 flex justify-center">
      <form
        className="w-11/12 md:max-w-3xl bg-black/80 rounded-lg p-4 flex gap-3"
        onSubmit={(e) => e.preventDefault()} // Prevent page reload on Enter
      >
        {/* User input field */}
        <input
          ref={searchText}
          type="text"
          className="flex-1 p-3 text-sm md:text-base rounded-lg outline-none"
          placeholder={lang[userSelectedLangauge].gptSearchPlaceholder}
        />

        {/* Submit button */}
        <button
          className="py-3 px-6 bg-red-700 text-white text-sm md:text-base font-semibold rounded-lg
                     hover:bg-red-800 transition"
          onClick={handleGPTSearchClick}
        >
          {lang[userSelectedLangauge].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
