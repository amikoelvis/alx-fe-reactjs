// src/components/BlogPost.jsx
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  console.log('BlogPost.jsx rendered, id:', id);
  return (
    <div>
      <h3>Blog Post Test</h3>
      <p>ID from params: {id}</p>
    </div>
  );
}

export default BlogPost;