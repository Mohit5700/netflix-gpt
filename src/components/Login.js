import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

/**
 * Login Component – Handles both Sign-In and Sign-Up flows.
 *
 * Key Features:
 * - Toggles between Sign-In and Sign-Up forms.
 * - Validates user inputs with a custom validation utility.
 * - Integrates Firebase Authentication for account creation and login.
 * - Displays friendly error messages for common auth failures.
 * - Uses TailwindCSS for responsive, centered layout with a background image.
 *
 * @returns {JSX.Element} Auth page with dynamic form and validation feedback.
 */
const Login = () => {
  // State for tracking form type and global error message
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // References for form input fields
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  /**
   * Toggle between Sign-In and Sign-Up forms.
   * Clears existing errors and resets all input fields.
   */
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (name.current) name.current.value = "";
  };

  /**
   * Validate user input and handle Firebase authentication.
   * Supports both account creation and user login.
   */
  const handleButtonClick = async () => {
    // Validate input values
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    if (message) {
      setErrorMessage(message);
      return;
    }

    try {
      if (!isSignInForm) {
        // ---------- Sign-Up Logic ----------
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        // Add display name to new account
        await updateProfile(user, { displayName: name.current.value });

        // Clear inputs after successful signup
        email.current.value = "";
        password.current.value = "";
        name.current.value = "";
      } else {
        // ---------- Sign-In Logic ----------
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        // Access user if needed: const user = userCredential.user;
        email.current.value = "";
        password.current.value = "";
      }

      // Remove previous errors on success
      setErrorMessage(null);
    } catch (error) {
      // Convert Firebase error codes to user-friendly messages
      let friendlyErrorMessage;
      switch (error.code) {
        case "auth/email-already-in-use":
          friendlyErrorMessage =
            "This email is already registered. Please sign in.";
          break;
        case "auth/invalid-email":
          friendlyErrorMessage = "Please enter a valid email address.";
          break;
        case "auth/weak-password":
          friendlyErrorMessage = "Password should be at least 6 characters.";
          break;
        case "auth/user-not-found":
          friendlyErrorMessage = "No account found with this email.";
          break;
        case "auth/invalid-credential":
          friendlyErrorMessage = "Incorrect password. Please try again.";
          break;
        default:
          friendlyErrorMessage = "An error occurred. Please try again.";
          console.error("Authentication error:", error);
      }
      setErrorMessage(friendlyErrorMessage);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Top navigation/header */}
      <Header />

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMAGE_URL}
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Auth Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleButtonClick();
        }}
        className="p-8 md:p-12 bg-black w-[30%] min-w-[350px] max-w-[450px]
                   absolute my-36 mx-auto left-0 right-0 rounded-md
                   text-white bg-opacity-80"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Full Name (Sign-Up only) */}
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 md:p-4 mb-3 md:mb-4 w-full rounded-md
                       bg-gray-700 placeholder-white text-sm md:text-base"
            type="text"
            placeholder="Full Name"
          />
        )}
        {errorMessage === "Name is not valid" && (
          <p className="text-red-500 font-bold mb-4">{errorMessage}</p>
        )}

        {/* Email Address */}
        <input
          ref={email}
          className="p-3 md:p-4 mb-3 md:mb-4 w-full rounded-md
                     bg-gray-700 placeholder-white text-sm md:text-base"
          type="text"
          placeholder="Email Address"
        />
        {errorMessage === "Email Address is not valid" && (
          <p className="text-red-500 font-bold mb-4">{errorMessage}</p>
        )}

        {/* Password */}
        <input
          ref={password}
          className="p-3 md:p-4 mb-3 md:mb-4 w-full rounded-md
                     bg-gray-700 placeholder-white text-sm md:text-base"
          type="password"
          placeholder="Password"
        />
        {errorMessage === "Password is not valid" && (
          <p className="text-red-500 font-bold mb-3 md:mb-4 text-sm md:text-base">
            {errorMessage}
          </p>
        )}

        {/* Generic Firebase errors */}
        {errorMessage &&
          ![
            "Name is not valid",
            "Email Address is not valid",
            "Password is not valid",
          ].includes(errorMessage) && (
            <p className="text-red-500 font-bold mb-3 md:mb-4 text-sm md:text-base">
              {errorMessage}
            </p>
          )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-700 w-full mb-6 md:mb-8 font-semibold p-2 rounded-md
                     cursor-pointer transition duration-300 hover:bg-red-800
                     text-sm md:text-base"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle between Sign-In / Sign-Up */}
        <p className="text-sm md:text-base" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span className="font-bold cursor-pointer hover:underline">
            {isSignInForm ? "Sign Up Now." : "Sign In Now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
