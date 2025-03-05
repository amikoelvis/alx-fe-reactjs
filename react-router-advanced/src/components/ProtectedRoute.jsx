// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;