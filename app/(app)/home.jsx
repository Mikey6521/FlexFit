import React from 'react';
import {StyleSheet, View , Text, SafeAreaView, StatusBar, Image, Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../../components/imageSlider';
import BodyParts from '../../components/bodyParts';
import { useAuth } from '../../context/authContext';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ProfileImage from '../../components/profileImage';


const Home = () => {
    const {logout, user} = useAuth();
    const router = useRouter();
    // console.log('userhome: ', user)
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5 mt-4" edges={['top']}>
            <StatusBar style="dark"/>

            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2" >
                    <Text style={{fontSize:hp(4.5)}}
                        className="font-bold tracking-wider text-neutral-700"
                    >
                        READY TO
                    </Text>
                    <Text style={{fontSize:hp(4.5)}}
                        className="font-bold tracking-wider text-rose-500"
                    >
                        WORKOUT
                    </Text>
                </View>

                <View className="flex justify-center items-center space-y-2">
                    {/* <Pressable onPress={logout}>
                        <Image
                            source={{uri:user.profileUrl}}
                            style={{width:hp(6), height:hp(6)}}
                            className="rounded-full"
                        />
                    </Pressable> */}
                    <ProfileImage/>
                    

                    <View
                        className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                        style={{width:hp(5), height:hp(5)}}
                    >
                        <Ionicons name='notifications' size={hp(3)} color="gray"/>
                    </View>
                </View>
            </View>

            <View>
                <ImageSlider/>
            </View>

            <View className='flex-1'>
                <BodyParts/>
            </View>

            <Pressable onPress={()=>router.push('chatHome')}>
                <View style={{bottom:hp(6), right:wp(10),width:hp(6.5), height:hp(6.5)}} 
                    className="absolute bg-neutral-200 rounded-full flex justify-center items-center border-neutral-300"
                    
                >
                    <MaterialIcons size={hp(4)} name="chat" color="gray"/>    
                </View> 
            </Pressable>
              

        </SafeAreaView>
    );
}



export default Home;
