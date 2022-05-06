// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyDm2dN7Jzai9ZLj_vvvmgVdj3pjaqJYso4",
    // authDomain: "assignment-11-85553.firebaseapp.com",
    // projectId: "assignment-11-85553",
    // storageBucket: "assignment-11-85553.appspot.com",
    // messagingSenderId: "996123051780",
    // appId: "1:996123051780:web:9a3a8c69ec051998ca3251"

    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;