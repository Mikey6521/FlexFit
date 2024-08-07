import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import { LogBox, StyleSheet, View } from 'react-native';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { MenuProvider } from 'react-native-popup-menu';


const MainLayot =()=>{
    const {isAuthenticated} = useAuth();
    const segments = useSegments(); //segments in current route
    const router = useRouter();

    useEffect(()=>{
        if (typeof isAuthenticated =='undefined') return;
        const inApp = segments[0]=='(app)';
        if(isAuthenticated && !inApp){
            router.replace("/startApp")
        }else if(isAuthenticated==false){
            router.replace("signIn")
        }

    },[isAuthenticated]);

    return<Slot/>;
}

export default function rootLayout(){
    return (
        <MenuProvider>
            <AuthContextProvider>
                <MainLayot/>
            </AuthContextProvider>
        </MenuProvider>
        
    )
}






// export default Layout;
