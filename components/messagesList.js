import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MessageItem from './messageItem';

const MessagesList = ({messages, currentUser}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop:10}}>
            {
                messages?.map((message,index) => {
                    return (
                        <MessageItem message={message} key={index} currentUser={currentUser}/>
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default MessagesList;
