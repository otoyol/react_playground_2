import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

/**
 * This configuration is based on this particular Firebase project.
 * When forking the project, this configuration will need to be updated to match the configuration.
 */
const firebaseConfig = {
    apiKey: "AIzaSyAKArHxomo3ORKOUiT_TJePXO18gSqhH1Q",
    authDomain: "react-firebase-3-8bf88.firebaseapp.com",
    projectId: "react-firebase-3-8bf88",
    storageBucket: "react-firebase-3-8bf88.appspot.com",
    messagingSenderId: "129400373277",
    appId: "1:129400373277:web:5561bf9e7bd65345f146f4"
  };

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDatabase = getFirestore(firebaseApp);

export { firebaseApp, firebaseDatabase };