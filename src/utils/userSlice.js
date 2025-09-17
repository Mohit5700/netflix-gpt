import { createSlice } from "@reduxjs/toolkit";

/**
 * User Slice
 *
 * Manages the user state for authentication or profile data.
 * The state is null when no user is logged in.
 */
const userSlice = createSlice({
  name: "user",
  initialState: null, // No user by default
  reducers: {
    /**
     * Set the user in the store
     * @param {Object} action.payload - User object containing user info
     */
    addUser: (state, action) => {
      return action.payload;
    },

    /**
     * Remove the user from the store (log out)
     */
    removeUser: () => {
      return null;
    },
  },
});

// Export actions for dispatching
export const { addUser, removeUser } = userSlice.actions;

// Export reducer to include in Redux store
export default userSlice.reducer;
