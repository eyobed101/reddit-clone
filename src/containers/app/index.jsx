import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import config from './firebase-config';

const app = initializeApp(config);
const db = getFirestore(app);

function App() {
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
    <div className="App">
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          firebaseRef: db,
          posts: posts,
          loading: loading,
        })
      )}
    </div>
  );
}

export default App;
