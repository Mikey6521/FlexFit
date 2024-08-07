import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Startup = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator size={'large'} color='gray'/>
        </View>
    );
}



export default Startup;
