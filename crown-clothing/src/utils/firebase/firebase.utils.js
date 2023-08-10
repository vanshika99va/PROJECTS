import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaiv9uPzbNhgp_HOJvKRzT8Fq8R0u5dCY",
  authDomain: "crown-clothing-db-2d45b.firebaseapp.com",
  projectId: "crown-clothing-db-2d45b",
  storageBucket: "crown-clothing-db-2d45b.appspot.com",
  messagingSenderId: "417769312614",
  appId: "1:417769312614:web:da02870fd17f6a0f29f8a7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); // db, collections,unique id identifier ; doc = gives document ref for that db inside collections with that id

  console.log("user doc ref : ", userDocRef);
  const userSnapshot = await getDoc(userDocRef); //gets the data for that doc
  console.log("snapshot --> ", userSnapshot); //returns boolean if that data exists or not in the db
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

/* THE FLOW IS :

the google with authenticate and send us back the response with user {}> access_token,uid,display name, email etc. : details of user
we use the userId to :
- get the document ref from firestore (userDocRef) : if user exists
- create / set the document with data from userAuth in my collection : if user data doesnt exist

*even if user doesn't exist Google will give us a object refering to its Documnet , though it will have no data

*userSnapshot though has the id == user.uid we got from Google
** suerSnapshot.exists() : gives boolean whether the data actually exists in firestore or not 

*/
