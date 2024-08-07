import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import ChatHeader from '../../components/chatHeader';
import { StatusBar } from 'expo-status-bar';
import MessagesList from '../../components/messagesList';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import CustomKeyboard from '../../components/CustomKeyboard';
import { useAuth } from '../../context/authContext';


const ChatRoom = () => {
    const item = useLocalSearchParams();
    const {user} = useAuth();
    const router =useRouter();
    const [messages, setMessages] = useState([{userId:user?.userId, text:'hi people'}, {userId:user?.userId, text:'welcome'}, {userId:'bot', text:'wassup'}]);
    return (
        <CustomKeyboard inChat={true}>
            <View className="flex-1 bg-white">
                <StatusBar style='dark'/>
                <ChatHeader item={item} router={router}/>
                <View className="h-3 border-b border-neutral-300"/>
                <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
                    <View className="flex-1">
                        <MessagesList messages={messages} currentUser={user}/>
                    </View>
                    <View style={{marginBottom:hp(1.7)}} className="pt-2">
                        <View className="flex-row justify-between items-center mx-3">
                            <View className="flex-row justify-between bg-white border p-2 border-neutral-300 rounded-full pl-5" >
                                <TextInput 
                                    placeholder='Type messsage...'
                                    placeholderTextColor={'gray'}
                                    style={{fontSize:hp(2)}}
                                    className="flex-1 mr-2"
                                />
                                <TouchableOpacity className="bg-neutral-200 p-2 mr-[1px] rounded-full" >
                                    <Feather name='send' size={hp(2.7)} color='#737373'/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </CustomKeyboard>
    );
}

const styles = StyleSheet.create({})

export default ChatRoom;
