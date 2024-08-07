import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { fetchExercisesByBodyPart } from '../../api/exerciseDB';
import { demoExercises } from '../../constants/sliderImages';
import { ScrollView } from 'react-native-virtualized-view';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ExercisesList from '../../components/exercisesList';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import Loading from '../../components/loading';

const Exercise = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [exercises, setExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(item) getExercises(item.name);
    },[])

    const getExercises= async (bodyPart) => {
        setIsLoading(true);
        let data = await fetchExercisesByBodyPart(bodyPart);
        setExercises(data);
        setIsLoading(false);

    }
    
    return (
        <ScrollView>
            <StatusBar style='light'/>

            <Image 
                source={item.image}
                style={{width: wp(100), height: hp(45)}}
                className="rounded-b-[40px]"
            />

            <TouchableOpacity
            onPress={()=>{ router.back()}}
                className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
                style={{width: hp(5.5), height:hp(5.5), marginTop:hp(7)}}
            >
                <Ionicons name='caret-back-outline' size={hp(4)} color="white"/>
            </TouchableOpacity>

            <View className="mx-4 space-y-3 mt-4">

                <Animated.Text 
                    entering={FadeInDown.duration(300).springify()} 
                    style={{fontSize:hp(3)}} className="text-neutral-700 font-semibold" >
                    {item.name} exercises
                </Animated.Text>
                {
                    isLoading?<Loading/>:(
                        <View className="mb-10">
                            <ExercisesList data={exercises}/>
                        </View>
                    )
                }
                
            </View>
        </ScrollView>
    );
}



export default Exercise;

