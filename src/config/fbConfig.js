import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const firebaseConfig = {
  apiKey: "AIzaSyBx_70FgekabOhJ_E2B-OjC1oVyGLs0Qpw",
  authDomain: "yorga-dev.firebaseapp.com",
  databaseURL: "https://yorga-dev.firebaseio.com",
  projectId: "yorga-dev",
  storageBucket: "yorga-dev.appspot.com",
  messagingSenderId: "208351191031",
  appId: "1:208351191031:web:149e5b2d912e2d1b"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 