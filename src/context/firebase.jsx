// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { createContext, useContext, useEffect, useState } from "react";
const FirebaseContext = createContext(null);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUo7HQnPnoy9OrPeRezxrbaQCxYQ7OvPc",
  authDomain: "bookify-263ee.firebaseapp.com",
  projectId: "bookify-263ee",
  storageBucket: "bookify-263ee.appspot.com",
  messagingSenderId: "566123220346",
  appId: "1:566123220346:web:b24a7e9bbf8daf13819ac3"
};

export const useFirebase = ()=> useContext(FirebaseContext)


// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth( Firebaseapp);
const firestore = getFirestore(Firebaseapp)
const storage = getStorage(Firebaseapp)

const provider = new GoogleAuthProvider();



 export const FirebaseProvider = (props)=>{

  const [user,setuser] = useState(null)
      useEffect(()=>{
        // this function is use for check user is loggedIn or Not
        onAuthStateChanged(auth , user=>{  
          if(user){
            setuser(user)
          }else{
            setuser(null)
          }
            })
      },[])


  // signup function
  const signupUserWithEmailAndPassword = (email, password) =>(
    createUserWithEmailAndPassword(auth, email, password));
  
  //signin function
    const signinUserWithEmailAndPassword = (email, password) =>(
      signInWithEmailAndPassword(auth, email, password))

  // sigin with google function

  const signinWithGoogle = async () => {
      signInWithPopup(auth, provider)
        
    }

    const handleCreateNewListing = async (name,ISBN,price,pic) => {
    console.log(user)

        const ImagRef =  ref(storage,`uploads/images/${Date.now() }-${pic.name}`);
        const uploadResult = await uploadBytes(ImagRef,pic);
       return await addDoc(collection(firestore, "books"), {
          
        name:  name,
         isbn: ISBN,
         price: price,
          imageURL : uploadResult.ref.fullPath,
          userID: user?.uid,
      userEmail: user?.email,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
     
           
         });
     
    }

    const ListAllBooks = async ()=>{
      return await getDocs(collection(firestore, "books"))
    }

    const GetUrl = async (path)=>{
      return await getDownloadURL(ref(storage,path))
    }
    
    const IsLoggedIn = user ? true : false;
  return(

 
    // in this value {{}} double is very imp
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword ,signinUserWithEmailAndPassword ,  signinWithGoogle ,handleCreateNewListing, ListAllBooks,GetUrl, IsLoggedIn }}>      {props.children}
    </FirebaseContext.Provider>
  )
 }