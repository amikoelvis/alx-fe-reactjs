import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="/profile" activeClassName="active">
        Profile
      </NavLink>{' '}
      |{' '}
      <NavLink to="/blog/123" activeClassName="active">
        Sample Blog
      </NavLink>
    </nav>
  );
}

export default Navbar;