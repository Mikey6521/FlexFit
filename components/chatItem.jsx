import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ChatItem = ({item, index, noBorder, router}) => {
    const openChatRoom=()=>{
        router.push({pathname:'/chatRoom', params:item});
    }
    return (
        <TouchableOpacity onPress={openChatRoom} className={`flex-row justify-between px-5 items-center gap-3 mb-4 pb-2 ${noBorder?'':'border-b border-b-neutral-200'}`}>
            <Image 
                source={{uri:item?.profileUrl}} 
                style={{height:hp(6), width:hp(6), aspectRatio:1, borderRadius:100}}
                // placeholder={blurhash}
            />

            <View className="flex-1 gap-1">
                <View className="flex-row justify-between">
                    <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-800">{item?.username}</Text>
                    <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500">Time</Text>
                </View>
                <Text style={{fontSize:hp(1.6)}} className="font-medium text-neutral-500">Last message</Text>
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({})

export default ChatItem;
