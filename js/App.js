// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAojmbWdGT2XN1vaBJq4VHSnyYeA82zVBM",
  authDomain: "myblog-bc68b.firebaseapp.com",
  projectId: "myblog-bc68b",
  storageBucket: "myblog-bc68b.appspot.com",
  messagingSenderId: "386830402308",
  appId: "1:386830402308:web:3792840e645eeb6f09c651",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const my_blog = document.querySelector(".my_blog");
const login_page = document.querySelector(".login");

function SignInUSer() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password).then((userCredinals) => {
    console.log(userCredinals.user.uid);
  });
}

const Sign_btn = document.querySelector("#sign_in");
Sign_btn.addEventListener("click", SignInUSer);
