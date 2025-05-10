import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);