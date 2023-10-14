import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signin from './src/Signin';
import Register from './src/Register';
import Recoverpass from './src/Recoverpass';
import OTP from './src/OTP';
import V_OTP from './src/V_OTP';
import DJ_Dashboard from './src/DJ_Dashboard';
import Notification from './src/Notification';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Recoverpass" component={Recoverpass} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="V_OTP" component={V_OTP} />
        <Stack.Screen name="DJ_Dashboard" component={DJ_Dashboard} />
        <Stack.Screen name="Notification" component={Notification} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
