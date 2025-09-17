import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

/**
 * MainContainer Component – Displays the primary hero movie section.
 *
 * This component highlights the first movie from the Redux store’s
 * `nowPlayingMovies` list. It shows a full-width background video
 * along with the movie’s title and overview for an eye-catching
 * hero/banner area.
 *
 * Key Points:
 * - Fetches the list of now-playing movies from Redux state.
 * - Selects the first movie in the array as the featured film.
 * - Passes movie details to VideoTitle and VideoBackground components.
 * - Handles the case where movies are not yet loaded by returning null.
 *
 * @returns {JSX.Element|null} A hero section with movie info and background video,
 *                             or null when no movies are available.
 */
const MainContainer = () => {
  // Retrieve currently playing movies from Redux store
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Guard clause: stop rendering until movies data is available
  if (!movies) return null;

  // Pick the first movie as the featured hero movie
  const mainMovie = movies[0];

  // Extract required properties for display
  const { title, overview, id } = mainMovie;

  return (
    <div className="bg-black pt-[20%] md:pt-[10%] xl:pt-0 pb-[15%] md:pb-[40%] lg:pb-[22%] xl:pb-0">
      {/* Display movie title and overview overlay */}
      <VideoTitle title={title} overview={overview} />

      {/* Play background trailer/video for the selected movie */}
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
