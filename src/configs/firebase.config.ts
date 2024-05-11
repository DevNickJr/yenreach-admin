// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || ""
const authDomain = process.env.NEXT_PUBLIC_API_KEY || ""
const projectId = process.env.NEXT_PUBLIC_API_KEY || ""
const storageBucket = process.env.NEXT_PUBLIC_API_KEY || ""
const messagingSenderId = process.env.NEXT_PUBLIC_API_KEY || ""
const appId = process.env.NEXT_PUBLIC_API_KEY || ""
const measurementId = process.env.NEXT_PUBLIC_API_KEY || ""

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;