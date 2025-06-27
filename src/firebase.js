import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNwEAh3cRuItmHkMa3N8VflVqhaqvBkOU",
  authDomain: "shop-local-hawaii-a86cb.firebaseapp.com",
  databaseURL: "https://shop-local-hawaii-a86cb-default-rtdb.firebaseio.com",
  projectId: "shop-local-hawaii-a86cb",
  storageBucket: "shop-local-hawaii-a86cb.firebasestorage.app",
  messagingSenderId: "455686112917",
  appId: "1:455686112917:web:f68e0aed56c6c14977fd9c",
  measurementId: "G-8FM2Z81DVK"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); 