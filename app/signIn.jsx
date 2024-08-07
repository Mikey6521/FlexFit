import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState } from 'react';
import { StyleSheet, View, Text,Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useAuth } from '../context/authContext';
import Loading from '../components/loading';
import CustomKeyboard from '../components/CustomKeyboard';

const SignIn = () => {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} =useAuth();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if(!emailRef.current || !passwordRef.current) {
            Alert.alert("Sign in", "Please fill all the fields");
            return;
        }
        
        setLoading(true);
        const response = await login(emailRef.current, passwordRef.current);
        setLoading(false);
        if(!response.success){
            Alert.alert("Sign In", response.msg);
        }
    }

    return (
        <CustomKeyboard>
        <View className="flex-1">
            <StatusBar style='dark'/>
            <View style={{paddingTop:hp(8), paddingHorizontal:wp(5)}} className="flex-1 gap-12" >
                <View className="items-center">
                    <Image style={{height:hp(25)}} resizeMode='contain' source={require('../assets/images/signin.webp')}/>
                </View>

                <View className="gap-y-5">
                    <Text style={{fontSize:hp(4)}} className="font-bold tracking-wider text-center text-neitral-800">Sign In</Text>

                    <View className="gap-4">
                        <View style={{height:hp(7)}} className="flex-row gap-x-4 px-4 bg-neutral-100 items-center rounded-xl">
                            <Octicons name='mail' size={hp(2.7)} color={'gray'}/>
                            <TextInput
                                onChangeText={(value)=> emailRef.current=value}
                                style={{height:hp(2)}}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='Email address'
                                placeholderTextColor={'gray'}
                            />
                        </View>

                        <View style={{height:hp(7)}} className="flex-row gap-x-4 px-4 bg-neutral-100 items-center rounded-xl">
                            <Octicons name='lock' size={hp(2.7)} color={'gray'}/>
                            <TextInput
                                onChangeText={(value)=> passwordRef.current=value}
                                style={{height:hp(2)}}
                                secureTextEntry
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='Password'
                                placeholderTextColor={'gray'}
                            />
                        </View>

                        <Text style={{fontSize:hp(1.8)}} className="font-semibold text-right text-neutral-500" >Forgot password?</Text>
                        <View>
                        {
                            loading ? (
                                <View className="flex-row justify-center">
                                    <Loading size={hp(12)}/>
                                </View>
                            ):(
                                <TouchableOpacity onPress={handleLogin} style={{height:hp(6.5)}} className="bg-indigo-500 rounded-xl items-center justify-center">
                                    <Text style={{fontSize:hp(2.7)}} className="text-white font-bold -tracking-wider">Sign In</Text>
                                </TouchableOpacity>
                            )
                        }
                        </View>


                        <View className="flex-row justify-center">

                            <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500"> Dont't have an account? </Text>

                            <Pressable onPress={()=>router.push('signUp')}>
                                <Text style={{fontSize:hp(1.8)}} className="font-bold text-indigo-500">Sign Up</Text>
                            </Pressable>
                            
                        </View>

                    </View>
                    
                </View>

            </View>

            
        </View>
        </CustomKeyboard>
    );
}



export default SignIn;