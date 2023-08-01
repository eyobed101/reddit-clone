import React from 'react'
import { PostsContext } from "../app/postContext";

export const Posts = () => {

    const { posts, loading } = useContext(PostsContext);
  
    if (loading) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          {posts.map((post,) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      );
    }

