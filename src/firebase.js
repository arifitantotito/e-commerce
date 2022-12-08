import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDQv132tVaTsZfkAwX1vRQGMO5ykTQnkds",
    authDomain: "webdev2302.firebaseapp.com",
    projectId: "webdev2302",
    storageBucket: "webdev2302.appspot.com",
    messagingSenderId: "714806674128",
    appId: "1:714806674128:web:2ba2443ecef764770414d5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
