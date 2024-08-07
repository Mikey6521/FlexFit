import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/authContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';


const ios = Platform.OS === "ios";
const ChatHeader = ({item, router}) => {
    
    const {user} = useAuth();
    const {top}=useSafeAreaInsets();
    
    return (
        <View style={{paddingTop:ios?top:top+10}} 
            className="flex-row justify-between items-center px-5"
        >

            <View className="flex-row items-center gap-4 justify-center">
                
                <TouchableOpacity onPress={() => router.back()} >
                    <View >
                        <Ionicons name='chevron-back' size={hp(3.5)} color={'#737373'}/>
                    </View>
                </TouchableOpacity>

                <View>
                    <Image
                        style={{height:hp(4.5), aspectRatio:1, borderRadius:100}}
                        source={item?.profileUrl}
                        // placeholder={blurha}
                        transition={500}
                    />
                </View>

                
                <View>
                    <Text style={{fontSize:hp(3)}} className="text-neutral-700 font-medium">
                        {item.username}
                    </Text>
                </View>
                
            </View>

            <View className="flex-row items-center gap-x-8 justify-center">
                <Ionicons name="call" size={hp(2.8)} color={'#737373'}/>
                <Ionicons name="videocam" size={hp(2.8)} color={'#737373'}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default ChatHeader;
