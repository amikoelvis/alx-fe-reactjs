// src/components/Navbar.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Updated import

function Navbar() {
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
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'active' : '')}
        end
      >
        Profile
      </NavLink>{' '}
      |{' '}
      <NavLink
        to="/blog/123"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Sample Blog
      </NavLink>{' '}
      |{' '}
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;