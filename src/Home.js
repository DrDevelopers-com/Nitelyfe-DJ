import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Background from './Background';
import Buttons from './Buttons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const Home = (props) => {
    return (
        <Background>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Revolutionize</Text>
                    <Text style={styles.subtitle}>Music</Text>
                </View>
                <Image source={require("./assets/profile.png")} style={styles.profileImage} />
            </View>
            <Image source={require("./assets/bg_girl.jpg")} style={styles.backgroundImage} />
            <Text style={styles.connectTitle}>Connect & Collaborate</Text>
            <Text style={styles.connectDescription} numberOfLines={4}>
                Join us in creating unforgettable nights and connect with the beat that moves you. Experience the best night of your life with NiteLyfe
            </Text>
            <Buttons bgcolor={'#1E89A0'} textcolor={'white'} btnlabel="Register" bgwidth={wp(80)} press={() => props.navigation.navigate("Register")} />
            <Buttons bgcolor={"transparent"} textcolor={'white'} btnlabel="Sign In" bgwidth={wp(80)} press={() => props.navigation.navigate("Signin")} />
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(2),
    },
    textContainer: {
        marginRight: wp(20),
    },
    title: {
        fontSize: hp(3.5),
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: hp(3.5),
        color: 'white',
    },
    profileImage: {
        width: wp(20),
        height: hp(10),
    },
    backgroundImage: {
        borderRadius: 13,
        alignSelf: 'center',
        width: wp(84),
        height: hp(30),
        marginBottom: hp(2),
    },
    connectTitle: {
        color: 'white',
        fontSize: hp(3),
        marginBottom: hp(2),
    },
    connectDescription: {
        color: 'white',
        fontSize: hp(1.6),
        paddingLeft: wp(10),
        paddingRight: wp(10),
        textAlign: 'center',
        marginBottom: hp(2),
    },
});

export default Home;
