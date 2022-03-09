
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig =  {
	apiKey: "AIzaSyDzTX6hgLsK6_USz6rE0D8pU6dQGC6vI4A",
	authDomain: "mymessage-81fde.firebaseapp.com",
	projectId: "mymessage-81fde",
	storageBucket: "mymessage-81fde.appspot.com",
	messagingSenderId: "101297386009",
	appId: "1:101297386009:web:66443eafedb89e4202b088",
	measurementId: "G-L32EJGEHZ8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const storage = getStorage(app);
  const provider = new GoogleAuthProvider();
  
  export { db, auth, storage, provider };