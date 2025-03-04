import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
        Profile
      </NavLink>{' '}
      |{' '}
      <NavLink to="/blog/123" className={({ isActive }) => (isActive ? 'active' : '')}>
        Sample Blog
      </NavLink>{' '}
      |{' '}
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;