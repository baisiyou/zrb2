


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

 import { getAuth, GoogleAuthProvider,signOut,onAuthStateChanged }from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyDqekVGjWt6bsyrSQHKplcfWhskQMVyydg",
  authDomain: "instantassistant-3bd34.firebaseapp.com",
  projectId: "instantassistant-3bd34",
  storageBucket: "instantassistant-3bd34.appspot.com",
  messagingSenderId: "985647414562",
  appId: "1:985647414562:web:4d4d645fdb9a80ce6a397b",
  measurementId: "G-5VWRERLY6S"
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();


// init services
const auth = getAuth(app);
auth.languageCode = "en";


const googleLogin = document.getElementById("google-login-btn");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

onAuthStateChanged(auth, user => {
  if (user) {
    userName.innerHTML = user.displayName;
    userEmail.innerHTML = user.email;
  } else {
    console.log('user logged out- no user')
  } 
});

 const logoutButton = document.getElementById("logout");
 logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
      window.location.href = "/";
    })
    .catch(err => {
      console.log(err.message)
    })
})



