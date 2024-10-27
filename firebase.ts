// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0gv_P2b3NVratXGd_F0ywjl6bvrTfj_M",
  authDomain: "nextauth-97d3f.firebaseapp.com",
  projectId: "nextauth-97d3f",
  storageBucket: "nextauth-97d3f.appspot.com",
  messagingSenderId: "150449416220",
  appId: "1:150449416220:web:84ab26dc2d5946eb2f17d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app