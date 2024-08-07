import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ActivityIndicator } from 'react-native';
import HomeHeader from '../../components/homeHeader';
import { useAuth } from '../../context/authContext';
import ChatList from '../../components/chatList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../../firebase.Config';
const ChatHome = () => {
    const {user}= useAuth();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if(user?.uid)
            getUsers();
    },[])
    // console.log('got users: ',user?.selectedRole);
    const getUsers=async()=>{
        const q =query(usersRef, where("selectedRole","!=", user?.selectedRole));
        
        const querySnapshot = await getDocs(q);
        // console.log('query', querySnapshot)
        let data=[];
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()});
        })
        setUsers(data);
        // console.log('got users: ',data)
    }
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="light"/>
            <HomeHeader/>
            {
                users.length>0?(
                    <ChatList users={users} />
                ):(
                    <View className="flex items-center" style={{top:hp(30)}}>
                        <ActivityIndicator size="large"/>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default ChatHome;
