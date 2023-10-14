import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Background from './Background';
import Cardview from './Cardview';
import InputFields from './InputFields';
import Buttons from './Buttons';

const Recoverpass = (props) => {
  const [email, setEmail] = useState('');

  const screenWidth = Dimensions.get('window').width;

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Recover Password</Text>
        </View>
        <View style={styles.content}>
          <Cardview>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>
                Enter your email or phone number to recover password
              </Text>
              <InputFields
                inputwidth={0.7 * screenWidth}
                placeholder="Enter your Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Buttons
                bgcolor="#1E89A0"
                textcolor="white"
                btnlabel="Send OTP"
                bgwidth={0.7 * screenWidth}
                press={() => props.navigation.navigate('OTP')}
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
    padding: 30,
  },
  header: {
    marginTop:100,
   
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  cardContent: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 30,
    paddingLeft: 25,
    paddingRight: 30,
  },
});

export default Recoverpass;


// import React, { useState } from 'react';
// import { View, Text, Image, Card, StyleSheet } from 'react-native';
// import Background from './Background';
// import Cardview from './Cardview';
// import InputFields from './InputFields';
// import Buttons from './Buttons';


// const Recoverpass = (props) => {

//     const [email, setEmail] = useState('');

//     return (

//         <Background>

//             <View style={{ flexDirection: 'column', padding: 20 }}>

//                 <View style={{ paddingLeft: 25, marginBottom: 40 }}>
//                     <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >Recover Password </Text>
//                 </View>
//                 <View style={{ flexDirection: 'column', alignItems: "center", marginBottom:30 }}>
//                     <Cardview >
//                         <View style={{ alignItems: "center", marginTop: 8, marginBottom: 10 }}>
//                             <View>
//                                 <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginBottom: 30, paddingLeft: 25, paddingRight: 30, }}>Enter your email or phone number to recover password </Text>
//                             </View>
//                             <InputFields
//                                 inputwidth={270}
//                                 placeholder="Enter your Email"
//                                 value={email}
//                                 onChangeText={(text) => setEmail(text)}
//                             />
//                             <Buttons
//                                 bgcolor={'#1E89A0'}
//                                 textcolor={'white'}
//                                 btnlabel="Send OTP"
//                                 bgwidth={270}
//                             press={() => props.navigation.navigate("OTP")}
//                             />
//                         </View>
//                     </Cardview>

//                 </View>


//             </View>

//         </Background>

//     );
// }

// export default Recoverpass;