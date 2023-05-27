import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyABlQLPRaQ02bfRXHU45neWFsmiVfAbgGQ",
  authDomain: "typing-tester-45e56.firebaseapp.com",
  projectId: "typing-tester-45e56",
  storageBucket: "typing-tester-45e56.appspot.com",
  messagingSenderId: "14681794151",
  appId: "1:14681794151:web:4adc57fd498dfb5f3d56c2",
  measurementId: "G-YZGCDKTMLG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
