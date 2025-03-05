// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Updated import
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; // Updated import
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
<<<<<<< HEAD

const Home = () => <h2>Home Page</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/blog/*" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
=======
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </AuthProvider>
>>>>>>> 5cd06315aaf2320787c627cd5af34f0e7910bf92
  );
}

export default App;