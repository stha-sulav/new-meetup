import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,

  authDomain: import.meta.env.VITE_AUTHDOMAIN,

  databaseURL: import.meta.env.VITE_DATABASEURL,

  projectId: import.meta.env.VITE_PROJECTID,

  storageBucket: import.meta.env.VITE_STORAGEBUCKET,

  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,

  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);