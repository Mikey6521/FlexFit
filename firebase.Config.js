// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence, getAuth, setPersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuhZx5Ym033hS6AQCxzuPjYIbb4mG1LxU",
  authDomain: "fir-chat-3bc3e.firebaseapp.com",
  projectId: "fir-chat-3bc3e",
  storageBucket: "fir-chat-3bc3e.appspot.com",
  messagingSenderId: "284809879065",
  appId: "1:284809879065:web:dfc95ffa68449c36c81488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage),
});


export const db = getFirestore(app);
export const usersRef = collection(db,'users');
export const roomRef = collection(db,'rooms');

// export const registerForPushNotifications = async () => {
//   try {
//     const { status } = await registerForPushNotifications();
//     if (status !== 'granted') {
//       console.error('Failed to get push token for push notification!');
//       return;
//     }
//     const pushToken = (await Notifications.getExpoPushTokenAsync()).data;
//     // Save the push token to your Firebase database or associate it with the user's profile
//     await db.collection('users').doc(auth.currentUser.uid).update({ pushToken });
//     console.log('Push token:', pushToken);
//   } catch (error) {
//     console.error('Error registering for push notifications:', error);
//   }
// };
 
