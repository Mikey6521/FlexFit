import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    MenuOption,
  } from 'react-native-popup-menu';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MenuItem = ({text, action, value, icon}) => {
    return (
        <MenuOption onSelect={action}>
            <View className="px-4 py-1 flex-row justify-between items-center">
                <Text style={{fontSize:hp(1.7)}} className="font-semibold text-neutral-600">
                    {text}
                </Text>
                {icon}
            </View>
        </MenuOption>
    );
}


export default MenuItem;
