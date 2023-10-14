import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Background = ({ children }) => {
    return (

        <ImageBackground source={require("./assets/background.jpg")} style={{ flex:1, justifyContent: 'center', padding:30 }}>
            {children}
        </ImageBackground>

    );
};

export default Background;
