import React from "react";

/**
 * VideoTitle Component - Displays movie title and information overlay on video background
 *
 * This component renders an informational overlay on top of the video background,
 * showing the movie title, overview, and action buttons. It features responsive
 * design that adapts to different screen sizes.
 *
 * Features:
 * - Responsive typography scaling from mobile to desktop
 * - Gradient background for text readability over video
 * - Play and More Info buttons with hover effects
 * - Adaptive layout and spacing across screen sizes
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Movie title to display
 * @param {string} props.overview - Movie description/synopsis
 * @returns {JSX.Element} Movie information overlay with action buttons
 */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-6 md:px-14 lg:px-14 xl:px-18 pt-[15%] md:pt-[20%] lg:pt-[20%] xl:pt-[15%] absolute text-white bg-gradient-to-r from-black via-black/70 to-transparent">
      {/* Movie Title - Responsive font sizing */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
        {title}
      </h1>

      {/* Movie Overview/Description - Responsive width and text sizing */}
      <p className="py-3 md:py-4 lg:py-6 w-[80%] lg:w-3/5 xl:w-2/5 text-xs md:text-base leading-relaxed">
        {overview}
      </p>

      {/* Action Buttons Container */}
      <div className="flex gap-2 mt-4">
        {/* Play Button */}
        <button className="bg-white text-black font-semibold text-sm md:text-base w-28 py-1.5 px-1.5 md:px-4 flex justify-center items-center gap-1 cursor-pointer rounded-md hover:bg-opacity-70 transition-all">
          {/* Play Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button className="bg-gray-500/80 text-white font-semibold text-sm w-36 md:text-base py-1.5 px-1.5 md:px-4 md:py-2 flex justify-center items-center gap-1 cursor-pointer rounded-md hover:bg-gray-600 transition-all">
          {/* Info Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
