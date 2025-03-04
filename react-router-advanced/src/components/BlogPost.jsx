import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  
  return (
    <div>
      <h2>Blog Post</h2>
      <p>Viewing post ID: {postId}</p>
    </div>
  );
}

export default BlogPost;