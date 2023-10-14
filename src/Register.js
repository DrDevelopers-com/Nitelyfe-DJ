import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Background from './Background';
import Cardview from './Cardview';
import InputFields from './InputFields';
import Buttons from './Buttons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('window');

const Register = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState();

  return (
    <Background>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create</Text>
            <Text style={styles.title}>Your Profile</Text>
          </View>
          <Image source={require('./assets/profile.png')} style={styles.image} />
          <Cardview>
            <View style={styles.inputContainer}>
              <InputFields
                inputwidth={width - 100}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <InputFields
                 inputwidth={width - 100}
                placeholder="User Name"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <InputFields
                 inputwidth={width - 100}
                placeholder="Phone Number"
                value={phonenumber}
                onChangeText={(text) => setPhonenumber(text)}
              />
              <InputFields
                 inputwidth={width - 100}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={role}
                  onValueChange={(itemValue, itemIndex) => setRole(itemValue)}>
                  <Picker.Item label="DJ" value="DJ" />
                  <Picker.Item label="Club" value="Club" />
                  <Picker.Item label="Promoter" value="Promoter" />
                  <Picker.Item label="User" value="User" />
                </Picker>
              </View>
              <Buttons
                bgcolor={'#1E89A0'}
                textcolor={'white'}
                btnlabel="Sign Up"
                bgwidth={width - 100}
                // press={() => props.navigation.navigate("Signin")}
              />
            </View>
          </Cardview>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.socialButtonsContainer}>
            <Buttons
              bgcolor={'transparent'}
              textcolor={'white'}
              btnlabel="Facebook" 
              bgwidth={130}
              press={() => props.navigation.navigate('Register')}
            />
            <View style={styles.socialButtonSpacer} />
            <Buttons
              bgcolor={'transparent'}
              textcolor={'white'}
              btnlabel="Google"
              bgwidth={130}
              press={() => props.navigation.navigate('Signin')}
            />
          </View>
          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <Text
              style={[styles.signInText, { color: '#1E89A0', fontWeight: 'bold' }]}
              onPress={() => props.navigation.navigate('Signin')}>
              Sign in
            </Text>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 6,
    marginTop: 8,
  },
  pickerContainer: {
    height: 50,
    width: width - 100,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: 'white',
    flex: 1,
  },
  dividerText: {
    textAlign: 'center',
    color: 'white',
    width: 50,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
  },
  socialButtonSpacer: {
    width: 20,
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 2,
  },
  signInText: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default Register;



// import React, { useState } from 'react';
// import { View, Text, Image, Card, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Background from './Background';
// import Cardview from './Cardview';
// import InputFields from './InputFields';
// import Buttons from './Buttons';

// const Register = (props) => {

//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [phonenumber, setPhonenumber] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState();

//     return <Background>

//         <View style={{ flexDirection: 'column', padding: 20, alignItems: "center" }}>

//             <View style={{ flexDirection: 'row' }}>
//                 <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} >Create </Text>
//                 <Text style={{ color: 'white', fontSize: 25 }}>Your Profile</Text>
//             </View>
//             <Image source={require("./assets/profile.png")} style={{ marginTop: 20, alignSelf: 'center' }} />
//             <Cardview >
//                 <View style={{ alignItems: "center", padding: 6, marginTop: 8 }}>
//                     <InputFields
//                         inputwidth={270}
//                         placeholder="Name"
//                         value={name}
//                         onChangeText={(text) => setName(text)}
//                     />
//                     <InputFields
//                         inputwidth={270}
//                         placeholder="User Name"
//                         value={username}
//                         onChangeText={(text) => setUsername(text)}
//                     />
//                     <InputFields
//                         inputwidth={270}
//                         placeholder="Phone Number"
//                         value={phonenumber}
//                         onChangeText={(text) => setPhonenumber(text)}
//                     />
//                     <InputFields
//                         inputwidth={270}
//                         placeholder="Password"
//                         value={password}
//                         onChangeText={(text) => setPassword(text)}
//                         secureTextEntry={true}
//                     />
//                     <View style={{ height: 50, width: 270, borderRadius: 8, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, marginBottom: 12, paddingHorizontal: 10, }}>
//                         <Picker
//                             selectedValue={role}
//                             onValueChange={(itemValue, itemIndex) =>
//                                 setRole(itemValue)

//                             }>
//                             <Picker.Item label="DJ" value="DJ" />
//                             <Picker.Item label="Club" value="Club" />
//                             <Picker.Item label="Promoter" value="Promoter" />
//                             <Picker.Item label="User" value="User" />
//                         </Picker>
//                     </View>
//                     <Buttons
//                         bgcolor={'#1E89A0'}
//                         textcolor={'white'}
//                         btnlabel="Sign Up"
//                         bgwidth={270}
//                     // press={() => props.navigation.navigate("Signin")}
//                     />
//                 </View>
//             </Cardview>
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
//                 <View style={{ height: 1, backgroundColor: 'white', width: 120 }} />
//                 <View>
//                     <Text style={{ textAlign: 'center', color: 'white', width: 50 }}>OR</Text>
//                 </View>
//                 <View style={{ height: 1, backgroundColor: 'white', width: 120 }} />
//             </View>
//             <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
//                 <Buttons bgcolor={'transparent'} textcolor={'white'} btnlabel="Facebook" bgwidth={130} press={() => props.navigation.navigate("Register")} />
//                 <View style={{ width: 25 }} />
//                 <Buttons bgcolor={"transparent"} textcolor={'white'} btnlabel="Google" bgwidth={130} press={() => props.navigation.navigate("Signin")} />
//             </View>
//             <View style={{ flexDirection: 'row', marginTop: 2 }}>
//                 <Text style={{ color: 'white', fontSize: 12, letterSpacing: 1 }} >Already have an account?</Text>
//                 <Text style={{ color: '#1E89A0', fontSize: 12, fontWeight: 'bold', letterSpacing: 1 }}> Sign in</Text>
//             </View>

//         </View>

//     </Background>

// }

// const styles = StyleSheet.create({
//     container: {
//     },
// });

// export default Register;