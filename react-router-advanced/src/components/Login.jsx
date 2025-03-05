// src/components/Login.jsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Updated import

function Login() {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile', { replace: true });
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  );
}

export default Login;