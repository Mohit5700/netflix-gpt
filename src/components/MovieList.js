import React from "react";
import MovieCard from "./MovieCard";

/**
 * MovieList Component – Horizontal scrollable list of movie cards.
 *
 * Renders a titled row of movie posters using the MovieCard component.
 * Supports horizontal scrolling with hidden scrollbars for a clean UI.
 *
 * Key Features:
 * - Displays an optional section title.
 * - Skips rendering when there are no movies to display.
 * - Uses flexbox and Tailwind utilities for a responsive, scrollable row.
 *
 * @param {Object} props
 * @param {string} props.title - Optional section heading (e.g., "Trending Now").
 * @param {Array} props.movies - Array of movie objects with `id` and `poster_path`.
 *
 * @returns {JSX.Element|null} Scrollable movie list or null if no movies provided.
 */
const MovieList = ({ title, movies }) => {
  // Guard clause: Avoid rendering if movies array is empty or undefined
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-4">
      {/* Section heading (renders only if title exists) */}
      {title && <h1 className="text-lg md:text-xl mb-4 text-white">{title}</h1>}

      {/* Scrollable row of movie posters */}
      <div
        className="flex overflow-x-auto mb-5 
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="flex gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
