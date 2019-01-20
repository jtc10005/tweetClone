import { firebase } from '@firebase/app';
const config = {
  apiKey: 'AIzaSyAhQQOK6w37uzrTdec00xmaJSc4Z-mzdz0',
  authDomain: 'tweetclone-13474.firebaseapp.com',
  databaseURL: 'https://tweetclone-13474.firebaseio.com',
  projectId: 'tweetclone-13474',
  storageBucket: 'tweetclone-13474.appspot.com',
  messagingSenderId: '632970944995'
};
firebase.initializeApp(config);
export default firebase;
// import app from '@firebase/app';

// export  const FirestoreConfig = app.initializeApp({
//     apiKey: 'AIzaSyAhQQOK6w37uzrTdec00xmaJSc4Z-mzdz0',
//     authDomain: 'tweetclone-13474.firebaseapp.com',
//     databaseURL: 'https://tweetclone-13474.firebaseio.com',
//     projectId: 'tweetclone-13474',
//     storageBucket: 'tweetclone-13474.appspot.com',
//     messagingSenderId: '632970944995'
// });
