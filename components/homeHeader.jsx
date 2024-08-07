import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/authContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ProfileImage from './profileImage';


const ios = Platform.OS =="ios";
const HomeHeader = () => {
    const {user} = useAuth();
    const {top}=useSafeAreaInsets();
    const router=useRouter();
    return (
        <View style={{paddingTop:ios?top:top+10}}
            className="flex-row justify-between px-5 bg-rose-400 pb-5 rounded-3xl shadpw"    
        >
            <TouchableOpacity onPress={() => router.back()} 
                className="flex items-center justify-center">
                <View >
                    <Ionicons name='chevron-back' size={hp(3.5)} color={'white'}/>
                </View>
            </TouchableOpacity>
            
            <View className="justify-center">
                <Text style={{fontSize:hp(3)}} className="text-white font-medium">
                    Chat Buddy
                </Text>
            </View>

            {/* <View>
                <Image
                    style={{width:hp(6), height:hp(6), aspectRatio:1, borderRadius:100}}
                    source={user?.profileUrl}
                    // placeholder={blurha}
                    transition={500}
                />
            </View> */}
            <ProfileImage/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeHeader;
