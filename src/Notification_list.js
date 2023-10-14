import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function NotificationList({ notificationData }) {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 20, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                <Image source={notificationData.imageUrl} style={{ width: 60, height: 60 }} />
                <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', paddingBottom: 8 }}>{notificationData.title}</Text>
                    <Text style={{ color: 'white', marginLeft: 'auto' }}>{notificationData.timestamp}</Text>
                </View>
                <Text style={{ color: 'white', width:250}} >{notificationData.message}</Text>
            </View>
            </View>

        </View>
    );
}

