import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cardview = ({children}) => {
  return (
    <View style={styles.card}>

     {children}
   
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D3D3D31A',
    borderRadius: 10,
    padding: 8,
    marginTop:10,
    marginBottom:5,
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  }
});

export default Cardview;
