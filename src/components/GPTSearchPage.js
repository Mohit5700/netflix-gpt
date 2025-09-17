import React from "react";
import { useSelector } from "react-redux";

// Component imports
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTWelcomeMessage from "./GPTWelcomeMessage";

// Constants
import { BACKGROUND_IMAGE_URL } from "../utils/constants";

/**
 * GPTSearchPage Component
 *
 * Acts as the main container for the AI-powered search experience.
 * Responsibilities:
 * - Displays a full-screen background image with a dark overlay.
 * - Renders the GPT search bar for user queries.
 * - Optionally shows a welcome/info message if GPTInfo is true in Redux state.
 * - Renders AI-generated movie suggestions when available.
 *
 * @returns {JSX.Element} The complete AI search page layout.
 */
const GPTSearchPage = () => {
  /** Flag from Redux to decide whether to show the welcome/info message */
  const GPTInfo = useSelector((store) => store.gpt.GPTInfo);

  return (
    <div>
      {/* Fullscreen background with semi-transparent dark overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMAGE_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* AI-powered movie search bar */}
      <GPTSearchBar />

      {/* Conditional welcome/info message displayed before search */}
      {GPTInfo && <GPTWelcomeMessage />}

      {/* Section to show AI-generated movie suggestions */}
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
