import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyCAzfbvyENRkVjDeUho9GUiMoIA7PLtKek",
    authDomain: "chat-app-30828.firebaseapp.com",
    projectId: "chat-app-30828",
    storageBucket: "chat-app-30828.appspot.com",
    messagingSenderId: "708211767348",
    appId: "1:708211767348:web:73ee5d0672c268cdee7261",
    measurementId: "G-E2NZLB2E1Z"
})
const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export{
    db,
    auth
}