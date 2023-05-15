// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'




// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY, //APIKEY

  authDomain: process.env.REACT_APP_AUTHDOMAIN, //AUTHDOMIAN

  projectId: process.env.REACT_APP_PROJECTID, //PROJECTID

  storageBucket: process.env.REACT_APP_STORAGEBUCKET, //STORAGEBUCKET

  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID, //MESSAGINGSENDERID

  appId: process.env.REACT_APP_APPID, //APPID
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)