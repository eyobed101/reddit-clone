import React, { useState, useContext } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { PostsContext } from '../app/postContext';

function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { posts } = useContext(PostsContext);
  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPost = {
        title: title,
        content: content,
      };

      const docRef = await addDoc(collection(db, 'reddit-clone'), newPost);
      console.log('New post added with ID: ', docRef.id);

      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
