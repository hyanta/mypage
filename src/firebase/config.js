import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAZKIg1x38qrfBzEtnk5e4o8AQe-dNNHmU",
    authDomain: "mypage-573a4.firebaseapp.com",
    projectId: "mypage-573a4",
    storageBucket: "mypage-573a4.appspot.com",
    messagingSenderId: "365926202869",
    appId: "1:365926202869:web:f83fb4443dfa90297034bc"
};
  

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectStorage  ,timestamp}