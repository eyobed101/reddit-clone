import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const FirebaseConnection = () => {
  useEffect(() => {
    // Check if the Firebase connection is successful
    firebase
      .firestore()
      .enablePersistence()
      .then(() => {
        console.log('Firebase connection successful!');
      })
      .catch((error) => {
        console.log('Firebase connection failed:', error);
      });
  }, []);

  return null; // Since this component is only for the connection check, it doesn't render anything
};

export default FirebaseConnection;
