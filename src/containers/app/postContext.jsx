import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import config from './firebase-config';

const app = initializeApp(config);
const db = getFirestore(app);

export const PostsContext = createContext();

export function PostsProvider(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postsRef = collection(db, 'reddit-clone');
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(postsRef);
        const fetchedPosts = querySnapshot.docs.map((doc) => doc.data());
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading }}>
      {props.children}
    </PostsContext.Provider>
  );
}
