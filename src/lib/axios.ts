import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  timeout: 10000,
});

// Request interceptor (optional, e.g., for auth)
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens or other headers here
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Rate limit error (HTTP 429)
      if (error.response.status === 429) {
        // You can use a toast, modal, or any UI warning here
        console.warn("You are being rate limited. Please try again later.");
      }
      // Other error handling (401, 403, etc.)
      // if (error.response.status === 401) { ... }
    } else if (error.request) {
      // Network error
      console.warn("Network error. Please check your connection.");
    } else {
      // Other errors
      console.warn("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
