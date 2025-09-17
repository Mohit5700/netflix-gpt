import React from "react";

// Component imports
import GPTSearchPage from "./GPTSearchPage";
import Header from "./Header";

/**
 * AISearch Component - Container component for the AI Search feature
 *
 * This component serves as the main layout wrapper for the AI search functionality.
 * It combines the Header navigation with the GPT-powered search interface.
 *
 * @returns {JSX.Element} The rendered AI search page with header and content
 */
const AISearch = () => {
  return (
    <div>
      {/* Global site header with navigation and user controls */}
      <Header />

      {/* Main AI search interface component */}
      <GPTSearchPage />
    </div>
  );
};

export default AISearch;
