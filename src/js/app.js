import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref as databaseRef, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPg3ScFTycIB2Unf4f7_Q1IuNa-HR0c",
  authDomain: "addway-ecaed.firebaseapp.com",
  databaseURL: "https://addway-ecaed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "addway-ecaed",
  storageBucket: "addway-ecaed.appspot.com",
  messagingSenderId: "717099611397",
  appId: "1:717099611397:web:3b59ab65c185e28625b36c",
  measurementId: "G-70MT7EQJME"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  // console.log("Initializing Firebase with config:", firebaseConfig);
  app = initializeApp(firebaseConfig);
  // console.log("Firebase app initialized:", app);
} else {
  app = getApp();
  // console.log("Using existing Firebase app:", app);
}

const database = getDatabase(app);
// console.log("Database initialized:", database);

// Глобальные переменные для хранения данных
window.botToken = null;
window.chatId = null;

// Get data from Firebase
const botConfigRef = databaseRef(database, 'botConfig');
// console.log("Reference to botConfig:", botConfigRef);

get(botConfigRef).then((snapshot) => {
  // console.log("Snapshot:", snapshot);
  const data = snapshot.val();
  // console.log("Data from snapshot.val():", data);
  if (data) {
    // console.log("Data exists");
    window.botToken = typeof data.botToken === 'string' ? data.botToken.replace(/"/g, '') : data.botToken;
    window.chatId = typeof data.chatId === 'string' ? data.chatId.replace(/"/g, '') : data.chatId;
    // console.log("botToken:", window.botToken);
    // console.log("chatId:", window.chatId);

    // Генерируем событие после загрузки данных
    const event = new CustomEvent('firebaseDataLoaded', {
      detail: {
        botToken: window.botToken,
        chatId: window.chatId
      }
    });
    window.dispatchEvent(event);
  } else {
    // console.log("No data available");
  }
}).catch((error) => {
  // console.error("Error retrieving data from Firebase:", error);
});