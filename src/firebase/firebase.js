import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

// handling email verification
// document.addEventListener('DOMContentLoaded', () => {
//   // Get the action to complete.
//   const mode = getParameterByName('mode');
//   // Get the one-time code from the query parameter.
//   const actionCode = getParameterByName('oobCode');
//   // (Optional) Get the continue URL from the query parameter if available.
//   const continueUrl = getParameterByName('continueUrl');
//   // (Optional) Get the language code if available.
//   const lang = getParameterByName('lang') || 'en';
// });