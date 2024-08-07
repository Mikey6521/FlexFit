import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatItem from './chatItem';
import { useRouter } from 'expo-router';

const ChatList = ({users}) => {
    const router = useRouter();
    return (
        <View className="flex-1">
            <FlatList 
                data={users}
                contentContainerStyle={{flex:1, paddingVertical:30}}
                keyExtractor={item=>Math.random()}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index})=><ChatItem 
                    item={item} 
                    index={index}
                    router={router}
                    noBorder={index+1==users.length}    
                />}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default ChatList;
