import * as Notifications from 'expo-notifications';
import * as Device from "expo-device";
import Constants from "expo-constants";
import { Platform } from "react-native"; 
import { useEffect, useRef, useState } from 'react';

export const usePushNotifications = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => {
            return {
                shouldPlaySound: false,
                shouldShowAlert: true,
                shouldSetBadge: false,
            };
        }
    });

    const [expoPushToken, setExpoPushToken] = useState(null);
    const [notification, setNotification] = useState(null);
    const notificationListener = useRef();
    const responseListener = useRef();

    const registerForPushNotification = async () => {
        let token;

        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            if (existingStatus !== "granted") {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== "granted") {
                alert("Failed to get push token");
                return;
            }

            token = (await Notifications.getExpoPushTokenAsync()).data;

            if (Platform.OS === "android") {
                await Notifications.setNotificationChannelAsync('default', {
                    name: "default",
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: "#FF231F7C"
                });
            }

            return token;
        } else {
            console.log('ERROR: Please use a physical device');
            return null;
        }
    };

    useEffect(() => {
        const registerAndSetToken = async () => {
            const token = await registerForPushNotification();
            setExpoPushToken(token);
        };
        
        registerAndSetToken();

        notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return {
        expoPushToken,
        notification
    };
};
