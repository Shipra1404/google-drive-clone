import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = {
  apiKey: "",
  authDomain: "drive-clone-357f8.firebaseapp.com",
  projectId: "drive-clone-357f8",
  storageBucket: "drive-clone-357f8.appspot.com",
  messagingSenderId: "1095025442840",
  appId: "1:1095025442840:web:96918ca7b6f38434d7c36d",
  measurementId: "G-L124JRBBV4"
};

const firebaseApp = firebase.initializeApp(app);

const firestore = firebaseApp.firestore();

export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = firebase.storage()
export const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export default {firestore, storage, auth, provider}
