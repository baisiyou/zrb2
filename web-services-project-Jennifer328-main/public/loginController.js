


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

 import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword, onAuthStateChanged,
  }from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";



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

//go to register 
const registerButton = document.getElementById("register");

registerButton.addEventListener('click', e =>{
  e.preventDefault();
  window.location.href = "register";
});

//login
const loginForm = document.getElementById("login");
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
      window.location.href = "profile";
    })
    .catch(err => {
      console.log(err.message)
    })
})


//google login
googleLogin.addEventListener('click', e =>{
    signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
     const user = result.user;
     console.log(user);
    window.location.href = "profile";
   
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
   
  });
});


