import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.React_App_API_KEY,
    authDomain: process.env.React_App_AUTH_DOMAIN,
    projectId: process.env.React_App_PROJECT_ID,
    storageBucket: process.env.React_App_STORAGE_BUCKET,
    messagingSenderId: process.env.React_App_MESSAGIN_ID,
    appId: process.env.React_App_APP_ID,
  };

export default firebase.initializeApp(firebaseConfig);