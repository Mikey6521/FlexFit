import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList } from 'react-native';
import { bodyParts } from '../constants/sliderImages';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

const BodyParts = () => {
    const router = useRouter();
    return (
        <View className="mx-4">
            <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700">
                Exercises
            </Text>

            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item=>item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:50, paddingTop:20}}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({item, index}) => <BodyPartCard index={index} item={item} router={router} />}
            />
        </View>
    );
}

const BodyPartCard= ({item, index, router}) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
                style={{width:wp(44), height:wp(52)}}
                className="flex justify-end p-4 mb-4"
                onPress={() => router.push({pathname:'/exercise', params:item})}
            >
                <Image 
                    source={item.image}
                    resizeMode='cover'
                    style={{width:wp(44), height:wp(52)}}
                    className={"rounded-[35px] absolute"}
                />

                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.9)"]}
                    style={{width:wp(44), height:wp(52)}}
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
                    className="absolute bottom-0 rounded-b-[35px]"
                />

                <Text
                    style={{fontSize:hp(2.3)}}
                    className="text-white text-semibold text-center tracking-wide"
                >
                    {item?.name}
                </Text>
            </TouchableOpacity>

            
        </Animated.View>
    )
}


export default BodyParts;
