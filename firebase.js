// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
doc,
setDoc,
getDoc,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUToSl8EMQo0SKrT3Jtd38QE6qORAxLSA",
  authDomain: "timer-twitch-b4002.firebaseapp.com",
  projectId: "timer-twitch-b4002",
  storageBucket: "timer-twitch-b4002.firebasestorage.app",
  messagingSenderId: "902287843107",
  appId: "1:902287843107:web:0c152fd738a2d09207b696"
};
