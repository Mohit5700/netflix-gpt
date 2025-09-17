import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component imports
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import AISearch from "./AISearch";

/**
 * Body Component - Main router configuration for the application
 *
 * This component sets up the application routing using React Router.
 * It defines all the possible routes and their corresponding components.
 *
 * @returns {JSX.Element} The router provider with configured routes
 */
const Body = () => {
  /**
   * Router configuration defining all application routes
   * Each route maps a URL path to a specific component
   */
  const appRouter = createBrowserRouter([
    {
      path: "/", // Root path - Login page
      element: <Login />,
      errorElement: <Error />, // Error boundary for this route
    },
    {
      path: "/browse", // Main browsing interface
      element: <Browse />,
      errorElement: <Error />,
    },
    {
      path: "/browse/ai-search", // AI-powered search feature
      element: <AISearch />,
      errorElement: <Error />,
    },
  ]);

  return (
    <div>
      {/* Provider that makes the router available to all child components */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
