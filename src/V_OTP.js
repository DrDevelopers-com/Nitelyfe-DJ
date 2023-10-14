import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Background from './Background';
import Cardview from './Cardview';
import InputFields from './InputFields';
import Buttons from './Buttons';

const V_OTP = (props) => {
    const [password, setPassword] = useState('');
    const [confirmpassword, SetConfirmPassword] = useState('');

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.header}>Create New Password</Text>
                <View style={styles.cardContainer}>
                    <Cardview>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}>Create your new password</Text>
                            <InputFields
                                inputwidth={0.7 * Dimensions.get('window').width} // Use a percentage-based width
                                placeholder="Password"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                            />
                            <InputFields
                                inputwidth={0.7 * Dimensions.get('window').width} // Use a percentage-based width
                                placeholder="Confirm Password"
                                value={confirmpassword}
                                onChangeText={(text) => SetConfirmPassword(text)}
                                secureTextEntry={true}
                            />
                            <Buttons
                                bgcolor={'#1E89A0'}
                                textcolor={'white'}
                                btnlabel="Reset Password"
                                bgwidth={0.7 * Dimensions.get('window').width} // Use a percentage-based width
                                press={() => props.navigation.navigate("DJ_Dashboard")}
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
        padding: 20,
        alignItems: 'center',
    },
    header: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop:150,
    },
    cardContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    cardContent: {
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 5,
        padding: 15,
    },
    cardText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 30,
    },
});

export default V_OTP;


// import React, { useState } from 'react';
// import { View, Text, Image, Card, StyleSheet } from 'react-native';
// import Background from './Background';
// import Cardview from './Cardview';
// import InputFields from './InputFields';
// import Buttons from './Buttons';

// const V_OTP = (props) => {
//     const [password, setPassword] = useState('');
//     const [confirmpassword, SetConfirmPassword] = useState('');

//     return (

//         <Background>

//             <View style={{ flexDirection: 'column', padding: 20 }}>

//                 <View style={{ paddingLeft: 25, marginBottom: 40 }}>
//                     <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >Create New Password</Text>
//                 </View>
//                 <View style={{ flexDirection: 'column', alignItems: "center", marginBottom: 30 }}>
//                     <Cardview >
//                         <View style={{ alignItems: "center", marginTop: 8, marginBottom: 5, padding: 15 }}>
//                             <View>
//                                 <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginBottom: 30, paddingRight: 70 }}>Create your new password </Text>
//                             </View>
//                             <InputFields
//                                 inputwidth={270}
//                                 placeholder="Password"
//                                 value={password}
//                                 onChangeText={(text) => setPassword(Number)}
//                                 secureTextEntry={true}
//                             />
//                             <InputFields
//                                 inputwidth={270}
//                                 placeholder="Confirm Password"
//                                 value={confirmpassword}
//                                 onChangeText={(text) => SetConfirmPassword(Number)}
//                                 secureTextEntry={true}
//                             />
//                             <Buttons
//                                 bgcolor={'#1E89A0'}
//                                 textcolor={'white'}
//                                 btnlabel="Reset Password"
//                                 bgwidth={270}
//                                 press={() => props.navigation.navigate("DJ_Dashboard")}
//                             />
//                         </View>
//                     </Cardview>

//                 </View>


//             </View>

//         </Background>

//     );
// };


// export default V_OTP;
