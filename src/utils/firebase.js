// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore"; // doc is getting the document, getDoc for access the data, set the data is setDoc

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIpOhvEj8FtRgUI6npID9TMlt4avuXjGs",
  authDomain: "crown-e1414.firebaseapp.com",
  projectId: "crown-e1414",
  storageBucket: "crown-e1414.appspot.com",
  messagingSenderId: "534496113297",
  appId: "1:534496113297:web:258b555f8a12081ca90530",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
export const getProductsAndDocuments = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const productMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return productMap;
};
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const created_at = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        created_at,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creation the user", error.message);
    }
  }
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedLister = (callback) =>
  onAuthStateChanged(auth, callback);
