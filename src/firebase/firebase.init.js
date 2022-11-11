// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAInC66Le37Z7Qmgda9GOsZJVRQQyLQ1AI",
  authDomain: "your-food-client.firebaseapp.com",
  projectId: "your-food-client",
  storageBucket: "your-food-client.appspot.com",
  messagingSenderId: "679099803399",
  appId: "1:679099803399:web:f4250d804ca43bd52e87a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app