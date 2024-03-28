import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDO_JjQy1bQUda6BsteeyPiZPDsl2QtHuU",
    authDomain: "test-firebase-6e543.firebaseapp.com",
    projectId: "test-firebase-6e543",
    storageBucket: "test-firebase-6e543.appspot.com",
    messagingSenderId: "278070042650",
    appId: "1:278070042650:web:7d0cd976ed4b06151bb1a3",
    measurementId: "G-P4DL741BRV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
