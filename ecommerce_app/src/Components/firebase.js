import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4bPEFzKqV6ODaKtGsMKi1d-8WJGNPPTk",
  authDomain: "ecommerce-app-c4b0a.firebaseapp.com",
  projectId: "ecommerce-app-c4b0a",
  storageBucket: "gs://ecommerce-app-c4b0a.appspot.com",
  messagingSenderId: "385575555793",
  appId: "1:385575555793:web:c669dddcb62505ee8fabf0",
  measurementId: "G-D662P7G0F6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};