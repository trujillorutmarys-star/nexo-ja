import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI4Brim4PIaqAcbymvWMMt1X8gR4okj8c",
  authDomain: "nexo-ja.firebaseapp.com",
  projectId: "nexo-ja",
  storageBucket: "nexo-ja.firebasestorage.app",
  messagingSenderId: "3106474248",
  appId: "1:3106474248:web:eed700308f1d2fc1bb84bd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;