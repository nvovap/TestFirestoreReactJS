import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDxVdD-B4d7Et-cfkHlUCgskFvUgMgXNHA",
    authDomain: "testreact-896e8.firebaseapp.com",
    databaseURL: "https://testreact-896e8.firebaseio.com",
    projectId: "testreact-896e8",
    storageBucket: "testreact-896e8.appspot.com",
    messagingSenderId: "709857037607",
    appId: "1:709857037607:web:ba0a0f1a0280f03d"
};

firebase.initializeApp(config);
export default firebase;

