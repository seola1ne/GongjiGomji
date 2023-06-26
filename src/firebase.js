//firebase.js
import firebase from "firebase/compat/app"
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyBovbsO72uAR6Kxe0NJUqQTq5-7YTAEBGU",
    authDomain: "gongjigomji.firebaseapp.com",
    projectId: "gongjigomji",
    storageBucket: "gongjigomji.appspot.com",
    messagingSenderId: "1036636812266",
    appId: "1:1036636812266:web:a41e09414fd082e54f3893",
    measurementId: "G-W5Y8VKKZ96"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// // firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
const app = initializeApp(firebaseConfig);
const fireStore = getAnalytics(app);
const authService = getAuth(app);
const db = getFirestore(app);

export { fireStore, authService, db, app };