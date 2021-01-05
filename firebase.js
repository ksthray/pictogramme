import fb from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBnqXsjz5rhR7foNr_Fy_wKScDlVNuaMoo",
    authDomain: "pictogramme-website.firebaseapp.com",
    projectId: "pictogramme-website",
    storageBucket: "pictogramme-website.appspot.com",
    messagingSenderId: "851971817323",
    appId: "1:851971817323:web:aaa6956bca8c6fff5ad62e",
    measurementId: "G-4GHWT4S47M"
};


export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()