import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import Background from './Background';
import Icon from 'react-native-vector-icons/Ionicons';
import Notification_list from './Notification_list';
import NotificationList from './Notification_list';

const Notification = () => {

    const [notifications, setNotifications] = useState([
        {
            id: '1',
            imageUrl: require('./assets/profile.png'),
            title: 'Amethyst Boy',
            message: 'This is the first notification message.',
            timestamp: '2 hours ago',
        },
        {
            id: '2',
            imageUrl: require('./assets/profile.png'),
            title: 'Amethyst Boy',
            message: 'This is the first notification message.',
            timestamp: '2 hours ago',
        },
        {
            id: '3',
            imageUrl: require('./assets/profile.png'),
            title: 'Amethyst Boy',
            message: 'This is the first notification message.',
            timestamp: '2 hours ago',
        },
        {
            id: '4',
            imageUrl: require('./assets/profile.png'),
            title: 'Courtney Henry',
            message: 'This is the first notification message.',
            timestamp: '3 hours ago',
        },
        {
            id: '5',
            imageUrl: require('./assets/profile.png'),
            title: 'Amethyst Boy',
            message: 'This is the first notification message.',
            timestamp: '2 hours ago',
        },
        {
            id: '6',
            imageUrl: require('./assets/profile.png'),
            title: 'Courtney Henry',
            message: 'This is the first notification message.',
            timestamp: '3 hours ago',
        },
        {
            id: '7',
            imageUrl: require('./assets/profile.png'),
            title: 'Amethyst Boy',
            message: 'This is the first notification message.',
            timestamp: '2 hours ago',
        },
        {
            id: '8',
            imageUrl: require('./assets/profile.png'),
            title: 'Courtney Henry',
            message: 'This is the first notification message.',
            timestamp: '3 hours ago',
        },
        {
            id: '9',
            imageUrl: require('./assets/profile.png'),
            title: 'Courtney Henry',
            message: 'This is the first notification message.',
            timestamp: '3 hours ago',
        },
        {
            id: '10',
            imageUrl: require('./assets/profile.png'),
            title: 'Courtney Henry',
            message: 'This is the first notification message.',
            timestamp: '3 hours ago',
        },
        {
            id: '11',
            imageUrl: require('./assets/profile.png'),
            title: 'Courtney Henry',
            message: 'This is the first notification message.',
            timestamp: '3 hours ago',
        },
    ]);

    const addNotification = () => {
        const newNotification = {
            id: String(notifications.length + 1),
            title: `Notification ${notifications.length + 1}`,
            message: `This is a new notification message.`,
        };

        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
    };
    return (
        <Background>

            <View style={{ flexDirection: 'row', marginBottom: 40 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate(Notification)} >
                    <Icon name='filter' size={24} style={{ marginRight: 'auto' }} color="white" />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginRight: 'auto', marginLeft: 'auto' }}>Notification</Text>
            </View>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <NotificationList notificationData={item} />
                )}
            />

        </Background>

    );
};

export default Notification;
