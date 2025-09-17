import { createSlice } from "@reduxjs/toolkit";

/**
 * Config Slice
 *
 * Manages app configuration settings such as language preference.
 */
const configSlice = createSlice({
  name: "config",
  initialState: {
    // Default language
    lang: "en",
  },
  reducers: {
    /**
     * Change the app language
     * @param {Object} state - Current state
     * @param {Object} action - Redux action with payload as new language
     */
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

// Export the action for dispatching
export const { changeLanguage } = configSlice.actions;

// Export the reducer to include in store
export default configSlice.reducer;
