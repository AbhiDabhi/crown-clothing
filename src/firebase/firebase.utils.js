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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef; 
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;