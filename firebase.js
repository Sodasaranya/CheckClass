import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
          apiKey: "AIzaSyD7CKlzfJN96YAVi9dhoI2oiXR8-2ErmiI",
          authDomain: "check-class-cf176.firebaseapp.com",
          projectId: "check-class-cf176",
          storageBucket: "check-class-cf176.appspot.com",
          messagingSenderId: "44347073660",
          appId: "1:44347073660:web:3ba2ce241b9b5e8c5f95f9",
          measurementId: "G-C9ZL0K6BZN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { auth, db };
export default app;
