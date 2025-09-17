import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

/**
 * GPTWelcomeMessage Component – Introductory tips for AI movie search
 *
 * Displays a localized welcome message that guides users on how to use the AI
 * movie search feature. Content changes based on the language selected in the
 * global Redux store.
 */
const GPTWelcomeMessage = () => {
  // Get the currently selected language from Redux state
  const currentLanguage = useSelector((store) => store.config.lang);

  // Select the appropriate translations; default to English if not found
  const translation = lang[currentLanguage] || lang.en;

  return (
    <div
      className="
        max-w-3xl p-4 m-6 mt-10 md:mx-6 lg:mx-auto
        rounded-lg bg-black/75 text-white
      "
    >
      {/* Heading: AI movie discovery feature */}
      <h1 className="font-bold text-xl lg:text-3xl mb-4">
        🔍 {translation.gptMainHeading}
      </h1>

      {/* Body: introductory text and sample prompts */}
      <div className="text-base md:text-lg leading-relaxed">
        {/* Introductory paragraph */}
        <p className="mb-2">{translation.gptIntro}</p>

        {/* Example prompts list */}
        <ul className="list-disc ml-6 mb-3">
          {translation.gptExamples.map((example, index) => (
            <li key={index} className="mb-2">
              {example}
            </li>
          ))}
        </ul>

        {/* Closing paragraph */}
        <p>{translation.gptOutro}</p>
      </div>
    </div>
  );
};

export default GPTWelcomeMessage;
