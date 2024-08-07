import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase.Config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {doc, setDoc, getDoc} from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState( undefined);

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsAuthenticated(true);
                setUser(user);
                updateUserData(user.uid)
            }else{
                setIsAuthenticated(false);
                setUser(null);
            }
            return unsub;
        })
    },[])


    const updateUserData = async (userId) => {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            let data = docSnap.data();
            setUser((user)=>({...user, username:data.username, profileUrl:data.profileUrl, selectedRole:data.selectedRole }));
        }
    }

    const login= async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return {success: true};
        } catch (e) {
            let msg =e.message;
            console.log(msg)
            if(msg.includes('(auth/invalid-email)')) msg='Invalid email'
            if(msg.includes('(auth/invalid-credential)')) msg='Invalid credentials'
            return {success:false, msg};
        }
    }

    const logout= async ()=>{
        try {
            await signOut(auth);
            return{success:true}
        } catch (e) {
            return{success:false, msg:e.message, error:e}
        }
    }

    const register= async (email, password, username, profileUrl, selectedRole)=>{
        try {
            console.log(email, password,'epass')
            // await setPersistence(auth, getReactNativePersistence(AsyncStorage));
            const response = await createUserWithEmailAndPassword(auth, email, password);
            // const response = await createUserWithEmailAndPassword(auth, email,password);
            console.log('response.user: ', response?.user);
            await setDoc(doc(db, 'users', response?.user?.uid),{
                username,
                profileUrl,
                userId: response?.user?.uid,
                selectedRole,
            });
            return {success: true, data: response?.user};
        } catch (e) {
            let msg =e.message;
            if(msg.includes('(auth/invalid-email)')) msg='Invalid email'
            if(msg.includes('(auth/email-already-in-use)')) msg='This email is already in use'
            
            return {success:false, msg};
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const value = useContext(AuthContext);

    if(!value){
        throw new Error("useAuth must be wrapped inside AuthContextProvier");
    }

    return value;
}