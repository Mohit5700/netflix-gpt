import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

/**
 * MovieCard Component – Displays a single movie poster thumbnail.
 *
 * This component renders an individual movie poster image using
 * the provided `posterPath`. It uses a fixed aspect ratio to
 * maintain a consistent card layout and includes subtle hover
 * effects for interactivity.
 *
 * Key Features:
 * - Receives a `posterPath` prop to build the complete poster URL.
 * - Returns null if no poster path is provided (avoids rendering empty cards).
 * - Uses Tailwind CSS for responsive sizing and hover animations.
 *
 * @param {Object} props
 * @param {string} props.posterPath - Relative path of the movie poster image.
 *
 * @returns {JSX.Element|null} A styled movie card or null when no poster path exists.
 */
const MovieCard = ({ posterPath }) => {
  // Guard clause: If no poster path is supplied, skip rendering
  if (!posterPath) return null;

  return (
    <div
      className="w-36 md:w-40 lg:w-44 xl:w-48 aspect-[2/3] overflow-hidden 
                 transform transition-transform duration-300 
                 hover:scale-105 hover:-translate-y-2"
    >
      {/* Movie poster image */}
      <img
        className="w-full h-full object-cover cursor-pointer"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
