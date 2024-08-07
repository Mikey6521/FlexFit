import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MessageItem = ({message, currentUser}) => {
    if(currentUser?.userId==message?.userId){
        return (
            <View className="flex-row justify-end mb-3 mr-3">
                <View style={{width:wp(80)}}>
                    <View className="flex self-end p-3 rounded-2xl bg-white border-neutral-200 border">
                        <Text style={{fontSize:hp(1.9)}}>
                            {message?.text}
                        </Text>
                    </View>
                    
                </View>
            </View>
        )
    }else{
        return (
            <View style={{width:wp(80)}} className="ml-3 mb-3">
                <View className="flex self-start p-3 rounded-2xl bg-rose-100 border-rose-200 border">
                    <Text style={{fontSize:hp(1.9)}}>
                        {message?.text}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default MessageItem;
