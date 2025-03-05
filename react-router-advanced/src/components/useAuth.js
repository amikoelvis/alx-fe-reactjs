// src/hooks/useAuth.js
import { useState, useCallback } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('authToken')
  );

  const login = useCallback(() => {
    localStorage.setItem('authToken', 'dummy-token');
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, login, logout };
}

export default useAuth;