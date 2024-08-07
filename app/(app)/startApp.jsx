import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { registerForPushNotifications } from '../../firebase.Config';
import { usePushNotifications } from '../../components/usePushNotification';
// import messaging from '@react-native-firebase/messaging';


const os = Platform.OS=='ios';

const Index = () => {
    const router = useRouter();
    const{notification, expoPushToken}= usePushNotifications();
    // const data = JSON.stringify(notification, undefined,2);

    // const requestUserPermission = async()=>{
    //     const authStatus = await messaging().requestPermission();
    //     const enabled =
    //         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //         authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    //     if (enabled) {
    //         console.log('Authorization status:', authStatus);
    //     }
    // }

    useEffect(()=>{
        // if(requestUserPermission()){
        //     messaging().getToken().then(token=>{
        //         console.log(token)
        //     })
        // }else{
        //     console.log('failed token status', authStatus);
        // }
        const notifi = async () => {
            await registerForPushNotifications();
            console.log('testing')
        }
        // notifi();
    },[])

    return (
        <View className="flex-1 flex justify-end">
            <StatusBar styel="light"/>
            <Image className="h-full w-full absolute" source={require("../../assets/images/welcome.jpg")}/>

            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{width: wp(100), height: hp(70)}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y:0.8}}
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View  entering={FadeInDown.delay(100).springify()} className="flex items-center">
                    <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">
                        Best <Text className="text-rose-500">Workouts</Text>
                    </Text>
                    <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">
                    For You
                    </Text>
                </Animated.View >

                <Animated.View entering={FadeInDown.delay(200).springify()} >
                <TouchableOpacity
                onPress={()=>router.push('/home')}
                    style={{height: hp(7), width: wp(80)}}
                    className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                >
                    <Text style={{fontSize:hp(3)}} className="text-white font-bold tracking-widest">
                        Get Started
                    </Text>
                </TouchableOpacity>
            </Animated.View >  
            </LinearGradient>                 
                 
        </View>
    );
}



export default Index;
