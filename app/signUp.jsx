import { Feather, MaterialIcons, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState } from 'react';
import { StyleSheet, View, Text,Image, TextInput, TouchableOpacity, Pressable, Alert, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useAuth } from '../context/authContext';
import Loading from '../components/loading';
import CustomKeyboard from '../components/CustomKeyboard';
import {Picker, PickerIOS} from "@react-native-picker/picker";


const ios = Platform.OS=="ios";

const SignUp = () => {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const profileRef = useRef();
    // const statusRef = useRef();
    const [selectedRole, setSelectedRole] = useState('');
    const {register} =useAuth();
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
            Alert.alert("Sign Up", "Please fill all the fields");
            return;
        }
        console.log('emailref: ', emailRef.current);
        setLoading(true);
        let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current, selectedRole);
        setLoading(false);

        console.log('got result: ', response);
        if(!response.success){
            Alert.alert("Sign up", response.msg );
        }
    }

    return (
        <CustomKeyboard>
        <View className="flex-1">
            <StatusBar style='dark'/>
            <View style={{paddingTop:hp(7), paddingHorizontal:wp(5)}} className="flex-1 gap-12" >
                <View className="items-center">
                    <Image style={{height:hp(20)}} resizeMode='contain' source={require('../assets/images/register.webp')}/>
                </View>

                <View className="gap-y-5">
                    <Text style={{fontSize:hp(4)}} className="font-bold tracking-wider text-center text-neitral-800">Sign Up</Text>

                    <View className="gap-4">

                    <View style={{height:hp(7)}} className="flex-row gap-x-4 px-4 bg-neutral-100 items-center rounded-xl">
                            <Feather name='user' size={hp(2.7)} color={'gray'}/>
                            <TextInput
                                onChangeText={(value)=> {usernameRef.current=value}}
                                style={{height:hp(2)}}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='Username'
                                placeholderTextColor={'gray'}
                            />
                        </View>
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

                        
                        <View style={{height:hp(7)}} className="flex-row gap-x-4 px-4 bg-neutral-100 items-center rounded-xl">
                            <Feather name='image' size={hp(2.7)} color={'gray'}/>
                            <TextInput
                                onChangeText={(value)=> profileRef.current=value}
                                style={{height:hp(2)}}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='Profile url'
                                placeholderTextColor={'gray'}
                            />
                        </View>

                         {/* {
                            !ios?(
                                <View style={{height:hp(7)}} className="flex-row gap-x-4 px-4 bg-neutral-100 items-center rounded-xl">
                                    <MaterialIcons name='admin-panel-settings' size={hp(2.7)} color={'gray'}/>
                                    <Picker
                                        selectedValue={statusRef.current}
                                        onValueChange={(itemValue) => statusRef.current=itemValue }
                                        style={{ height: hp(2), flex: 1, color: 'gray' }}
                                        className="flex-1 font-semibold text-neutral-700"
                                        >
                                        <Picker.Item label="Select Role" value="" />
                                        <Picker.Item label="Admin" value="admin" />
                                        <Picker.Item label="User" value="user" />
                                        </Picker>
                                </View>
                            ):(
                                <View style={{height:hp(7)}} className="flex-row gap-x-4 px-4 bg-neutral-100 items-center rounded-xl">
                                    <MaterialIcons name='admin-panel-settings' size={hp(2.7)} color={'gray'}/>
                                    <PickerIOS
                                        selectedValue={statusRef.current}
                                        onValueChange={(itemValue) => statusRef.current=itemValue }
                                        style={{ height: hp(2), flex: 1, color: 'gray' }}
                                        className="flex-1 font-semibold text-neutral-700"
                                        >
                                        <PickerIOS.Item label="Select Role" value="" />
                                        <PickerIOS.Item label="Admin" value="admin" />
                                        <PickerIOS.Item label="User" value="user" />
                                        </PickerIOS>
                                </View>
                            )
                         }  */}
                         
                        
                        <View style={{height:hp(7)}} className="flex-row gap-x-4 px-4 bg-neutral-100 items-center rounded-xl">
                            <MaterialIcons name='admin-panel-settings' size={hp(2.7)} color={'gray'}/>
                            <Picker
                                selectedValue={selectedRole}
                                onValueChange={(itemValue) => { 
                                                                 setSelectedRole(itemValue)} }
                                style={{flex: 1}}
                                itemStyle={{width: "100%", height:"100%"}}
                                >
                                <Picker.Item label="Select Role" value="" />
                                <Picker.Item label="Admin" value="admin" />
                                <Picker.Item label="User" value="user" />
                                </Picker>
                        </View>

                        

                        {/* <Text style={{fontSize:hp(1.8)}} className="font-semibold text-right text-neutral-500" >Forgot password?</Text> */}
                        <View>
                        {
                            loading ? (
                                <View className="flex-row justify-center">
                                    <Loading size={hp(12)}/>
                                </View>
                            ):(
                                <TouchableOpacity onPress={handleRegister} style={{height:hp(6.5)}} className="bg-indigo-500 rounded-xl items-center justify-center">
                                    <Text style={{fontSize:hp(2.7)}} className="text-white font-bold -tracking-wider">Sign Up</Text>
                                </TouchableOpacity>
                            )
                        }
                        </View>


                        <View className="flex-row justify-center">

                            <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500"> Already have an account? </Text>

                            <Pressable onPress={()=>router.push('signIn')}>
                                <Text style={{fontSize:hp(1.8)}} className="font-bold text-indigo-500">Sign In</Text>
                            </Pressable>
                            
                        </View>

                    </View>
                    
                </View>

            </View>

            
        </View>
        </CustomKeyboard>
    );
}

const styles = StyleSheet.create({})

export default SignUp;