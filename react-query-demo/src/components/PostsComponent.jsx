import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5,          // Cache data for 5 minutes
    staleTime: 1000 * 60 * 2,          // Mark data as fresh for 2 minutes
    refetchOnWindowFocus: false,       // Disable refetching when window gains focus
    keepPreviousData: true,            // Keep previous data while new data is being fetched
  });

  // Manually define isError
  const isError = !!error;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: '10px' }}>
        Refetch Posts
      </button>
      {data.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
