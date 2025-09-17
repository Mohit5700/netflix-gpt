import React from "react";
import { useSelector } from "react-redux";

// Component imports
import MovieList from "./MovieList";

/**
 * SecondaryContainer Component - Displays categorized movie lists below the main featured content
 *
 * This component renders multiple horizontal scrolling lists of movies in different categories.
 * It appears below the main featured movie container and provides browsing options for users.
 *
 * Features:
 * - Displays Now Playing movies
 * - Shows Popular movies
 * - Renders Top Rated movies
 * - Lists Upcoming movies
 * - Responsive design with negative margin overlay on desktop
 *
 * @returns {JSX.Element} Container with multiple categorized movie lists
 */
const SecondaryContainer = () => {
  /**
   * Retrieve movies data from Redux store
   * Contains nowPlayingMovies, popularMovies, topRatedMovies, and upcomingMovies
   */
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      {/* 
        Container with negative margin on desktop to overlay main content
        and standard padding for mobile layout
      */}
      <div className="mt-0 md:-mt-80 relative z-20 md:px-8">
        {/* Now Playing Movies List */}
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />

        {/* Popular Movies List */}
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />

        {/* Top Rated Movies List */}
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />

        {/* Upcoming Movies List */}
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
