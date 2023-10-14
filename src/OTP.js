import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Background from './Background';
import Cardview from './Cardview';
import InputFields from './InputFields';
import Buttons from './Buttons';

const OTP = (props) => {
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleChangeOTP = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (index < 3 && value) {
            inputRefs[index + 1].current.focus();
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Enter OTP</Text>
                <View style={styles.cardContainer}>
                    <Cardview>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}>
                                Enter your email or phone number to recover password
                            </Text>
                            <View style={styles.otpContainer}>
                                {otp.map((digit, index) => (
                                    <TextInput
                                        key={index}
                                        ref={inputRefs[index]}
                                        style={styles.otpInput}
                                        value={digit}
                                        onChangeText={(text) => handleChangeOTP(index, text)}
                                        keyboardType="numeric"
                                        maxLength={1}
                                    />
                                ))}
                            </View>
                            <Text style={styles.timerText}>OTP will be sent within 00:00</Text>
                            <Buttons
                                bgcolor={'#1E89A0'}
                                textcolor={'white'}
                                btnlabel="Verify OTP"
                                bgwidth={'80%'}
                                press={() => props.navigation.navigate("V_OTP")}
                            />
                        </View>
                    </Cardview>
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    cardContainer: {
        width: '100%', 
    },
    cardContent: {
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 10,
    },
    cardText: {
        color: 'white',
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    otpInput: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 10,
        borderRadius: 8,
    },
    timerText: {
        color: 'white',
        fontSize: 12,
        marginRight: 'auto',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
    },
});

export default OTP;


// import React, { useState, useRef } from 'react';
// import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
// import Background from './Background';
// import Cardview from './Cardview';
// import InputFields from './InputFields';
// import Buttons from './Buttons';

// const OTP = (props) => {
//     const [password, setPassword] = useState('');
//     const [otp, setOtp] = useState(['', '', '', '']);
//     const inputRefs = [useRef(), useRef(), useRef(), useRef()];

//     const handleChangeOTP = (index, value) => {
//         const newOtp = [...otp];
//         newOtp[index] = value;
//         setOtp(newOtp);

//         if (index < 3 && value) {
//             inputRefs[index + 1].current.focus();
//         }
//     }

//     const windowWidth = Dimensions.get('window').width;

//     return (
//         <Background>
//             <View style={styles.container}>
//                 <Text style={styles.title}>Enter OTP</Text>
//                 <View style={styles.descriptionContainer}>
//                     <Text style={styles.description}>
//                         Enter your email or phone number to recover password
//                     </Text>
//                 </View>
//                 <View style={styles.otpContainer}>
//                     {otp.map((digit, index) => (
//                         <TextInput
//                             key={index}
//                             ref={inputRefs[index]}
//                             style={styles.otpInput}
//                             value={digit}
//                             onChangeText={(text) => handleChangeOTP(index, text)}
//                             keyboardType="numeric"
//                             maxLength={1}
//                         />
//                     ))}
//                 </View>
//                 <Text style={styles.timer}>OTP will be sent within 00:00</Text>
//                 <Buttons
//                     bgcolor={'#1E89A0'}
//                     textcolor={'white'}
//                     btnlabel="Verify OTP"
//                     bgwidth={windowWidth * 0.8} // Use percentage width
//                     press={() => props.navigation.navigate("V_OTP")}
//                 />
//             </View>
//         </Background>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20,
//     },
//     title: {
//         color: 'white',
//         fontSize: Dimensions.get('window').width * 0.08, // Responsive font size
//         fontWeight: 'bold',
//     },
//     descriptionContainer: {
//         alignItems: 'center',
//         marginBottom: 30,
//     },
//     description: {
//         color: 'white',
//         fontSize: Dimensions.get('window').width * 0.035, // Responsive font size
//         textAlign: 'center',
//         paddingHorizontal: 25,
//     },
//     otpContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 10,
//     },
//     otpInput: {
//         backgroundColor: 'white',
//         width: Dimensions.get('window').width * 0.1, // Responsive width
//         height: Dimensions.get('window').width * 0.1, // Responsive height
//         fontSize: Dimensions.get('window').width * 0.04, // Responsive font size
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginRight: 10,
//         borderRadius: 8,
//     },
//     timer: {
//         color: 'white',
//         fontSize: Dimensions.get('window').width * 0.03, // Responsive font size
//         fontWeight: 'bold',
//         marginTop: 15,
//     },
// });

// export default OTP;


// // import React, { useState, useRef } from 'react';
// // import { View, Text, Image, Card, StyleSheet, TextInput } from 'react-native';
// // import Background from './Background';
// // import Cardview from './Cardview';
// // import InputFields from './InputFields';
// // import Buttons from './Buttons';

// // const OTP = (props) => {
// //     const [password, setPassword] = useState('');
// //     const [otp, setOtp] = useState(['', '', '', '']);
// //     const inputRefs = [useRef(), useRef(), useRef(), useRef()];

// //     const handleChangeOTP = (index, value) => {
// //         const newOtp = [...otp];
// //         newOtp[index] = value;
// //         setOtp(newOtp);

// //         if (index < 3 && value) {
// //             inputRefs[index + 1].current.focus();
// //         }
// //     }

// //     return (

// //         <Background>

// //             <View style={{ flexDirection: 'column', padding: 20 }}>

// //                 <View style={{ paddingLeft: 25, marginBottom: 40 }}>
// //                     <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >Enter OTP</Text>
// //                 </View>
// //                 <View style={{ flexDirection: 'column', alignItems: "center", marginBottom: 30 }}>
// //                     <Cardview >
// //                         <View style={{ alignItems: "center", marginTop: 8, marginBottom: 10 }}>
// //                             <Text style={{ color: 'white', fontSize: 15, marginBottom: 30, paddingLeft: 25, paddingRight: 30, }}>Enter your email or phone number to recover password</Text>
// //                             <View style={styles.otpContainer}>
// //                                 {otp.map((digit, index) => (
// //                                     <TextInput
// //                                         key={index}
// //                                         ref={inputRefs[index]}
// //                                         style={styles.otpInput}
// //                                         value={digit}
// //                                         onChangeText={(text) => handleChangeOTP(index, text)}
// //                                         keyboardType="numeric"
// //                                         maxLength={1}
// //                                     />
// //                                 ))}
// //                             </View>
// //                             <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15, paddingRight: 70 , marginBottom: 30}}>OTP will be send within 00:00</Text>
// //                             <Buttons
// //                                 bgcolor={'#1E89A0'}
// //                                 textcolor={'white'}
// //                                 btnlabel="Verify OTP"
// //                                 bgwidth={270}
// //                                 press={() => props.navigation.navigate("V_OTP")}
// //                             />
// //                         </View>
// //                     </Cardview>

// //                 </View>


// //             </View>

// //         </Background>

// //     );
// // };



// // const styles = StyleSheet.create({
// //     otpContainer: {
// //         flexDirection: 'row',
// //         justifyContent: 'center',
// //         marginTop: 10,
// //     },
// //     otpInput: {
// //         backgroundColor: 'white',
// //         width: 50,
// //         height: 50,
// //         fontSize: 20,
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         marginRight: 10,
// //         borderRadius: 8,
// //     },
// // });


// // export default OTP;
