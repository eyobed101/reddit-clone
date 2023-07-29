import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig =  {
    apiKey: "AIzaSyCJnID6MfInsfg8Ou5b-Z4DfwDZSLXeq9U",
    authDomain: "reddit-c-fdde1.firebaseapp.com",
    projectId: "reddit-c-fdde1",
    storageBucket: "reddit-c-fdde1.appspot.com",
    messagingSenderId: "205576082562",
    appId: "1:205576082562:web:fedc35c42accc78c8c509b",
    measurementId: "G-CCWRN2KZ06"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();