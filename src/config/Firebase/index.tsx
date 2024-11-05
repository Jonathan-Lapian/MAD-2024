// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAjlLpZyQmR5IFGj_cz3Wqmz25nPVYplY',
  authDomain: 'moneytrack-mad.firebaseapp.com',
  projectId: 'moneytrack-mad',
  storageBucket: 'moneytrack-mad.firebasestorage.app',
  messagingSenderId: '574520440616',
  appId: '1:574520440616:web:4c3dd7862a4f0aa456421d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
