import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import{getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBUEHKFSerW2mPKnodlhu_YMUGqegNvXiQ",
    authDomain: "smit-b8.firebaseapp.com",
    projectId: "smit-b8",
    storageBucket: "smit-b8.firebasestorage.app",
    messagingSenderId: "614524730186",
    appId: "1:614524730186:web:43fb571044d1a243abdfb3",
    measurementId: "G-2WXN527XCW"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app)