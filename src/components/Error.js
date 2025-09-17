import React from "react";
import { useRouteError } from "react-router-dom";

/**
 * Error Component - Displays error information when route navigation fails
 *
 * This component is used as an error boundary in React Router.
 * It catches and displays errors that occur during route navigation,
 * such as failed data loading or invalid routes.
 *
 * @returns {JSX.Element} Error display with status code and message
 */
const Error = () => {
  /**
   * useRouteError hook provides error information from React Router
   * Contains details about what went wrong during navigation
   */
  const err = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        {/* Error status code and message */}
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h1>

        {/* Detailed error information */}
        <div className="text-gray-700">
          <p className="text-lg font-semibold">
            {err.status}: {err.statusText}
          </p>
          {err.data && <p className="mt-2 text-sm">{err.data}</p>}
        </div>

        {/* Suggested action for user */}
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => (window.location.href = "/")}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
