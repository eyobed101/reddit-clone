import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "./postContext";

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import config from './firebase-config';

// const app = initializeApp(config);
// const db = getFirestore(app);

function App() {
  const { posts, loading } = useContext(PostsContext);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const postsRef = collection(db, 'reddit-clone');
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(postsRef);
  //       const fetchedPosts = querySnapshot.docs.map((doc) => doc.data());
  //       setPosts(fetchedPosts);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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

export default App;
