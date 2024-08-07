import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Loading = ({size}) => {
    return (
        <View style={{height:size, aspectRatio:1}}>
            <LottieView style={{flex:1}} source={require("../assets/images/loading.json")} autoPlay loop />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Loading;
