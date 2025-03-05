// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Updated import

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;