// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAh2HLZ2A5h-IT1R7NmOvaBGxn-WP19J5A',
  authDomain: 'glowmart-263dc.firebaseapp.com',
  projectId: 'glowmart-263dc',
  storageBucket: 'glowmart-263dc.appspot.com',
  messagingSenderId: '1012224919176',
  appId: '1:1012224919176:web:d26dabafadc2b0218e413d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
