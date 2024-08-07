import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { StyleSheet, View, Text  } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { useAuth } from '../context/authContext';
import MenuItem from './menuItem';
import { AntDesign, Feather } from '@expo/vector-icons';

const ProfileImage = () => {
    const {user, logout} = useAuth();
    const handleProfile=()=> {}
    const handleLogout= async()=> {
        await logout();
    }
    return (
        <View>
            <Menu>
                <MenuTrigger customStyles={{
                    triggerWrapper:{
                        //trigger wrapper styles
                    }
                }}>
                    <Image
                        style={{width:hp(6), height:hp(6), aspectRatio:1, borderRadius:100}}
                        source={user?.profileUrl}
                        // placeholder={blurha}
                        transition={500}
                    />
                </MenuTrigger>
                <MenuOptions 
                    customStyles={{
                        optionsContainer:{
                            borderRadius: 10,
                            borderCurve:"continuous",
                            marginTop:40,
                            marginLeft:-30,
                            backgroundColor:'white',
                            shadowOpacity:0.2,
                            shadowOffset:{width:0, height:0},
                            width:160
                        }
                    }}
                >
                    <MenuItem 
                        text="profile" 
                        action={handleProfile} 
                        value={null} 
                        icon={<Feather name='user' size={hp(2.5)} color="737373"/>}
                    />
                    <Divider/>
                    <MenuItem 
                        text="Sign Out" 
                        action={handleLogout} 
                        value={null} 
                        icon={<AntDesign name='logout' size={hp(2.5)} color="737373"/>}
                    />                    
                </MenuOptions>
            </Menu>
        </View>
    );
}

const Divider=()=>{
    return (
        <View className="p-[1px] w-full bg-neutral-200"></View>
    )
}


export default ProfileImage;
