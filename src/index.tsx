import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/layout';
import Routes from './components/routes/Routes';
import * as firebase from 'firebase/app'


firebase.initializeApp({
  apiKey: "AIzaSyBw4k9sdm5LjLD3pR7pnLRHDcpu2utCulI",
  authDomain: "vk-copy-164fb.firebaseapp.com",
  projectId: "vk-copy-164fb",
  storageBucket: "vk-copy-164fb.appspot.com",
  messagingSenderId: "501027706078",
  appId: "1:501027706078:web:5eb0b64c1b085f3f265e4f"
})





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
