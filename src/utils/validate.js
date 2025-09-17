/**
 * Validate user input data for signup or profile form
 *
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @param {string} name - User's full name
 * @returns {string|null} Error message if invalid, or null if all data is valid
 */
export const checkValidData = (email, password, name) => {
  // Regex to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex to validate password:
  // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  // Regex to validate name: letters only, allowing spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z]+([ \-'][a-zA-Z]+)*$/;

  // Perform validations
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  const isNameValid = nameRegex.test(name);

  // Return appropriate error message if invalid
  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email Address is not valid";
  if (!isPasswordValid) return "Password is not valid";

  // Return null if all inputs are valid
  return null;
};
