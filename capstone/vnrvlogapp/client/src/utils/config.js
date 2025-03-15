// Determine if we're in development mode
const isDevelopment = import.meta.env.MODE === "development";

// Get the base URL based on environment
export const getBaseUrl = () => {
  return isDevelopment ? "http://localhost:4000" : "https://vnrvlogapp.onrender.com"; // Backend URL on Render
};