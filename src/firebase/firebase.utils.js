import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiJ_RETTpSIq-YH1XsT6L_9q0cG-blKb8",
    authDomain: "crwn-db-6a0f8.firebaseapp.com",
    databaseURL: "https://crwn-db-6a0f8.firebaseio.com",
    projectId: "crwn-db-6a0f8",
    storageBucket: "crwn-db-6a0f8.appspot.com",
    messagingSenderId: "497483246214",
    appId: "1:497483246214:web:8da1b30ecf3f856d367f07",
    measurementId: "G-20MDN3JDTX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;