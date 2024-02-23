// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCExu9KrUMSbeCkm_0qMv21Lw0m9ve23BU",
  authDomain: "car-doctor-a019c.firebaseapp.com",
  projectId: "car-doctor-a019c",
  storageBucket: "car-doctor-a019c.appspot.com",
  messagingSenderId: "1053114850347",
  appId: "1:1053114850347:web:c93db0e4b155f0c4341e6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;