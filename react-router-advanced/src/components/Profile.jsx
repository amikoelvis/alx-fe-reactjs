import { Outlet, Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">Details</Link> |{' '}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;