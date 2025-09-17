import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Utils & Constants
import { auth } from "../utils/firebase";
import {
  LOGO_URL,
  SIGN_OUT_LOGO,
  SUPPORTED_LANGUAGES,
  USER_LOGO_URL,
  AI_ICON,
} from "../utils/constants";

// Redux actions
import { addUser, removeUser } from "../utils/userSlice";
import { removeGPTMovieResult, showGPTInfo } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

/**
 * Header Component – Top navigation bar with logo, AI search toggle,
 * language selector, and user account controls.
 *
 * Responsibilities:
 * - Listens to Firebase authentication changes and updates Redux state.
 * - Provides navigation between Browse and AI Search pages.
 * - Allows users to change the application language.
 * - Handles user sign-out and redirects appropriately.
 *
 * Features:
 * - Clickable Netflix logo for quick navigation.
 * - Language dropdown (only on AI Search page).
 * - AI Search toggle button to switch between AI search and Browse.
 * - User avatar and sign-out icon.
 *
 * @returns {JSX.Element} Fully responsive header bar with interactive controls.
 */
const Header = () => {
  // Redux and router hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current page context
  const isAISearchPage = location.pathname === "/browse/ai-search";
  const isLoginPage = location.pathname === "/";

  // Current authenticated user (from Redux)
  const user = useSelector((store) => store.user);

  /**
   * Monitor Firebase auth state.
   * - Adds user to Redux on login.
   * - Removes user and resets GPT state on logout.
   * - Redirects to appropriate page when state changes.
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));

        // Redirect to /browse if user logs in from root path
        if (
          window.location.pathname === "/" ||
          window.location.pathname === ""
        ) {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        dispatch(removeGPTMovieResult());
        dispatch(showGPTInfo());
        navigate("/");
      }
    });

    // Cleanup auth listener on unmount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  /**
   * Sign the user out of Firebase.
   */
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  /**
   * Toggle between AI Search and Browse pages.
   * Clears GPT results before navigation.
   * Change the language default to English
   */
  const handleGPTSearchClick = () => {
    dispatch(removeGPTMovieResult());
    dispatch(showGPTInfo());
    dispatch(changeLanguage("en"));
    navigate(isAISearchPage ? "/browse" : "/browse/ai-search");
  };

  /**
   * Change application language (Redux).
   * Triggered when user selects a new option from the dropdown.
   */
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  /**
   * Navigate to Browse page when logo is clicked.
   * Resets GPT-related state except on login page.
   */
  const handleLogoClick = () => {
    if (isLoginPage) return;
    dispatch(removeGPTMovieResult());
    dispatch(showGPTInfo());
    navigate("/browse");
  };

  return (
    <div
      className="
        absolute top-0 left-0 w-full px-4 md:px-8 py-3
        bg-gradient-to-b from-black z-10
        flex items-center justify-between
      "
    >
      {/* Netflix logo – returns to Browse page when clicked */}
      <img
        className="w-28 md:w-44 cursor-pointer"
        onClick={handleLogoClick}
        src={LOGO_URL}
        alt="Netflix logo"
      />

      {/* Right section – visible only when user is authenticated */}
      {user && (
        <div className="flex items-center gap-4 md:gap-6 md:mr-4">
          {/* Language selector – visible only on AI Search page */}
          {isAISearchPage && (
            <select
              className="
                py-1 px-2 md:py-2 md:px-4 bg-black/70 text-white rounded-md
                border border-gray-600 hover:border-gray-400 focus:outline-none
                text-sm md:text-base
              "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* AI Search / Browse toggle button */}
          <button
            className="
              flex items-center justify-center gap-2 py-1 px-2 md:py-2 md:px-4
              bg-gradient-to-r from-purple-600 to-indigo-600
              text-white rounded-lg font-medium
              hover:from-purple-700 hover:to-indigo-700
              text-sm md:text-base whitespace-nowrap
            "
            onClick={handleGPTSearchClick}
          >
            {isAISearchPage ? "Browse Movies" : <>{AI_ICON}AI Search</>}
          </button>

          {/* User avatar and sign-out icon */}
          <div className="flex items-center gap-3">
            {!isAISearchPage && (
              <img
                className="w-7 h-7 md:w-9 md:h-9 rounded-full border border-gray-600 cursor-pointer"
                src={USER_LOGO_URL}
                alt="User profile"
              />
            )}
            <img
              className="
                w-7 h-7 md:w-9 md:h-9 bg-red-600 rounded-full
                hover:bg-red-700 transition-colors cursor-pointer
              "
              src={SIGN_OUT_LOGO}
              alt="Sign out"
              onClick={handleSignOut}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
