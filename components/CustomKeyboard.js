import React from 'react';
import { Platform, KeyboardAvoidingView, View, ScrollView } from 'react-native';

const ios = Platform.OS =="ios";

const CustomKeyboard = ({children ,inChat}) => {
    let kavConfig={};
    let scrollViewConfig ={};
    if(inChat){
        kavConfig = {keyboardVerticalOffset:90};
        scrollViewConfig={contentContainerStyle:{flex:1}}
    }
    return (
        <KeyboardAvoidingView
            behaviour={ios? 'padding': "height"}
            style={{flex:1}}
            {...kavConfig}
        >
            <ScrollView
                style={{flex:1}}
                bounces={false}
                showsVerticalScrollIndicator={false}
                {...scrollViewConfig}
            >
                {
                    children
                }            
            </ScrollView>
        </KeyboardAvoidingView>
    );
}



export default CustomKeyboard;
