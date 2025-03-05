// src/components/Blog.jsx
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  return <h3>Blog Post ID: {id}</h3>;
}

function Blog() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Blog Page</h2>
      <nav>
        <ul>
          <li><Link to="post/1">Post 1</Link></li>
          <li><Link to="post/2">Post 2</Link></li>
          <li><button onClick={() => navigate(-1)}>Go Back</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="post/:id" element={<BlogPost />} />
        <Route index element={<p>Select a blog post.</p>} />
      </Routes>
    </div>
  );
}

export default Blog;