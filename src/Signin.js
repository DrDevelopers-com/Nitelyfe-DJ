import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { CheckBox } from '@rneui/themed';
import Background from './Background';
import Buttons from './Buttons';
import InputFields from './InputFields';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('window');

const Signin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (
    <Background>


      <View style={{ flex: 0.7 }}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>
          Glad to see you back! Enter your email address and password to log in to your account.
        </Text>
      </View>
      <View style={{ flex: 0.4 }}>
        <View style={styles.buttonsContainer}>
          <Buttons
            bgcolor={'white'}
            textcolor={'black'}
            btnlabel="Email"
            bgwidth={'50%'}
            press={() => props.navigation.navigate("Register")}
          />
          <Buttons
            bgcolor={"transparent"}
            textcolor={'white'}
            btnlabel="Phone No."
            bgwidth={'50%'}
            press={() => props.navigation.navigate("Signin")}
          />
        </View>
      </View>
      <View style={{ flex: 3.2, }}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username or Email</Text>
          <InputFields
            inputwidth={wp(83)}
            placeholder="Username or Email"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <InputFields
            inputwidth={wp(83)}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.rememberForgotContainer}>
          <View style={styles.checkbox}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
            />
          </View>
          <Text style={styles.rememberText}>Remember Me</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Recoverpass")}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Buttons
          bgcolor={'#1E89A0'}
          textcolor={'white'}
          btnlabel="Sign In"
          bgwidth={wp(83)}
        />

        <View style={{ flex: 1, }}>

          <View style={styles.orSeparator}>
            <View style={styles.separatorLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <Buttons
              bgcolor={'transparent'}
              textcolor={'white'}
              btnlabel="Facebook"
              bgwidth={'45%'}
              press={() => props.navigation.navigate("Register")}
            />
            <View style={{ width: wp('3') }}></View>
            <Buttons
              bgcolor={"transparent"}
              textcolor={'white'}
              btnlabel="Google"
              bgwidth={'45%'}
              press={() => props.navigation.navigate("Signin")}
            />
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <Text
              style={[styles.signupText, styles.signupLink]}
              onPress={() => props.navigation.navigate("Register")}>
              Sign up
            </Text>
          </View>
        </View>
      </View>

    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
    marginTop: 15,
    letterSpacing: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 11,
  },
  inputLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 8,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    margin: 'auto',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    width: 10,
    height: 10,
  },
  rememberText: {
    color: 'white',
    paddingLeft: 30,
    marginTop: 15,
  },
  forgotText: {
    color: 'white',
    paddingLeft: 45,
    marginTop: 15,
  },
  orSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 5,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'white',
    flex: 1,
  },
  orText: {
    textAlign: 'center',
    color: 'white',
    width: 50,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingLeft: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 2,
    paddingLeft: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupText: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 1,
  },
  signupLink: {
    color: '#1E89A0',
    fontWeight: 'bold',
  },
});

export default Signin;


// import React, { useState } from 'react';
// import { View, Text, Image, Card, StyleSheet, TouchableOpacity } from 'react-native';
// import { CheckBox } from '@rneui/themed';
// import Background from './Background';
// import Buttons from './Buttons';
// import InputFields from './InputFields';

// const Signin = (props) => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSelected, setSelection] = useState(false);

//   return (

//     <Background>

//       <View style={{ flexDirection: 'column', padding: 30 }}>

//         <View style={{ flexDirection: 'row' }}>
//           <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', paddingLeft: 20 }} >Welcome </Text>
//           <Text style={{ color: 'white', fontSize: 25 }}>Back!</Text>
//         </View>
//         <View style={{ alignItems: 'center', }}>
//           <Text style={{ color: 'white', fontSize: 12, marginTop: 15, paddingLeft: 20, paddingRight: 20, letterSpacing: 1 }} numberOfLines={3}>Glad to see you back! Enter your email address and password to log in to your account.</Text>
//         </View>
//         <View style={{ flexDirection: 'row', marginTop: 45, justifyContent: 'center' }}>
//           <Buttons bgcolor={'white'} textcolor={'black'} btnlabel="Email" bgwidth={155} press={() => props.navigation.navigate("Register")} />
//           <Buttons bgcolor={"transparent"} textcolor={'white'} btnlabel="Phone No." bgwidth={155} press={() => props.navigation.navigate("Signin")} />
//         </View>

//         <View style={{ flexDirection: 'column', marginTop: 11 }}>
//           <Text style={{ color: 'white', fontSize: 12, marginTop: 5, marginBottom: 8, paddingLeft: 20 }}>Username or Email</Text>
//           <View style={{ paddingLeft: 18 }}>
//             <InputFields
//               inputwidth={310}
//               placeholder="Username or Email"
//               value={username}
//               onChangeText={(text) => setUsername(text)}
//             />
//           </View>
//           <Text style={{ color: 'white', fontSize: 12, marginTop: 5, marginBottom: 8, paddingLeft: 20 }}>Password</Text>
//           <View style={{ paddingLeft: 18 }}>
//             <InputFields
//               inputwidth={310}
//               placeholder="Password"
//               value={password}
//               onChangeText={(text) => setPassword(text)}
//               secureTextEntry={true}
//             />
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
//             <View style={{ paddingLeft: 15, width: 10, height: 10 }}>
//               <CheckBox
//                 value={isSelected}
//                 onValueChange={setSelection} />
//             </View >
//             <Text style={{ color: 'white', paddingLeft: 40, marginTop: 5 }}>Remember Me</Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate("Recoverpass")}>
//               <Text style={{ color: 'white', paddingLeft: 65, marginTop: 5 }}>Forgot Password?</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ marginTop: 15, paddingLeft: 18 }}>
//             <Buttons
//               bgcolor={'#1E89A0'}
//               textcolor={'white'}
//               btnlabel="Sign In"
//               bgwidth={310}
//             // press={() => props.navigation.navigate("Signin")}
//             />
//           </View>
//           <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, paddingLeft: 28 }}>
//             <View style={{ height: 1, backgroundColor: 'white', width: 120 }} />
//             <View>
//               <Text style={{ textAlign: 'center', color: 'white', width: 50 }}>OR</Text>
//             </View>
//             <View style={{ height: 1, backgroundColor: 'white', width: 120 }} />
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'center', paddingLeft: 30 }}>
//             <Buttons bgcolor={'transparent'} textcolor={'white'} btnlabel="Facebook" bgwidth={130} press={() => props.navigation.navigate("Register")} />
//             <View style={{ width: 25 }} />
//             <Buttons bgcolor={"transparent"} textcolor={'white'} btnlabel="Google" bgwidth={130} press={() => props.navigation.navigate("Signin")} />
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 2, paddingLeft: 70, alignItems: 'center', marginBottom: 20 }}>
//             <Text style={{ color: 'white', fontSize: 12, letterSpacing: 1 }} >Already have an account?</Text>
//             <Text style={{ color: '#1E89A0', fontSize: 12, fontWeight: 'bold', letterSpacing: 1 }}> Sign up</Text>
//           </View>

//         </View>

//       </View>


//     </Background>

//   )
// }

// export default Signin;
