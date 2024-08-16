// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcTr_wCWlwu2n-JW3BiStERp8y1AuwI1A",
  authDomain: "inventory-tracker-fba5f.firebaseapp.com",
  projectId: "inventory-tracker-fba5f",
  storageBucket: "inventory-tracker-fba5f.appspot.com",
  messagingSenderId: "362461795194",
  appId: "1:362461795194:web:0c056db8260096f229fcc3",
  measurementId: "G-QSHLTTSYFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
