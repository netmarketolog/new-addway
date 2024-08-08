import './js/scroll-to-top';
import './js/burgerMenu';
import './js/header';
import getBreadcrumbs from './js/breadcrumbs';

getBreadcrumbs();
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

   // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPg3ScFTycIB2Unf4f7_QQ1IuNa-HR0c",
  authDomain: "addway-ecaed.firebaseapp.com",
  projectId: "addway-ecaed",
  storageBucket: "addway-ecaed.appspot.com",
  messagingSenderId: "717099611397",
  appId: "1:717099611397:web:3b59ab65c185e28625b36c",
  measurementId: "G-70MT7EQJME",
 databaseURL: "https://addway-ecaed-default-rtdb.europe-west1.firebasedatabase.app", 
};


   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);

   // Get data from Firebase
   get(ref(database, 'botConfig')).then((snapshot) => {
     if (snapshot.exists()) {
       const data = snapshot.val();
       document.body.setAttribute('data-bot-token', data.botToken);
       document.body.setAttribute('data-chat-id', data.chatId);
     } else {
       console.log("No data available");
     }
   }).catch((error) => {
     console.error(error);
   });