// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAYfYs8mY6tdBmbEwK7XHUssyoOvdAyIHc",

  authDomain: "newes-c8863.firebaseapp.com",

  databaseURL: "https://newes-c8863.firebaseio.com",

  projectId: "newes-c8863",

  storageBucket: "newes-c8863.appspot.com",

  messagingSenderId: "912157260989",

  appId: "1:912157260989:web:8ebd194fe406a6ea8a0bd4",

  measurementId: "G-VGMNCLKGLX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

db.collection('stores').get().then((snapshot) => {
    console.log(snapshot.docs);
})


const db = firebase.firestore();