import { createSlice } from "@reduxjs/toolkit";

/**
 * Movies Slice
 *
 * Manages state for different categories of movies and trailer videos.
 * Includes now playing, popular, top-rated, and upcoming movies.
 */
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // Currently selected trailer video
    trailerVideo: null,
    // List of movies currently playing in theaters
    nowPlayingMovies: null,
    // List of popular movies
    popularMovies: null,
    // List of top-rated movies
    topRatedMovies: null,
    // List of upcoming movies
    upcomingMovies: null,
  },
  reducers: {
    /**
     * Set now playing movies
     * @param {Object} action.payload - Array of now playing movies
     */
    addNowPlayingMoves: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    /**
     * Set popular movies
     * @param {Object} action.payload - Array of popular movies
     */
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    /**
     * Set top-rated movies
     * @param {Object} action.payload - Array of top-rated movies
     */
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    /**
     * Set upcoming movies
     * @param {Object} action.payload - Array of upcoming movies
     */
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    /**
     * Set trailer video for a movie
     * @param {Object} action.payload - Trailer video object
     */
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

// Export actions for dispatching
export const {
  addNowPlayingMoves,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

// Export reducer to include in Redux store
export default moviesSlice.reducer;
