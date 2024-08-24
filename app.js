// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJn8EjpmYFQeqjDPdKUqgDKbXIDva2dbk",
  authDomain: "form-smit-haris.firebaseapp.com",
  projectId: "form-smit-haris",
  storageBucket: "form-smit-haris.appspot.com",
  messagingSenderId: "646296103151",
  appId: "1:646296103151:web:91b51a707b475dbb38d31a",
  measurementId: "G-SYNDMRN44N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication
const analytics = getAnalytics(app);  // Initialize Firebase Analytics

// Sign Up function
const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        document.getElementById('success-message').textContent = 'User signed up successfully!';
        console.log('User signed up:', user);
    } catch (error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
            console.log("Email Already in use");
        }
        document.getElementById('error-message').textContent = "Email Already in use";
    }
};

// Sign In function
const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        document.getElementById('success-message').textContent = 'User signed in successfully!';
        console.log('User signed in:', user);
    } catch (error) {
        
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
            console.log("Invalid Email or Password");
        }
        document.getElementById('error-message').textContent = "Invalid Email or Password";
    }
};

// Handle form submissions
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUp(email, password);
});

document.getElementById('signin-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    signIn(email, password);
});
