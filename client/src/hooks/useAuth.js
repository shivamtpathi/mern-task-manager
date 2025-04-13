import { useState, useEffect } from "react";

export function useAuth() {
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    // Check if there is a token in localStorage
    const token = localStorage.getItem("token");

    if (token) {
      setAuthStatus(true); // User is authenticated
    } else {
      setAuthStatus(false); // User is not authenticated
    }
  }, []);

  return authStatus;
}
