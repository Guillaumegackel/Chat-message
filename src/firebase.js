import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDzTX6hgLsK6_USz6rE0D8pU6dQGC6vI4A",
	authDomain: "mymessage-81fde.firebaseapp.com",
	projectId: "mymessage-81fde",
	storageBucket: "mymessage-81fde.appspot.com",
	messagingSenderId: "101297386009",
	appId: "1:101297386009:web:66443eafedb89e4202b088",
	measurementId: "G-L32EJGEHZ8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;