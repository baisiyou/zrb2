
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

 import { getAuth, GoogleAuthProvider,
      createUserWithEmailAndPassword,updateProfile
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

const loginButton = document.getElementById("loginbutton");

loginButton.addEventListener("click", e =>{
   e.preventDefault();
   window.location.href = "/";
});

//signup user
const registerForm = document.querySelector('.signup');
registerForm.addEventListener('submit', e =>{
    e.preventDefault();
    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const comfirmPassword = registerForm.comfirmPassword.value;
    
    if(password !== comfirmPassword){
        console.error("Password do not match");
        return;
    }

    createUserWithEmailAndPassword( auth , email, password)
    .then(cred =>{
        //cred.user.displayName = username;
        // console.log('user created: ', cred.user);
        updateProfile(auth.currentUser, {
            displayName: username
        }).then(() => {
            // console.log('user profile updated');
          }).catch((error) => {
            // console.log(error) ;
          });
        registerForm.reset();
        alert("User signed up successfully! Please login.");
    })
    .catch( err =>{
        console.log(err.message);
    })
})


