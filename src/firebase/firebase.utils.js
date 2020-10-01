import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4hP7erE9D6gY_j9bnv40w2pPZR_tPnhY",
  authDomain: "kp-ecommerce.firebaseapp.com",
  databaseURL: "https://kp-ecommerce.firebaseio.com",
  projectId: "kp-ecommerce",
  storageBucket: "kp-ecommerce.appspot.com",
  messagingSenderId: "927394059753",
  appId: "1:927394059753:web:eb36d8ffcc8ca38fbd6778",
  measurementId: "G-SHLWT34VN6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth) return
console.log("firebase")
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if(!snapshot.exists){
    const {displayName,email} = userAuth
    const createdAt = new Date()
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log("Error Creating User",err.message)
    }
  }
  return userRef
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
