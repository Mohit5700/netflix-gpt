import React from "react";
import { useSelector } from "react-redux";

// Component imports
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

/**
 * GPTMovieSuggestions Component – Displays AI-generated movie recommendations
 *
 * Fetches AI-generated movie results from the Redux store and presents them
 * in a single list using the MovieList component.
 */
const GPTMovieSuggestions = () => {
  // Retrieve AI-generated movie list from Redux
  const movieList = useSelector((store) => store.gpt.movieList);

  // Get the current language setting from Redux
  const currentLanguage = useSelector((store) => store.config.lang);

  // Pick the correct translations, falling back to English if missing
  const translation = lang[currentLanguage] || lang.en;

  // Exit early if no AI movie recommendations exist
  if (!movieList) return null;

  /**
   * Flatten all category arrays into a single array of movie objects.
   * The GPT response can be nested (e.g., grouped by genre),
   * but we display them as one combined list.
   */
  const allMovies = movieList.flat();

  // Localized section title with an emoji accent
  const title = `${translation.aiPicks} 🎬`;

  return (
    <div
      className="
        p-4 m-4 mt-10
        bg-black bg-opacity-75
        text-white rounded-lg
      "
    >
      {/* Render the reusable MovieList component with the AI Picks title */}
      <MovieList title={title} movies={allMovies} />
    </div>
  );
};

export default GPTMovieSuggestions;
