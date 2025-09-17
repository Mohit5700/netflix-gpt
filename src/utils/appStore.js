import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

/**
 * Redux Store Configuration
 *
 * Combines all slice reducers into a single store.
 * Slices included:
 * - user: Manages user authentication and profile data
 * - movies: Manages movie lists and trailers
 * - gpt: Manages GPT-related state
 * - config: Stores app configuration and settings
 */
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
