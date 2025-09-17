import React from "react";

// Component imports
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

// Custom hook imports for data fetching
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

/**
 * Browse Component - Main browsing interface for authenticated users
 *
 * This component serves as the main dashboard for browsing movies.
 * It fetches various categories of movies using custom hooks and
 * displays them in organized sections.
 *
 * Features:
 * - Fetches now playing, popular, top rated, and upcoming movies
 * - Displays featured movie in main container
 * - Shows categorized movie lists in secondary container
 * - Includes navigation header
 *
 * @returns {JSX.Element} The browse interface with movie content
 */
const Browse = () => {
  /**
   * Fetch movie data for different categories
   * Each custom hook handles its own data fetching and Redux state management
   */
  useNowPlayingMovies(); // Fetches currently playing movies
  usePopularMovies(); // Fetches popular movies
  useTopRatedMovies(); // Fetches top rated movies
  useUpcomingMovies(); // Fetches upcoming movies

  return (
    <div>
      {/* Navigation header with user controls */}
      <Header />

      {/* Featured movie section with trailer and primary information */}
      <MainContainer />

      {/* Secondary content with categorized movie lists */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
