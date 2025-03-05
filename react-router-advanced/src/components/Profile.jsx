// src/components/Profile.jsx
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const ProfileDetails = () => <h3>Profile Details</h3>;
const ProfileSettings = () => <h3>Profile Settings</h3>;

function Profile() {
  const navigate = useNavigate(); // For programmatic navigation

  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Details</Link></li>
          <li><Link to="settings">Settings</Link></li>
          <li><button onClick={() => navigate(-1)}>Go Back</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route index element={<p>Please select a section.</p>} />
      </Routes>
    </div>
  );
}

export default Profile;