import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn-SqqYShgC3GRzHKHThzU79ZOyRpHQW8",
  authDomain: "portfolio-7f35e.firebaseapp.com",
  projectId: "portfolio-7f35e",
  storageBucket: "portfolio-7f35e.appspot.com",
  messagingSenderId: "459495200753",
  appId: "1:459495200753:web:ae3e3017002e2ee4ead650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
