import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhNk1Ap_bBNFXvIXYLnBQsxTfI0vS3bBE",
  authDomain: "smit-b9-5571c.firebaseapp.com",
  databaseURL: "https://smit-b9-5571c-default-rtdb.firebaseio.com",
  projectId: "smit-b9-5571c",
  storageBucket: "smit-b9-5571c.appspot.com",
  messagingSenderId: "567836920600",
  appId: "1:567836920600:web:650a753fc9a1d2aca26c6d",
  measurementId: "G-NMXLYR92VE"
};   

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
