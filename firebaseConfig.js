// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpfZY20_0igJRfYDNZ0_rG6UEhvDYD_UI",
  authDomain: "emerald-mission-435913-a6.firebaseapp.com",
  projectId: "emerald-mission-435913-a6",
  storageBucket: "emerald-mission-435913-a6.firebasestorage.app",
  messagingSenderId: "939404453928",
  appId: "1:939404453928:web:89a4e7715ff8a18cea6d1d"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();
const auth = firebase.auth();

