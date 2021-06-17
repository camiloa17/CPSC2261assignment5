import React from 'react';
import Post from './Post'

const Posts = (props) => {
  const { posts, isLoading } = props;
  
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }
  
  return (
    <div className="container">
        <h2 className='list-head'>Posts</h2>
        {!isLoading && posts.map((post) => {
            return (
              <Post key={post.id} post={post}/>
            );
        })
        }
    </div>
  );
};
export default Posts;
