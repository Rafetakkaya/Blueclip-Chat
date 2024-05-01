import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbNZ-Dej1WuZfRj41UtSNflg7UgKpf4l8",
  authDomain: "blueclip-chat.firebaseapp.com",
  projectId: "blueclip-chat",
  storageBucket: "blueclip-chat.appspot.com",
  messagingSenderId: "1081842845542",
  appId: "1:1081842845542:web:2c49e491a6b7af7a0ceaa7",
  measurementId: "G-DNS556ZE2Q",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
